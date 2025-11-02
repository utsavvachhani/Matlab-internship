
# 🚀 **1. Node.js Introduction**

📺 **YouTube:** [Node.js Crash Course – Traversy Media](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
📖 **Docs:** [Node.js Official Documentation](https://nodejs.org/en/docs)

---

## 🧩 **What is Node.js?**

**Node.js** is an open-source, cross-platform **JavaScript runtime environment** that executes JavaScript code outside of a browser.
It enables developers to build **scalable network applications**, APIs, and servers using JavaScript on the backend.

🟢 **Key Points:**

* Built on **Google’s V8 Engine** (same as Chrome)
* Uses **event-driven**, **non-blocking I/O**
* Ideal for **real-time**, **data-intensive** applications

---

## ⚙️ **Node.js vs Browser JavaScript**

| Feature       | Node.js                           | Browser                  |
| ------------- | --------------------------------- | ------------------------ |
| Environment   | Server-side                       | Client-side              |
| Global Object | `global`                          | `window`                 |
| APIs          | File system, network, OS, etc.    | DOM, Fetch API, Web APIs |
| Modules       | CommonJS (`require`) / ES Modules | ES Modules only          |
| Use Case      | Back-end, APIs, tools             | Front-end, UI logic      |

---

## 🧠 **Node.js Architecture**

Node.js follows a **Single Threaded Event Loop Model**:

1. **Event Loop** handles multiple concurrent requests.
2. **Worker Pool (libuv)** executes I/O operations in the background.
3. **Callback Queue** returns results to the event loop once tasks finish.

This allows Node.js to handle thousands of connections efficiently with minimal threads.

🧩 **Core Components:**

* V8 Engine (Executes JS)
* Event Loop
* Libuv Thread Pool
* C++ Core Bindings

---

## ⚡ **V8 JavaScript Engine**

* Developed by **Google** (used in Chrome & Node.js)
* Compiles JavaScript directly into **machine code** using **Just-In-Time (JIT)** compilation
* Provides high performance and memory optimization

🧠 **Example:**

```js
console.log("Powered by V8 Engine!");
```

---

## 🔁 **Event-Driven, Non-blocking I/O**

Node.js operates on an **asynchronous event-driven model**:

* Tasks like file I/O or network requests **don’t block** execution.
* Instead, Node registers callbacks and moves on to the next task.

🧩 **Example:**

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

console.log("Reading file asynchronously...");
```

Output:

```
Reading file asynchronously...
<contents of data.txt>
```

---

## 🧰 **Installation and Setup**

1. Download from 👉 [https://nodejs.org](https://nodejs.org)
2. Verify installation:

   ```bash
   node -v
   npm -v
   ```
3. Create your first script:

   ```bash
   echo "console.log('Hello Node!')" > app.js
   node app.js
   ```

---

## 💡 **Node.js REPL (Read-Eval-Print Loop)**

Start interactive Node shell:

```bash
node
```

Then type:

```js
> 2 + 2
4
> console.log("Hello World");
Hello World
```

Useful for testing and debugging snippets quickly.

---

## ▶️ **Running Node.js Applications**

Create a file named `server.js`:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js Server!");
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

Run with:

```bash
node server.js
```

Then visit 👉 **[http://localhost:3000](http://localhost:3000)**

---

## ⚔️ **Node.js vs Other Backend Technologies**

| Technology          | Language   | Strengths                          |
| ------------------- | ---------- | ---------------------------------- |
| **Node.js**         | JavaScript | Non-blocking I/O, real-time apps   |
| **Python (Django)** | Python     | Rapid development, readability     |
| **Java (Spring)**   | Java       | Enterprise-grade, multi-threaded   |
| **PHP (Laravel)**   | PHP        | Easy to host, traditional web apps |

🧠 Node.js excels in:

* Real-time applications (Chat, Gaming)
* Streaming apps
* RESTful APIs
* Microservices

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
