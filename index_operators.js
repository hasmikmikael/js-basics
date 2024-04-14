//-----------Arithmetic Operators--------------
let x = 10;
let y = 3;
let z = 5;
let k = 7;

console.log(x + y); // Addition Operator
console.log(x - y); // Subtraction Operator
console.log(x * y); // Multiplication Operator
console.log(x / y); // Division Operator
console.log(x % y); // Remainder of Division
console.log(x ** y); // Exponentiation Operator (x to the power of y)

// Increment Operator (++)
console.log(++x); // 11
console.log(y++); // 3
console.log(y); // 4

// Decrement Operator (--)
console.log(z--); // 5
console.log(z); // 4
console.log(--k); // 6

//------------Assignment Operators----------
let a = 10; // Assignment Operator

// a++; or a = a + 1;

a += 5; // Addition Assignment Operator // a = a + 5;
a *= 3; // Multiplication Assignment Operator // a = a * 3;
// and so on

//---------Comparison Operators-----------
let b = 1;

// Relational Operators
console.log(b > 0); // b is greater than 0 // Greater Than Operator
console.log(b >= 1); // Greater Than or Equal To Operator
console.log(b < 1); // Less Than Operator
console.log(b <= 1); // Less Than or Equal To Operator

// Equality Operator
console.log(b === 1); // b is equal to 1
console.log(b !== 1); // b is not equal to 

//---------Equality Operators----------
// Strict Equality (Type + Value)
console.log(1 === 1); // true
console.log('1' === 1); // false

// Lose Equality (Value)
console.log(1 == 1); // true
console.log('1' == 1); // true
console.log(true == 1); // true