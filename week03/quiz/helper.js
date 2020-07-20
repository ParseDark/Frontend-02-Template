export const pipeline = (...fns) => (...args) => fns.reduce((sum, cur) => cur(sum), ...args);

const add1 = x => x + 1;
const add2 = x => x * 2;

console.log(pipeline(add1, add2)(1));
