import {Injectable} from "@angular/core";
import {Ball} from "../../type/ball";

@Injectable()
export class Break {

    order: Ball[] = [];
    total: number = 0;

    reset(): void {
        this.total = 0;
        this.order = [];
    }

    update(ball: Ball): void {
        this.order.push(ball);
        this.total += ball.points;
    }
}
