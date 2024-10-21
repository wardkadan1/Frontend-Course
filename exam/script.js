// Write a function named `getSquaredNumbers` that takes an array of numbers and returns a new array containing the squares of those numbers.

const x = [2, 4, 6, 8];

function getSquaredNumbers(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    newArray.push(x[i] * x[i]);
  }
  return newArray;
}

console.log(getSquaredNumbers(x));

const t = x.map(math.square);
