// program to print prime numbers between the two numbers.

// input from the user.
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const upperNumber = parseInt(prompt('Enter upper number: '));

const lowerNumber = 2;
const upperNumber = 45;

for (let i = lowerNumber; i < upperNumber; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
