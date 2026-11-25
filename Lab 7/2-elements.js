'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};

// --- Перевірка (тестування) ---

// 1. Видалення кількох чисел (приклад з умови)
const numbers = Array.of(1, 2, 3, 4, 5, 6, 7);
removeElements(numbers, 5, 1, 6);
console.log('Числа після видалення:', numbers);

// 2. Видалення міст, включно з неіснуючим 'Berlin'
const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(cities, 'Lima', 'Berlin', 'Kiev');
console.log('Міста після видалення:', cities);

// 3. Виклик без елементів для видалення
const items = Array.of(10, 20, 30);
removeElements(items);
console.log('Без аргументів:', items);
