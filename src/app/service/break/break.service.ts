import {Injectable} from "@angular/core";
import {Ball} from "../../type/ball";

@Injectable()
export class Break {

    total: number = 0;
    order: Ball[] = [];

    reset(): void {
        this.total = 0;
        this.order = [];
    }

    update(ball: Ball, factor: number): void {
        this.total += ball.points * factor;
        this.order.push(ball);
    }
}
