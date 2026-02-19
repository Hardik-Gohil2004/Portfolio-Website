const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save theme
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerHTML = "🌙";
  }
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.innerHTML = "☀️";
  }
});
