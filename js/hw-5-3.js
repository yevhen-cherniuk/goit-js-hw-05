// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price,
// значениями которых должны быть переданные аргументы во время её вызова с оператором new.

function Car(brand, model, price){
this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car('Audi', 'Q3', 36000);
const bmw = new Car('BMW', 'X5', 58900);
const nissan = new Car('Nissan', 'Murano', 31700);

console.log(audi);
console.log(bmw);
console.log(nissan);