const daysEl = document.getElementById("day");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = '1 Jan 2023';

function countdown(){

  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate -  currentDate)/1000;

  const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds/3600) % 24;
  const minutes = Math.floor(totalSeconds/60) % 60;
  const seconds = Math.floor(totalSeconds)%60;
    
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
  
    
}

function formatTime(time){
  return time < 10 ? (`0${time}`) : time; // to show the zero if we have less than 10 seconds;
}
//initial call 

countdown();

setInterval(countdown,1000); // a method to calls a function at specified intervals in miliseconds;

