"use strict";
let intArr = [10, 12, 18];
let strArr = ['hi', 'low', 'high'];
let mixedArr = [10, '20', true];
strArr.push('love!');
// strArr.push(2) -> type error
mixedArr.push(false);
mixedArr.push('6868');
// console.log(strArr);
// console.log(mixedArr);
// explicit declaration
let names = [];
// tuple
let tuple = ['Vishal', 20, true];
let mixArr = ['Ryback', 21, false];
mixArr = tuple; // valid
// tuple = mixArr -> type error
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = mixedArr;
myObj = {};
// type inference
const exObj = {
    prop1: 'nitin',
    prop2: 32,
};
exObj.prop1 = 'kalu';
let s1 = {
    name: 'Ram',
    isActive: true,
    albums: ['Hello', 123, 489, 'Love'],
};
let s2 = {
    name: 'Rahul',
    isActive: false,
    albums: ['Giga', 234, '90'],
};
let s3 = {
    name: 'Valu',
    albums: ['hjhf', 898],
};
const greetSinger = (singer) => console.log(`Hello ${singer.name}!`);
greetSinger(s1);
// enums
var Vowels;
(function (Vowels) {
    Vowels[Vowels["A"] = 5] = "A";
    Vowels[Vowels["E"] = 6] = "E";
    Vowels[Vowels["I"] = 2] = "I";
    Vowels[Vowels["O"] = 3] = "O";
    Vowels[Vowels["U"] = 4] = "U";
})(Vowels || (Vowels = {}));
console.log(Vowels.A);
