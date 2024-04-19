const timer = (deadline) => {
  console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    console.log(timeRemaining);

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };
  //функция обновления значений + заполнение пустых разрядов нулями
  const updateClock = () => {
    let getTime = getTimeRemaining();
    console.log(getTime);
    //добавление разрядов
    timerHours.textContent = ("0" + getTime.hours).slice(-2);
    timerMinutes.textContent = ("0" + getTime.minutes).slice(-2);
    timerSeconds.textContent = ("0" + getTime.seconds).slice(-2);

    //обнуление таймера, если дата просрочена

    if (getTime.timeRemaining < 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };
  //Остановка таймера, если дата просрочена
  let idInerval = setInterval(() => {
    updateClock();
  }, 1000);
  if (new Date(deadline).getTime() - new Date().getTime() < 0) {
    clearInterval(idInerval);
  }
  // countTimer('16 february 2024')
};
export default timer;
