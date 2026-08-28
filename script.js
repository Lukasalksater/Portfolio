// Sets the current year in the footer automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Simple light/dark theme toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "Toggle theme ☀️";
  } else {
    toggleBtn.textContent = "Toggle theme 🌙";
  }
});