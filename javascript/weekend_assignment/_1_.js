//Ex1.1

function boolean(bool) {
  if (bool === true) return "Yes";
  else if (bool === false) return "No";
  else return "enter a boolean value";
}

console.log("\nEX1.1\n");
console.log(boolean(true));
console.log(boolean(false));
console.log(boolean("true"));
console.log("\n");

//Ex2.1

function sumTwoSmallestNumbers(numbers) {
  let checkNumbers = numbers.filter((num) => num >= 0);
  if (checkNumbers.length < 4) return "your numbers less than 4 positive";

  checkNumbers = checkNumbers.filter((num) => Number.isInteger(num));
  if (checkNumbers.length < 4)
    return "your numbers less than 4 Integer numbers";

  checkNumbers.sort((a, b) => a - b);
  return checkNumbers[0] + checkNumbers[1];
}

console.log("\nEX2.1\n");
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77, "a"]));
console.log(sumTwoSmallestNumbers([19, 5, -20, 2, -9, -5]));
console.log(sumTwoSmallestNumbers([-19, 0.5, 0.2, 2, 9, 5]));
console.log("\n");

//Ex2.2

function binaryArrayToNumber(arr) {
  if (arr.length > arr.filter((num) => num === 0 || num === 1).length)
    return "There is number different from 0/1";
  return parseInt(arr.join(""), 2);
}

console.log("\nEX2.2\n");
console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([9, 1, 0, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 0, 0, 0, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 0, 0, 0, 0, 0]));
console.log("\n");

//Ex2.3

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  }
  return `-1 ${sq} is not a perfect`;
}

console.log("\nEX2.3\n");
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log("\n");
