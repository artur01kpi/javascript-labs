const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Набір символів: маленькі, великі англійські літери та цифри
const charactersList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Функція генерації випадкового числа
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функція генерації випадкового ключа заданої довжини
const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    key += characters[index];
  }
  return key;
};

// Запитуємо межі довжини пароля у користувача
rl.question('Введіть мінімальну довжину пароля (min): ', (minInput) => {
  rl.question('Введіть максимальну довжину пароля (max): ', (maxInput) => {
    
    const min = parseInt(minInput, 10);
    const max = parseInt(maxInput, 10);

    if (isNaN(min) || isNaN(max)) {
      console.log('Помилка: Ви повинні ввести обидва числа!');
    } else if (min > max) {
      console.log('Помилка: Мінімальна довжина не може бути більшою за максимальну!');
    } else {
      // 1. Визначаємо випадкову довжину пароля в заданих межах
      const passwordLength = random(min, max);
      console.log(`\nОбрано випадкову довжину пароля: ${passwordLength}`);

      // 2. Генеруємо сам пароль цієї довжини
      const password = generateKey(passwordLength, charactersList);
      console.log(`Твіт згенерований пароль: ${password}`);
    }

    rl.close();
  });
});

module.exports = { generateKey };
