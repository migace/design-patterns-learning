export class Subject {
  observers = [];

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserer(observer) {
    this.observers = this.observers.filter(item => item !== observer);
  }

  notify(data) {
    if (this.observers) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
}
