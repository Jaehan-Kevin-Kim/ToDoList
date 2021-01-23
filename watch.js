const time = document.getElementById('currentTime');

function printCurrentTime() {
  const currentTime = new Date();
  // console.log(currentTime);
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  //   const second = currentTime.getSeconds();

  time.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
}

function init() {
  setInterval(() => {
    printCurrentTime();
  }, 1000);
}

init();
