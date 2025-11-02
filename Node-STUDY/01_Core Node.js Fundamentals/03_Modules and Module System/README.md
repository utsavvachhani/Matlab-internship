
# 📦 **3. Modules and Module System**

📺 **YouTube:** [Node.js Modules Crash Course – Traversy Media](https://www.youtube.com/watch?v=xHLd36QoS4k)
📖 **Docs:** [Node.js Modules Docs](https://nodejs.org/dist/latest-v20.x/docs/api/modules.html)
📝 **Read:** [Node.js Module Resolution (Medium)](https://medium.com/outbrain-engineering/node-js-module-resolution-af46715784ef)

---

## 🧩 **Overview**

Modules are the **building blocks** of every Node.js application.
They help organize code into reusable units — making projects modular, maintainable, and efficient.

In Node.js, each file is treated as a **separate module**.

---

## 🧠 **1. CommonJS Modules**

Node.js uses the **CommonJS module system** by default.

* Each `.js` file is a module.
* Exports are shared using `module.exports`.
* Imports are loaded using `require()`.

### Example:

📁 **math.js**

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

📁 **app.js**

```js
const math = require("./math");

console.log(math.add(5, 3)); // 8
console.log(math.subtract(10, 4)); // 6
```

✅ This is the most common system in Node.js (especially before ES Modules).

---

## 🔄 **2. `module.exports` vs `exports`**

Both are used to export data, but there’s a subtle difference.

### ✅ Correct usage:

```js
// moduleA.js
module.exports = { greet: () => console.log("Hello") };
```

### ✅ Shortcut (valid only if you modify properties, not reassign):

```js
// moduleB.js
exports.sayHi = () => console.log("Hi");
```

### ❌ Incorrect usage:

```js
exports = { sayHi: () => console.log("Hi") }; // ❌ breaks the reference
```

🧠 Rule of thumb:

> If you’re exporting an **object or class**, use `module.exports`.
> If you’re adding multiple **named exports**, use `exports.property`.

---

## 📥 **3. `require()` Function**

`require()` is used to **import modules** in CommonJS.

```js
const fs = require("fs");       // Core module
const calc = require("./calc"); // Local module
const _ = require("lodash");    // Third-party module
```

It performs the following steps:

1. Resolves the file path.
2. Loads and executes the module.
3. Returns the exported object.

---

## ⚡ **4. Module Caching**

Once a module is loaded, it’s **cached** in memory.
Subsequent `require()` calls return the cached version.

### Example:

```js
// counter.js
let count = 0;
module.exports.increment = () => ++count;
```

```js
// app.js
const counter1 = require("./counter");
const counter2 = require("./counter");

counter1.increment();
console.log(counter2.increment()); // 2 → both share same cached instance
```

🧠 To reload a module fresh:

```js
delete require.cache[require.resolve("./counter")];
```

---

## 🧰 **5. Core Modules vs Local Modules vs Third-party Modules**

| Type                    | Description                            | Example                                   |
| ----------------------- | -------------------------------------- | ----------------------------------------- |
| **Core Modules**        | Built into Node.js                     | `fs`, `path`, `http`, `os`                |
| **Local Modules**       | Custom modules created in your project | `require('./math')`                       |
| **Third-party Modules** | Installed via npm                      | `require('express')`, `require('lodash')` |

### Example:

```js
const fs = require("fs");         // Core
const myUtils = require("./util"); // Local
const express = require("express"); // Third-party
```

---

## 🔧 **6. ES6 Modules (import/export)**

Modern Node.js supports **ES Modules (ESM)** natively.

### Enable in Node:

In `package.json`:

```json
{ "type": "module" }
```

### Example:

📁 **math.js**

```js
export function add(a, b) {
  return a + b;
}
```

📁 **app.js**

```js
import { add } from "./math.js";
console.log(add(2, 3)); // 5
```

### Default Export Example:

```js
// math.js
export default function multiply(a, b) {
  return a * b;
}

// app.js
import multiply from "./math.js";
```

🧠 ESM supports **top-level await** and **static imports**, unlike CommonJS.

---

## 🧭 **7. Module Resolution Algorithm**

Node.js resolves module paths using this sequence:

1. **Core Modules** (like `fs`, `http`)
2. **File or Directory**

   * Tries to resolve `./module.js`, `./module.json`, `./module.node`
3. **Node Modules Folder**

   * Searches up the directory tree:
     `/node_modules/ → ../node_modules/ → ../../node_modules/`
4. **Global Paths** (if manually configured)

📖 Reference: [Node.js Module Resolution Medium Article](https://medium.com/outbrain-engineering/node-js-module-resolution-af46715784ef)

---

## 🔁 **8. Circular Dependencies**

A **circular dependency** happens when two modules depend on each other.

### Example:

```js
// a.js
const b = require("./b");
console.log("a.js loaded");
module.exports = { fromA: "Hello from A" };

// b.js
const a = require("./a");
console.log("b.js loaded");
module.exports = { fromB: "Hello from B" };
```

🧠 Node handles this by **returning a partial (incomplete)** export until both modules finish loading.
Avoid circular imports — refactor shared logic into a third module when needed.

---

## ✅ **Summary Table**

| Concept               | Description                           |
| --------------------- | ------------------------------------- |
| CommonJS              | Default module system in Node.js      |
| `module.exports`      | Used to define what gets exported     |
| `require()`           | Imports modules synchronously         |
| Caching               | Modules load once and then are reused |
| Core Modules          | Built-in Node modules                 |
| ES6 Modules           | Modern import/export syntax           |
| Resolution Algorithm  | How Node finds modules                |
| Circular Dependencies | Mutual module imports — to avoid      |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)