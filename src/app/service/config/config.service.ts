import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class Config {

    private readonly file: string = 'config.json';

    private config: Object = null;

    constructor(private http:Http) {}

    public get(key: any) {
        return key.split(".").reduce((obj, prop) => {
            return obj && obj[prop];
        }, this.config);
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get(this.file).map( res => res.json() ).catch((error: any):any => {
                console.error('Configuration file "'+this.file+'" could not be read');
                resolve(true);
                return Observable.throw(error.json().error || 'Server error');
            }).subscribe( () => {
                let request:any = null;
                request = this.http.get(this.file);

                if (request) {
                    request
                        .map( res => res.json() )
                        .catch((error: any) => {
                            console.error('Error reading ' + this.file + ' configuration file');
                            resolve(error);
                            return Observable.throw(error.json().error || 'Server error');
                        })
                        .subscribe((responseData) => {
                            this.config = responseData;
                            resolve(responseData); // (true);
                            return responseData;
                        });
                } else {
                    console.error('Config file "'+this.file+'" is not valid');
                    resolve(true);
                }
            });

        });
    }
}
