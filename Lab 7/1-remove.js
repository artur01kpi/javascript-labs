'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

// --- Перевірка (тестування) ---

// 1. Видалення числа (приклад з умови)
const numbers = Array.of(1, 2, 3, 4, 5, 6, 7);
removeElement(numbers, 5);
console.log('Після видалення 5:', numbers);

// 2. Видалення рядка та спроба видалити неіснуючий елемент
const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(cities, 'Lima');
removeElement(cities, 'Berlin');
console.log('Міста:', cities);

// 3. Перевірка з дублікатами (видаляється тільки перший знайдений)
const duplicates = Array.of(10, 20, 30, 20, 40);
removeElement(duplicates, 20);
console.log('З дублікатами:', duplicates);
