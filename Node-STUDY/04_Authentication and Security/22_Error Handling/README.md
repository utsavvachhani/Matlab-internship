# ⚠️ **22. Error Handling**

📘 **Docs & References:**

* [Node.js Error Handling Guide](https://nodejs.org/api/errors.html)
* [MDN Try-Catch Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
* [Node.js Error-First Callbacks](https://nodejs.org/en/knowledge/errors/what-are-the-error-conventions/)

---

## 🧠 **Overview**

Error handling is an essential part of building reliable Node.js applications.
It ensures that unexpected issues — like missing files, failed API calls, or invalid input — are handled **gracefully** rather than crashing the app.

---

## 🔹 **1. Error Types in Node.js**

Node.js errors are mainly classified into:

| Type                   | Description                                                                           | Example                       |
| ---------------------- | ------------------------------------------------------------------------------------- | ----------------------------- |
| **Operational Errors** | Expected runtime errors due to external issues (e.g., file not found, invalid input). | `ENOENT`, `ECONNREFUSED`      |
| **Programmer Errors**  | Bugs in the code (e.g., undefined variables, wrong logic).                            | `TypeError`, `ReferenceError` |
| **System Errors**      | Occur due to system-level faults.                                                     | `EADDRINUSE`, `ENOMEM`        |

### ⚙️ Example:

```js
try {
  JSON.parse("{ bad json }");
} catch (err) {
  console.error("Parsing Error:", err.message);
}
```

---

## 🔹 **2. Try-Catch Blocks**

Used for **synchronous code** to catch and handle exceptions.

### ⚙️ Example:

```js
try {
  let data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error("Error reading file:", err.message);
}
```

🧩 **Note:**
`try-catch` does **not** handle asynchronous errors unless used with `async/await`.

---

## 🔹 **3. Error-First Callbacks**

In Node.js, callbacks follow the **error-first convention**, where the **first argument** is reserved for errors.

### ⚙️ Example:

```js
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File content:", data);
});
```

✅ Always check `if (err)` before accessing the result.

---

## 🔹 **4. Promise Error Handling**

When using Promises, errors can be caught with `.catch()`.

### ⚙️ Example:

```js
const fs = require('fs').promises;

fs.readFile('data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error("Promise Error:", err.message));
```

🧩 **Best Practice:**
Always **chain `.catch()`** to handle promise rejections and avoid **UnhandledPromiseRejectionWarning**.

---

## 🔹 **5. Async/Await Error Handling**

With `async/await`, you can use `try-catch` for cleaner async code handling.

### ⚙️ Example:

```js
const fs = require('fs').promises;

async function readData() {
  try {
    const data = await fs.readFile('data.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error("Async/Await Error:", err.message);
  }
}

readData();
```

✅ **Tip:** Wrap all `await` calls in a `try-catch` block.

---

## 🔹 **6. Global Error Handlers**

Global handlers ensure that unhandled errors do not crash your application silently.

### ⚙️ Example: Handling Uncaught Exceptions

```js
process.on('uncaughtException', (err) => {
  console.error("Uncaught Exception:", err.message);
  process.exit(1); // Optional: restart app using PM2 or nodemon
});
```

### ⚙️ Example: Handling Unhandled Promise Rejections

```js
process.on('unhandledRejection', (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
```

⚠️ These should be used as a **last line of defense**, not a replacement for proper try-catch.

---

## 🔹 **7. Custom Error Classes**

You can create your own error types for better debugging and structured handling.

### ⚙️ Example:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

function validateUser(user) {
  if (!user.name) throw new ValidationError("User name is required");
}

try {
  validateUser({});
} catch (err) {
  console.error(`${err.name}: ${err.message} (Code: ${err.statusCode})`);
}
```

🧩 **Benefits:**

* Makes errors more descriptive.
* Allows custom HTTP response codes in APIs.
* Helps centralize error handling in middleware.

---

## 🧩 **Best Practices for Error Handling**

✅ Always handle **asynchronous errors** explicitly.
✅ Use **custom error classes** for clear and structured responses.
✅ Implement a **global error handler** in Express (middleware).
✅ Don’t expose internal error details to users in production.
✅ Use **logging** (e.g., Winston, Pino) to track errors.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
