const methods = (iface) => {
  const result = [];

  // Перебираємо всі ключі (властивості) в об'єкті
  for (const key in iface) {
    // Перевіряємо, чи є ця властивість функцією
    if (typeof iface[key] === 'function') {
      // Дізнаємося кількість аргументів функції через .length
      const argsCount = iface[key].length;
      
      // Додаємо пару ['назва', кількість] до нашого масиву
      result.push([key, argsCount]);
    }
  }

  return result;
};

// --- Тест для перевірки роботи програми в консолі ---
const myObject = {
  m1: (x) => [x],               // 1 аргумент
  m2: (x, y) => [x, y],         // 2 аргументи
  m3: (x, y, z) => [x, y, z],   // 3 аргументи
  title: 'Просто рядок'         // Це не функція, її буде проігноровано
};

console.log('Знайдені методи об\'єкта:', methods(myObject));

module.exports = { methods };
