function startTimer(duration) {
  timer = setInterval(function () {
    let timerOutput = document.querySelector('.output');
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (duration < 0) {

      clearInterval(timer);
      timerOutput.innerHTML = "End timer!";
      btn.classList.remove("selected");

    } else {

      let strTimer = `${Math.trunc(minutes)}:${seconds}`;
      timerOutput.innerHTML = strTimer;
    }
    duration--;

  }, 1000)
}

let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {

  if (btn.classList.contains("selected")) {
    console.log('Wait');

  } else {

    btn.classList.add('selected');
    let mins = +document.getElementById('mins').value;
    let sec = +document.getElementById('sec').value;
    let duration = (mins * 60) + sec;
    startTimer(duration);
    
  }
});


