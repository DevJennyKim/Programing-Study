//Object is like a container. when use object use{}
//Object has a key and value.

//object literal syntax
const person = {
  name: 'Jen', //name is key Jen is value
  age: 30,
};

//object constructor syntax
const obj = new Object();
obj.name = 'Jen';
obj.age = 30;
console.log(obj);

//dot notation : object.key
//bracket notation : object['key']

//create properties
const person2 = {};
person.name = 'Jen';
person.age = 25;

person2['hobby'] = 'cooking';
person2['hello'] = function () {
  alert('Hello!');
};

//delete properties
const person3 = {};
person3.name = 'Jen';
person3.age = 20;

delete person3.name;

//Passing an object as a parameter to a function.
//before
function printPerson(name, age, hobby) {
  console.log(
    `my name is ${name}, I am ${age}years old. I like to do ${hobby}.`
  );
}
printPerson('Jenny', 40, 'cooking');

//after : By passing an object as a parameter to a function, we can make the code cleaner and more convenient.

// function printPerson(person4) {
//   console.log(
//     `my name is ${person4.name}, I am ${person4.age}years old. I like to do ${person4.hobby}.`
//   );
// }

const person4 = {
  name: 'Jenny',
  age: 40,
  hobby: 'cooking',
};
printPerson(person4);

//============================
//factory function
//============================

function createPerson(name, age, hobby) {
  return {
    name: name,
    age: age,
    hobby: hobby,
  };
}
const person1 = createPerson('Jen', 10, 'Cooking');
const person2 = createPerson('Kim', 20, 'Eating');
const person3 = createPerson('Hanna', 30, 'Study');
const person5 = createPerson('Emily', 40, 'Reading');
const person6 = createPerson('Kong', 50, 'Shopping');
const person7 = createPerson('Kil', 60, 'Exercise');
printPerson(person1);
printPerson(person2);
printPerson(person3);
printPerson(person4);

//=====================================
//Call By Value vs Call By Reference
//=====================================
//"Call By Value" assigns the value itself to username,
//so changing the value of username does not change name outside the function.
//In other words, the value is copied!
let username = 'Jen';
console.log(username);
changeName(username);
console.log(username); // result : Jen

function changeName(name) {
  name = 'Kong';
  console.log(name); // result : Kong
}

//---------------
//"Call By Reference" assigns the reference value that points to the value rather than the value itself to people,
//so people and person point to the same value. Therefore, when the value is changed using people.name,
//it can be seen that person.name also points to the same value, resulting in both values being changed together.

let person = {
  name: 'Jen',
  age: 45,
};
console.log(person); // result => name: 'Jen', age: 45
changePersonName(person);
console.log(person); //result => name: 'Kong', age: 60
function changePersonName(person) {
  person.name = 'Kong';
  person.age = 60;
}

//too... hard....difficult........

//=================================================
//Spread operator
//=================================================
//object
let obj = {
  name: 'Jen',
  age: 20,
};
let person = {
  ...obj, // "... notation "
  hobby: 'Cooking',
};
console.log('person: ', person);
// [result]
// person:  {name: 'Jen', age: 20, hobby: 'Cooking'}

//arr
let arr = [1, 'two', 3, 'four'];
let numberArr = [...arr, 5, 'six'];
console.log('numberArr: ', numberArr);
// [result]
// numberArr:  (6) [1, 'two', 3, 'four', 5, 'six']

//======================================================
//object copy
//======================================================
// //Spread operator
// const person8 = {
//   name: 'Jen',
//   age: 25,
// };
// let person9 = { ...person8 };
// person9.name = 'Kong'; // even it used const, the person9 has person8's address so the value could change.
// console.log(person8);
// console.log(person8);

//Object.assign()
const person8 = {
  name: 'Jen',
  age: 25,
};
let person9 = Object.assign({}, person8);
person9.name = 'Kong'; // even it used const, the person9 has person8's address so the value could change.
console.log(person8);
console.log(person9);
