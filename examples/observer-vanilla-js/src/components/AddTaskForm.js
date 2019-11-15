export class AddTaskForm {
  constructor(state) {
    this.state = state;
  }

  create = () => `
    <form id="add-task">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" name="task" placeholder="Remove your worse legacy code">
        </div>
        <div class="control">
          <button class="button is-primary">Add</button>
        </div>
      </div>
    </form>
  `;

  bindEvents = () => {
    const form = document.getElementById('add-task');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const element = e.target;

      const { value: task } = element.task;

      if (!task) {
        return;
      }

      const state = this.state.get();
      const tasks = [ ...state.tasks, { id: state.tasks.length++, name: task } ];

      element.task.value = '';

      this.state.update({
        ...state,
        tasks
      })
    });
  }

  render(selector = 'app') {
    const element = this.create();
    const parentEl = document.getElementById(selector);

    parentEl.innerHTML = element;
    this.bindEvents();
  }
}
