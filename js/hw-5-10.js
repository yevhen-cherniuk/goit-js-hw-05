// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice(){
  return this.price;
  }
  changePrice(newPrice){
  this.price = newPrice;
  }
  
}
const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(Car.prototype.hasOwnProperty('changePrice'));
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(car.getPrice());
car.changePrice(35000);
console.log(car.getPrice());
