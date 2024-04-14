//--------Variables--------------------
let name = 'Tim';
console.log(name);

// Names of variables
// Cannot be a reserved keywords: if, else, let, var etc.
// Should be meaningful: a1, x etc.
// Cannot start with a number: 1name
// Cannot contain a space or hyphen: -
// Are case-sensitive

let firstName = 'Tim'; //Camel Notation
let lastName = 'Smith';

//-------------Constants-------------
const interestRate = 0.3;
// interestRate = 1; // we cannon reassign 
console.log(interestRate);

//---------Primitive Types------------
let fullName = 'Tim Smith'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let size = undefined;
let selectedColor = null;

//-------Objects-------------
// Curly braces are called Object Literal
// Between curly braces we add 1 or more key value pairs
// Keys are called properties of the object
let person = {
    name: 'Tim',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';

console.log(person);

//--------Arrays--------------
// Square brackets are called Array Literal
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);