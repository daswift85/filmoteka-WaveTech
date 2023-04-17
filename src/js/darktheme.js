// dark-theme
const btn = document.querySelector('.toggle__input');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const iconSun = document.querySelector('.sun');
const iconMoon = document.querySelector('.moon');

if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-mode');
  iconSun.style.display = 'none';
  iconMoon.style.display = 'block';
} else if (currentTheme == 'light') {
  document.body.classList.toggle('light-mode');
  iconSun.style.display = 'block';
  iconMoon.style.display = 'none';
}
btn.addEventListener('click', function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-mode');
    var theme = document.body.classList.contains('light-mode')
      ? 'light'
      : 'dark';
    iconSun.style.display = document.body.classList.contains('light-mode')
      ? 'block'
      : 'none';
    iconMoon.style.display = document.body.classList.contains('light-mode')
      ? 'none'
      : 'block';
  } else {
    document.body.classList.toggle('dark-mode');
    var theme = document.body.classList.contains('dark-mode')
      ? 'dark'
      : 'light';
    iconSun.style.display = document.body.classList.contains('dark-mode')
      ? 'none'
      : 'block';
    iconMoon.style.display = document.body.classList.contains('dark-mode')
      ? 'block'
      : 'none';
  }
  localStorage.setItem('theme', theme);
});
