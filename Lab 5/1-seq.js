'use strict';

const seq = (f) => (g) => {
  if (typeof g === 'number') return f(g);
  return seq((x) => g(f(x)));
};

module.exports = { seq };
