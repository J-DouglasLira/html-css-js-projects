const newYears = '1 Jan 2023';

function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate -  currentDate)/1000;

  const secs = Math.floor(totalSeconds%60);
  const mins = Math.floor(totalSeconds/60) % 60;
  const hours = Math.floor(totalSeconds/3600) % 24;
  const days = Math.floor(totalSeconds/86400);

  
}
//initial call 

countdown();

setInterval(countdown,1000); // a method to calls a function at specified intervals in miliseconds;

