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


//---------Arguments---------------
function sum(a, b) {
    return a + b; // 1 + undefined = NaN
}

console.log(sum(1, 2)); //3
console.log(sum(1)); //NaN
console.log(sum()); //NaN
console.log(sum(1, 2, 3, 4, 5)); //3

function sumArg() {
    let total = 0;
    for (let value of arguments)
      total += value;
    return total;
}

console.log(sumArg(1, 2, 3, 4, 5)); //15