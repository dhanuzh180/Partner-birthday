function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === "I lv u partner") {
    window.location.href = "unlocked.html";
  } else {
    error.textContent = "❌ Oops! Wrong password, partner.";
  }
}
