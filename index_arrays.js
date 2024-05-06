//--------Adding Elements---------
const numbers = [3, 4];
// numbers = []; // ERROR as numbers is const

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);


//-------Finding Elements (Primitives)---------
const num = [1, 2, 3, 1, 4];

console.log(num.indexOf('a')); // -1
console.log(num.indexOf(1)); // 0
console.log(num.indexOf(1, 2)); // 3
console.log(num.lastIndexOf(1)); // 3

console.log(num.indexOf(1) !== -1); // this is an old approach // true
console.log(num.includes(1)); // this is a new approach // true


//-------Finding Elements (Objects)---------
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

console.log(courses.includes({ id: 1, name: 'a' })); // false

const course = courses.find(function(course) {
    return course.name === 'a'; // { id: 1, name: 'a' }
    // return course.name === 'xyz'; // undefined
});

console.log(course);

const crse = courses.findIndex(function(course) {
    return course.name === 'a'; // 0
    // return course.name === 'xyz'; // -1
});

console.log(crse);

//---------Arrow Functions----------
const crs = courses.find(course => course.name === 'a');
console.log(crs); // { id: 1, name: 'a' }


//----------Removing Elements-----------
const numb = [1, 2, 3, 4];

// Middle
numb.splice(2, 1);
console.log(numb); // [1, 2, 4]

// End
const last = numb.pop();
console.log(last); // 4
console.log(numb); // [1, 2]

// Beginning
const first = numb.shift();
console.log(first); // 1
console.log(numb); // [2]

