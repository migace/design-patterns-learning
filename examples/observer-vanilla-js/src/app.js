import { AddTaskForm } from './components/AddTaskForm';
import { List } from './components/List';
import { Counter } from './components/Counter';
import { State } from './lib/State';
import { tasksData } from './data/tasks';

const appState = new State();
const tasksList = new List();
const addTaskForm = new AddTaskForm(appState);
const taskCount = new Counter();

appState.update({ tasks: tasksData });

appState.addObserver(tasksList);
appState.addObserver(taskCount);

tasksList.render(appState.get(), 'task-list-container');
addTaskForm.render('add-task-container');
taskCount.render(appState.get(), 'task-count-container');
