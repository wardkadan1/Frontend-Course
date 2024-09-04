//1

const isSunny = true;
const isWeekend = false;

console.log(isSunny && isWeekend);

//2

const age = 20;
const license = true;

console.log(age > 18 && license);

//3

const knowsJava = false;
const knowsPy = true;

console.log(knowsJava || knowsPy);

//4

const isRaining = true;

console.log(!isRaining);

//5

const likesMusic = true;
const playsGuitar = false;
const hasTime = true;

console.log(likesMusic && (playsGuitar || hasTime));

//6

const personAge = 25;

console.log(personAge > 18);

//7

const currentTemperature = 30;

console.log(currentTemperature < 20 || currentTemperature >= 30);

//8

const firstNumber = 10;
const secondNumber = "10";

console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);

//9

const budget = 500;
const expense = 450;

console.log(expense <= budget);

//10

const person1Height = 170;
const person2Height = 165;

console.log(person1Height > person2Height);
console.log(person1Height < person2Height);
console.log(person1Height === person2Height);
