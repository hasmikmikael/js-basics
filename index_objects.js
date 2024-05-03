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