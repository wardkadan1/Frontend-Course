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

//Ex2.4

function findUniq(arr) {
  if (arr.length < 3) return "Enter at least 3 numbers";
  arr.sort((a, b) => a - b);
  if (arr[0] === arr[1]) return arr[arr.length - 1];
  else return arr[0];
}

console.log("\nEX2.4\n");
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([0, 900, 0]));
console.log(findUniq([0, 0.55]));
console.log("\n");

//Ex2.5

function summation(num) {
  let sum = 0;
  if (num < 1 || Number.isInteger(num) === false) return "wrong number";
  for (let i = 1; i < num + 1; i++) sum += i;
  return sum;
}

console.log("\nEX2.5\n");
console.log(summation(8));
console.log(summation(2));
console.log(summation(-1));
console.log(summation(1.2));
console.log(summation("a"));
console.log("\n");

//Ex2.6

function centuryFromYear(year) {
  if (year < 1) return "wrong year";
  if (year % 100 === 0) return year / 100;
  else return Math.floor(year / 100) + 1; // it will take the full number
}

console.log("\nEX2.6\n");
console.log(centuryFromYear(-1));
console.log(centuryFromYear(1));
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1800));
console.log("\n");
