//1

const num1 = 8;
const num2 = 15;
const sum = num1 + num2;
console.log(sum);

//2

const a = 30;
const b = 12;
const difference = a - b;
console.log(difference);

//3

const x1 = 7;
const y1 = 3;
const product = x * y;
console.log(product);

//4

const dividend = 20;
const divisor = 4;
const quotient = dividend / divisor;
const remainder = dividend % divisor;
console.log(quotient);
console.log(remainder);

//5

const number1 = 15;
const number2 = 25;
const number3 = 10;
const average = (number1 + number2 + number3) / 3;
console.log(average);

//6

const x2 = 10;
console.log(x2 % 3);

//7

const number4 = 7;
if (number4 % 2 === 0) {
  console.log(`${number4} is even.`);
} else {
  console.log(`${number4} is odd.`);
}

//8

const number5 = 35;
if (number5 % 5 === 0 && number5 % 7 === 0) {
  console.log(`${number5} is divisible by both 5 and 7.`);
} else {
  console.log(`${number5} is not divisible by both 5 and 7.`);
}

//9

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

//10

const number6 = 15;
if (number6 > 10 && number6 < 20) {
  console.log(`${number6} is greater than 10 and less than 20.`);
} else {
  console.log(`${number6} does not satisfy the condition.`);
}

//11

const number7 = 12;
if (number7 < -5 || number7 > 10) {
  console.log(`${number7} satisfies the condition.`);
} else {
  console.log(`${number7} does not satisfy the condition.`);
}

//12

const isRaining = true;
console.log(!isRaining);

//13

const number8 = 25;
if ((number8 > 5 && number8 < 10) || (number8 > 20 && number8 < 30)) {
  console.log(`${number8} satisfies the condition.`);
} else {
  console.log(`${number8} does not satisfy the condition.`);
}
