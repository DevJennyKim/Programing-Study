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
// AND(&&)
//=========================================================
let a1 = true && true; // t && t returns true
let a2 = true && false; // t && f returns false
let a3 = false && true; // f && t returns false
let a4 = false && 3 == 4; // f && f returns false
let a5 = 'Cat' && 'Dog'; // t && t returns Dog
let a6 = false && 'Cat'; // f && t returns false
let a7 = 'Cat' && false; // t && f returns false
//=========================================================
// OR(||)
//=========================================================
let o1 = true || true; // t || t returns true
let o2 = false || true; // f || t returns true
let o3 = true || false; // t || f returns true
let o4 = false || 3 == 4; // f || f returns false
let o5 = 'Cat' || 'Dog'; // t || t returns Cat
let o6 = false || 'Cat'; // f || t returns Cat
let o7 = 'Cat' || false; // t || f returns Cat
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
