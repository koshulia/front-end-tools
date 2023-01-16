import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

export const initTodoListHandlers = () => {
  const inputButtonElem = document.querySelector('.create-task-btn');
  inputButtonElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onToggleTask);
  listElem.addEventListener('click', onDeleteTask);
};
