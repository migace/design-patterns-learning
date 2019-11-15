import { BASKETBALL } from '../constants';

export class Basketball {
  constructor() {
    this._type = BASKETBALL;
    this.bounce = () => 'You bounced the basketball.';
  }
}
