// JavaScript program to swap two numbers

// take input from the users
// let var_a = prompt('Enter a first variable: ');
// let var_b = prompt('Enter a second variable: ');

let var_a = 5;
let var_b = 10;

// create a temporary variable

let temp_var;

// swap variables
// temp_var = var_a;
// var_a = var_b;
// var_b = temp_var;

// ES6 Destructuring assignment
[var_a, var_b] = [var_b, var_a];

console.log(`The value of var_a after swapping: ${var_a}`);
console.log(`The value of var_b after swapping: ${var_b}`);
