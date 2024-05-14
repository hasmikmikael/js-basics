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


//----------Default Parameters--------------
// function interest(principal, rate, years) {
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000, 3.5, 5)); //1750


// function interest(principal, rate, years) {
//     rate = rate || 3.5;
//     years = years || 5;

//     return principal * rate / 100 * years;
// }
// console.log(interest(10000)); //1750


// // from the ES6 we have a cleaner way
// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000));


// function interest(principal, rate = 3.5, years) {
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000)); // NaN
// console.log(interest(10000, 5)); // NaN
// // this one works but the code is ugly
// console.log(interest(10000, undefined, 5)); // 1750

// best practice
function interest(principal, years, rate = 3.5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 5));


//------Getters and Setters---------------
// const person = {
//     firstName: 'Tim',
//     lastName: 'Smith',
//     // fullName: function() {}, // this is an old approach
//     fullName() { // after ES6 this is the better approach
//         return `${person.firstName} ${person.lastName}`;
//     }
// };

// console.log(person.fullName()); // Tim Smith

const person = {
    firstName: 'Tim',
    lastName: 'Smith',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';
console.log(person); // {firstName: 'John', lastName: 'Smith'}


//--------Try and Catch----------------
const personE = {
    firstName: 'Tim',
    lastName: 'Smith',
    set fullName(value) {
      if (typeof value !== 'string')
        throw new Error('Value is not a string.');
    
      const parts = value.split(' ');
      if (parts.length !== 2)
        throw new Error('Enter a first and last name.');

      this.firstName = parts[0];
      this.lastName = parts[1];
    }
};

try {
    // personE.fullName = null; // Value is not a string.
    // personE.fullName = ''; // Enter a first and last name.
}
catch(e) {
    alert(e);
}


//-------Local vs Global Scope-------------
const color = 'red'; // this constant has global scope

function start() {
    const message = 'hi';
    // const color = 'blue';
    // console.log(color); //blue
    console.log(color); // red

    if (true) {
        const another = 'bye'; // this constant has local scope
    }

    // console.log(another); // we will get an error

    for (let i = 0; i < 5; i++) {
        console.log(i); // 0, 1, 2, 3, 4
    }

    // console.log(i); // we will get an error
}

function stop() {
    const message = 'bye';
}

start();


//---------Let vs Var-----------
// function start() {
//     for (let i = 0; i < 5; i++)
//       console.log(i);

//     console.log(i); // we will get an error
// }

// start();

function start() {
    for (var i = 0; i < 5; i++)
      console.log(i); // 0 1 2 3 4

    console.log(i); // 5
}

start();

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

var cr = 'red'; // window.cr // red
let age = 30; // window.age // undefined


//---------The 'this' keyword---------------

// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this); // {title: 'a', play: ƒ}
    }
};

video.play();

video.stop = function() {
    console.log(this); // {title: 'a', play: ƒ, stop: ƒ}
}

video.stop();

// regular function
function playVideo() {
    console.log(this); // we get a window object
}

playVideo();

// constructor function
function Video(title) {
    this.title = title;
    console.log(this); // Video {title: 'b'}
}

const v = new Video('b');

////////////////////////
const videoA = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    // showTags() {
    //     this.tags.forEach(function(tag) {
    //         console.log(this, tag); // undefined a, undefined b, undefined c
    //     }); // in this case this references window object
    // } // because it's inside of the callback function
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); // a a, a b, a c
        }, this);
    }
};

videoA.showTags();


//---------Changing the Value of 'this'------------
// 1st approach
const videoC = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag); // a a, a b, a c
        });
    }
};

videoC.showTags();

// /////////////
// function playVideo() {
//     console.log(this);
// }

// playVideo(); // this will references window object, we'll get the window object

// playVideo.call({ name: 'Tim' }); // {name: 'Tim'}
// playVideo.apply({ name: 'Tim' }); // {name: 'Tim'}

/////////////////
function playVideo(a, b) {
    console.log(this);
}

playVideo(); // this will references window object, we'll get the window object

playVideo.call({ name: 'Tim' }, 1, 2); // {name: 'Tim'}
playVideo.apply({ name: 'Tim' }, [1, 2]); // {name: 'Tim'}

const fn = playVideo.bind({ name: 'Tim' }); 
fn(); // {name: 'Tim'}

// we can write better way
playVideo.bind({ name: 'Tim' })(); // {name: 'Tim'}

// 2nd approach
const videoV = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); // a a, a b, a c
        }.bind(this));
    }
};

videoV.showTags();

// 3rd approach
const videoT = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag); // a a, a b, a c
        });
    }
};

videoT.showTags();