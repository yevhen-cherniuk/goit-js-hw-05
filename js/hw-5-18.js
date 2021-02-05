// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel.
// Добавь классу Admin публичное свойсво accessLevel, значение которого будет передаваться при вызове конструктора.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
constructor({email,accessLevel}) {
  super(email);
  this.accessLevel = accessLevel;
}

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser