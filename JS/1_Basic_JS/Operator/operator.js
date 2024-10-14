//arithmetic operator
console.log('Hello ' + 'World!'); // print "Hello World!"
console.log('3' + 3); // print "33"
console.log('3' + 5 + 8); // print "358"
console.log(3 + 5 + '8'); // print "88"
//=========================================================
// increase/decrease operator
//++a increase in potential
//a++ will increment the value of a after its used once
//=========================================================
let x = 10;
let y = 20;
let result = ++x + 20 - 10 + y-- + 10;
console.log('result: ', result);
console.log('x: ', x);
console.log('y: ', y);
// [Result]
// result:  51
// x:  11
// y:  19
//=========================================================
// Comparison operator
//a === b => a and b are the same (compare the data and data types)
//a != b => a and b is not the same
//a !== b => a and b is not the same(compare the data and data types)
// recommend to use ===, !== when you work in the real industry
//=========================================================
const stringTwo = '2';
const numberTwo = 2;

// == loose equality
console.log(stringTwo == numberTwo); // true
console.log(stringTwo != numberTwo); // false

// === strick equality
console.log(stringTwo === numberTwo); // false
console.log(stringTwo !== numberTwo); // true

//----------------array-----------------
const arr1 = ['apple', 'banana'];
const arr2 = ['apple', 'banana'];

console.log('arr1 == arr2 : ', arr1 == arr2);

//----------------object-----------------
//obj1 and obj2 are two separate objects, even though they have the same property values (name: 'Jen').
//Each object is stored at a different location in memory, so their references are not the same.
const obj1 = { name: 'Jen' };
const obj2 = { name: 'Jen' };
console.log('obj1 == obj2 : ', obj1 == obj2); // false
console.log('obj1 === obj2 : ', obj1 === obj2); // false

//=========================================================
// Assignment Operator
// x = 3  =>> put 3 to x
// x += y =>> x = x + y
// x -= y =>> x = x - y
// x *= y =>> x = x * y
// x /= y =>> x = x / y
//=========================================================
let sum = 0;
for (let i = 1; i <= 10; i++) {
  //sum = sum + i; // same result with sum+=i
  sum = sum += i;
  console.log(`${i} sum=${sum}`);
}
//==================================================================================================================
// logical operator
// x && y (AND) : True if all operands are true; otherwise, false.
// x || y (OR) : If at least one of the operands is true, then it is true; it is false only when both are false.
// !x (NOT) : The NOT (!) operator inverses the operand.
//==================================================================================================================

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');
btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  if (email === '' || email.includes('@') === false) {
    console.log('This is not a valid email. Please enter the correct email');
  } else if (!password) {
    console.log('Please enter the password');
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    console.log('The password must be between 8 and 16 characters long');
  } else {
    console.log('login succeed');
  }
});
//TIP==================
// if there is a function to check the validateEmail from the DB
// function validateEmail(email){
// takes 5min to process
// return true;}
// if I change the order like the under,
// if (email.includes('@') || email === '' === false)
// it is going to carry out the first one which taking 5 min.
// it means, It is inefficient.
// so, When performing logical operations, if there is a complex logic, it is more efficient to execute the faster calculations first.

// About Password check
// null and undefine does not have length. so should check it is not null and undefine first before check the validate the password.

//=========================================================
// AND(&&) ==> Return true only if all are true.
//=========================================================
let a1 = true && true; // t && t returns true
let a2 = true && false; // t && f returns false
let a3 = false && true; // f && t returns false
let a4 = false && 3 == 4; // f && f returns false
let a5 = 'Cat' && 'Dog'; // t && t returns Dog
let a6 = false && 'Cat'; // f && t returns false
let a7 = 'Cat' && false; // t && f returns false
//=========================================================
// OR(||) ==>Return true only if even one is true.
//=========================================================
let o1 = true || true; // t || t returns true
let o2 = false || true; // f || t returns true
let o3 = true || false; // t || f returns true
let o4 = false || 3 == 4; // f || f returns false
let o5 = 'Cat' || 'Dog'; // t || t returns Cat
let o6 = false || 'Cat'; // f || t returns Cat
let o7 = 'Cat' || false; // t || f returns Cat

//=========================================================
// Short circuit evaluation
// When using &&, if the left side is true, return the value of the right side.
// When using &&, if the left side is false, return the left side's value.
// When using ||, if the left side is true, return the left side's value.
// When using ||, if the left side is false, return the value of the right side.
//=========================================================

console.log(true || 'Dog'); //==> true
console.log(false || 'Dog'); //==> Dog
console.log(false && 'Dog'); //==> false
console.log(true && 'Dog'); //==> Dog

console.log(true && true && 'Dog'); //=>Dog.
//As for comparison, true && true evaluates to the right side. When examining the right side, it is true && dog, so it returns 'dog'."
console.log(true && false && 'Dog'); //=>false

//=========================================================
// NOT(!)
//=========================================================
let n1 = !true; // !t returns false
let n2 = !false; // !f returns true
let n3 = !'Cat'; // !t returns false

//===================================================================
// Ternary Operator  ==> condition ? value_if_true : value_if_false;
//===================================================================

let number = 7;
// let message = null;
// if (number % 2 === 1) {
//   message = 'it is odd';
// } else {
//   message = 'it is even';
// }

//If we implement the above code using the ternary operator, it would look like this:
let message = number % 2 === 1 ? 'it is odd' : 'it is even';
console.log(message);

console.log(10 > 0 ? '10 is higher than 0' : '10 is less than 0');
// if the value is true  =>'10 is higher than 0'
//if the value is false => '10 is less than 0'

//===================================================================
// Exponentiation Operator : 지수연산자 2의 몇승몇승,,,
//===================================================================

console.log(2 ** 2); //=>2의 2승

//===================================================================
// Null operator
//===================================================================

let name;
console.log(name); //undefined
name = name ?? 'Cat'; //Return the right value when the left value is null or undefined.
console.log(name); //name was undefined so, return the cat and put it in to name so the value is cat
name = name ?? 'dog'; // it is same ==> name ??= 'dog'
console.log(name); //cat. as the name was not undefined

//tip!!==============================================================
// API Response Handling
// It is used to set default values when data returned from an API is missing.
// const data = response.data ?? defaultData; => Use defaultData if the API response is absent

// Debugging and Logging
// You can set conditions to log values only when they are not null or undefined
// debugMode && console.log(debugInfo); ==> Log debugInfo only if debugMode is true

// Frameworks like React and Vue.js
// These operators help manage state and render logic more concisely within components.
// const displayName = user.name ?? 'Anonymous'; ==> Use 'Anonymous' if the user name is not available
