'use strict';
const weather = document.getElementById('weather');
const input__weather = document.getElementById('weather__input');
const API_KEY = 'c85f8ecd5c89d9e4f591eb9cf433b31b';
// let currentCity = '';
// let url = '';

function formatCreator(city, temp) {
  weather.innerText = `${city}, ${temp}°C`;
}

function loadWeather(coords) {
  console.log(coords.name);
  console.log(coords);
  const cityName = coords.name;
  const temp = Math.round(coords.main.temp);
  console.log(temp);
  formatCreator(cityName, temp);
}

function loadAPI(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadWeather(data));
}

function curLocation(e) {
  //   console.log(e);
  if (e.keyCode === 13) {
    const currentCity = e.target.value;
    // console.log(currentCity);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`;
    loadAPI(url);
    console.log(url);
  }
}

input__weather.addEventListener('keypress', curLocation);
