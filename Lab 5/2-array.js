'use strict';

const array = () => {
  const data = [];

  const get = (index) => data[index];

  const push = (value) => data.push(value);

  const pop = () => data.pop();

  return { get, push, pop };
};

module.exports = { array };
