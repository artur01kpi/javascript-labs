 'use strict';
 const sum = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 module.exports = { sum };
 console.log(sum(1, 2, 3));
 console.log(sum(10, -2, 5));
 console.log(sum());
