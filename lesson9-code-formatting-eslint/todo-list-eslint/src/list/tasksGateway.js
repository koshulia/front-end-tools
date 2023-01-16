const baseUrl = 'https://63b4cded0f49ecf50894549c.mockapi.io/tasks';

export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => tasks);

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (updatedtaskData, taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedtaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
