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