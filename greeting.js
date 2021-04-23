'use strict';
const form_greeting = document.getElementById('greeting__form');
const input_greeting = form_greeting.querySelector('.greeting__input');

const LS_KEY_USERNAME = 'UserName';
// alert('greeting');

function formatCreator(userInfo) {
  const message = document.createElement('h2');
  form_greeting.appendChild(message);
  message.innerText = `Hello, ${userInfo}`;
  input_greeting.remove();
}

function saveLS(e) {
  e.preventDefault();
  const user = input_greeting.value;

  formatCreator(user);

  localStorage.setItem(LS_KEY_USERNAME, user);
  // console.log(e);
}

function loadLS(userInfo) {
  formatCreator(userInfo);
}

function init() {
  if (localStorage.getItem(LS_KEY_USERNAME) !== null) {
    formatCreator(localStorage.getItem(LS_KEY_USERNAME));
  }
}

form_greeting.addEventListener('submit', saveLS);
init();
