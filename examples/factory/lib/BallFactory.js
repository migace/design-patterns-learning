import { Football } from './Football';
import { Basketball } from './Basketball';
import {
  BASKETBALL,
  FOOTBALL,
  SOCCER,
} from '../constants';

export class BallFactory {
  constructor() {
    this.createBall = (type) => {
      let ball;

      if (type === FOOTBALL || type === SOCCER) {
        ball = new Football();
      } else if (type === BASKETBALL) {
        ball = new Basketball();
      }

      ball.roll = function() {
        return `The ${this._type} is rolling.`;
      };

      return ball;
    };
  }
}
