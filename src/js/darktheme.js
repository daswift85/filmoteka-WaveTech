// dark-theme
const btn = document.querySelector(".toggle__input");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
  } else if (currentTheme == "light") {
  document.body.classList.toggle("light-mode");
}
btn.addEventListener("click", function() {
    if (prefersDarkScheme.matches) {
       document.body.classList.toggle("light-mode");
        var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  } else {
        document.body.classList.toggle("dark-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  }
   localStorage.setItem("theme", theme);
});