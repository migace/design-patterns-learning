import { BallFactory } from './lib/BallFactory';
import {
  FOOTBALL,
  BASKETBALL
} from './constants';

const factory = new BallFactory();

const myFootball = factory.createBall(FOOTBALL);
const myBasketball = factory.createBall(BASKETBALL);

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.