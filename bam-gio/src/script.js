let timerInterval;
let elapsedTime = 0;

function formatTime(time) {
  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = formatTime(elapsedTime);
}

document.getElementById("start").addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      elapsedTime++;
      updateTimerDisplay();
    }, 1000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateTimerDisplay();
});

// Initialize timer display
updateTimerDisplay();
