const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функція конвертації IP у 32-бітне число
const ipToInt = (ip) => {
  if (ip === undefined || ip.trim() === '') return 0;

  // Розбиваємо рядок '127.0.0.1' по крапках на масив чисел
  const parts = ip.split('.');

  // Зсуваємо біти ліворуч за допомогою << та додаємо їх
  const res = (parseInt(parts[0], 10) << 24) +
              (parseInt(parts[1], 10) << 16) +
              (parseInt(parts[2], 10) << 8) +
              parseInt(parts[3], 10);

  return res;
};

// Запитуємо IP-адресу у користувача
rl.question('Введіть IPv4-адресу (наприклад, 127.0.0.1): ', (ipInput) => {
  const result = ipToInt(ipInput);
  console.log(`Результат конвертації у число: ${result}`);

  rl.close();
});

module.exports = { ipToInt };
