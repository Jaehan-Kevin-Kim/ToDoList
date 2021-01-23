'use strict';

const form = document.getElementById('form__toDo');
const lists = document.getElementById('list__items');
// const list = document.querySelectorAll('.list__item');
const clearBtn = document.getElementById('clearAll');
const checkBox = document.querySelector('.checkbox input');
const LS_KEY = 'toDoList';
let localStorageData = [];
let id = 0;
// console.log(checkBox.value);

function saveToLocalStorage(data) {
  // console.log(data);
  // console.log(JSON.stringify(data));
  localStorage.setItem('toDoList', JSON.stringify(data));
}

function elementsCreater(data) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  // const div = document.createElement('div');
  // const input = document.createElement('input');
  const btn = document.createElement('button');
  // input.type = 'checkbox';
  // div.appendChild(input);
  btn.classList.add('deleteBtn');
  li.classList.add('list__item');
  btn.innerHTML = `<i class="fas fa-trash"></i>`;
  // div.classList.add('checkbox');
  const newId = id++;
  li.id = newId;
  // li.appendChild(div);
  li.appendChild(btn);
  li.appendChild(span);
  lists.appendChild(li);
  span.innerHTML = data;

  btn.addEventListener('click', deleteItem);
  const object = { id: newId, value: data };
  localStorageData.push(object);
  // console.log(localStorageData);
  saveToLocalStorage(localStorageData);
}

function createList(e) {
  e.preventDefault();
  console.log(e);
  const inputData = e.target.children[0].value;
  elementsCreater(inputData);

  e.target.children[0].value = '';

  console.log(inputData);
}

function deleteItem(e) {
  // console.log(e.target.parentElement.parentElement);
  const targetId = e.target.parentElement.parentElement.id;
  console.log(targetId);
  const listItems = document.querySelectorAll('.list__item');
  const filteredList = Array.from(listItems).filter(
    (listItem) => listItem.id === targetId
  );

  console.log('before', localStorageData);
  localStorageData.splice(targetId, 1);
  console.log('after', localStorageData);
  saveToLocalStorage(localStorageData);
  location.reload();

  // console.log(list);
  // console.log(e);
}

function deleteAll() {
  localStorageData = [];
  saveToLocalStorage();
  location.reload();
}

function init() {
  if (localStorage.getItem(LS_KEY) !== null) {
    // console.log('local storage data is exist');
    const loadedData = JSON.parse(localStorage.getItem(LS_KEY));
    console.log(loadedData);
    loadedData.forEach((data) => {
      elementsCreater(data.value);
    });
    // loadFromLocalStorage();
  }
}

clearBtn.addEventListener('click', deleteAll);

form.addEventListener('submit', createList);
init();
