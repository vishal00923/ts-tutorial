"use strict";
// interface TransactionObj {
//   [key: string]: number;
// }
const todaysTransactions = {
    job: 12,
    books: -10,
    shopping: 5,
};
// console.log(todaysTransactions.shopping);
// console.log(todaysTransactions['books']);
let prop = 'books';
// console.log(todaysTransactions[prop]); valid in js
const todaysNet = (transactions) => {
    let total = 0;
    // access props dynamically
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    gpa: 7.8,
    name: 'Ram',
    classes: [100, 201],
};
// console.log(student.test)
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
