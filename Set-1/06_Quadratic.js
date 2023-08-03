// Program to solve quadratic equations

// The standard form of a quadratic equation is
// ax^2 + bx + c = 0, where a, b and c are real numbers and a != 0

// to find the roots of such equations
// (root1,root2) = (-b ± √b2-4ac)/2

// Program to solve quadratic equations
let root1, root2;

// take input from the user
let a = prompt('Enter the first number: ');
let b = prompt('Enter the second number: ');
let c = prompt('Enter the third number: ');

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  // result
  console.log(`The roots quadratoc equations are ${root1} and ${root2}`);
} else if (discriminant === 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`The roots of quadratoc equations are ${root1} and ${root2}`);
} else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (math.sqrt(-discriminant) / (2 * a)).toFixed(2);

  console.log(
    `The roots of quadratoc equations are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
