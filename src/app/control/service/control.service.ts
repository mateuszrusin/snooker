import { Injectable } from '@angular/core';
import {Ball} from "../../shared/type/ball";
import {ServerService} from "./server.service";
import {DataService} from "../../shared/service/data.service";

@Injectable()
export class ControlService {

    private history = [];

    constructor(private data: DataService, private server: ServerService) {}

    init(id: string): void {
        this.server.create(id);
    }

    select(ball: Ball): void {
        this.save();
        this.data.select(ball);
        this.send();
    }

    enter(): void {
        this.save();
        this.data.enter();
        this.send();
    }

    foul(points: number): void {
        this.save();
        this.data.foul(points);
        this.send();
    }

    frame(): void {
        this.save();
        this.data.frame();
        this.send();
    }

    back(): void {
        this.data.set(this.history.pop());
        this.send();
    }

    clear(): void {
        this.history = [];
        this.data.clear();
        this.send();
    }

    private send(): void {
        this.server.send(this.data.get());
    }

    private save(): void {
        this.history.push(this.data.get());
    }
}
