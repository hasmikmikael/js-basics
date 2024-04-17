// Exercise 1: Write a function that takes two numbers
// and returns the maximum of the two.

let number = max(10, 10);
console.log(number);

function max(number1, number2) {
    // if (number1 > number2) return number1;
    // return number2;

    return number1 > number2 ? number1 : number2;
}

// Exercise 2: Write a function that takes 2 parameters
// width and height of an image and returns true if the image
// is landscape (width > height) otherwise it returs false.

console.log(isLandscape(800, 600));

function isLandscape(width, height) {
    return (width > height);
}

// Exercise 3: FizzBuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
      return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0)) 
      return 'FizzBuzz';

    if (input % 3 === 0) 
      return 'Fizz';

    if (input % 5 === 0) 
      return 'Buzz';  
    
    return input;
}