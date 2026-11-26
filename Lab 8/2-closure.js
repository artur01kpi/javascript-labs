'use strict';

const store = (value) => () => value;

// Перевірка роботи:
const read = store(5);
const value = read();
console.log(value); // Виведе: 5

module.exports = { store };
