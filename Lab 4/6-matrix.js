 'use strict';
 const max = (matrix) => {
   let maxValue = matrix[0][0];
   for (const row of matrix) {
     for (const value of row) {
       if (value > maxValue) maxValue = value;
     }
   }
   return maxValue;
 };
 module.exports = { max };
 const sampleMatrix = [[1, 2, 3], [4, 15, 6], [7, 8, 9]];
 console.log(max(sampleMatrix));
