
# ⚡ 4. JavaScript Control Structures

Control structures allow you to **control the flow of execution** in a program.  
They include **conditional statements** and **loops**, which help in decision-making and repeating tasks.

---

## 🔹 1. Conditional Statements

Conditional statements execute code based on a condition.

### a) If Statement
Executes a block of code if the condition is true.

```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
````

### b) If-Else Statement

Executes one block if the condition is true, another if false.

```js
let age = 16;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### c) Switch Statement

Used to perform different actions based on multiple conditions.

```js
let day = 3;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

---

## 🔹 2. Loop Statements

Loops are used to **repeat code multiple times** until a condition is met.

### a) While Loop

Executes as long as the condition is true.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### b) Do-While Loop

Executes **at least once**, then checks the condition.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### c) For Loop

Executes a block of code a fixed number of times.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### d) Nested For Loops

A loop inside another loop.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

### e) For-In Loop

Iterates over the **keys** of an object.

```js
const person = {name: "Utsav", age: 21};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### f) For-Of Loop

Iterates over **values** of iterable objects like arrays.

```js
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

---

## 🔹 3. Break and Continue Statements

* **Break**: Exits the loop immediately.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 0, 1, 2
```

* **Continue**: Skips the current iteration and moves to the next.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0, 1, 3, 4
```

---

## 🧩 Summary Diagram

```
JavaScript Control Structures
│
├── Conditional Statements
│   ├── If
│   ├── If-Else
│   └── Switch
│
└── Loops
    ├── While
    ├── Do-While
    ├── For
    ├── Nested For
    ├── For-In (Object keys)
    └── For-Of (Iterable values)
    
Other Control Statements
├── Break (exit loop)
└── Continue (skip iteration)
```

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)