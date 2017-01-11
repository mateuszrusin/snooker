import { Component } from '@angular/core';
import { Ball } from './ball';
import { BALLS } from './balls';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    balls = BALLS;
    break = {
        total: 0,
        order: []
    }

    onSelect(ball: Ball): void {
        this.break.order.push(ball);
        this.break.total += ball.points;
    }

    reset(): void {
        this.break = {
            total: 0,
            order: []
        }
    }
}
