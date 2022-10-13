const doubles = (num) => num * 2;

const numbers = [4,6,16,99,77,2,101];
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)