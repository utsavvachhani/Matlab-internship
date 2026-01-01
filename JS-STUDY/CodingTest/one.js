let obj1 = { name: "Utsav" };
let obj2 = obj1;
obj2.name = "Vachhani";
// console.log(obj1.name); // "Vachhani"

// Block Scope with let
{
  let blockVar = "Hello";
  //   console.log(blockVar); // Works
}
// console.log(blockVar); // ❌ Error

a = [1, 2, 3];
b = a;
a.push(4);
b.pop();
b.push(5);
// console.log(a);
// console.log(b);

// function sum(...numbers) {
//   return numbers.reduce((acc, val) => {
//     console.log(acc, val, acc + val);
//     return acc + val;
//   }, 0);
// }
// console.log(sum(1, 2, 3, 4));

function outer() {
  let count = 0;
  return function () {
    count++;
    // console.log(count);
  };
}
// console.log(outer());
// console.log(outer());
const counter = outer();
counter(); // 1
counter(); // 2

const now = new Date();
console.log(now);

const date2 = new Date(2025, 0, 10, 14, 30, 0);
console.log(date2);

let num = 1234.456;
console.log(num.toPrecision(4)); // "123.5"

let arr = [8, 2, 3];
let it = arr[Symbol.iterator]();
console.log(it.next()); // { value: 1, done: false }

function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function bye() {
  console.log("Goodbye!");
}

greet("Utsav", bye);

let count = 0;
// const intervalId = setInterval(() => {
//   count++;
// console.log("Count:", count);
//   if (count === 3) clearInterval(intervalId); // stops after 3 times
// }, 1000);

function varables() {
  var a = 10;
  let b = 20;
  const c = 30;
  // console.log(a, b, c);
  const data = () => {
    a=30;
    b=40;
    // console.log(a, b, c);
  };
  data();
}

varables();



const defaultParam = (name="utsav") => {
  // console.log(`Hello, ${name}!`);
}

defaultParam();
defaultParam("Vachhani");


function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data loaded successfully!");
  }, 1000);
}

// fetchData(message => console.log(message));


console.log(this)


const p1 = new Promise(resolve => setTimeout(() => resolve("P1 done"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("P2 done"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("P3 done"), 1500));

// Promise.all → waits for all promises
Promise.all([p1, p2, p3]).then(results => console.log("All:", results));

// Promise.race → resolves first promise
Promise.race([p1, p2, p3]).then(result => console.log("Race:", result));