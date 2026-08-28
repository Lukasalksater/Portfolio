// Sets the current year in the footer automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Light/dark theme toggle, persisted across pages via localStorage
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === "light") {
    root.classList.add("light");
    toggleBtn.textContent = "Toggle theme ☀️";
  } else {
    root.classList.remove("light");
    toggleBtn.textContent = "Toggle theme 🌙";
  }
}

// The inline script in <head> already applied the saved theme to avoid
// a flash, but make sure the button text matches on load too.
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
  const isLight = root.classList.contains("light");
  const newTheme = isLight ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});