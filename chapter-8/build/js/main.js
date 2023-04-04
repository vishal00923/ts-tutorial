"use strict";
// generics
// function logString(arg: string): string {
//   console.log(arg);
//   return arg;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// function logNumber(arg: number): number {
//   console.log(arg);
//   return arg;
// }
// function logArray(arg: any[]) {
//   console.log(arg);
//   return arg;
// }
// template function
function logAnything(arg) {
    console.log(arg);
    return arg;
}
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [{ age: 20 }, { age: 15 }, { age: 60 }];
const players = [
    { name: 'Ram', age: 21 },
    { name: 'Shyam', age: 26 },
    { name: 'Rahul', age: 29 },
];
const person1 = getOldest(people);
const person2 = getOldest(players);
const fetchPostData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://example.com${path}`);
    return response.json();
});
const fetchUserData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://example.com${path}`);
    return response.json();
});
// generic
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://example.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchData('/posts');
    const users = yield fetchData('/users');
    console.log(users[0].name);
    console.log(posts[0].description);
}))();
