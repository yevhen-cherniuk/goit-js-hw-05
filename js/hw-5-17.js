// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel(уровень доступа),
// значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.

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
// Пиши код ниже этой строки

class Admin extends User {
  static AccessLevel = {BASIC: 'basic', SUPERUSER: 'superuser'};
    
}
console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);