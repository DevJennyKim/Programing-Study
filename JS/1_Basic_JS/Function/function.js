//======================================================================
//function declaration: Function declarations are hoisted,
//meaning you can call the function before it is defined.
//======================================================================
sayHello(); // it works. because of hoisting.

function sayHello() {
  console.log('print name and age');
  console.log('name: Jen, age:30');
}

//=======================================================================
//Function expression: Function expressions are not hoisted.
//Calling the function before it is defined will result in an error.
//=======================================================================
const sayHello = function () {
  console.log('print name and age');
  console.log('name: Jen, age:30');
};

//=======================================================================
//Function Scope
//-Global Scope: Variables and functions declared at the top level.
//-Block Scope: Variables and functions declared within a block.
//-A child can access the properties of its parent.
//=======================================================================
function aFunc() {
  let name = 'Jen';
  let age = 20;
  function bFunc() {
    let job = 'Student';
    console.log('name: ', name);
    console.log('age: ', age);
    console.log('job: ', job);
  }
  bFunc();
  console.log('name: ', name);
  console.log('age: ', age);
  console.log('job: ', job);
}
aFunc();

//=======================================================================
//Arrow Function : when there is only one parameter,
//it is possible to omit the () and also if the command is also only one,
//it is possible to omit the {} as well.
//=======================================================================
const hello = (name) => {
  console.log(`Hello ${name}`);
};
hello();

// ex)
//const hello = name => console.log(`Hello ${name}`);
//hello(Jen);

//const a1 = function() { return "hello"; }
// or
const a1 = () => 'hello';

//const a2 = function(name) { return `Hello, ${name}`; }
// or
const a2 = (name) => `Hello, ${name}`;

//const a3 = function(a, b) { return a + b; }
// or
const a3 = (a, b) => a + b;

//==============================================================
//Call Back Function : A function that is called again is
//referred to as a callback function. The term "callback function"
//does not have a special meaning in JavaScript;
//it is simply a regular JavaScript function.
//==============================================================

// let fruits = ['apple', 'banana', 'grape'];
// fruits.forEach(function (item, index) {
//   console.log('item: ', item);
// });

//or
// let fruits = ['apple', 'banana', 'grape'];
// fruits.forEach(printItem);

// function printItem(item, index) {
//   console.log('item: ', item);
// }

//or
let fruits = ['apple', 'banana', 'grape'];
fruits.forEach((item, index) => {
  console.log('item: ', item);
});

//Function Naming Conventions
//Function → Use verbs!
//Variable → Use nouns!

/**
 * 만약에 2라는 숫자에 *10/2%3 스트링으로 변환해서 반환받고싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString()); // print ==> 1
//but if I want to change the first num with out function?
console.log((((3 * 10) / 2) % 3).toString());
//not really good ^
/** D R Y
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate(num) {
  console.log((((num * 10) / 2) % 3).toString());
}
calculate(3);

const multiplyAll = function (...arguments) {
  console.log(argument);
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));
