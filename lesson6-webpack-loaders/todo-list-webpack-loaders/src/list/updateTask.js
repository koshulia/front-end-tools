import { renderTasks } from './renderer.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) return;

  const taskId = e.target.dataset.id;
  const done = e.target.checked;

  const updatedTask = {
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  updateTask(updatedTask, taskId)
    .then(() => getTasksList())
    .then(newTasksList => renderTasks(newTasksList));
};

// 1. prepare data
// 2.upate data in data base
// 3.read new data from server
// 4.save new data to front-end storage
// 5.update UI based on new data
