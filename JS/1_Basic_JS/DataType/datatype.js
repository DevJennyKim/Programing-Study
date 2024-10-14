//=======================
//Number
//=======================
let number = 2;
const number2 = 1.2;
console.log(number2);
console.log(5 / 0);
console.log(-5 / 0);
let nan = 'hello' / 5;
console.log(nan);
console.log(typeof nan);

//=======================
//String
//=======================

const name = 'Jen';
const age = '25';

console.log('Hello, my name is ' + name + '. I am' + age + ' years old');
console.log('==========================================================');
console.log(`$ ==> Hello,my name is ${name}. I am${age} years old`);
console.log('==========================================================');
const message = `Hello

This is possible`;
console.log(message);

//Explicit Coercion
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); //print ==> string 25
let test = age + '';
console.log(typeof test, test); // print ==> string 25

console.log('98' + 2); //982
console.log('98' * 2); //196 ==> because there is no * in string
console.log('98' - 2); //196 ==> because there is no - in string
//better no to use like that ^

//Implicit Coercion
console.log(typeof (99).toString()); //print 99
console.log(typeof true.toString()); //print true
console.log(typeof Infinity.toString()); //print Infinity

//change type to num
console.log(typeof parseInt('0'), parseInt('0')); //정수
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //=> parseInt로는 실수를 다룰수없음
console.log(typeof +'1', +'1');

//=======================
//boolean
//=======================
const isProgramer = true;
const isDesign = false;

console.log('isProgramer:', typeof isProgramer);
console.log('isDesign:', typeof isDesign);

if (isProgramer) {
  console.log('I am programer');
} else {
  console.log('I am designer');
}

// type change to boolean
console.log(!!'x'); //true, if there is any value it is true by boolean
console.log(!!''); //false
console.log(!!0); //false because it is 0
console.log(!!'0'); //true because there is value.
console.log(!!false); //false
console.log(!!'false'); //true, because there is value.
console.log(!!undefined); //false
console.log(!!null); //false
console.log(!!{}); // object is true, even there is no value inside
confirm.log(!![]); //array is true, even there is no value inside

//=======================
//Object type - Array
//=======================
//Array literal syntax =>most
const fruits = ['apple', 'banana', 'blueberry'];
//Array constructor syntax
const fruits2 = new Array('apple', 'banana', 'blueberry');

//index start from 0
console.log('fruits: ', fruits);
console.log(fruits[0]); //apple
fruits[2] = 'strawberry';
console.log('fruits: ', fruits);
console.log('fruits: ', fruits.length);
console.log('last value: ', fruits[fruits.length - 1]);
//if there is no -1, the value is going to be 'undefined'

//push() => add the value to the last
fruits.push('orange');
console.log(fruits);
//forEach
fruits.forEach(function (item, index) {
  console.log(index, item);
});
//pop() remove the value from the end
fruits.pop();
let removedItem = fruits.pop();
console.log('removedItem:', removedItem);
console.log('removed : ', fruits);

//unshift() => add the value to the first
fruits.unshift('grape');
console.log(fruits);

//indexOf() =>search the value and get the number of the array
const index = fruits.indexOf('apple');
console.log('index: ', index);
// ==> if there is a no value in the Array?
const index2 = fruits.indexOf('tomato');
console.log('index: ', index2); //=>-1

//splice()
fruits.splice(1, 2); //=> I want to remove from Array[1] to [2]
console.log(fruits);

//Destructuring assignment
const fruits1 = ['apple', 'banana', 'blueberry'];
const [apple, ...others] = fruits1;
console.log(apple); // apple
console.log(others); // ['banana', 'blueberry']

//Rest parameters => infinity expansion array, "...array" is array in the parameter
function printFruits(...fruits) {
  console.log('fruits: ', fruits);
}
function printTitleAndFruits(title, ...fruits) {
  console.log('title:', title);
  console.log('fruits: ', fruits);
}
printFruits('apple', 'banana', 'blueberry');
printFruits('apple', 'banana', 'blueberry', 'grape');
printTitleAndFruits('apple', 'banana', 'blueberry', 'grape');
