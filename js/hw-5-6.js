// Напиши функцию - конструктор Storage, которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в тойпоследовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.


function Storage(items) {
  this.items = items;
 }
Storage.prototype.getItems = function(){
return this.items;
}

Storage.prototype.addItem = function(newItem){
 this.items.push(newItem);
}
Storage.prototype.removeItem = function(item){
 this.items.splice(this.items.indexOf(item),1);
}

const storage = new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]);

console.log(storage);
console.log(Storage.prototype.hasOwnProperty('getItems'));
console.log(Storage.prototype.hasOwnProperty('addItem'));
console.log(Storage.prototype.hasOwnProperty('removeItem'));
console.log(Storage.prototype.isPrototypeOf(storage));
console.log(storage.getItems());
storage.addItem('Дроид');
console.log(storage.getItems());
storage.removeItem('Пролонгер');
console.log(storage.getItems());


