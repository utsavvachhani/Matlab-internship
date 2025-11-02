# ⚙️ **7. Asynchronous Programming**

📺 **YouTube:** [Asynchronous JavaScript & Node.js Explained – Fireship](https://www.youtube.com/watch?v=PoRJizFvM7s)
📖 **Docs:** [Node.js Async Programming Guide](https://nodejs.org/en/learn/asynchronous-work/)

---

## 🧠 **Overview**

JavaScript in Node.js runs on a **single-threaded event loop**.
To prevent blocking the main thread, Node.js uses **asynchronous programming** — allowing tasks like file reading, HTTP requests, and database queries to happen **without waiting** for each other.

Asynchronous code helps achieve:

* Better performance
* Non-blocking I/O
* Efficient use of system resources

---

## 🔁 **1. Callbacks**

A **callback** is a function passed as an argument to another function, to be executed later.

### Example:

```js
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Callback executed after data fetch.");
});
```

💡 *Callbacks* are the foundation of async programming in Node.js — many APIs use them, e.g.:

```js
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

---

## 😵‍💫 **2. Callback Hell**

When multiple async operations depend on each other, callbacks can get deeply nested — this is called **callback hell**.

### Example:

```js
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});
```

🔻 Problem: Hard to read, debug, and maintain.
✅ Solution: Use **Promises** or **async/await**.

---

## 🌈 **3. Promises**

A **Promise** represents a value that may be available now, later, or never.

### States:

* **Pending** → Initial state
* **Fulfilled** → Operation successful
* **Rejected** → Operation failed

### Example:

```js
const fetchData = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    success ? resolve("Data loaded") : reject("Error loading data");
  }, 1000);
});

fetchData
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

💡 Chaining:

```js
getUser()
  .then(getPosts)
  .then(getComments)
  .then(console.log)
  .catch(console.error);
```

---

## ⚔️ **4. Promise.all() & Promise.race()**

### 🧩 `Promise.all()`

Runs multiple promises **in parallel** and resolves when *all succeed*.

```js
Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then(([user, posts, comments]) => {
    console.log(user, posts, comments);
  })
  .catch((err) => console.error(err));
```

### ⚡ `Promise.race()`

Resolves or rejects **as soon as one promise settles** (first finished wins).

```js
Promise.race([taskA(), taskB()])
  .then((result) => console.log("First finished:", result))
  .catch(console.error);
```

---

## 🧩 **5. Async / Await**

`async` and `await` provide a cleaner, synchronous-looking syntax for handling promises.

### Example:

```js
async function loadData() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    console.log(posts);
  } catch (err) {
    console.error("Error:", err);
  }
}
```

🧠

* `async` makes a function return a Promise.
* `await` pauses execution until the Promise resolves.
* Works only inside `async` functions.

---

## 🪲 **6. Error Handling in Async Code**

### Using `.catch()`:

```js
fetchData().then(console.log).catch(console.error);
```

### Using `try...catch` with async/await:

```js
async function main() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error("Caught error:", err);
  }
}
```

🧠 Always handle errors to avoid **unhandled promise rejections**.

---

## 🔄 **7. Event Loop**

The **Event Loop** is the mechanism that allows Node.js to perform **non-blocking I/O** operations despite being single-threaded.

It processes events and callbacks from the **callback queue** after executing the main (synchronous) code.

### Simplified flow:

```
1. Execute synchronous code (call stack)
2. Handle async tasks via APIs (e.g. setTimeout, fs)
3. Push callbacks to the event queue
4. Event loop picks and executes them when the stack is empty
```

📘 Visualization:

```
Call Stack  →  Node APIs  →  Callback Queue  →  Event Loop
```

### Example:

```js
console.log("Start");

setTimeout(() => console.log("Timeout callback"), 0);

console.log("End");
```

🧠 Output:

```
Start
End
Timeout callback
```

---

## 🚀 **8. Blocking vs Non-blocking Operations**

| Operation Type   | Description                                           | Example             |
| ---------------- | ----------------------------------------------------- | ------------------- |
| **Blocking**     | Stops further execution until the operation completes | `fs.readFileSync()` |
| **Non-blocking** | Executes asynchronously, allowing other code to run   | `fs.readFile()`     |

### Example:

```js
const fs = require('fs');

// Blocking
const data = fs.readFileSync('file.txt', 'utf8');
console.log("Blocking read:", data);

// Non-blocking
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log("Non-blocking read:", data);
});
```

✅ Non-blocking operations are preferred in Node.js for better performance and scalability.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
