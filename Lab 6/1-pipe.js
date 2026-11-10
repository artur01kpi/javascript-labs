'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments to pipe must be functions');
    }
  }
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

module.exports = { pipe };
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5)); 
