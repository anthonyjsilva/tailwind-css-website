const doc = document.querySelector("html");
const themeBtn = document.getElementById("theme-btn");

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

let themeText = "dark";

// toogle theme
themeBtn.addEventListener("click", () => {
  themeText = themeText == "light" ? "dark" : "light";
  themeBtn.textContent =
    themeText.charAt(0).toUpperCase() + themeText.slice(1) + " Mode";

  // apply dark mode class to doc
  doc.classList.toggle("dark");
});

// open hamburger menu
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

