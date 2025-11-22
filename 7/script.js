const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!title) {
    alert("Please enter a task title.");
    return;
  }

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  taskDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="buttons">
      <button class="completeBtn">Mark as Completed</button>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </div>
  `;

  const completeBtn = taskDiv.querySelector('.completeBtn');
  const editBtn = taskDiv.querySelector('.editBtn');
  const deleteBtn = taskDiv.querySelector('.deleteBtn');

  completeBtn.addEventListener('click', () => {
    taskDiv.classList.toggle('completed');
    completeBtn.textContent = taskDiv.classList.contains('completed')
      ? 'Mark as Incomplete'
      : 'Mark as Completed';
  });

  deleteBtn.addEventListener('click', () => {
    taskDiv.remove();
  });

  editBtn.addEventListener('click', () => {
    const titleEl = taskDiv.querySelector('h3');
    const descEl = taskDiv.querySelector('p');

    if (editBtn.textContent === 'Edit') {
      const titleInput = document.createElement('input');
      titleInput.value = titleEl.textContent;

      const descInput = document.createElement('textarea');
      descInput.value = descEl.textContent;

      taskDiv.replaceChild(titleInput, titleEl);
      taskDiv.replaceChild(descInput, descEl);

      editBtn.textContent = 'Save';
    } else {
      const titleInput = taskDiv.querySelector('input');
      const descInput = taskDiv.querySelector('textarea');

      const newTitle = document.createElement('h3');
      newTitle.textContent = titleInput.value;

      const newDesc = document.createElement('p');
      newDesc.textContent = descInput.value;

      taskDiv.replaceChild(newTitle, titleInput);
      taskDiv.replaceChild(newDesc, descInput);

      editBtn.textContent = 'Edit';
    }
  });

  taskList.appendChild(taskDiv);

  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
});
