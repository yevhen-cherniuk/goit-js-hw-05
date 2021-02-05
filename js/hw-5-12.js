// Выполни рефакторинг заменив функцию - конструктор Storage на класс с методами.
// Сделай так, чтобы свойство items было приватным.



class Storage {
  #items;
  constructor(items){
  this.#items = items;
  }
  getItems() {
  return this.#items;
};
  
  addItem(newItem) {
  this.#items.push(newItem);
};
  removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
};
}


// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
console.log(storage);