import { initTodoListHandlers } from './list/todoList';
import { renderTasks } from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((newTasksList) => {
    renderTasks(newTasksList);
  });
  initTodoListHandlers();
});
