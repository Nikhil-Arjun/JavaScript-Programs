// Program to check if a number is prime or not.

// input from the user
// const number = parseInt(prompt('Enter a positive number: '));
const number = 25;
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log(`! is neither prime nor composite number.`);
} //looping through 2 to number-1
else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is prime number.`);
  } else {
    console.log(`${number} is not prime number`);
  }
}

// check if number is less than 1.
else {
  console.log(`The number is not a prime number.`);
}
