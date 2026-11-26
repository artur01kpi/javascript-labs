'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const def = types[i];
    const name = def.name.toLowerCase();
    if (typeof arg !== name) {
      throw new TypeError(`Argument type ${name} expected`);
    }
  }
  const res = fn(...args);
  const def = types[types.length - 1];
  const name = def.name.toLowerCase();
  if (typeof res !== name) {
    throw new TypeError(`Result type ${name} expected`);
  }
  return res;
};

// Перевірка роботи:
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Виведе: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Виведе: 'Hello world!'

module.exports = { contract };
