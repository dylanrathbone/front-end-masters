const makeTimer = () => {
 let elapsedTime = 0;
 const stopWatch = () => {return elapsedTime};
 const increase = () => {return elapsedTime++};
 setInterval(increase, 1000);
 return stopWatch;
}

let timer = makeTimer();
timer();