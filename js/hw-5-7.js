// Напиши функцию - конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку,
// которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.

function StringBuilder(baseValue) {
    this.value = baseValue;
}
StringBuilder.prototype.getValue = function () {
    return this.value;
}
StringBuilder.prototype.padEnd = function (str) {
    this.value += str; 
}
StringBuilder.prototype.padStart = function (str) {
    this.value = str + this.value;
}
StringBuilder.prototype.padBoth = function (str) {
    this.value = str + this.value + str;
}

const builder = new StringBuilder('.');

console.log(builder);
console.log(StringBuilder.prototype.isPrototypeOf(builder));
console.log(StringBuilder.prototype.hasOwnProperty('getValue'));
console.log(StringBuilder.prototype.hasOwnProperty('padEnd'));
console.log(StringBuilder.prototype.hasOwnProperty('padStart'));
console.log(StringBuilder.prototype.hasOwnProperty('padBoth'));


console.log(builder.getValue());
builder.padStart('^');
console.log(builder.getValue());
builder.padEnd('^');
console.log(builder.getValue());
builder.padBoth('=');
console.log(builder.getValue());


