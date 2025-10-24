
# ⚙️12. JavaScript Asynchronous Programming

JavaScript is **single-threaded**, meaning it executes one task at a time.
To handle **time-consuming operations** (like fetching data, reading files, etc.) without blocking other code, JavaScript uses **asynchronous programming**.

---

## 🔹 1. Callbacks

A **callback** is a function passed as an argument to another function and executed after the task is complete.

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function bye() {
  console.log("Goodbye!");
}

greet("Utsav", bye);
```

**Output:**

```
Hello, Utsav
Goodbye!
```

✅ **Used for:**

* Event handling
* Reading files
* API requests

---

## 🔹 2. Callback Hell

When multiple callbacks are nested inside each other, code becomes **hard to read and maintain**.

```javascript
getData(function(a) {
  processData(a, function(b) {
    saveData(b, function(c) {
      displayData(c);
    });
  });
});
```

😩 This is called **Callback Hell** — a “pyramid of doom.”

✅ **Solution:** Use **Promises** or **Async/Await**.

---

## 🔹 3. Promises

A **Promise** represents a value that may be available **now, later, or never**.

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Operation finished"));
```

**Output (if success = true):**

```
Task completed!
Operation finished
```

---

## 🔹 4. Promise.then(), Promise.catch(), Promise.finally()

| Method       | Purpose                | Example                                       |
| ------------ | ---------------------- | --------------------------------------------- |
| `.then()`    | Executes when resolved | `promise.then(result => console.log(result))` |
| `.catch()`   | Executes when rejected | `.catch(error => console.log(error))`         |
| `.finally()` | Executes always        | `.finally(() => console.log("Done"))`         |

---

## 🔹 5. Promise.all(), Promise.race(), Promise.allSettled()

### `Promise.all()`

Waits for **all promises** to resolve.

```javascript
Promise.all([
  Promise.resolve("Task 1"),
  Promise.resolve("Task 2")
]).then(values => console.log(values));
```

✅ Output: `[ "Task 1", "Task 2" ]`

---

### `Promise.race()`

Returns the **first settled** (resolved or rejected) promise.

```javascript
Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 1000)),
  new Promise(res => setTimeout(() => res("Slow"), 2000))
]).then(console.log); // Output: "Fast"
```

---

### `Promise.allSettled()`

Waits for **all promises** to finish (resolved or rejected).

```javascript
Promise.allSettled([
  Promise.resolve("OK"),
  Promise.reject("Error")
]).then(console.log);
```

✅ Output:

```js
[
  { status: "fulfilled", value: "OK" },
  { status: "rejected", reason: "Error" }
]
```

---

## 🔹 6. Async / Await

Syntactic sugar for working with Promises — makes async code look synchronous.

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users/utsavvachhani");
    let data = await response.json();
    console.log(data.login);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Fetch complete.");
  }
}

fetchData();
```

✅ **Advantages:**

* Cleaner and easier to read
* Handles errors with `try...catch`

---

## 🔹 7. Fetch API

Modern way to make HTTP requests using Promises.

```javascript
fetch("https://api.github.com/users/utsavvachhani")
  .then(response => {
    if (!response.ok) throw new Error("Network Error");
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

---

## 🔹 8. Handling API Errors

Always handle both **network errors** and **response errors**.

```javascript
async function getUserData() {
  try {
    const res = await fetch("https://api.invalidurl.com");
    if (!res.ok) throw new Error("HTTP Error: " + res.status);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
}
getUserData();
```

---

## 🧩 Summary Table

| Concept                    | Description                           | Example                     |
| -------------------------- | ------------------------------------- | --------------------------- |
| **Callback**               | Function passed into another function | `greet("User", bye)`        |
| **Callback Hell**          | Nested callbacks → unreadable         | Multiple async layers       |
| **Promise**                | Future value holder                   | `new Promise()`             |
| **then / catch / finally** | Promise handlers                      | `.then().catch().finally()` |
| **Promise.all()**          | Wait all                              | `[P1, P2]`                  |
| **Promise.race()**         | Fastest promise                       | `Promise.race()`            |
| **Async/Await**            | Synchronous style async               | `await fetch()`             |
| **Fetch API**              | HTTP requests                         | `fetch(url)`                |
| **Error Handling**         | try...catch for errors                | `try { await fetch() }`     |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
