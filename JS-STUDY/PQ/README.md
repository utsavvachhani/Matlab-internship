# 🧠 JavaScript Practice Questions

This section includes **hands-on exercises** and **practical examples** to strengthen your understanding of **Variables & Data Types**, **Operators**, and **Control Structures** in JavaScript.

---

## 🧩 **1. Variables and Data Types**

### 🟢 **Q1. Declare variables using `var`, `let`, and `const` and explain the differences**

```js
var name = "Utsav";     // Function-scoped, can be redeclared
let age = 21;            // Block-scoped, cannot be redeclared
const country = "India"; // Block-scoped, cannot be redeclared or reassigned
```

| Keyword | Scope           | Redeclare | Reassign | Hoisting       |
| ------- | --------------- | --------- | -------- | -------------- |
| `var`   | Function-scoped | ✅         | ✅        | ✅ (undefined)  |
| `let`   | Block-scoped    | ❌         | ✅        | ⚠️ (TDZ Error) |
| `const` | Block-scoped    | ❌         | ❌        | ⚠️ (TDZ Error) |

---

### 🟢 **Q2. Check the data type of different variables**

```js
let num = 42;
let str = "Hello";
let isTrue = false;
let obj = { name: "Utsav" };
let arr = [1, 2, 3];
let undef;
let n = null;

console.log(typeof num);     // number
console.log(typeof str);     // string
console.log(typeof isTrue);  // boolean
console.log(typeof obj);     // object
console.log(typeof arr);     // object
console.log(typeof undef);   // undefined
console.log(typeof n);       // object (special case)
```

---

### 🟢 **Q3. Convert string to number and number to string**

```js
let strNum = "123";
let convertedToNum = Number(strNum);  // 123

let num = 456;
let convertedToStr = String(num);     // "456"

console.log(typeof convertedToNum); // number
console.log(typeof convertedToStr); // string
```

---

### 🟢 **Q4. Demonstrate type coercion with examples**

```js
console.log('5' + 5);   // "55" → string concatenation
console.log('5' - 2);   // 3 → string converted to number
console.log(true + 1);  // 2 → true converted to 1
console.log(false + 5); // 5 → false converted to 0
```

---

### 🟢 **Q5. Show the difference between null and undefined**

| Concept | `null`                  | `undefined`                           |
| ------- | ----------------------- | ------------------------------------- |
| Meaning | Intentional empty value | Variable declared but not assigned    |
| Type    | Object                  | Undefined                             |
| Example | `let a = null;`         | `let b; console.log(b); // undefined` |

---
---

## ⚙️ **2. Operators**

### 🟢 **Q1. Create a calculator using arithmetic operators**

```js
let a = 10, b = 5;
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Modulus:", a % b);
```

---

### 🟢 **Q2. Compare two values using comparison operators**

```js
console.log(5 == '5');   // true (loose equality)
console.log(5 === '5');  // false (strict equality)
console.log(10 > 5);     // true
console.log(5 != 10);    // true
console.log(5 !== '5');  // true
```

---

### 🟢 **Q3. Use logical operators to combine conditions**

```js
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter.");
} else {
  console.log("Not allowed.");
}
```

---

### 🟢 **Q4. Implement conditional (ternary) operator**

```js
let score = 85;
let result = (score >= 50) ? "Pass" : "Fail";
console.log(result);  // Pass
```

---

### 🟢 **Q5. Show operator precedence with examples**

```js
console.log(2 + 3 * 4);     // 14 (Multiplication before addition)
console.log((2 + 3) * 4);   // 20 (Parentheses change precedence)
```

---
---

## 🔁 **3. Control Structures**

### 🟢 **Q1. Write if-else statements for different conditions**

```js
let marks = 75;

if (marks >= 90) console.log("Grade A");
else if (marks >= 70) console.log("Grade B");
else if (marks >= 50) console.log("Grade C");
else console.log("Fail");
```

---

### 🟢 **Q2. Create a switch statement for multiple cases**

```js
let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day.");
}
```

---

### 🟢 **Q3. Use different types of loops (for, while, do-while)**

```js
// For loop
for(let i = 1; i <= 3; i++) console.log(i);

// While loop
let j = 1;
while(j <= 3) {
  console.log(j);
  j++;
}

// Do-while loop
let k = 1;
do {
  console.log(k);
  k++;
} while(k <= 3);
```

---

### 🟢 **Q4. Implement nested loops**

```js
for(let i = 1; i <= 3; i++) {
  for(let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

---

### 🟢 **Q5. Use break and continue statements**

```js
for(let i = 1; i <= 5; i++) {
  if(i === 3) continue; // Skip 3
  if(i === 5) break;    // Stop at 5
  console.log(i);
}
// Output: 1, 2, 4
```


---
---

## 🧩 Functions, Objects, and Arrays

This section provides **hands-on practice** for mastering **functions**, **objects**, and **arrays** in JavaScript — core pillars of full-stack development.

---

## 🔹 **1. Functions**

### 🟢 Q1. Create function declarations and expressions

```js
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const sayHello = function(name) {
  return `Hi, ${name}!`;
};

console.log(greet("Utsav"));
console.log(sayHello("Meet"));
```

---

### 🟢 Q2. Write arrow functions

```js
const add = (a, b) => a + b;
const square = num => num * num;

console.log(add(4, 6));      // 10
console.log(square(5));      // 25
```

---

### 🟢 Q3. Implement functions with default parameters

```js
function greetUser(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

greetUser();         // Welcome, Guest!
greetUser("Utsav");  // Welcome, Utsav!
```

---

### 🟢 Q4. Use rest parameters in functions

```js
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15
```

---

### 🟢 Q5. Create recursive functions (factorial, fibonacci)

```js
// Factorial
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8
```

---

### 🟢 Q6. Demonstrate closures

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

> 💡 The `inner()` function remembers variables from its outer scope — this is called a **closure**.

---

### 🟢 Q7. Write higher-order functions

```js
function higherOrder(fn, value) {
  return fn(value);
}

function double(x) {
  return x * 2;
}

console.log(higherOrder(double, 5)); // 10
```

---

### 🟢 Q8. Create callback functions

```js
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data loaded successfully!");
  }, 1000);
}

fetchData(message => console.log(message));
```

---

### 🟢 Q9. Implement IIFE (Immediately Invoked Function Expression)

```js
(function() {
  console.log("IIFE executed immediately!");
})();
```

---

## 🔸 **2. Objects and Arrays**

### 🟢 Q1. Create and manipulate objects

```js
const person = {
  name: "Utsav",
  age: 21,
  city: "Surat"
};

person.age = 22;            // Update property
person.country = "India";   // Add new property

console.log(person);
```

---

### 🟢 Q2. Use different methods to create objects

```js
// Using Object Literal
const obj1 = { name: "Utsav" };

// Using new Object()
const obj2 = new Object();
obj2.name = "Meet";

// Using Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj3 = new Person("Raj", 25);

// Using Object.create()
const proto = { greet: () => "Hello!" };
const obj4 = Object.create(proto);

console.log(obj1, obj2, obj3, obj4.greet());
```

---

### 🟢 Q3. Access object properties (Dot & Bracket notation)

```js
const car = { brand: "Tesla", model: "Model 3" };

console.log(car.brand);       // Dot notation
console.log(car["model"]);    // Bracket notation
```

---

### 🟢 Q4. Loop through object properties

```js
const student = { name: "Utsav", age: 21, course: "CS" };

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
```

---

### 🟢 Q5. Create and manipulate arrays

```js
let fruits = ["apple", "banana", "mango"];
fruits.push("grape");   // Add
fruits.pop();           // Remove last
fruits.shift();         // Remove first
fruits.unshift("kiwi"); // Add first

console.log(fruits);
```

---

### 🟢 Q6. Use array methods (map, filter, reduce, etc.)

```js
let numbers = [1, 2, 3, 4, 5];

// map()
let doubled = numbers.map(n => n * 2);

// filter()
let even = numbers.filter(n => n % 2 === 0);

// reduce()
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(doubled, even, sum);
```

---

### 🟢 Q7. Implement array destructuring

```js
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

console.log(first);  // red
console.log(second); // green
console.log(third);  // blue
```

---

### 🟢 Q8. Sort arrays of objects

```js
const users = [
  { name: "Utsav", age: 22 },
  { name: "Raj", age: 20 },
  { name: "Meet", age: 25 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
```


---
---


## 🚀 Asynchronous Programming & ES6+ Features

Learn how to handle asynchronous operations and explore powerful ES6+ syntax improvements that make JavaScript modern, cleaner, and more efficient.

---

## 🔹 **1. Asynchronous Programming**

### 🟢 Q1. Create and use Promises

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    success ? resolve("Data fetched successfully!") : reject("Failed to fetch data!");
  }, 1000);
});

fetchData
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

---

### 🟢 Q2. Handle Promise rejections

```js
Promise.reject("Something went wrong!")
  .catch(error => console.error("Error caught:", error))
  .finally(() => console.log("Operation complete"));
```

---

### 🟢 Q3. Use Promise.all() and Promise.race()

```js
const p1 = new Promise(resolve => setTimeout(() => resolve("P1 done"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("P2 done"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("P3 done"), 1500));

// Promise.all → waits for all promises
Promise.all([p1, p2, p3]).then(results => console.log("All:", results));

// Promise.race → resolves first promise
Promise.race([p1, p2, p3]).then(result => console.log("Race:", result));
```

---

### 🟢 Q4. Convert callbacks to Promises

```js
// Callback version
function getData(callback) {
  setTimeout(() => callback("Data loaded (callback)"), 1000);
}

// Promise version
function getDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded (promise)"), 1000);
  });
}

getDataPromise().then(data => console.log(data));
```

---

### 🟢 Q5. Implement async/await

```js
const getUser = () => new Promise(resolve => setTimeout(() => resolve("User found"), 1000));

async function showUser() {
  console.log("Fetching...");
  const user = await getUser();
  console.log(user);
}

showUser();
```

---

### 🟢 Q6. Fetch data from APIs

```js
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data.slice(0, 3)); // Show first 3 posts
}

fetchPosts();
```

---

### 🟢 Q7. Handle API errors

```js
async function getDataSafe() {
  try {
    const response = await fetch("https://invalid-api-url.com/data");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("API Error:", error.message);
  }
}

getDataSafe();
```

---
---

## 🔸 ** ES6+ Features**

### 🟢 Q1. Use template literals

```js
const name = "Utsav";
const age = 22;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);
```

---

### 🟢 Q2. Implement destructuring for arrays and objects

```js
// Array Destructuring
const fruits = ["apple", "banana", "mango"];
const [first, , third] = fruits;
console.log(first, third);

// Object Destructuring
const person = { name: "Utsav", city: "Surat" };
const { name: n, city } = person;
console.log(n, city);
```

---

### 🟢 Q3. Use spread and rest operators

```js
// Spread
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// Rest
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
```

---

### 🟢 Q4. Create classes and inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks
```

---

### 🟢 Q5. Use modules (import/export)

// 📁 **math.js**

```js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

// 📁 **app.js**

```js
import { add, multiply } from "./math.js";

console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6
```

> ⚡ Note: Use `"type": "module"` in `package.json` or `.mjs` extension for Node.js modules.

---

### 🟢 Q6. Work with Map and Set

```js
// Map
const map = new Map();
map.set("name", "Utsav");
map.set("age", 22);
console.log(map.get("name"));

// Set
const set = new Set([1, 2, 3, 3, 2]);
console.log(set); // {1, 2, 3}
```

---

### 🟢 Q7. Create generators and iterators

```js
// Generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```


---
---

## 🧱 **Object-Oriented Programming (OOP)**

### 🟢 Q1. Create classes with constructors

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Utsav", 22);
person1.greet();
```

---

### 🟢 Q2. Implement inheritance using `extends`

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.
```

---

### 🟢 Q3. Use getters and setters

```js
class User {
  constructor(username) {
    this._username = username;
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(value) {
    this._username = value.trim();
  }
}

const user = new User("utsav");
console.log(user.username); // UTSAV
user.username = "  meet  ";
console.log(user.username); // MEET
```

---

### 🟢 Q4. Create static methods

```js
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3)); // 8
```

> ⚡ Static methods belong to the class itself, not instances.

---

### 🟢 Q5. Implement private fields

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// console.log(acc.#balance); ❌ Error: Private field
```

---

### 🟢 Q6. Demonstrate polymorphism

```js
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(3), new Square(4)];
shapes.forEach(shape => console.log(shape.area()));
```

---

### 🟢 Q7. Use composition over inheritance

```js
const canEat = state => ({
  eat: () => console.log(`${state.name} is eating.`)
});

const canWalk = state => ({
  walk: () => console.log(`${state.name} is walking.`)
});

const person = name => {
  const state = { name };
  return { ...canEat(state), ...canWalk(state) };
};

const p1 = person("Utsav");
p1.eat();
p1.walk();
```

---

## 🧩 **Design Patterns**

### 🟢 Q1. Implement Module pattern

```js
const CounterModule = (() => {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
})();

console.log(CounterModule.increment());
console.log(CounterModule.getCount());
```

---

### 🟢 Q2. Create Singleton pattern

```js
class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    this.timestamp = Date.now();
    Singleton.instance = this;
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // true
```

---

### 🟢 Q3. Use Factory pattern

```js
class Car {
  constructor(model) {
    this.model = model;
  }
}

class Bike {
  constructor(model) {
    this.model = model;
  }
}

class VehicleFactory {
  static createVehicle(type, model) {
    switch (type) {
      case "car":
        return new Car(model);
      case "bike":
        return new Bike(model);
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}

const car = VehicleFactory.createVehicle("car", "Tesla");
console.log(car.model);
```

---

### 🟢 Q4. Implement Observer pattern

```js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(obs => obs !== fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const subject = new Subject();

function logger(data) {
  console.log("Logger:", data);
}

subject.subscribe(logger);
subject.notify("Data updated!"); // Logger: Data updated!
```

---

### 🟢 Q5. Create Constructor pattern

```js
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}

const user1 = new User("Utsav", 22);
user1.greet();
```

---

## 🧠 **Functional Programming**

### 🟢 Q1. Write pure functions

```js
function add(a, b) {
  return a + b; // No side effects
}
console.log(add(2, 3));
```

---

### 🟢 Q2. Avoid side effects

```js
let total = 0;

// ❌ Bad (side effect)
function addToTotal(value) {
  total += value;
}

// ✅ Good (pure)
function calculateTotal(oldTotal, value) {
  return oldTotal + value;
}
```

---

### 🟢 Q3. Implement function composition

```js
const compose = (f, g) => x => f(g(x));

const add1 = x => x + 1;
const double = x => x * 2;

const addThenDouble = compose(double, add1);
console.log(addThenDouble(3)); // (3+1)*2 = 8
```

---

### 🟢 Q4. Use currying

```js
const multiply = a => b => a * b;
const double = multiply(2);
console.log(double(5)); // 10
```

---

### 🟢 Q5. Create partial applications

```js
function add(a, b, c) {
  return a + b + c;
}

function partial(fn, ...fixedArgs) {
  return (...remainingArgs) => fn(...fixedArgs, ...remainingArgs);
}

const add5 = partial(add, 5);
console.log(add5(3, 2)); // 10
```

---

### 🟢 Q6. Use immutability principles

```js
const user = { name: "Utsav", age: 22 };

// ❌ Mutating object
// user.age = 23;

// ✅ Immutably updating
const updatedUser = { ...user, age: 23 };
console.log(user);
console.log(updatedUser);
```

---
---

## ⚠️ **Error Handling and Testing**

### 🟢 Q1. Use `try-catch-finally` blocks

```js
try {
  const result = 10 / 0;
  if (!isFinite(result)) throw new Error("Division by zero not allowed!");
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Execution completed!");
}
```

> ✅ `finally` always runs, even if an error occurs.

---

### 🟢 Q2. Create custom error classes

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 18) throw new ValidationError("Age must be 18 or above!");
  return "Access granted!";
}

try {
  console.log(validateAge(15));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
```

---

### 🟢 Q3. Handle async errors

```js
async function fetchData() {
  try {
    const res = await fetch("https://api.invalidurl.com/data");
    if (!res.ok) throw new Error("Failed to fetch data!");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Async Error:", error.message);
  }
}

fetchData();
```

---

### 🟢 Q4. Write unit tests (Example using Jest syntax)

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
```

> 🧪 Use **Jest** or **Mocha** to automate testing of small functions.

---

### 🟢 Q5. Mock functions and objects

```js
const fetchData = jest.fn(() => Promise.resolve({ data: "Mocked data" }));

test("fetchData returns mocked value", async () => {
  const response = await fetchData();
  expect(response.data).toBe("Mocked data");
});
```

> 🧠 Mocking helps test components without depending on real APIs or databases.

---

## 🧮 **Algorithms and Data Structures**

### 🟢 Q1. Implement sorting algorithms

#### 🔸 Bubble Sort

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 9, 1]));
```

#### 🔸 Merge Sort

```js
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length)
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  return [...result, ...left, ...right];
}

console.log(mergeSort([8, 3, 2, 7, 4]));
```

#### 🔸 Quick Sort

```js
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([4, 6, 2, 9, 1]));
```

---

### 🟢 Q2. Create search algorithms

#### 🔸 Linear Search

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;
}
console.log(linearSearch([2, 5, 7, 9], 7)); // 2
```

#### 🔸 Binary Search

```js
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? (low = mid + 1) : (high = mid - 1);
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
```

---

### 🟢 Q3. Implement stack and queue

#### 🔸 Stack (LIFO)

```js
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) { this.items.push(element); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
```

#### 🔸 Queue (FIFO)

```js
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) { this.items.push(element); }
  dequeue() { return this.items.shift(); }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
console.log(queue.dequeue()); // A
```

---

### 🟢 Q4. Create linked list operations

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.display();
```

---

### 🟢 Q5. Build binary trees

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

console.log(root);
```

---

### 🟢 Q6. Implement hash tables

```js
class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  _hash(key) {
    return key.toString().length % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) this.table[index] = [];
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (!bucket) return undefined;
    const item = bucket.find(([k]) => k === key);
    return item ? item[1] : undefined;
  }
}

const hash = new HashTable();
hash.set("name", "Utsav");
console.log(hash.get("name"));
```

