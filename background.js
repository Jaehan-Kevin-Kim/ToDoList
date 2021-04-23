const background = document.querySelector('.background');

function init() {
  console.log(background);
  console.log(background.src);
  const imgChanger = Math.ceil(Math.random() * 14);
  console.log(imgChanger);
  background.src = `images/${imgChanger}.jpg`;
}

init();
