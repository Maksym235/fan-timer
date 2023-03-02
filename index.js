const refs = {
  timeNow: document.querySelector(".time-now"),
  timeToNewYear: document.querySelector(".time-to-newYear"),
};

const newYear = new Date("2024-01-01T00:00:00");

const timerID = setInterval(() => {
  const currentTime = Date.now();
  const timerNY = newYear - currentTime;
  const dateNow = convertMs(currentTime);
  const date = convertMs(timerNY);

  refs.timeNow.textContent = `${(dateNow.hours + 3)
    .toString()
    .padStart(2, "0")} : ${dateNow.minutes
    .toString()
    .padStart(2, "0")} : ${dateNow.seconds.toString().padStart(2, "0")}`;

  refs.timeToNewYear.textContent = `${date.days} - ${date.hours
    .toString()
    .padStart(2, "0")} : ${date.minutes
    .toString()
    .padStart(2, "0")} : ${date.seconds.toString().padStart(2, "0")}`;
}, 1000);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// console.log(timerID);
// function getDate(time) {
//   const timeHours = time.getHours();
//   const timeMinutes = time.getMinutes();
//   const timeSeconds = time.getSeconds();
//   return { timeHours, timeMinutes, timeSeconds };
// }

// const newYear = new Date("2022-12-20T20:45:00");
// const timerID = setInterval(() => {
//   const currentDate = new Date();
//   currentDate - newYear;
// }, 1000);

// console.log(
//   setInterval(() => {
//     convertMs(timerID);
//   }, 1000)
// );
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(timerID);
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
