'use strict';

const difference = (array1, array2) => {
  const result = Array.of();
  for (const item of array1) {
    if (!array2.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// --- Перевірка (тестування) ---

// 1. Різниця числових масивів (приклад з умови)
const numbers1 = Array.of(7, -2, 10, 5, 0);
const numbers2 = Array.of(0, 10);
const diffNumbers = difference(numbers1, numbers2);
console.log('Різниця чисел:', diffNumbers);

// 2. Різниця масивів міст (приклад з умови)
const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];
const diffCities = difference(cities1, cities2);
console.log('Різниця міст:', diffCities);

// 3. Перевірка, коли всі елементи збігаються (має повернутися порожній масив)
const allMatch = difference(Array.of(1, 2), Array.of(1, 2, 3));
console.log('Усі елементи збігаються:', allMatch);
