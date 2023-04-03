"use strict";
// convert to more or less specific
let a = 'hola';
let b = a; // less specific
let c = a; // more specific
let w = 'word';
let str = 'word';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let val1 = addOrConcat(2, 2, 'add');
// console.log(val1);
let val2 = addOrConcat(2, 2, 'add');
// console.log(val2);
// DOM
const img = document.querySelector('#myImg'); // ts not sure what type of element it is
const myImg = document.getElementById('myImg');
const otherImg = document.getElementById('otherImg');
otherImg.alt = 'Google';
// console.log(otherImg);
