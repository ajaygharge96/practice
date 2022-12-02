// Get element DOM
const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");
function updateClock() {
  // Get realTime Clock value from System
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  //   To update ampm with HRS
  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }
  //  For Correct two digit value in clock
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  //Set realTime Data for Display
  hourElement.innerText = h;
  minutesElement.innerText = m;
  secondElement.innerText = s;
  ampmElement.innerText = ampm;

  // To update clock every second
  setTimeout(() => {
    updateClock();
  }, 900);
}
updateClock();
