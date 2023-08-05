// Program to Find the largest among three numbers

// input from the user: number
// const num1 = parseInt(prompt('Enter 1st number: '));
// const num2 = parseInt(prompt('Enter 2nd number: '));
// const num3 = parseInt(prompt('Enter 3rd number: '));

const num1 = 3;
const num2 = 87;
const num3 = 9;

let largestNumber;

// Check the condition
if (num1 >= num2 && num1 >= num3) {
  largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largestNumber = num2;
} else {
  largestNumber = num3;
}

// display the result
console.log(`The largest number is ${largestNumber}`);

// using Math.max()

const largest = Math.max(num2, num2, num2);
console.log(`The largest number is ${largest}`);
