
# 🌍 **2. Node.js Environment**

📺 **YouTube:** [Node.js Crash Course – Traversy Media](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
📖 **Docs:** [Node.js API Reference](https://nodejs.org/dist/latest-v20.x/docs/api/)

---

## 🧩 **Overview**

The **Node.js environment** provides global objects, built-in modules, and APIs that allow interaction with:

* The **file system**, **operating system**, and **process environment**
* The ability to handle **asynchronous tasks** and **system-level operations**

This section covers all the key environment features every Node.js developer should master.

---

## 🌐 **1. Global Objects**

Unlike browsers, Node.js has its own **global environment**.

| Object    | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `global`  | The global namespace object (like `window` in browsers)        |
| `process` | Provides information and control over the current Node process |
| `console` | Used for logging and debugging                                 |
| `Buffer`  | Used to handle binary data                                     |

### Example:

```js
console.log(global === globalThis); // true
console.log("Node Version:", process.version);
```

---

## 🧭 **2. Command Line Arguments**

Node.js scripts can accept arguments from the terminal.

```bash
node app.js arg1 arg2 arg3
```

Inside your script:

```js
console.log(process.argv);
```

Output:

```
[
  '/usr/local/bin/node',
  '/path/to/app.js',
  'arg1',
  'arg2',
  'arg3'
]
```

🧠 Tip: `process.argv[2]` is usually your **first custom argument**.

---

## ⚙️ **3. Environment Variables**

Environment variables store sensitive or configurable data (e.g., API keys, modes).

Set and access environment variables:

### Mac/Linux:

```bash
export PORT=5000
node server.js
```

### Windows (PowerShell):

```bash
$env:PORT=5000
node server.js
```

### In code:

```js
const port = process.env.PORT || 3000;
console.log(`Server running on port ${port}`);
```

🧠 Use the **dotenv** package to manage `.env` files:

```bash
npm install dotenv
```

```js
require("dotenv").config();
console.log(process.env.DB_USER);
```

---

## 🧱 **4. Process Object**

The `process` object provides details and control over the Node.js process.

### Common properties:

```js
console.log(process.pid);        // Process ID
console.log(process.platform);   // OS platform
console.log(process.cwd());      // Current working directory
console.log(process.uptime());   // How long process has been running
```

### Events:

```js
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`);
});
```

### Exiting manually:

```js
process.exit(0); // 0 = success, 1 = error
```

---

## 🖥️ **5. OS Module**

The `os` module provides information about the operating system.

```js
const os = require("os");

console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());
```

🧩 Use case: Monitoring system performance or creating CLI tools.

---

## 🗂️ **6. Path Module**

Used to handle and manipulate **file and directory paths**.

```js
const path = require("path");

const filePath = "/user/local/bin/app.js";

console.log("Base:", path.basename(filePath));  // app.js
console.log("Dir:", path.dirname(filePath));    // /user/local/bin
console.log("Ext:", path.extname(filePath));    // .js
console.log("Join:", path.join("user", "docs", "index.html")); // user/docs/index.html
console.log("Resolve:", path.resolve("folder", "file.txt"));   // Absolute path
```

🧠 Always use `path.join()` instead of manual string concatenation for cross-platform compatibility.

---

## 🌐 **7. URL Module**

The `url` module allows you to parse and construct URLs easily.

```js
const { URL } = require("url");

const myUrl = new URL("https://example.com:8080/path?name=Utsav&age=21");

console.log(myUrl.hostname);  // example.com
console.log(myUrl.port);      // 8080
console.log(myUrl.pathname);  // /path
console.log(myUrl.searchParams.get("name")); // Utsav
```

🧩 You can modify query parameters:

```js
myUrl.searchParams.append("lang", "en");
console.log(myUrl.toString());
```

---

## ⏱️ **8. Timers in Node.js**

Node provides several timer functions for scheduling code execution.

| Function               | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `setTimeout(fn, ms)`   | Executes once after `ms` milliseconds           |
| `setInterval(fn, ms)`  | Repeats execution every `ms` milliseconds       |
| `setImmediate(fn)`     | Runs immediately after current event loop cycle |
| `process.nextTick(fn)` | Runs before next event loop tick                |

### Example:

```js
setTimeout(() => console.log("Executed after 1 second"), 1000);
setInterval(() => console.log("Runs every 2 seconds"), 2000);
setImmediate(() => console.log("Runs immediately after I/O"));
```

🧠 **Order of Execution:**
`process.nextTick()` → `setImmediate()` → `setTimeout()`

---

## ✅ **Summary Table**

| Concept        | Purpose                       |
| -------------- | ----------------------------- |
| Global Objects | Core Node environment access  |
| process.argv   | Command-line arguments        |
| process.env    | Environment variables         |
| OS Module      | System information            |
| Path Module    | Handle file paths             |
| URL Module     | Parse and manipulate URLs     |
| Timers         | Schedule async code execution |

---


⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
