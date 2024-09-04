//1

const num = 10;
const str = "Hello";
const bool = true;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);

//2

const firstVar = 42;
const secondVar = "42";

console.log(typeof firstVar);
console.log(typeof secondVar);

if (typeof firstVar === typeof secondVar) {
  console.log("same type.");
} else {
  console.log("different types.");
}

//3

let noValue;
const emptyValue = null;

console.log(`The type of noValue is: ${typeof noValue}`);
console.log(`The type of emptyValue is: ${typeof emptyValue}`);

//4

const x = 10;
const greeting = "Hello";
const isActive = true;

console.log(`The value of x is ${x} and its type is ${typeof x}.`);
console.log(
  `The value of greeting is "${greeting}" and its type is ${typeof greeting}.`
);
console.log(
  `The value of isActive is ${isActive} and its type is ${typeof isActive}.`
);
