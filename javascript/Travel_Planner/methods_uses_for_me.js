/*

1. for loop:

    Purpose: General iteration that gives you full control.
    How it works: It loops through an array, allowing you to perform any operation inside the loop.

2. filter():

    Purpose: To filter elements in an array based on a condition. It returns a new array containing only the elements that satisfy the condition.
    Example:

    javascript

    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4]

    How it works: It goes through each element, checks a condition, and keeps only the elements that pass.

3. map():

    Purpose: To transform each element in the array and return a new array with the transformed values.
    Example:

    javascript

    const numbers = [1, 2, 3];
    const squares = numbers.map(num => num * num);
    console.log(squares); // Output: [1, 4, 9]

    How it works: It goes through each element, applies a transformation, and returns a new array with the results.

4. reduce():

    Purpose: To reduce the entire array to a single value, like a sum, product, or even an object.
    Example:

    javascript

    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum); // Output: 10

    How it works: It iterates through the array, accumulating a value based on some operation, and returns a single result.

5. forEach():

    Purpose: To perform an action on each element of the array. It does not return anything; it's purely for executing side effects like logging or modifying something outside the loop.
    Example:

    javascript

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6

How it works: It goes through each element and performs some action, but doesn’t return a new array or value.
*/
