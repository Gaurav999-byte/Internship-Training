// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const message = document.getElementById('message');

// Show message function
function showMessage(text, type) {
  message.textContent = text;
  message.className = type; // 'success' or 'error'
  setTimeout(() => {
    message.textContent = '';
    message.className = '';
  }, 3000);
}

// Handle form submit
todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = todoInput.value.trim();

  // Validate input
  if (!task) {
    showMessage('Please enter a task.', 'error');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = task;

  // Create delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.setAttribute('aria-label', `Delete task: ${task}`);
  li.appendChild(delBtn);

  // Append to list
  todoList.appendChild(li);

  // Clear input
  todoInput.value = '';
  showMessage('Task added successfully!', 'success');
});

// Handle delete button clicks using event delegation
todoList.addEventListener('click', function(e) {
  if (e.target && e.target.matches('button.delete-btn')) {
    const li = e.target.parentElement;
    todoList.removeChild(li);
    showMessage('Task removed.', 'success');
  }
});
