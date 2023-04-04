// index signatures
interface TransactionObj {
  [key: string]: number;

  job: number;
  books: number;
  shopping: number;
}

// interface TransactionObj {
//   [key: string]: number;
// }

const todaysTransactions: TransactionObj = {
  job: 12,
  books: -10,
  shopping: 5,
};

// console.log(todaysTransactions.shopping);
// console.log(todaysTransactions['books']);

let prop: string = 'books';
// console.log(todaysTransactions[prop]); valid in js

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  // access props dynamically
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

interface Student {
  //   [key: string]: string | number | number[] | undefined;
  gpa: number;
  name: string;
  classes?: number[];
}

const student: Student = {
  gpa: 7.8,
  name: 'Ram',
  classes: [100, 201],
};

// console.log(student.test)
// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

interface Income {
  [key: string]: number;
}

type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number | string>;
