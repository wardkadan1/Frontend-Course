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
