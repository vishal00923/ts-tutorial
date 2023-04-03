"use strict";
// A typical class in ts
// a lot of redundancy in code
// class Coder {
//   age: number;
//   name: string;
//   lang: string;
//   music: string;
//   constructor(age: number, name: string, lang: string, music: string) {
//     this.age = age;
//     this.name = name;
//     this.lang = lang;
//     this.music = music;
//   }
// }
// to remove redundancy
class Coder {
    constructor(age, name, music, lang) {
        this.age = age;
        this.name = name;
        this.music = music;
        this.lang = lang;
        this.age = age;
        this.name = name;
        this.music = music;
        this.lang = lang;
    }
}
const Ram = new Coder(20, 'Ram', 'Hindi', 'Jai Shri Ram🚩');
// console.log(Ram.age);
// console.log(Ram.getLang());
// console.log(Ram.lang);
// console.log(Ram.name);
class FrontendDev extends Coder {
    constructor(computer, age, name, music, lang) {
        super(age, name, music, lang);
        this.computer = computer;
        this.getLang = () => `I love ${this.lang} language.`;
        this.computer = computer;
    }
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const ram = new Guitarist('Ram', 'Guitar');
console.log(ram.play('plays'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const bd = new Peeps('bd');
const valu = new Peeps('Value');
const rahul = new Peeps('Rahul');
// console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    set data(val) {
        if (Array.isArray(val) && val.every((ele) => typeof ele === 'string')) {
            this.dataState = val;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
    get data() {
        return this.dataState;
    }
}
const myBands = new Bands();
myBands.data = ['Rahul', 'Raj'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Kalu'];
console.log(myBands.data);
// myBands.data = ['Faj', 124]
