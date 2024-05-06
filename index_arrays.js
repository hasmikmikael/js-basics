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