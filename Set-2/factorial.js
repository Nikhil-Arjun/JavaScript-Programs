// factorial of a positive number ->
// factorial of n (n!) = 1 * 2 * 3 *4 ....n

// fact of -ve => not exist
// fact of 0 is 1.

// Program to find the factorial of a number

const number = 5;

if (number < 0) {
  console.log('Number is negative, try positive number');
} else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
} else {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}`);
}
