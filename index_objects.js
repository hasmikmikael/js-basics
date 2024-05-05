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