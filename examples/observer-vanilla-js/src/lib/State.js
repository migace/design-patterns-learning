import { Subject } from './Subject';

export class State extends Subject {
  state = {
    tasks: [],
  };

  update(tasks = {}) {
    this.state = { ...this.state, ...tasks };
    this.notify(this.state);
  }

  get = () => this.state;
}