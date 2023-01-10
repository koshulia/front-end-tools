import { renderTasks } from './renderer.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = e => {
  const isDeleteButton = e.target.classList.contains('list-item__delete-btn');
  if (!isDeleteButton) return;

  const taskId = e.target.dataset.id;

  deleteTask(taskId).then(() => {
    getTasksList().then(tasks => renderTasks(tasks));
  });
};

// 1. prepare data
// 2.upate data in data base
// 3.read new data from server
// 4.save new data to front-end storage
// 5.update UI based on new data
