 'use strict';
 const sum = (...args) => {
  let total = 0;
   for (const arg of args) {
    total += arg;
   }
   return total;
 };
 module.exports = { sum };
 console.log(sum(1, 2, 3));
 console.log(sum(10, -2, 5));
 console.log(sum());
