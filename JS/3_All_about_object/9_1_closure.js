/**
 * Closure
 *
 * A closure is the combination of a function and the lexical
 * environment within which that function was declared.
 *
 * "A closure occurs when a lower function lives longer than the upper function."
 */
function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) Data caching
 */
function cacheFunction() {
  // Assuming that the calculation below takes a long time
  var number = 10 * 10;

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }

  return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }

  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) Information hiding
 */
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `Hello, I am ${this.name}. I was born in ${_year}.`;
  };
}

const yuJin = new Idol('Yujin', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year);
