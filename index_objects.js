//---------Basics----------

// Object-oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); // Method

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

//----------Factory Functions-----------
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


//----------Constructor Functions----------
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const crc = new Circle(1);

//--------Dynamic Nature of Objects--------
const circ = {
    radius: 1
};

// circ = {};

circ.color = 'yellow';
circ.draw = function() {}

delete circ.color;
delete circ.draw;

console.log(circ);

//------Constructor Property----------
let x = {}; // we'll get // let x = new Object();

// built-in constructors in JavaScript
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

//---------Functions are Objects-----------
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

// // we can write the same like this
// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// `);

// const circle11 = new Circle1(1);

const another1 = new Circle(1);
// this is like the following
Circle.call({}, 1);
Circle.apply({}, [1]);

//-------Value vs Reference Types----------
let z = 10;
let y = z;

z = 20;

console.log(y); // 10
console.log(z); // 20


let m = { value: 10 };
let n = m;

m.value = 20;

console.log(m); // 20
console.log(n); // 20


let number = 10;

function increase(number) {
    number++;
}

increase(number); 
console.log(number); // 10


let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj); 
console.log(obj.value); // 11


//------Enumerating Properties of an Object--------
const circleProp = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circleProp)
    console.log(key, circle[key]);

// for (let key of circleProp)
//     console.log(key); // ERROR: circleProp is not iterable

for (let key of Object.keys(circleProp))
    console.log(key);

for (let entries of Object.entries(circleProp))
    console.log(entries);

// checking if an object has a given property or method
if ('radius' in circleProp) console.log('yes');


//-------Cloning an Object----------
// // this is old approach of cloning an object
// const anotherProp = {};
// for (let key in circleProp)
//     anotherProp[key] = circleProp[key];
//     // this is equivalent to anotherProp['radius'] = circlrProp['radius'];
// console.log(anotherProp);

// in modern JavaScript this is the better way
const anotherProp1 = Object.assign({}, circleProp);
console.log(anotherProp1);

const anotherProp2 = Object.assign({
    color: 'yellow'
}, circleProp);
console.log(anotherProp2);

// we can use the spread operator to clone an object and this is the best aproach
const anotherProp = { ...circleProp };
console.log(anotherProp);

//---------------Math----------
// Math.random();
// Math.round(1.9);
// Math.max(1, 2, 3, 4, 5);
// Math.min(1, 2, 3, 4, 5);

//--------String---------------
//String primitive
const message = 'This is my\n first message';

//String object
const anotherString = new String('hi');

// message.length;
// message[0];
// message.includes('my');
// message.startsWith('This');
// message.startsWith('this');
// message.endsWith('e');
// message.indexOf('my');
// message.replace('first', 'second');
// message.toUpperCase();
// message.trim();
// message.trimLeft();
// message.split(' ');

//---------Template Literals---------

// Object Literals {}
// Boolean Literals true, fals
// String Literals '', ""
// Template Literals ``

const anotherMessage = 
`This is my
'first' message`;

const name = 'John';
const emailMessage =
`Hi ${name},

Thank you for joining my mailing list.

Regards,
Mary`;