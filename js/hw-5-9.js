// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

class Car{
  brand;
  model;
  price;
  
 constructor ({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
}

const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

console.log(car);
console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700  }));