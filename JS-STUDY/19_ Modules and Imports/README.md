## 🧩 **19. JavaScript Modules and Imports**

JavaScript **Modules** are files that **contain reusable code**.
They help in organizing code into **separate files**, improving **readability**, **maintainability**, and **reusability**.

Introduced in **ES6 (ECMAScript 2015)**, modules use the keywords `export` and `import`.

---

### 1️⃣ **ES6 Modules (Introduction)**

* Each JavaScript file is treated as a **module**.
* Variables, functions, or classes inside a module are **scoped** to that module by default.
* To make them available in other files, we use **exports**.
* To use them, we use **imports**.

✅ **Example:**

**📁 math.js**

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**📁 main.js**

```js
import { add, subtract } from './math.js';

console.log(add(5, 3));       // 8
console.log(subtract(9, 4));  // 5
```

💡 You must run these with a module-aware environment (like modern browsers or Node.js with `"type": "module"` in `package.json`).

---

### 2️⃣ **Import and Export**

#### 🔹 **Exporting**

You can export **variables, functions, or classes** from a file.

**Types of Exports:**

1. **Named Exports**
2. **Default Exports**

---

### 3️⃣ **Named Exports**

* You can export **multiple things** from a module.
* Import must use **the same name** inside `{ }`.

✅ **Example:**

**📁 utils.js**

```js
export const greet = name => `Hello, ${name}`;
export const PI = 3.14159;
```

**📁 app.js**

```js
import { greet, PI } from './utils.js';

console.log(greet("Utsav")); // Hello, Utsav
console.log(PI);             // 3.14159
```

💡 You can also rename while importing:

```js
import { greet as sayHello } from './utils.js';
```

---

### 4️⃣ **Default Exports**

* Each module can have **only one default export**.
* You **don’t need curly braces `{}`** when importing it.
* You can also **rename** it freely.

✅ **Example:**

**📁 calculator.js**

```js
export default function add(a, b) {
  return a + b;
}
```

**📁 main.js**

```js
import addNumbers from './calculator.js';

console.log(addNumbers(4, 6)); // 10
```

💡 You can name the import anything (it doesn’t need to match the export name).

---

### 5️⃣ **Mixing Named and Default Exports**

✅ **Example:**

**📁 mathOperations.js**

```js
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

export default function add(a, b) {
  return a + b;
}
```

**📁 main.js**

```js
import add, { multiply, divide } from './mathOperations.js';

console.log(add(5, 3));       // 8
console.log(multiply(5, 3));  // 15
console.log(divide(9, 3));    // 3
```

---

### 6️⃣ **Dynamic Imports**

Dynamic import allows you to **load modules at runtime** (on demand) instead of at the beginning.

✅ **Syntax:**

```js
import('./module.js')
  .then(module => {
    console.log(module.default());
  })
  .catch(err => console.error('Error loading module:', err));
```

✅ **Example:**

```js
button.addEventListener('click', async () => {
  const { greet } = await import('./utils.js');
  greet('Utsav');
});
```

💡 Useful for **lazy loading** modules and **code splitting** in large applications.

---

### 7️⃣ **CommonJS vs ES6 Modules**

| Feature         | CommonJS                       | ES6 Modules              |
| --------------- | ------------------------------ | ------------------------ |
| Syntax          | `require()` / `module.exports` | `import` / `export`      |
| Loading         | Synchronous                    | Asynchronous             |
| Used In         | Node.js (older versions)       | Browser + modern Node.js |
| Default Export  | `module.exports = value`       | `export default value`   |
| Named Exports   | `exports.name = value`         | `export { name }`        |
| File Extension  | `.js` or `.cjs`                | `.js` or `.mjs`          |
| Top-level await | ❌ Not supported                | ✅ Supported              |

✅ **CommonJS Example:**

```js
// math.js
module.exports = {
  add: (a, b) => a + b
};

// main.js
const { add } = require('./math');
console.log(add(2, 3)); // 5
```

✅ **ES6 Example:**

```js
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
```

---

### 🧩 **Summary Table**

| Concept        | Description           | Example                        |
| -------------- | --------------------- | ------------------------------ |
| ES6 Module     | Each file is a module | `export`, `import`             |
| Named Export   | Export multiple items | `export const a = 10;`         |
| Default Export | One per module        | `export default func`          |
| Dynamic Import | Import at runtime     | `import('./file.js')`          |
| CommonJS       | Older Node.js format  | `require()` / `module.exports` |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
