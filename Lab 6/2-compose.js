'use strict';

const compose = (...fns) => {
  const handlers = [];

  const composed = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  };

  composed.on = (name, handler) => {
    if (name === 'error' && typeof handler === 'function') {
      handlers.push(handler);
    }
  };

  return composed;
};

module.exports = { compose };

// --- Тестовий приклад для перевірки в терміналі ---
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

// 1. Звичайна робота (справа наліво: 5^3 = 125 -> 125*2 = 250 -> 250+1 = 251)
const f1 = compose(inc, twice, cube);
console.log('Результат f1(5):', f1(5)); // Виведе: 251

// 2. Перевірка обробки помилок
const fail = () => {
  throw new Error('Щось пішло не так!');
};

const f2 = compose(inc, fail, cube);
f2.on('error', (err) => {
  console.log('Перехоплена помилка:', err.message);
});

console.log('Результат f2(5):', f2(5)); // Виведе: Перехоплена помилка... та undefined
