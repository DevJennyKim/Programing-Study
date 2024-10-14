/**
 * copy by value: passing by value
 * copy by reference: passing by reference
 *
 * 1) All primitive values are passed by value by default
 * 2) Objects are passed by reference
 */
let original = 'Hello';
let clone = original;

console.log(original);
console.log(clone);

clone += ' I am Jenny.';
console.log('--------------');
console.log(original);
console.log(clone);

let originalObj = {
  name: 'Jenny',
  group: 'Student',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------');

originalObj['group'] = 'Human';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
  name: 'Haeun Kim',
  group: 'Student',
};
cloneObj = {
  name: 'Haeun Kim',
  group: 'Student',
};
console.log(originalObj === cloneObj);

const yuJin1 = {
  name: 'Ahn Yujin',
  group: 'IVE',
};
const yuJin2 = yuJin1;
const yuJin3 = {
  name: 'Ahn Yujin',
  group: 'IVE',
};

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator
 */
const yuJin4 = {
  ...yuJin3, //if using spread operator==> copy by value because it is new so memory location is deferent.
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
  name: 'Jenny', //even I say name is Jenny,
  ...yuJin3, //spread operator is here so name is changed to yuJin3's name.
};
console.log(yuJin6);

const yuJin7 = {
  ...yuJin3,
  name: 'Jenny', //name is going to be Jenny!
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];
console.log(numbers2);
