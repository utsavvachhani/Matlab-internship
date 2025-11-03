# 🐞 **25. Debugging**

📘 **Docs & References:**

* [Node.js Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
* [VS Code Debugger](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

---

## 🧠 **Overview**

Debugging is the process of **identifying, analyzing, and fixing errors** in your application.
Node.js provides built-in debugging tools and integrates smoothly with modern IDEs like **VS Code**.

---

## 🔹 **1. Node.js Debugger**

Node.js comes with a built-in debugger you can use directly in the terminal.

### ▶️ Start Debug Mode

```bash
node inspect app.js
```

You can add **breakpoints** in your code using:

```js
debugger;
```

When Node reaches this line, execution pauses.

### Example:

```js
// app.js
let x = 10;
let y = 20;
debugger; // Execution stops here
let sum = x + y;
console.log(sum);
```

Then run:

```bash
node inspect app.js
```

### Common Debugger Commands

| Command    | Description                       |
| ---------- | --------------------------------- |
| `c`        | Continue execution                |
| `n`        | Next line (step over)             |
| `s`        | Step into a function              |
| `o`        | Step out of a function            |
| `repl`     | Evaluate expressions in real time |
| `ctrl + c` | Exit debugger                     |

---

## 🔹 **2. VS Code Debugging**

VS Code provides a **graphical debugger** for Node.js apps.

### ▶️ Setup Steps

1. Open your project in VS Code
2. Go to **Run → Add Configuration → Node.js**
3. A `.vscode/launch.json` file will be created.

### Example Configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch App",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

Now press **F5** or click ▶️ to start debugging.
You can set **breakpoints** directly in the editor.

---

## 🔹 **3. Logging Strategies**

Logging is essential for understanding how your app behaves in production.

### ✅ Simple Console Logging

```js
console.log("Server started on port 3000");
console.error("Something went wrong!");
console.warn("Deprecated API in use");
```

### ✅ Using Winston or Pino (Advanced)

Install Winston:

```bash
npm install winston
```

Example:

```js
const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.info("Server started");
logger.error("Database connection failed");
```

---

## 🔹 **4. Memory Leak Detection**

Memory leaks occur when objects remain in memory even when no longer needed, leading to **performance degradation**.

### 🧩 Identify Leaks

Use the built-in **`--inspect`** flag to open Chrome DevTools:

```bash
node --inspect app.js
```

Then open:

```
chrome://inspect
```

and connect to the running Node process.

### 🔍 Tools for Memory Analysis

* **Chrome DevTools** → Memory tab (Heap snapshots)
* **Node Clinic Heap Profiler**
* **clinic.js** or **heapdump** for advanced analysis

Example with `clinic`:

```bash
npm install -g clinic
clinic doctor -- node app.js
```

---

## ✅ **Best Practices**

| Area                  | Practice                                                       |
| --------------------- | -------------------------------------------------------------- |
| **Logging**           | Use structured logs with timestamps and levels                 |
| **Error Tracking**    | Use tools like Sentry or LogRocket                             |
| **Memory Management** | Release unused variables and close DB connections              |
| **Debugging**         | Use breakpoints instead of multiple `console.log()` statements |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
