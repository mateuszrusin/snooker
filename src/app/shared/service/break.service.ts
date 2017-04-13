import {Injectable} from "@angular/core";
import {Ball} from "../type/ball";
import {Break} from "../type/break";

@Injectable()
export class BreakService {

    private break: Break = {
        total: 0,
        order: []
    };

    get(): Break {
        return this.break;
    }

    set(data: any): void {
        this.break.total = data.total;
        this.break.order = data.order.slice();
    }

    reset(): void {
        this.break.total = 0;
        this.break.order = [];
    }

    update(ball: Ball): void {
        this.break.total += ball.points;
        this.break.order.push(ball);
    }
}
