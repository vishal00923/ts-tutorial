// type aliases
type strOrNum = string | number;

type strOrNumArr = (string | number)[];

type Singer = {
  name?: string;
  isActive: boolean;
  albums: strOrNumArr; // type alias
  _albums: (string | number)[];
};

type userId = strOrNum;

// interface postId = strOrNum; -> error

// literal types
let myName: 'Vishal';
// myName = 'Rahul' -> type error

let userName: 'Ram' | 'Shyam' | 'Rahul';
userName = 'Ram';

// functions
const printMsg = (message: any): void => console.log(message);
printMsg('Hello, TS');

const isValid = (val: boolean): boolean => val;
isValid(false);

// const add = (a: number, b: number): number => a + b;
// const sub = function (a: number, b: number): number {
//   return a - b;
// };

// type alias
type mathFunc = (a: number, b: number) => number;
// interface mathFunc {
//   (a: number, b: number): number;
// }

const mul: mathFunc = (a, b) => a * b;
const add: mathFunc = (a, b) => a + b;

// console.log(mul(5, 6));
// console.log(add(3, 4));

// optional parameters
const sumAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// console.log(sumAll(4, 5));
// console.log(sumAll(1, 2, 3));

// default parameters
const addAll = (a: number, b: number, c: number = 4): number => a + b + c;

// console.log(addAll(10, 20));

// rest parameters
const total = (a: number, b: number, c: number, ...nums: number[]): number =>
  a + b + c + nums.reduce((prev: number, curr: number): number => prev + curr);

console.log(total(1, 2, 3, 4, 5));

// never type
const createErr = (errMsg: string): never => {
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

const infiniteLoop = (): void => {
  let i: number = 0;
  while (true) {
    console.log(i);
    ++i;
    if (i > 100) break;
  }
};

// infiniteLoop();

// custom type guard
const isNum = (val: any) => (typeof val === 'number' ? true : false);

// use of the never type
const numOrString = (val: number | string): string => {
  if (isNum(val)) return 'number';
  if (typeof val === 'string') return 'string';
  return createErr('This should never happen!'); // ts need explicit return
};

// console.log(numOrString(''));
