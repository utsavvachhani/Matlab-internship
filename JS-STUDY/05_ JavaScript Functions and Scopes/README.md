
# ⚡ 5. JavaScript Functions and Scopes

Functions are **blocks of reusable code** that perform a specific task.  
Scopes determine the **accessibility of variables and functions** in JavaScript.  
This section covers all major function types, scopes, closures, and advanced concepts like callbacks and higher-order functions.

---

## 🔹 1. Function Declarations

A function defined using the `function` keyword with a name.

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Utsav")); // Hello, Utsav!
````

* **Hoisted** → Can be called before declaration.

---

## 🔹 2. Function Expressions

A function assigned to a variable.

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Utsav"));
```

* Not hoisted → Cannot be called before definition.

---

## 🔹 3. Anonymous Functions

Functions **without a name**, often used as arguments.

```js
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
```

---

## 🔹 4. Arrow Functions (ES6)

Shorter syntax for function expressions.

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Utsav"));
```

* No `this` binding → Uses **lexical `this`**.

---

## 🔹 5. Function Parameters and Arguments

* **Parameters** → Variables defined in function signature.
* **Arguments** → Values passed when calling a function.

```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15
```

---

## 🔹 6. Default Parameters (V IMP)

Provides default values if arguments are not supplied.

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
```

---

## 🔹 7. Rest Parameters (V IMP)

Collects multiple arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## 🔹 8. Function Return Values

Functions can return values using `return`.

```js
function multiply(a, b) {
  return a * b;
}
const result = multiply(5, 4); // 20
```

---

## 🔹 9. Nested Functions

A function inside another function.

```js
function outer() {
  function inner() {
    console.log("Inner function");
  }
  inner();
}
outer();
```

---

## 🔹 10. Recursion

A function that calls itself.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

---

## 🔹 11. Scopes in JavaScript

### a) Function Scope

Variables declared inside a function are only accessible inside it.

```js
function demo() {
  let x = 10;
  console.log(x);
}
demo();
// console.log(x); // ❌ Error
```

### b) Global Scope

Variables declared outside functions are accessible everywhere.

```js
let y = 20;
function test() {
  console.log(y);
}
test(); // 20
```

### c) Block Scope

Variables declared with `let` or `const` inside `{}` are accessible only inside the block.

```js
{
  let a = 5;
}
// console.log(a); // ❌ Error
```

### d) Lexical Scoping

Inner functions have access to variables of outer functions where they are **defined**, not where they are called.

```js
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer(); // 10
```

---

## 🔹 12. Closures

A closure is a function that **remembers variables from its outer scope** even after the outer function has finished executing.

```js
function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

## 🔹 13. Callbacks

A **function passed as an argument** to another function.

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("Utsav", () => console.log("Callback executed!"));
```

---

## 🔹 14. Higher-Order Functions

Functions that **take other functions as arguments** or **return functions**.

```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## 🔹 15. IIFE (Immediately Invoked Function Expressions)

A function that runs immediately after being defined.

```js
(function() {
  console.log("IIFE executed!");
})();
```

* Helps **avoid polluting the global scope**.

---

## 🔹 16. `this`, `call`, `apply`, and `bind`

* **`this`** → Refers to the context of the current function.
* **`call()`** → Calls a function with a given `this` value and arguments individually.
* **`apply()`** → Calls a function with a given `this` value and arguments as an array.
* **`bind()`** → Returns a new function with `this` bound to a specific object.

```js
const person = {
  name: "Utsav",
  greet: function(age) {
    console.log(`${this.name} is ${age} years old`);
  }
};

const anotherPerson = { name: "Meet" };

person.greet.call(anotherPerson, 22);   // Meet is 22 years old
person.greet.apply(anotherPerson, [25]); // Meet is 25 years old
const boundGreet = person.greet.bind(anotherPerson, 30);
boundGreet(); // Meet is 30 years old
```

---

## 🧩 Summary Diagram

```
JavaScript Functions & Scopes
│
├── Function Types
│   ├── Declaration
│   ├── Expression
│   ├── Anonymous
│   ├── Arrow
│   ├── IIFE
│
├── Function Parameters
│   ├── Default
│   ├── Rest
│   └── Arguments
│
├── Scope
│   ├── Function Scope
│   ├── Global Scope
│   ├── Block Scope
│   ├── Lexical Scoping
│   └── Closures
│
├── Advanced
│   ├── Callbacks
│   └── Higher-Order Functions
│
└── this, call, apply, bind
```

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
