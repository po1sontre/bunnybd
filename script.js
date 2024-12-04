const timerElement = document.getElementById('timer');
const toggleButton = document.getElementById('toggleBackground');
let isDarkMode = true;

// Update countdown every second
const birthday = new Date('December 16, 2024 00:00:00');
function updateCountdown() {
  const now = new Date();
  const timeDiff = birthday - now;

  if (timeDiff <= 0) {
    timerElement.textContent = "Happy Birthday, Snow!";
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  timerElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Toggle background and text color
toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.style.background = isDarkMode
    ? getComputedStyle(document.documentElement).getPropertyValue('--background-dark')
    : getComputedStyle(document.documentElement).getPropertyValue('--background-light');
  document.body.style.color = isDarkMode
    ? getComputedStyle(document.documentElement).getPropertyValue('--text-dark')
    : getComputedStyle(document.documentElement).getPropertyValue('--text-light');
  toggleButton.style.color = isDarkMode
    ? getComputedStyle(document.documentElement).getPropertyValue('--text-dark')
    : getComputedStyle(document.documentElement).getPropertyValue('--text-light');
  toggleButton.style.borderColor = isDarkMode
    ? 'transparent'
    : getComputedStyle(document.documentElement).getPropertyValue('--text-light');
});
