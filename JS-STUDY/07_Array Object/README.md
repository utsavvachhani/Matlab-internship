 
## 🧩 7. JavaScript Array Object

---

### 📘 Introduction

In JavaScript, **arrays** are special objects used to store multiple values in a single variable.
Each value in an array is an element, identified by an **index** starting from `0`.

```js
const fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // Output: banana
```

---

## 🔹 Creating Arrays

There are multiple ways to create arrays in JavaScript:

```js
// Using array literal (recommended)
const arr1 = [10, 20, 30];

// Using new Array() constructor
const arr2 = new Array(10, 20, 30);

// Empty array
const arr3 = [];
```

---

## 🔹 Array Properties

| Property      | Description                                   | Example           |
| ------------- | --------------------------------------------- | ----------------- |
| `length`      | Returns number of elements in an array        | `arr.length`      |
| `constructor` | Returns the constructor function of the array | `arr.constructor` |

---

## 🔹 Common Array Methods

### 🧱 Add / Remove Elements

| Method      | Description              | Example          |
| ----------- | ------------------------ | ---------------- |
| `push()`    | Adds elements to the end | `arr.push(4)`    |
| `pop()`     | Removes last element     | `arr.pop()`      |
| `shift()`   | Removes first element    | `arr.shift()`    |
| `unshift()` | Adds elements to start   | `arr.unshift(0)` |

---

### ✂️ Modify Arrays

| Method                                 | Description            | Example                   |
| -------------------------------------- | ---------------------- | ------------------------- |
| `splice(start, deleteCount, ...items)` | Add/remove elements    | `arr.splice(1, 2, 'new')` |
| `slice(start, end)`                    | Returns a new subarray | `arr.slice(1, 3)`         |

---

### 🔗 Combine & Join

| Method     | Description              | Example            |
| ---------- | ------------------------ | ------------------ |
| `concat()` | Joins multiple arrays    | `arr.concat(arr2)` |
| `join()`   | Converts array to string | `arr.join(', ')`   |

---

### 🔍 Search

| Method          | Description            | Example                |
| --------------- | ---------------------- | ---------------------- |
| `indexOf()`     | First index of element | `arr.indexOf('a')`     |
| `lastIndexOf()` | Last index of element  | `arr.lastIndexOf('a')` |
| `includes()`    | Checks existence       | `arr.includes('a')`    |

---

### 🔎 Find & Filter

| Method        | Description          | Example                      |
| ------------- | -------------------- | ---------------------------- |
| `find()`      | Returns first match  | `arr.find(x => x > 10)`      |
| `findIndex()` | Index of first match | `arr.findIndex(x => x > 10)` |
| `filter()`    | Returns all matching | `arr.filter(x => x > 10)`    |

---

### 🔁 Transform

| Method      | Description                                 | Example                    |
| ----------- | ------------------------------------------- | -------------------------- |
| `map()`     | Returns new array after applying a function | `arr.map(x => x * 2)`      |
| `forEach()` | Executes function for each element          | `arr.forEach(console.log)` |

---

### ➕ Reduce

| Method          | Description                           | Example                         |
| --------------- | ------------------------------------- | ------------------------------- |
| `reduce()`      | Reduces array to a single value (L→R) | `arr.reduce((a,b) => a+b)`      |
| `reduceRight()` | Reduces (R→L)                         | `arr.reduceRight((a,b) => a+b)` |

---

### ✅ Test Elements

| Method    | Description                                 | Example               |
| --------- | ------------------------------------------- | --------------------- |
| `some()`  | Returns true if **any** element passes test | `arr.some(x => x>5)`  |
| `every()` | Returns true if **all** elements pass test  | `arr.every(x => x>5)` |

---

### 🔄 Sort & Reverse

| Method      | Description          | Example         |
| ----------- | -------------------- | --------------- |
| `sort()`    | Sorts array elements | `arr.sort()`    |
| `reverse()` | Reverses array order | `arr.reverse()` |

---

### 🧩 Fill & Copy

| Method                           | Description                         | Example                   |
| -------------------------------- | ----------------------------------- | ------------------------- |
| `fill(value, start, end)`        | Fills elements with a value         | `arr.fill(0, 1, 3)`       |
| `copyWithin(target, start, end)` | Copies elements to another position | `arr.copyWithin(0, 2, 4)` |

---

### 🧱 Flattening Arrays

| Method      | Description            | Example                      |
| ----------- | ---------------------- | ---------------------------- |
| `flat()`    | Flattens nested arrays | `[1, [2, [3]]].flat(2)`      |
| `flatMap()` | Maps and flattens      | `arr.flatMap(x => [x, x*2])` |

---

## ⚙️ Array Destructuring (⭐ Very Important)

Destructuring allows unpacking values from arrays easily.

```js
const [a, b, c] = [10, 20, 30];
console.log(a); // 10
```

You can also skip or use default values:

```js
const [x, , y = 50] = [5];
console.log(x, y); // 5 50
```

---

## 🌈 Spread Operator with Arrays (⭐ Very Important)

Used to expand or combine arrays.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
```

Can also clone:

```js
const copy = [...arr1];
```

---

## 🧠 Summary Diagram

Would you like me to generate a **diagram** (like the “JavaScript Objects” one) showing the **Array methods & relationships** — e.g. “Create → Modify → Search → Transform → Combine”?
I can create a clear, colorful visual next.


---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)