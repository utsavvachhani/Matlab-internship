

# ⚡11. JavaScript ES6+ Features

**ES6 (ECMAScript 2015)** introduced major updates to JavaScript, making it more powerful, cleaner, and easier to write modern applications.
Let’s explore each important ES6+ feature with examples 👇

---

## 🔹 1. Let and Const

### `let`

Used to declare **block-scoped** variables (only accessible inside `{}` block).

```javascript
let x = 10;
if (true) {
  let x = 20; // different variable
  console.log(x); // 20
}
console.log(x); // 10
```

### `const`

Used to declare **constants** (cannot be reassigned).

```javascript
const PI = 3.14;
// PI = 3.15; ❌ Error: Assignment to constant variable
```

✅ **Key Difference:**

| Feature        | var       | let           | const         |
| -------------- | --------- | ------------- | ------------- |
| Scope          | Function  | Block         | Block         |
| Re-declaration | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| Re-assignment  | ✅         | ✅             | ❌             |

---

## 🔹 2. Arrow Functions

Simplified syntax for writing functions.

```javascript
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3)); // 5
```

✅ **Advantages:**

* Shorter syntax
* Automatically binds `this` (useful in callbacks)

---

## 🔹 3. Template Literals

Allow embedding variables inside strings using **backticks** (`` ` ``).

```javascript
let name = "Utsav";
let greeting = `Hello, ${name}! Welcome to JavaScript ES6.`;
console.log(greeting);
```

✅ **Supports multi-line strings:**

```javascript
let msg = `This is
a multi-line
string.`;
```

---

## 🔹 4. Destructuring Assignment (V.IMP)

Extract values from arrays or objects easily.

### Array Destructuring:

```javascript
let [a, b, c] = [10, 20, 30];
console.log(a, b, c); // 10 20 30
```

### Object Destructuring:

```javascript
let person = { name: "John", age: 25 };
let { name, age } = person;
console.log(name, age); // John 25
```

---

## 🔹 5. Default Parameters (V.IMP)

Set default values for function parameters.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Utsav"); // Hello, Utsav!
```

---

## 🔹 6. Rest and Spread Operators (V.IMP)

### Rest Operator (`...`)

Collects remaining elements into an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### Spread Operator (`...`)

Expands arrays or objects.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

---

## 🔹 7. Enhanced Object Literals

Allows shorthand property names and computed keys.

```javascript
let name = "Alice";
let age = 25;

let user = {
  name,  // same as name: name
  age,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
user.greet(); // Hi, I'm Alice
```

---

## 🔹 8. Classes

Introduced **OOP-style** syntax in JavaScript.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

const p1 = new Person("John", 25);
p1.greet(); // Hello, I'm John.
```

---

## 🔹 9. Modules (import/export)

Helps organize code into separate files.

### `export` (module1.js)

```javascript
export const name = "Utsav";
export function greet() {
  console.log("Hello from module!");
}
```

### `import` (main.js)

```javascript
import { name, greet } from './module1.js';
greet(); // Hello from module!
```

---

## 🔹 10. Symbols

Unique identifiers that never clash.

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

Used for creating private object properties.

---

## 🔹 11. Iterators and Generators

### Iterator:

Manually control iteration over data.

```javascript
let arr = [1, 2, 3];
let it = arr[Symbol.iterator]();
console.log(it.next()); // { value: 1, done: false }
```

### Generator:

Simplify creation of iterators using `function*`.

```javascript
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
for (let num of counter()) {
  console.log(num);
}
```

---

## 🔹 12. Map and Set

### Map:

Stores key-value pairs (keys can be any type).

```javascript
let map = new Map();
map.set('name', 'John');
map.set('age', 25);
console.log(map.get('name')); // John
```

### Set:

Stores unique values.

```javascript
let set = new Set([1, 2, 2, 3]);
console.log(set); // {1, 2, 3}
```

---

## 🔹 13. WeakMap and WeakSet

Similar to Map/Set but keys must be **objects** and are **weakly referenced** (no memory leaks).

```javascript
let obj = {};
let weakMap = new WeakMap();
weakMap.set(obj, "data");
```

---

## 🔹 14. Promises

Used for asynchronous programming.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 2000);
});

promise.then(result => console.log(result)); // Done! (after 2s)
```

---

## 🔹 15. Async / Await

Syntactic sugar over Promises for cleaner async code.

```javascript
async function fetchData() {
  let data = await new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 2000));
  console.log(data);
}

fetchData(); // Data Loaded
```

---

## 🧠 Summary Table

| Feature           | Description                        | Example                   |
| ----------------- | ---------------------------------- | ------------------------- |
| `let` / `const`   | Block-scoped variable declarations | `let x=10; const y=20;`   |
| `=>`              | Short function syntax              | `const add = (a,b)=>a+b;` |
| Template Literals | String interpolation               | `` `Hi ${name}` ``        |
| Destructuring     | Unpack arrays/objects              | `{name, age} = person`    |
| Default Params    | Default function values            | `function f(x=1)`         |
| Rest/Spread       | Collect or expand items            | `sum(...arr)`             |
| Classes           | OOP syntax                         | `class User {}`           |
| Modules           | Import/export code                 | `import {...} from`       |
| Map / Set         | Data structures                    | `new Map(), new Set()`    |
| Promises / Async  | Handle async code                  | `async/await`             |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
