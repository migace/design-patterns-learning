import { Observer } from '../lib/Observer';

export class List extends Observer {
  create = (state) => `
    <ul>
      ${state.tasks.map(task => `<li>${task.id + 1}.) ${task.name}</li>`).join("\n")}
    </ul>
  `;

  update(state) {
    this.render(state, 'task-list-container');
  }

  render(state, selector = 'app') {
    const markup = this.create(state);
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }
}
