"use strict";
let myName = 'Vishal'; // type inference
let username;
username = 'vishal00923'; // explicit
let msg;
let age;
let isAdult;
let anyType;
msg = 'Hello, TS';
age = 20;
isAdult = true;
// any type holds any type of data use when you are not sure about what data you get
anyType = 20;
console.log(anyType);
anyType = 'hello';
console.log(anyType);
anyType = true;
console.log(anyType);
// function
const add = (a, b) => {
    console.log(`Type of ${a} and ${b} is:`, typeof (a + b));
    return a + b;
};
const sum = add(5, '6');
// console.log(sum);
// union it can store a number or a string
// you can also make a chain of union like
// let productId = number | string | boolean;
// etc.
let productId;
productId = 23;
productId = '233444';
// productId = false -> this is invalid
let regExp = /\w+/g;
