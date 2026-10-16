// Підключаємо вбудований модуль Node.js для зчитування з консолі
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- 1. Дослідження const та let (Завдання 3) ---
const fn = () => {
  const obj1 = { name: 'Marcus' }; // Об'єкт у константі
  let obj2 = { name: 'Aurelius' }; // Об'єкт у змінній

  obj1.name = 'Antoninus'; // Змінювати поля всередині об'єкта в const МОЖНА
  obj2.name = 'Commodus';  // У let теж можна

  // obj1 = { name: 'New' }; // Якщо розкоментувати — буде помилка, бо це const!
  obj2 = { name: 'New' };    // Тут помилки немає, бо це let

  return { obj1, obj2 };
};

// --- 2. Функція створення користувача (Завдання 4) ---
// Приймає два рядки і повертає готовий об'єкт
const createUser = (name, city) => {
  return { name, city };
};

// --- 3. Логіка взаємодії з користувачем через термінал ---
rl.question("Введи ім\'я користувача: ", (userName) => {
  rl.question('Введи місто користувача: ', (userCity) => {
    
    // Створюємо об'єкт за допомогою нашої функції
    const newUser = createUser(userName, userCity);

    console.log("\n--- Результати об'єктів ---");
    console.log("Створений об\'єкт користувача:");
    console.log(newUser);

    console.log("\nРезультат дослідження fn() (const vs let):");
    console.log(fn());

    rl.close();
  });
});

module.exports = { fn, createUser };
