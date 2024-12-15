document.addEventListener("DOMContentLoaded", () => {
  // your code here

const newTaskForm = document.querySelector('form');
taskForm.addEventListener('submit', (events) => {
  events.preventDefault();

  const newToDo = events.target.querySelector('#task-description').value
  buildToDo(newToDo);
  newTaskForm.reset();
})

});

function buildToDo(newToDo) {
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');

deleteButton.textContent = 'x';
taskLi.appendChild(deleteButton);
document.querySelector('#tasks').appendChild(taskLi);
deleteButton.addEventListener('click', handleDelete);

}

function handleDelete (events) {
  events.target.parentNode.remove();
}