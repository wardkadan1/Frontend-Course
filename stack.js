// Last In First Out (LIFO)

class Stack {
  constructor() {
    this.stackOfNumbers = [];
  }
  push(item) {
    this.stackOfNumbers.push(item);
  }
  pop() {
    return this.stackOfNumbers.pop();
  }

  join() {
    return this.stackOfNumbers.join("");
  }

  isEmpty() {
    return this.stackOfNumbers.length === 0;
  }
}

// First In First Out (FIFO)

class Queue {
  constructor() {
    this.queueOfNumbers = [];
  }
  enqueue(item) {
    this.queueOfNumbers.push(item);
  }
  dequeue() {
    return this.queueOfNumbers.shift();
  }
  join() {
    return this.queueOfNumbers.join("");
  }
}

const stack = new Stack();
const queue = new Queue();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("Stack:", stack.stackOfNumbers);
console.log("Queue:", queue.queueOfNumbers);

console.log("Removed from Stack:", stack.pop());
console.log("Dequeued from Queue:", queue.dequeue());
// Stack last in first out
const reverseStackString = (string) => {
  let reverseString = new Stack();
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString.push(string[i]);
  }
  return reverseString.join("");
};
console.log(reverseStackString("Yishai"));

// // Queue first in first out
const reverseQueueString = (string) => {
  let reverseString = new Queue();
  for (let i = 0; i < string.length; i++) {
    reverseString.enqueue(string[string.length - 1 - i]);
  }
  return reverseString.join("");
};
console.log(reverseQueueString("Dania"));

const checkParenthesis = (string) => {
  if (string === "") return false;
  if (string.length % 2 !== 0) return false;
  let stack = new Stack();
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(string[i]);
      count++;
    } else if (string[i] === ")") {
      count--;
      stack.pop();
    }
  }
  if (count < 0) return false;
  if (!stack.isEmpty()) return false;
  return true;
};
console.log(checkParenthesis("(())")); // true
console.log(checkParenthesis("((())")); // false
console.log(checkParenthesis(")(())")); // false
console.log(checkParenthesis("()))")); // false
console.log(checkParenthesis("()()")); // true
