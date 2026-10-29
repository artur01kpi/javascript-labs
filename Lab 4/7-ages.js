 'use strict';
 const ages = (persons) => {
   const result = {};
   const currentYear = new Date().getFullYear();
   for (const name in persons) {
     result[name] = currentYear - persons[name];
   }
   return result;
 };
 module.exports = { ages };
 const persons = { lenin: 1870, stalin: 1878, khrushchev: 1894 };
 console.log(ages(persons));
