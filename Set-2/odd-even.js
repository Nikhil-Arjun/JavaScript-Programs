// Program to check if a number is odd or even.

// Even numbers = exactly divisible by 2
// otherwise, number is odd.

// input from the user: number
// const number = parseInt(prompt("Enter a number: "))

const number = 45;

// check if the number is even
if (number % 2 == 0) {
  console.log('The number is even: ', number);
} // if the number is odd
else {
  console.log('The number is odd: ', number);
}

// ternary operator
const result = number % 2 == 0 ? 'Even' : 'Odd';

console.log(`The number is ${result}`);
