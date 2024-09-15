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

//Ex2.7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "";
  }
}

console.log("\nEX2.7\n");
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
console.log("\n");

//Ex3.1

function nb_year(p0, percent, aug, p) {
  let population = p0;
  for (let years = 0; ; years++) {
    if (population >= p) return years;
    population = population + population * (percent / 100) + aug;
  }
}

console.log("\nEX3.1\n");
console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
console.log("\n");

//Ex3.2

function numberOfPeople(busStops) {
  let peopleOnBus = 0;
  for (let i = 0; i < busStops.length; i++) {
    let [peopleOn, peopleOff] = busStops[i];
    peopleOnBus += peopleOn;
    peopleOnBus -= peopleOff;
  }
  if (peopleOnBus < 0) return "wrong numbers";
  return peopleOnBus;
}

console.log("\nEX3.2\n");
console.log(
  numberOfPeople([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  numberOfPeople([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  numberOfPeople([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 30],
  ])
);
console.log("\n");

//Ex4.1

function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  let fibarr = [1, 1];
  for (let i = 2; i < n; i++) fibarr.push(fibarr[i - 1] + fibarr[i - 2]);
  return fibarr;
}

console.log("\nEX4.1\n");
console.log(fibonacci(10));
console.log(fibonacci(8));
console.log(fibonacci(5));
console.log("\n");

//Ex4.2

function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n <= 3) return signature.slice(0, n);
  let result = signature.slice();
  for (let i = 3; i < n; i++) {
    let nextNumber = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(nextNumber);
  }
  return result;
}

console.log("\nEX4.2\n");
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([1, 1, 1], 3));
console.log(tribonacci([1, 1, 1], 0));
console.log("\n");
