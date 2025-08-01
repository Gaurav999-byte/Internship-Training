const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

function showMessage(text, type) {
  message.textContent = text;
  message.className = type; // 'success' or 'error'
  setTimeout(() => {
    message.textContent = '';
    message.className = '';
  }, 4000); // message visible for 4 seconds
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    showMessage('All fields are required.', 'error');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
  if (!emailPattern.test(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }

  showMessage('Registration successful!', 'success');
  form.reset();
});
