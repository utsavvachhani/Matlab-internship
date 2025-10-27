## 18. 🧠 **Functional Programming in JavaScript**

Functional programming (FP) is a **programming paradigm** — a way of writing code — focused on using **pure functions**, **immutability**, and **function composition** to build reliable and reusable code.

---

### 1️⃣ **Pure Functions**

A **pure function** is a function that:

* Always returns the same output for the same input.
* Has **no side effects** (it doesn’t modify anything outside of itself).

✅ **Example:**

```js
// Pure Function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same input -> same output)
```

❌ **Impure Function (has side effects):**

```js
let total = 0;

function addToTotal(value) {
  total += value; // modifies external variable
}

addToTotal(5);
console.log(total); // depends on previous state -> side effect
```

---

### 2️⃣ **Side Effects**

A **side effect** is any change that happens **outside the function’s scope** — like modifying global variables, DOM, console logs, API calls, etc.

Examples of side effects:

* Changing a global variable or object property
* Writing to a file or database
* Printing to the console
* Making an API request

✅ **Avoid side effects** in pure functions whenever possible.

---

### 3️⃣ **Immutability**

Immutability means **data cannot be changed directly**.
Instead, you create and return **a new version** of data.

✅ **Example:**

```js
const user = { name: "Utsav", age: 22 };

// Instead of mutating
const updatedUser = { ...user, age: 23 }; // new object

console.log(user);        // { name: "Utsav", age: 22 }
console.log(updatedUser); // { name: "Utsav", age: 23 }
```

---

### 4️⃣ **Higher-Order Functions (HOFs)**

A **Higher-Order Function** is a function that:

* Takes another function as an argument, OR
* Returns a function.

✅ **Example:**

```js
function greet(name) {
  return `Hello, ${name}`;
}

function sayHello(func, userName) {
  return func(userName);
}

console.log(sayHello(greet, "Utsav")); // "Hello, Utsav"
```

Common built-in HOFs: `map()`, `filter()`, `reduce()`

---

### 5️⃣ **Function Composition**

**Function composition** is the process of combining multiple functions to produce a new function.

✅ **Example:**

```js
const add = x => x + 2;
const multiply = x => x * 3;

const compose = (f, g) => x => f(g(x));

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(5)); // (5 + 2) * 3 = 21
```

---

### 6️⃣ **Currying**

**Currying** transforms a function with multiple arguments into a sequence of functions that take **one argument at a time**.

✅ **Example:**

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}

console.log(add(2)(3)); // 5
```

💡 Shorter syntax using arrow functions:

```js
const addCurried = a => b => a + b;
console.log(addCurried(4)(6)); // 10
```

---

### 7️⃣ **Partial Application**

**Partial Application** means pre-filling a function with some arguments to create a new function.

✅ **Example:**

```js
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10
```

Here, `multiply.bind(null, 2)` fixes the first argument to `2`.

---

### 8️⃣ **Map, Filter, Reduce**

These are **core FP methods** used to process arrays immutably.

#### 🔹 `map()` – transform every element

```js
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

#### 🔹 `filter()` – select elements based on condition

```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```

#### 🔹 `reduce()` – accumulate array into a single value

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

### 🧩 Summary Table

| Concept                | Description                                 | Example                     |
| ---------------------- | ------------------------------------------- | --------------------------- |
| Pure Functions         | No side effects, same output for same input | `add(a,b)`                  |
| Side Effects           | External state changes                      | modifying global variable   |
| Immutability           | Don’t mutate data                           | use `...spread`             |
| Higher-Order Functions | Takes/returns a function                    | `map`, `filter`             |
| Function Composition   | Combine small functions                     | `compose(f,g)(x)`           |
| Currying               | Break into single-arg functions             | `add(a)(b)`                 |
| Partial Application    | Pre-fill some args                          | `multiply.bind(null,2)`     |
| Map/Filter/Reduce      | Functional array methods                    | `arr.map()`, `arr.reduce()` |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
