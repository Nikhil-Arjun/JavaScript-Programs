// Multiplication table up to 10

// input from the user
// const number = parseInt(prompt(`Enter an integer: `));

const number = 8;
// creating a multiplication table

for (let i = 1; i <= 10; i++) {
  // multiply i with number
  const result = i * number;

  // display the result
  console.log(`${number} * ${i} = ${result}`);
}

/* Program ti generate a multiplication table upto a range */

// take number input from the user
// const number1 = parseInt(prompt(`Enter a number: `));
const number1 = 12;

// take range input from the user
// const range = parseInt(prompt(`Enter a range: `));
const range = 10;

for (let i = 1; i <= range; i++) {
  const result = i * number1;
  console.log(`${number1} * ${i} = ${result}`);
}
