// Countdown timer to September 5, 12:00 AM
const countdown = document.querySelector('.countdown');

function updateCountdown() {
    const targetDate = new Date('September 5, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        countdown.innerHTML = "🎉 It's your birthday, Partner! 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `💖 ${days}d ${hours}h ${mins}m ${secs}s left 💖`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
