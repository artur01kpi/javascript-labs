 'use strict';
 const sum = (...args) => {
   if (args.length === 0) return 0;
   let total = 0;
   let i = 0;
   do {
     total += args[i];
     i++;
   } while (i < args.length);
   return total;
 };
 module.exports = { sum };
 console.log(sum(1, 2, 3));
 console.log(sum(10, -2, 5));
 console.log(sum());
