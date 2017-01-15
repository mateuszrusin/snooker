import { Injectable } from '@angular/core';
import {BALLS} from "../../data/balls";
import {Ball} from "../../type/ball";

@Injectable()
export class BallsService {

  private balls: Ball[] = BALLS;

  getBalls(): Ball[] {
    return this.balls;
  }
}
