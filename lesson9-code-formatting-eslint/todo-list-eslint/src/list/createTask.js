import { renderTasks } from './renderer';
import { createTask, getTasksList } from './tasksGateway';

export const onCreateTask = () => {
  const TaskTitleInputElem = document.querySelector('.task-input');

  const text = TaskTitleInputElem.value;
  if (!text) return;
  TaskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => renderTasks(newTasksList));
};

// 1. prepare data
// 2.write data to data base
// 3.read new data from server
// 4.save new data to front-end storage
// 5.update UI based on new data
