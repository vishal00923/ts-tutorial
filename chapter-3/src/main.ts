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
let names: string[] = [];

// tuple
let tuple: [string, number, boolean] = ['Vishal', 20, true];
let mixArr = ['Ryback', 21, false];

mixArr = tuple; // valid
// tuple = mixArr -> type error

// objects
let myObj: object;
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

// console.log(exObj);

// type
// type Singer = {
//   name: string;
//   isActive?: boolean; // optional property
//   albums: (string | number)[];
// };

// let s1: Singer = {
//   name: 'Ram',
//   isActive: true,
//   albums: ['Hello', 123, 489, 'Love'],
// };

// let s2: Singer = {
//   name: 'Rahul',
//   isActive: false,
//   albums: ['Giga', 234, '90'],
// };

// let s3: Singer = {
//   name: 'Valu',
//   albums: ['hjhf', 898],
// };

// const greetSinger = (singer: Singer) => console.log(`Hello ${singer.name}!`);

// greetSinger(s1);

// interface
interface Singer {
  name: string;
  isActive?: boolean; // optional property
  albums: (string | number)[];
}

let s1: Singer = {
  name: 'Ram',
  isActive: true,
  albums: ['Hello', 123, 489, 'Love'],
};

let s2: Singer = {
  name: 'Rahul',
  isActive: false,
  albums: ['Giga', 234, '90'],
};

let s3: Singer = {
  name: 'Valu',
  albums: ['hjhf', 898],
};

const greetSinger = (singer: Singer): void =>
  console.log(`Hello ${singer.name}!`);

greetSinger(s1);

// enums
enum Vowels {
  A = 5,
  E,
  I = 2,
  O,
  U,
}

console.log(Vowels.A);
