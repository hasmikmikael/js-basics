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