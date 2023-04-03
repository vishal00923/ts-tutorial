"use strict";
// interface postId = strOrNum; -> error
// literal types
let myName;
// myName = 'Rahul' -> type error
let userName;
userName = 'Ram';
// functions
const printMsg = (message) => console.log(message);
printMsg('Hello, TS');
const isValid = (val) => val;
isValid(false);
// interface mathFunc {
//   (a: number, b: number): number;
// }
const mul = (a, b) => a * b;
const add = (a, b) => a + b;
// console.log(mul(5, 6));
// console.log(add(3, 4));
// optional parameters
const sumAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// console.log(sumAll(4, 5));
// console.log(sumAll(1, 2, 3));
// default parameters
const addAll = (a, b, c = 4) => a + b + c;
// console.log(addAll(10, 20));
// rest parameters
const total = (a, b, c, ...nums) => a + b + c + nums.reduce((prev, curr) => prev + curr);
console.log(total(1, 2, 3, 4, 5));
// never type
const createErr = (errMsg) => {
    throw new Error(errMsg);
};
// this is wrong check for never type
// const infiniteLoop = (): never => {
//   let i: number = 0;
//   while (true) {
//     console.log(i);
//     ++i;
//   }
// };
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        console.log(i);
        ++i;
        if (i > 100)
            break;
    }
};
// infiniteLoop();
// custom type guard
const isNum = (val) => (typeof val === 'number' ? true : false);
// use of the never type
const numOrString = (val) => {
    if (isNum(val))
        return 'number';
    if (typeof val === 'string')
        return 'string';
    return createErr('This should never happen!'); // ts need explicit return
};
// console.log(numOrString(''));
