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

//------Emptying an Array----------
let nmb = [1, 2, 3, 4];
let another = nmb;

// Solution 1 // this is good if we don't have multiple references
nmb = [];

console.log(nmb); // []
console.log(another); // [1, 2, 3, 4]

// Solution 2 // the best solution
nmb.length = 0;

console.log(nmb); // []
console.log(another); // []

// Solution 3 // a little bit noisy solution
nmb.splice(0, nmb.length);

console.log(nmb); // []
console.log(another); // []

// Solution 4 // this will make performance issue
while (nmb.length > 0)
    nmb.pop();

console.log(nmb); // []
console.log(another); // []


//----------Combining and Slicing Arrays-------------
// Primitive types
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combined = firstArray.concat(secondArray);

const slice = combined.slice(2, 4);
// const slice = combined.slice(2); // [3, 4, 5, 6]
// const slice = combined.slice(); // [1, 2, 3, 4, 5, 6]

console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(slice); // [3, 4]

// Reference types
const thirdArray = [{ id: 1}];
const combine = thirdArray.concat(secondArray);
combine[0].id = 10;
console.log(combine);


//------The Spread Operator----------
const firstA = [1, 2, 3];
const secondA = [4, 5, 6];

//const combinedA = firstA.concat(secondA);
const combinedA = [...firstA, ...secondA];
//const combinedA = [...firstA, 'a', ...secondA, 'b'];
console.log(combinedA); // [1, 2, 3, 4, 5, 6]

//const copy = combinedA.slice();
const copy = [...combinedA];
console.log(copy); // [1, 2, 3, 4, 5, 6]


//------Iterating an Array------------
const nmbs = [1, 2, 3];

for (let nmb of nmbs)
    console.log(nmb); // 1 \n 2 \n 3

nmbs.forEach(function(nmb) {
    console.log(nmb); // 1 \n 2 \n 3
});

nmbs.forEach(nmb => console.log(nmb)); // 1 \n 2 \n 3
nmbs.forEach((nmb, index) => console.log(index, nmb)); // 0 1 \n 1 2 \n 2 3


// --------Joining Arrays---------------
const nmbrs = [1, 2, 3];
const joined = nmbrs.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

// we use this technick when we're building a URL slag
const combinedJ = parts.join('-');
console.log(combinedJ);

//-----------Sorting Arrays--------------
const numbersS = [2, 3, 1];
numbersS.sort();
console.log(numbersS);

numbersS.reverse();
console.log(numbersS);


const coursesS = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javascript' },
];

coursesS.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(coursesS);

//-------Testing the Elements of an Array----------
const numbersT = [1, -1, 2, 3];

const allPositive = numbersT.every(function(value) {
    return value >= 0;
});

console.log(allPositive); // false

const atLeastOnePositive = numbersT.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive); // true


//----------Filtering an Array-----------
const numbersF = [1, -1, 2, 3];

// const filtered = numbersF.filter(function(value) {
//     return value >= 0;
// });

const filtered = numbersF.filter(n => n >= 0);

console.log(filtered); // [1, 2, 3]

//-------Mapping an Array--------------
const numbersM = [1, -1, 2, 3];

const filteredM = numbersM.filter(n => n >= 0);

const items = filteredM.map(n => '<li>' + n + '</li>');
console.log(items); //  ['<li>1</li>', '<li>2</li>', '<li>3</li>']

const html = '<ul>' + items.join('') + '</ul>';
console.log(html); // <ul><li>1</li><li>2</li><li>3</li></ul>


// const items1 = filteredM.map(n => {
//     const obj = { value: n };
//     return obj;
// }); // or

const items1 = filteredM.map(n => ({ value: n }));
console.log(items1); // [ {value: 1}, {value: 2}, {value: 3}]

// chaining methods filter() and map()
const items2 = numbersM
    .filter(n => n >= 0)
    .map(n => ({ value: n }));
console.log(items2); // [ {value: 1}, {value: 2}, {value: 3}]

const items3 = numbersM
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value); 
console.log(items3); // [2, 3]


//---------Reducing an Array---------------
const numbersR = [1, -1, 2, 3];

// this is old approach
// let sum = 0;
// for (let n of numbersR)
//     sum += n;

// this is new approach
// // a = 0, c = 1 => a = 1
// // a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5
// const sum = numbersR.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numbersR.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);