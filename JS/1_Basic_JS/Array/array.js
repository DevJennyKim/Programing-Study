/**
 * Array functions
 */
let fruits = [
  'apple',
  'banana',
  'orange',
  'grapes',
  'strawberry',
  'mango',
  'pineapple',
];
console.log(fruits);

console.log('-------------');
fruits.push('lemon');
console.log(fruits);

console.log('-------------');
console.log(fruits.pop());
console.log(fruits);

console.log('-------------');
console.log(fruits.shift());
console.log(fruits);

console.log('-------------');
console.log(fruits.unshift('apple'));
console.log(fruits);

console.log('-------------');
console.log(fruits.splice(0, 3));
console.log(fruits);

//^ It’s better to avoid using this method.
// This is because it modifies the existing array.

//=====================================================================

fruits = [
  'apple',
  'banana',
  'orange',
  'grapes',
  'strawberry',
  'mango',
  'pineapple',
];

console.log(fruits.concat('lemon'));
console.log(fruits); // no change

console.log('-------------');

console.log(fruits.slice(0, 3));
console.log(fruits); // no change

console.log('-------------');

// spread operator
let fruits2 = [...fruits]; // spread syntax to create a shallow copy
console.log(fruits2); // correctly copied

console.log('-------------');

let fruits3 = [fruits]; // without spread
console.log(fruits3); // array within an array

console.log('-------------');

let fruits4 = fruits;
console.log(fruits4);
console.log(fruits === fruits4);

console.log('-------------');
// console.log([...fruits] === fruits); // different memory reference due to spread syntax

//-----------------------------------------
// Commonly used in practice
//-----------------------------------------
console.log(fruits.join()); // returns a string with comma as separator
console.log(fruits.join('/'));
console.log(fruits.join(', '));

console.log('-------------');
fruits.sort();
console.log(fruits); // ascending order sort

console.log('-------------');
console.log(fruits.reverse()); // descending order sort

let numbers = [1, 9, 7, 5, 3];

// When comparing a and b
// 1) To sort a after b, return a number greater than 0
// 2) To sort a before b, return a number less than 0
// 3) To leave a and b in the same order, return 0
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

console.log(fruits.map((x) => `fruit: ${x}`));

console.log(
  fruits.map((x) => {
    if (x === 'apple') {
      return `fruit: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(fruits);

numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => false)); // filters out all elements
console.log(numbers.filter((x) => true)); // keeps all elements
console.log(numbers.filter((x) => x % 2 === 0)); // filters even numbers

console.log('-------------');

console.log(numbers.find((x) => x % 2 === 0)); // finds the first even number

console.log(numbers.findIndex((x) => x % 2 === 0)); // finds the index of the first even number

console.log(numbers.reduce((p, n) => p + n, 0));
/** reduce()
 * 1. The initial value (0) is assigned to p.
 * 2. The first element of the numbers array (1) is assigned to n.
 * 3. The result of p + n, i.e., 0 + 1, is returned as 1.
 * 4. The returned value (1) is assigned to p.
 * 5. The second element of the array (8) is assigned to n.
 * 6. The result of p + n, i.e., 1 + 8, is returned as 9.
 * 7. The returned value (9) is assigned to p.
 * 8. This process continues until all elements in the array are processed, and finally returns the sum (25).
 */
