// Exercise 1: Write a function that takes two numbers
// and returns the maximum of the two.

let number = max(10, 10);
console.log(number);

function max(number1, number2) {
    // if (number1 > number2) return number1;
    // return number2;

    return number1 > number2 ? number1 : number2;
}