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


// Exercise 2: Area of Circle

const circle = {
    radius: 1,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);


// Exercise 3: Error Handling
try {
    const numbers = [1, 2, 3, 4, 1];
    //const count = countOccurrences(null, 1);
    //const count = countOccurrences(true, 1);
    const count = countOccurrences(numbers, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
      throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {  
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}