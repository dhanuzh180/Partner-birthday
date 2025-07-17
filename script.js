const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-09-05T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "🎉 Happy Birthday Partner 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `💖 ${days}d ${hours}h ${minutes}m ${seconds}s left 💖`;
}

setInterval(updateCountdown, 1000);
