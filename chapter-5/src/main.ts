// type casting or type assertions
type One = string;
type Two = number | string;
type Three = 'hi';

// convert to more or less specific
let a: One = 'hola';
let b = a as Two; // less specific
let c = a as Three; // more specific

let w = <One>'word';
let str = <string | number>'word';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let val1: string = addOrConcat(2, 2, 'add') as string;
// console.log(val1);
let val2: number = addOrConcat(2, 2, 'add') as number;
// console.log(val2);

// DOM
const img = document.querySelector('#myImg')!; // ts not sure what type of element it is
const myImg = document.getElementById('myImg') as HTMLImageElement;
const otherImg = <HTMLImageElement>document.getElementById('otherImg');

otherImg.alt = 'Google';

// console.log(otherImg);
