# 📂 **4. File System Operations**

📺 **YouTube:** [Node.js File System (fs) Module Crash Course – Traversy Media](https://www.youtube.com/watch?v=U57kU311-nE)
📖 **Docs:** [Node.js File System Docs](https://nodejs.org/dist/latest-v20.x/docs/api/fs.html)

---

## 🧠 **Overview**

The **File System (fs)** module in Node.js allows you to interact with files and directories — creating, reading, writing, updating, and deleting them.

Node provides **both synchronous and asynchronous** methods for most file system tasks.

---

## ⚡ **1. Synchronous vs Asynchronous File Operations**

Node.js provides two variants for most file operations:

| Type             | Description                                     | Example             |
| ---------------- | ----------------------------------------------- | ------------------- |
| **Synchronous**  | Blocks the event loop until operation completes | `fs.readFileSync()` |
| **Asynchronous** | Non-blocking, uses callbacks or Promises        | `fs.readFile()`     |

### Example:

```js
const fs = require("fs");

// ✅ Synchronous
const data = fs.readFileSync("example.txt", "utf8");
console.log("Sync Read:", data);

// ✅ Asynchronous
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Async Read:", data);
});
```

🧠 **Best Practice:**
Use **asynchronous** methods to prevent blocking other operations in your app.

---

## 📖 **2. Reading Files (`readFile`, `readFileSync`)**

### Example:

```js
const fs = require("fs");

// Async read
fs.readFile("data.txt", "utf8", (err, content) => {
  if (err) return console.error(err);
  console.log("Async File Content:", content);
});

// Sync read
const text = fs.readFileSync("data.txt", "utf8");
console.log("Sync File Content:", text);
```

---

## ✍️ **3. Writing Files (`writeFile`, `writeFileSync`)**

You can create or overwrite files using these methods.

### Example:

```js
const fs = require("fs");

// Async write
fs.writeFile("output.txt", "Hello, Node.js!", (err) => {
  if (err) throw err;
  console.log("File written successfully (async).");
});

// Sync write
fs.writeFileSync("output-sync.txt", "Synchronous write example");
console.log("File written successfully (sync).");
```

🧠 If the file doesn’t exist, Node will **create it automatically**.

---

## 🧰 **4. File Operations (Copy, Rename, Delete)**

### ✅ Copy File

```js
fs.copyFile("data.txt", "backup.txt", (err) => {
  if (err) throw err;
  console.log("File copied successfully!");
});
```

### ✅ Rename File

```js
fs.rename("old.txt", "new.txt", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});
```

### ✅ Delete File

```js
fs.unlink("delete-me.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});
```

---

## 📁 **5. Directory Operations**

### ✅ Create Directory

```js
fs.mkdir("myFolder", (err) => {
  if (err) throw err;
  console.log("Directory created!");
});
```

### ✅ Read Directory

```js
fs.readdir(".", (err, files) => {
  if (err) throw err;
  console.log("Files in current directory:", files);
});
```

### ✅ Delete Directory

```js
fs.rmdir("myFolder", (err) => {
  if (err) throw err;
  console.log("Directory removed!");
});
```

🧠 Use `fs.rm("dir", { recursive: true })` for deleting non-empty directories (Node v14+).

---

## 💧 **6. File Streams**

Streams handle **large files efficiently** by processing data in chunks.

### Example:

```js
const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", "utf8");
const writeStream = fs.createWriteStream("copy.txt");

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.log("File copied using streams!");
});
```

🧠 Best for large file operations like video/audio or logs.

---

## 📊 **7. Working with CSV and JSON Files**

### ✅ Reading & Writing JSON

```js
const fs = require("fs");

// Read JSON
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
console.log(data.name);

// Write JSON
const newData = { name: "Utsav", age: 21 };
fs.writeFileSync("user.json", JSON.stringify(newData, null, 2));
```

### ✅ Reading CSV (using `csv-parser`)

```js
const fs = require("fs");
const csv = require("csv-parser");

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => console.log(row))
  .on("end", () => console.log("CSV file processed."));
```

---


⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
