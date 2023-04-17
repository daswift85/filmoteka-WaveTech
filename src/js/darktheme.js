// Dark mode
const btn = document.querySelector('.toggle__input');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const iconSun = document.querySelector('.sun');
const iconMoon = document.querySelector('.moon');

if (iconSun !== null) {
  iconSun.style.display = 'none';
}
if (iconMoon !== null) {
  iconMoon.style.display = 'none';
}
if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-mode');
  if (iconSun !== null) {
    iconSun.style.display = 'none';
  }
  if (iconMoon !== null) {
    iconMoon.style.display = 'block';
  }
} else if (currentTheme == 'light') {
  document.body.classList.toggle('light-mode');
  if (iconSun !== null) {
    iconSun.style.display = 'block';
  }
  if (iconMoon !== null) {
    iconMoon.style.display = 'none';
  }
} else {
  document.body.classList.add('light-mode');
  localStorage.setItem('theme', 'light');
}
btn.addEventListener('click', function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-mode');
    var theme = document.body.classList.contains('light-mode')
      ? 'light'
      : 'dark';
    if (iconSun !== null) {
      iconSun.style.display = document.body.classList.contains('light-mode')
        ? 'block'
        : 'none';
    }
    if (iconMoon !== null) {
      iconMoon.style.display = document.body.classList.contains('light-mode')
        ? 'none'
        : 'block';
    }
  } else {
    document.body.classList.toggle('dark-mode');
    var theme = document.body.classList.contains('dark-mode')
      ? 'dark'
      : 'light';
    if (iconSun !== null) {
      iconSun.style.display = document.body.classList.contains('dark-mode')
        ? 'none'
        : 'block';
    }
    if (iconMoon !== null) {
      iconMoon.style.display = document.body.classList.contains('dark-mode')
        ? 'block'
        : 'none';
    }
  }
  localStorage.setItem('theme', theme);
}); 