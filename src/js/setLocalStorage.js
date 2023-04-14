// функция будет использована для сохранения id фильма в LocalStorage

export function addToLocalStorage(key, id) {
  const existingMv = JSON.parse(localStorage.getItem(key));
  if (existingMv === null) {
    existingMv = [];
  }
  if (!existingMv.includes(id)) {
    existingMv.push(id);
  }
  localStorage.setItem(key, JSON.stringify(existingMv));
}
