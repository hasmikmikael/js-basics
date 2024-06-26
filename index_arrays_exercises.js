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

// Exercise 4: Moving an Element
const numbersM = [1, 2, 3, 4];

const outputM = move(numbersM, 1, 1);

console.log(outputM);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
      console.log('Invalid offset.');
      return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

// Exercise 5: Count Occurrences
const numbersC = [1, 2, 3, 4, 1];

const count = countOccurrences(numbersC, 1);

console.log(count);

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let element of array)
//     if (element === searchElement)
//       count++;
//   return count;
// }

// The same logic with the reduce() method
function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {  
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}

// Exercise 6: Get Max
const numbersGM = [1, 2, 3, 4];

const max = getMax(numbersGM);

console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   let max = array[0];
//   for (let i = 1; i < array.length; i++)
//     if (array[i] > max)
//       max = array[i];

//   return max;     
// }

// The same logic with the reduce() method
function getMax(array) {
    if (array.length === 0) return undefined;
  
    return array.reduce((a, b) => (a > b) ? a : b);    
  }

// Exercise 7: Movies

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];
 
const titles = movies
  .filter(m => m.year === 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);