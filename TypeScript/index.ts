let firstName: string = 'Jenny';
firstName = 'should be only string';

let count = 0; // Num type
count += 1;
count = '!!this is an error!!'; //this is going to be error

const message: string = 'hello world'; // string

const done: boolean = true; // boolean

const numbers: number[] = [1, 2, 3]; //num array
const messages: string[] = ['hello', 'world']; // string array

messages.push(1); // if putting num? ==> error!

let mightBeUndefined: string | undefined = undefined; //It could be string or undefined
let nullableNumber: number | null = null; // It could be num or null

let color: 'red' | 'orange' | 'yellow' = 'red'; // it should be red, orange or yellow
color = 'yellow'; //no error
color = 'green'; // !!error!!
