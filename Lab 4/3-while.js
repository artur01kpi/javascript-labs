 'use strict';
 const sum = (...args) => {
   let total = 0;
  let i = 0;
  while (i < args.length) {
     total += args[i];
    i++;
   }
   return total;
 };
 module.exports = { sum };
 console.log(sum(1, 2, 3));
 console.log(sum(10, -2, 5));
 console.log(sum());
