// generics
// function logString(arg: string): string {
//   console.log(arg);
//   return arg;
// }

// function logNumber(arg: number): number {
//   console.log(arg);
//   return arg;
// }

// function logArray(arg: any[]) {
//   console.log(arg);
//   return arg;
// }

// template function
function logAnything<T>(arg: T): T {
  console.log(arg);
  return arg;
}

// logAnything(['hi', 'hello']);

interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 20 }, { age: 15 }, { age: 60 }];

interface Player {
  age: number;
  name: string;
}

const players: Player[] = [
  { name: 'Ram', age: 21 },
  { name: 'Shyam', age: 26 },
  { name: 'Rahul', age: 29 },
];

const person1 = getOldest(people);
const person2 = getOldest(players);

// console.log(person1);
// console.log(person2);

interface IPost {
  id: number;
  title: string;
  description: string;
}

interface IUser {
  id: number;
  age: number;
  name: string;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`https://example.com${path}`);
  return response.json();
};

const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`https://example.com${path}`);
  return response.json();
};

// generic
const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`https://example.com${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchData<IPost[]>('/posts');
  const users = await fetchData<IUser[]>('/users');

  console.log(users[0].name);
  console.log(posts[0].description);
})();
