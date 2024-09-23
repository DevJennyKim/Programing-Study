'use strict';
let num = 10;
if (num > 100) {
  console.log('this is true');
} else {
  console.log('this is false');
}
//let score = prompt('Enter the score');
let score = 60;
console.log('score: ', score);

if (score >= 90) {
  console.log('you are A');
} else if (score >= 80) {
  console.log('you are B');
} else if (score >= 70) {
  console.log('you are C');
} else if (score >= 60) {
  console.log('you are D');
} else {
  console.log('you are F');
}
//undefined, null, 0, Nan, -0, 0n, "" ==> false
let condition = 0;
if (condition) {
  console.log('This is true');
} else {
  console.log('This is false');
}
