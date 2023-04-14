// функция для изменения кнопок - с add на remove и обратно

export function btnSwitcher(e, btn) {
  if (e.target.textContent.includes('add')) {
    e.target.textContent = `remove from ${btn}`;
  } else {
    e.target.textContent = `add to ${btn}`;
  }
  return e.target.textContent;
}
