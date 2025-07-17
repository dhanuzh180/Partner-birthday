const countdownEl = document.getElementById("countdown");
const birthdayTime = new Date("2025-09-05T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = birthdayTime - now;

  if (gap <= 0) {
    countdownEl.innerHTML = "🎉 Happy Birthday Partner 🎉";
  } else {
    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    const seconds = Math.floor((gap / 1000) % 60);
    countdownEl.innerHTML = `💖 ${days}d ${hours}h ${minutes}m ${seconds}s left 💖`;
  }
}

setInterval(updateCountdown, 1000);

// Lock Logic
function handleClick() {
  const now = new Date().getTime();
  if (now < birthdayTime) {
    alert("Not yet... wait until September 5 ❤️");
    return;
  }

  document.querySelector(".open-heart").style.display = "none";
  document.getElementById("password-section").style.display = "block";
}

function checkPassword() {
  const password = document.getElementById("password-input").value;
  const correctPassword = "I lv u partner";

  if (password.trim() === correctPassword) {
    document.getElementById("password-section").style.display = "none";
    document.getElementById("birthday-message").style.display = "block";
  } else {
    document.getElementById("wrong-password").innerText = "💔 Wrong password!";
  }
}
