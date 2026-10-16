// 1. Змінна з ім'ям
let myName = 'Артур'; // впиши сюди своє ім'я

// 2. Константа з роком народження
const birthYear = 2008; // впиши свій рік народження

// 3. Функція привітання
const welcome = (name) => {
  console.log(`Привіт, ${name}!`);
};

// Експортуємо для тестів, якщо потрібно
module.exports = { myName, birthYear, welcome };
