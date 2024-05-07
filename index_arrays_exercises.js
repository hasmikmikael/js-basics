// Exercise 1: Array from Range
const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
   return output;
}

// Exercise 2: Includes
const nmbrs = [1, 2, 3, 4];

console.log(includes(nmbrs, 3));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}

// Exercise 3: Except
const nmbs = [1, 2, 3, 4, 1, 1];

const otpt = except(nmbs, [1, 2]);

console.log(otpt);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element);  
  return output;
}