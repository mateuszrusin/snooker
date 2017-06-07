import { Injectable } from '@angular/core';
import {ServerService} from "./server.service";
import {DataService} from "../../shared/service/data.service";
import {State} from "../../shared/type/state";

@Injectable()
export class ControlService {

    private history: State[] = [];

    constructor(private data: DataService, private server: ServerService) {}

    public init(id: string): void {
        this.server.create(id);
    }

    public call(method: string, argument?: any): void {
        this.history.push(this.data.get());
        this.data[method](argument);
        this.send();
    }

    public back(): void {
        this.data.set(this.history.pop());
        this.send();
    }

    private send(): void {
        this.server.send(this.data.get());
    }
}
