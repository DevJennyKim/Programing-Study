'use strict';

//window.onload = function () {
/*
  - '*'      document.write('*');
  - new line document.write('<br>');
  - space    document.write('&nbsp;'); 
  - horizontal line document.write('<hr>');
   */
//
/*
    1] Square
    *****
    *****
    *****
    *****
    *****
  */

for (let a = 0; a < 5; a++) {
  for (let b = 0; b < 5; b++) {
    document.write('*');
  }
  document.write('<br>');
}

document.write('========================');
document.write('<br>');
/*
    2] Triangle 1
    *
    **
    ***
    ****
    *****
  */
for (let a = 0; a < 5; a++) {
  for (let b = 0; b <= a; b++) {
    document.write('*');
  }
  document.write('<br>');
}
document.write('========================');
document.write('<br>');
/*
    3] Triangle 1 - reverse
    *****
    ****
    ***
    **
    *
  */
for (let a = 5; a > 0; a--) {
  for (let b = 0; b < a; b++) {
    document.write('*');
  }
  document.write('<br>');
}
document.write('========================');
document.write('<br>');
/*
    4] Triangle 2
        *
       **
      ***
     ****
    *****
  */ document.write('5] Triangle 2');
document.write('<br>');
for (let a = 5; a > 0; a--) {
  for (let b = 1; b < a; b++) {
    document.write('&nbsp;'); //to make it looks good, added one more space
    document.write('&nbsp;');
  }
  for (let c = 5; c >= a; c--) {
    document.write('*');
  }
  document.write('<br>');
}
document.write('========================');
document.write('<br>');
/*
    5] Triangle 2 - reverse
    *****
     ****
      ***
       **
        *
  */
document.write('5] Triangle 2 - reverse');
document.write('<br>');
for (let a = 0; a < 5; a++) {
  for (let b = 1; b <= a; b++) {
    document.write('&nbsp;');
    document.write('&nbsp;'); //to make it looks good, added one more space
  }
  for (let c = 5; c > a; c--) {
    document.write('*');
  }
  document.write('<br>');
}
document.write('========================');
document.write('<br>');
/*
    6] Equilateral Triangle
        *
       ***
      *****
     ******* 
    ********* 
  */
for (let a = 10; a > 0; a--) {
  for (let b = 2; b < a; b++) {
    document.write('&nbsp;'); //to make it looks good, added one more space
    document.write('&nbsp;');
    b++;
  }
  for (let c = 11; c > a; c--) {
    document.write('*');
  }
  document.write('<br>');
  a--;
}
document.write('========================');
document.write('<br>');
/*
    7] Equilateral Triangle - reverse
    ********* 
     ******* 
      *****
       ***
        *
  */
document.write('7] Equilateral Triangle - reverse');
document.write('<br>');
document.write('<br>');
for (let a = 0; a < 9; a++) {
  for (let b = 2; b <= a; b++) {
    document.write('&nbsp;');
    document.write('&nbsp;'); //to make it looks good, added one more space
    b++;
  }

  for (let c = 9; c > a; c--) {
    document.write('*');
  }
  document.write('<br>');
  a++;
}
document.write('========================');
document.write('<br>');
/*
    8] Diamond
        *
       ***
      *****
     ******* 
    ********* 
     ******* 
      *****
       ***
        *
  */
for (let a = 8; a > 0; a--) {
  for (let b = 2; b <= a; b++) {
    document.write('&nbsp;'); //to make it looks good, added one more space
    document.write('&nbsp;');
    b++;
  }
  for (let c = 9; c > a; c--) {
    document.write('*');
  }
  document.write('<br>');
  a--;
}
for (let a = 0; a < 9; a++) {
  for (let b = 2; b <= a; b++) {
    document.write('&nbsp;');
    document.write('&nbsp;'); //to make it looks good, added one more space
    b++;
  }
  for (let c = 9; c > a; c--) {
    document.write('*');
  }
  document.write('<br>');
  a++;
}
