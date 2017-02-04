import {Injectable} from "@angular/core";
import {CONFIG} from "../../app.config";

@Injectable()
export class Config {

    private config: Object = CONFIG;

    public get(key: any) {
        return key.split(".").reduce((obj, prop) => {
            return obj && obj[prop];
        }, this.config);
    }
}
