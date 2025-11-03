# ⚡ **23. Performance Optimization**

📘 **Docs & References:**

* [Node.js Performance Best Practices](https://nodejs.org/en/docs/guides/simple-profiling/)
* [V8 Performance Profiling](https://v8.dev/docs/profile)
* [MDN Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)

---

## 🧠 **Overview**

Performance optimization in Node.js is about improving **execution speed**, **reducing memory usage**, and **minimizing CPU load** — ensuring applications run efficiently under heavy workloads.

Optimizing performance involves **profiling**, **monitoring**, and **tuning** different parts of your application — from code execution to database queries.

---

## 🔹 **1. Code Profiling**

Code profiling measures how long code takes to execute, and how much memory and CPU resources it consumes.
This helps identify performance bottlenecks.

### ⚙️ Example: Using `console.time()` and `console.timeEnd()`

```js
console.time('loopTime');

for (let i = 0; i < 1e6; i++) {} // Some heavy operation

console.timeEnd('loopTime'); // Outputs time taken
```

### ⚙️ Example: Inspecting Objects with `console.dir()`

```js
const user = { name: "Utsav", details: { age: 22, city: "Surat" } };
console.dir(user, { depth: null, colors: true });
```

✅ **Tools for Profiling:**

* **Node.js Built-in Profiler:**

  ```bash
  node --inspect app.js
  ```

  Access Chrome DevTools → **Performance Tab**.
* **Clinic.js / 0x:** Advanced Node profiling tools.
* **Performance Hooks API:**

  ```js
  const { performance } = require('perf_hooks');
  performance.mark('start');
  // ...code...
  performance.mark('end');
  performance.measure('Execution Time', 'start', 'end');
  ```

---

## 🔹 **2. Memory Management (Heap & Garbage Collection)**

Node.js uses **V8’s garbage collector** for memory management. However, poor code patterns (like memory leaks) can cause your app to consume unnecessary memory.

### 🧩 Common Causes of Memory Leaks:

* Unreferenced global variables
* Long-lived event listeners
* Unclosed database connections
* Cached objects that never expire

### ⚙️ Example: Monitoring Memory Usage

```js
setInterval(() => {
  const used = process.memoryUsage();
  console.log(`Heap Used: ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB`);
}, 5000);
```

### 🧠 **Heap Snapshot (Debugging Memory)**

You can take heap snapshots with:

```bash
node --inspect --inspect-brk app.js
```

Then open Chrome DevTools → **Memory Tab → Take Snapshot**.

✅ **Best Practices for Memory Optimization**

* Avoid global variables.
* Use streams instead of reading large files into memory.
* Manually remove event listeners if no longer needed (`emitter.removeListener`).
* Limit object caching or use LRU caching libraries like `node-cache` or `lru-cache`.

---

## 🔹 **3. CPU Usage Optimization**

High CPU usage often results from blocking code or inefficient loops. Node.js is **single-threaded**, so CPU-heavy tasks can block the event loop.

### ⚙️ Example: Blocking vs Non-blocking

```js
// ❌ Blocking
const data = fs.readFileSync('file.txt', 'utf8');

// ✅ Non-blocking
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 🧩 **Strategies to Optimize CPU Usage:**

* Use **Worker Threads** for CPU-bound tasks:

  ```js
  const { Worker } = require('worker_threads');
  new Worker('./heavyTask.js');
  ```
* Break large loops into smaller async chunks using `setImmediate()` or `process.nextTick()`.
* Use **clustering** to utilize multiple CPU cores:

  ```js
  const cluster = require('cluster');
  const os = require('os');

  if (cluster.isMaster) {
    os.cpus().forEach(() => cluster.fork());
  } else {
    require('./server');
  }
  ```
* Avoid synchronous crypto, zlib, or file operations in production code.

---

## 🔹 **4. Database Query Optimization**

Database performance often has the **biggest impact** on your application speed.

### ⚙️ Example: MongoDB Optimization

* Use **indexes** on frequently queried fields.
* Use **`.select()`** or **`.projection()`** to fetch only required fields.
* Prefer **aggregation pipelines** for large data processing instead of multiple queries.

```js
// Indexing
UserSchema.index({ email: 1 });

// Optimized query
User.find({ active: true }).select("name email").lean();
```

### ⚙️ Example: SQL Optimization

* Use **prepared statements** to prevent SQL injection and caching.
* Avoid `SELECT *`, fetch only required columns.
* Implement **connection pooling** to reuse connections efficiently.

```js
const [rows] = await db.execute('SELECT name, email FROM users WHERE status = ?', ['active']);
```

✅ **Best Practices for DB Optimization**

* Monitor slow queries using tools like **pgAdmin**, **MongoDB Compass**, or **MySQL EXPLAIN**.
* Use **caching layers** (e.g., Redis) for repeated queries.
* Normalize data, but also consider **denormalization** for read-heavy systems.

---

## 🧩 **Summary of Performance Optimization**

| Area                      | Focus                     | Example Tool/Method                    |
| ------------------------- | ------------------------- | -------------------------------------- |
| **Code Profiling**        | Find slow parts of code   | `console.time`, `--inspect`, Clinic.js |
| **Memory Management**     | Prevent leaks             | `process.memoryUsage()`, Heap Snapshot |
| **CPU Usage**             | Avoid blocking            | Worker Threads, Clustering             |
| **Database Optimization** | Improve query performance | Indexing, Query tuning, Caching        |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
