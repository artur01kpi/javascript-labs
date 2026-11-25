'use strict';

const unique = (array) => {
  const result = Array.of();
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// --- Перевірка (тестування) ---

// 1. Видалення дублікатів із масиву чисел (приклад з умови)
const numbers = Array.of(2, 1, 1, 3, 2);
const uniqueNumbers = unique(numbers);
console.log('Унікальні числа:', uniqueNumbers);
console.log('Початковий масив не змінився:', numbers);

// 2. Видалення дублікатів із масиву рядків (приклад з умови)
const directions = ['top', 'bottom', 'top', 'left'];
const uniqueDirections = unique(directions);
console.log('Унікальні напрямки:', uniqueDirections);

// 3. Перевірка з порожнім масивом
const empty = Array.of();
console.log('Порожній масив:', unique(empty));
