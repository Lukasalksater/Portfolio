// Sätter aktuellt år i footern automatiskt
document.getElementById("year").textContent = new Date().getFullYear();

// Enkel ljust/mörkt tema-växlare
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "Byt tema ☀️";
  } else {
    toggleBtn.textContent = "Byt tema 🌙";
  }
});
