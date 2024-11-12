const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const period = document.getElementById("period");

function clock() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  if (hrs >= 12) {
    period.innerHTML = "PM"

  } else {
    period.innerHTML = "AM"
  }

  if (hrs > 12) hrs = hrs - 12;

  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
}
setInterval(clock, 1000);
