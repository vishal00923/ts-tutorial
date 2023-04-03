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
  // when you don't want to instantiate
  secondLang!: string; // assertion

  constructor(
    public readonly age: number,
    protected name: string,
    public music: string,
    protected lang: string
  ) {
    this.age = age;
    this.name = name;
    this.music = music;
    this.lang = lang;
  }

  //   public getLang = (): string => `I love ${this.lang} language.`;
}

const Ram = new Coder(20, 'Ram', 'Hindi', 'Jai Shri Ram🚩');
// console.log(Ram.age);
// console.log(Ram.getLang());
// console.log(Ram.lang);
// console.log(Ram.name);

class FrontendDev extends Coder {
  constructor(
    public computer: string,
    age: number,
    name: string,
    music: string,
    lang: string
  ) {
    super(age, name, music, lang);
    this.computer = computer;
  }

  public getLang = (): string => `I love ${this.lang} language.`;
}

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const ram = new Guitarist('Ram', 'Guitar');
console.log(ram.play('plays'));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const bd = new Peeps('bd');
const valu = new Peeps('Value');
const rahul = new Peeps('Rahul');

// console.log(Peeps.count);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public set data(val: string[]) {
    if (Array.isArray(val) && val.every((ele) => typeof ele === 'string')) {
      this.dataState = val;
      return;
    } else {
      throw new Error('Param is not an array of strings');
    }
  }

  public get data(): string[] {
    return this.dataState;
  }
}

const myBands = new Bands();
myBands.data = ['Rahul', 'Raj'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Kalu'];
console.log(myBands.data);
// myBands.data = ['Faj', 124]
