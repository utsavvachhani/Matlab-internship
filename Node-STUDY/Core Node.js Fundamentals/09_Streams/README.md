# ⚙️ **9. Streams**

📘 **Docs:** [Node.js Streams Documentation](https://nodejs.org/api/stream.html)
📺 **YouTube:** [Streams Crash Course – Traversy Media](https://www.youtube.com/watch?v=E3tTzx0Qoj0)

---

## 🧠 **Overview**

**Streams** in Node.js are used to handle **reading and writing large data** efficiently — like working with files, network requests, or big datasets.
Instead of loading the entire data at once, streams **process data chunk by chunk**, which saves **memory** and improves **performance**.

---

## 🔹 **1. Readable Streams**

A **Readable Stream** allows you to **read data** in chunks.
Common examples: `fs.createReadStream()`, HTTP request body, process.stdin.

### Example:

```js
const fs = require('fs');

const readable = fs.createReadStream('input.txt', 'utf-8');

readable.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readable.on('end', () => {
  console.log('File reading completed.');
});
```

🧠 **Key Events:**

* `data` → When a new chunk is available
* `end` → When all data is read
* `error` → On error

---

## 🔹 **2. Writable Streams**

A **Writable Stream** lets you **write data** chunk by chunk.
Example: `fs.createWriteStream()` or HTTP response streams.

### Example:

```js
const fs = require('fs');

const writable = fs.createWriteStream('output.txt');

writable.write('Hello, ');
writable.write('this is Utsav!\n');
writable.end('Writing complete.');

writable.on('finish', () => {
  console.log('All data written successfully.');
});
```

🧠 **Key Events:**

* `finish` → When all data has been flushed
* `error` → On error

---

## 🔹 **3. Transform Streams**

**Transform Streams** are **both readable and writable**, and they can **modify data** as it passes through (e.g., compression, encryption).

### Example:

```js
const { Transform } = require('stream');

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCase).pipe(process.stdout);
```

🧠 Try typing text in the terminal — it will be converted to uppercase dynamically.

---

## 🔹 **4. Duplex Streams**

A **Duplex Stream** is both readable and writable but **does not necessarily transform** data (like sockets).

### Example:

```js
const { Duplex } = require('stream');

const duplex = new Duplex({
  read(size) {
    this.push('Hello from Duplex!\n');
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log('Writing:', chunk.toString());
    callback();
  }
});

duplex.write('Data Input');
duplex.pipe(process.stdout);
```

---

## 🔹 **5. Pipe Method**

The **`.pipe()`** method connects the **output of one stream** to the **input of another**, forming a **stream pipeline**.

### Example:

```js
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
```

🧠 This example copies data **efficiently** from `input.txt` to `output.txt` without buffering the entire file.

---

## 🔹 **6. Stream Events**

| Event    | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `data`   | Emitted when data is available to read                          |
| `end`    | Emitted when stream has no more data                            |
| `error`  | Emitted on error                                                |
| `finish` | Emitted when data is completely written                         |
| `close`  | Emitted when the stream and its underlying resources are closed |

### Example:

```js
readStream.on('error', (err) => console.error('Read Error:', err));
writeStream.on('finish', () => console.log('Write complete.'));
```

---

## 🔹 **7. Backpressure**

**Backpressure** occurs when the **readable stream** produces data **faster** than the **writable stream** can consume it.

🧠 To handle backpressure:

* Use `.pipe()` (handles it automatically)
* Use `.write()` return value and `drain` event manually

### Example:

```js
const fs = require('fs');
const readable = fs.createReadStream('bigfile.txt');
const writable = fs.createWriteStream('copy.txt');

readable.on('data', (chunk) => {
  if (!writable.write(chunk)) {
    readable.pause(); // Pause if buffer is full
  }
});

writable.on('drain', () => {
  readable.resume(); // Resume when ready
});
```

---

## 🔹 **8. Stream Performance**

✅ **Tips for optimizing stream performance:**

* Use **streaming** instead of reading/writing whole files
* Use **pipe()** for automatic flow control
* Handle **backpressure** properly
* Avoid unnecessary buffering
* Use **Transform Streams** for inline processing (compression, filtering)

---

## 🧩 **Example: File Compression using Streams**

```js
const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))
  .on('finish', () => console.log('File compressed successfully!'));
```

🧠 This example compresses a file efficiently without loading it entirely into memory.

---


⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
