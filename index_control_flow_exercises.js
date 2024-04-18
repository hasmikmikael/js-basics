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


// Exercise 4: Demerit Points

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(70);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
      console.log('Ok');
      return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
      console.log('License suspended');
    else
      console.log('Point: ' + points);
}

// Exercise 5: Even and Odd Numbers

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
      const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
      console.log(i, message);
    }
}

// Exercise 6: Count Truthy

const array = [null, undefined, 0, true, 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
      if (value)
        count++;
    return count;
}

// Exercise 7: String Properties

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
      if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
}

// Exercise 8: Sum of Multiples of 3 and 5

console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
      if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
        sum += i;
      }
    return sum;
}

// Exercise 9: Grade

const marks = [80, 80, 50];

// Average = 80 + 80 + 50 / 3 = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let mark of array)
    sum += mark;
  return sum / array.length;
}