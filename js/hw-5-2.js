// Измени код, построив цепочку прототипов так,
// чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.


const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки

console.log(parent.isPrototypeOf(child));
console.log(parent.surname);
console.log(parent.heritage);
console.log(parent.hasOwnProperty('surname'));
console.log(parent.hasOwnProperty('heritage'));
console.log(ancestor.isPrototypeOf(parent));
console.log(child.hasOwnProperty('surname'));
console.log(ancestor.heritage);
console.log(ancestor.hasOwnProperty('surname'));
console.log(ancestor.hasOwnProperty('heritage'));
console.log(ancestor.surname);