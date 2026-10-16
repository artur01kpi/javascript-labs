// Підключаємо модуль Node.js для зчитування з клавіатури
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- Частина 1: Телефонний довідник як МАСИВ ОБ'ЄКТІВ (Завдання 8) ---
const phoneList = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Ivan Franko", phone: "+380501234567" },
  { name: "Lesya Ukrainka", phone: "+380679876543" }
];

// Функція шукає телефон через цикл "for...of"
const findPhoneByName = (name) => {
  for (const item of phoneList) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      return item.phone;
    }
  }
  return "Номер не знайдено";
};

// --- Частина 2: Телефонний довідник як ХЕШ-ТАБЛИЦЯ / ОБ'ЄКТ (Завдання 9) ---
const phoneHash = {
  "marcus aurelius": "+380445554433",
  "ivan franko": "+380501234567",
  "lesya ukrainka": "+380679876543"
};

// Функція шукає телефон миттєво за ключем, без використання циклів
const findPhoneInHash = (name) => {
  return phoneHash[name.toLowerCase()] || "Номер не знайдено";
};

// --- Частина 3: Взаємодія в терміналі ---
console.log("Доступні контакти: Marcus Aurelius, Ivan Franko, Lesya Ukrainka");

rl.question("Введи ім'я для пошуку телефону: ", (inputName) => {
  
  console.log("\n--- Результати пошуку ---");
  // Спосіб 1: через пошук у масиві (циклом)
  console.log("Пошук у масиві (findPhoneByName):", findPhoneByName(inputName));
  
  // Спосіб 2: через швидкий пошук у хеші (за ключем)
  console.log("Пошук у хеш-таблиці (findPhoneInHash):", findPhoneInHash(inputName));

  rl.close();
});

// Експортуємо колекції та функції для автотестів курсу
module.exports = { phoneList, findPhoneByName, phoneHash, findPhoneInHash };
