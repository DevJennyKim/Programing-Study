// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let fruits = ['apple', 'pear', 'grape', 'orange', 'banana'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

let person = {
  name: 'Jen',
  age: 25,
  job: 'developer',
};
// let key = prompt('what do you want to know?');
// console.log(person[key]);

let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);
}

//==============================
//for in
//==============================

for (let key in person) {
  // console.log(key);
  console.log(person[key]);
}

const array = ['a', 'b', 'c', 'd'];
for (let key in array) {
  console.log(key); //return index of the array like a 1,2,3,4
  console.log(`${key}: ${array}`); //return index ++ : a - d
}

//==============================
//for of => what is in arr => popular then while
//==============================
let fruits = ['apple', 'pear', 'grape', 'orange', 'banana'];
for (let fruit of fruits) {
  console.log(fruit); //return value.. like a apple,,,pear,,,
}
