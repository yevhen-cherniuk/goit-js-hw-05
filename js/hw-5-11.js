// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса,
// для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand(){
   return this.#brand; 
  }
  changeBrand(newBrand){
   this.#brand = newBrand; 
  }
   
}
const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
console.log(car.getBrand());
console.log(car.changeBrand('Honda'));