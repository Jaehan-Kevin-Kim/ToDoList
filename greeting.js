const form = document.getElementById('greeting__form');
const input = form.querySelector('.greeting__input');
const LS_KEY = 'UserName';
// alert('greeting');

function formatCreator(userInfo) {
  const message = document.createElement('h2');
  form.appendChild(message);
  message.innerText = `Hi, ${userInfo}`;
  input.remove();
}

function saveLS(e) {
  e.preventDefault();
  const user = input.value;

  formatCreator(user);

  localStorage.setItem(LS_KEY, user);
  // console.log(e);
}

function loadLS(userInfo) {
  formatCreator;
}

function init() {
  if (localStorage.getItem(LS_KEY) !== null) {
    formatCreator(localStorage.getItem(LS_KEY));
  }
}

form.addEventListener('submit', saveLS);
init();
