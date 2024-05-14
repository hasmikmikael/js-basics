// Exercise 1: Sum of Arguments

// sum(1, 2, 3, 4) => 10
// sum([1,2, 3, 4]) => 10

// console.log(sum(1, 2, 3, 4));

// function sum(...items) {
//     return items.reduce((a, b) => a + b);
// }

console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4]));

function sum(...items) {
    // console.log(items);

    if (items.length === 1 && Array.isArray(items[0]))
      items = [...items[0]];

    return items.reduce((a, b) => a + b);
}