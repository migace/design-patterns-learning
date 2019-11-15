import { FOOTBALL } from '../constants';

export class Football {
  constructor() {
    this._type = FOOTBALL;
    this.kick = () => 'You kicked the football.';
  }
}
