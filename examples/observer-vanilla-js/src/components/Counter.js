import { Observer } from '../lib/Observer';

export class Counter extends Observer {
  create = (state) =>`
    <p class="has-text-right">
      task count: ${state.tasks.length}
    </p>
  `;

  update(state) {
    this.render(state, 'task-count-container');
  }

  render(state, selector = 'app') {
    const markup = this.create(state);
    debugger;
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }
}
