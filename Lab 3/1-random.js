const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

rl.question('Введіть мінімальне число (min): ', (minInput) => {
  rl.question('Введіть максимальне число (max, або залиште порожнім): ', (maxInput) => {
    
    const min = parseInt(minInput, 10);
    let max = maxInput.trim() !== '' ? parseInt(maxInput, 10) : undefined;

    if (isNaN(min)) {
      console.log('Помилка: Ви не ввели перше число!');
    } else {
      const result = random(min, max);
      console.log(`Випадкове число у заданому діапазоні: ${result}`);
    }

    rl.close();
  });
});

module.exports = { random };
