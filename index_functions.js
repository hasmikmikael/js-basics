//--------Function Declarations vs Expressions-------

// Function Declaration
function walk() {
    console.log('walk');
}

// Named Function Expression
const jog = function jog() {
    console.log('jog');
};

// Anonymous Function Expression
const run = function() {
    console.log('run');
};

let move = run;
run(); // run
move(); // run


//----------Hoisting-------------
// Hoisting is a process of moving 
// function declaration to the top of the file.

// we can call a function that is defined using
// the function declaration syntax before it's definition.

// Function Declaration
walk();

function walk() {
    console.log('walk');
}

// // Function Expression
// // we can't write like this we will get an error
// run();

// const run = function() {
//     console.log('run');
// };

// // we should write like this
// const run = function() {
//     console.log('run');
// };

// run();