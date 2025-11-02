# ⚙️ **10. Buffer**

📘 **Docs:** [Node.js Buffer Documentation](https://nodejs.org/api/buffer.html)
📺 **YouTube:** [Node.js Buffers Crash Course – Traversy Media](https://www.youtube.com/watch?v=Q2KaH7dDkKk)

---

## 🧠 **Overview**

In Node.js, a **Buffer** is a temporary storage area for **binary data** — data that comes from files, network requests, or streams.
Unlike regular strings, buffers are designed to handle **raw bytes**, which makes them essential for **I/O operations** and **binary data processing**.

---

## 🔹 **1. Buffer vs String**

| Feature    | Buffer                          | String                     |
| ---------- | ------------------------------- | -------------------------- |
| Type       | Binary data                     | Text data                  |
| Encoding   | Binary (raw bytes)              | UTF-8, ASCII, etc.         |
| Mutability | Mutable                         | Immutable                  |
| Use Case   | File handling, streams, sockets | Text manipulation, display |

### Example:

```js
const str = 'Utsav';
const buf = Buffer.from(str);

console.log('String:', str);
console.log('Buffer:', buf);
console.log('Converted Back:', buf.toString());
```

🧠 Buffers store the **binary representation** of the string.

---

## 🔹 **2. Creating Buffers**

### ✅ **a. From a String**

```js
const buf1 = Buffer.from('Hello');
console.log(buf1); // <Buffer 48 65 6c 6c 6f>
```

### ✅ **b. From an Array of Bytes**

```js
const buf2 = Buffer.from([72, 101, 108, 108, 111]);
console.log(buf2.toString()); // Hello
```

### ✅ **c. Allocating Empty Buffer**

```js
const buf3 = Buffer.alloc(10); // creates buffer of length 10 filled with zeros
console.log(buf3);
```

### ✅ **d. Unsafe Allocation**

```js
const buf4 = Buffer.allocUnsafe(10); // faster, but may contain old data
console.log(buf4);
```

⚠️ Use `Buffer.allocUnsafe()` **only when you overwrite the entire buffer**, as it may contain sensitive leftover memory data.

---

## 🔹 **3. Buffer Methods**

| Method                     | Description                                  | Example                       |
| -------------------------- | -------------------------------------------- | ----------------------------- |
| `buf.toString([encoding])` | Converts buffer to string                    | `buf.toString('utf8')`        |
| `buf.write(string)`        | Writes string into buffer                    | `buf.write('Hi')`             |
| `buf.slice(start, end)`    | Returns a new buffer sharing the same memory | `buf.slice(0, 2)`             |
| `buf.copy(target)`         | Copies data to another buffer                | `buf.copy(targetBuf)`         |
| `Buffer.concat([...])`     | Concatenates multiple buffers                | `Buffer.concat([buf1, buf2])` |
| `buf.length`               | Returns buffer length                        | `console.log(buf.length)`     |

### Example:

```js
const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('World');
const combined = Buffer.concat([buf1, buf2]);
console.log(combined.toString()); // Hello World
```

---

## 🔹 **4. Buffer Encoding**

Buffers support various **encodings** for converting between binary data and text.

| Encoding | Description                                               |
| -------- | --------------------------------------------------------- |
| `utf8`   | Default encoding for text                                 |
| `ascii`  | 7-bit ASCII characters                                    |
| `base64` | Common for encoding binary in text (e.g., images in HTML) |
| `hex`    | Represents each byte as two hexadecimal digits            |

### Example:

```js
const buf = Buffer.from('Utsav');
console.log('UTF-8:', buf.toString('utf8'));
console.log('Base64:', buf.toString('base64'));
console.log('Hex:', buf.toString('hex'));
```

---

## 🔹 **5. Buffer and Streams**

Buffers are **core to stream processing**.
When data flows through a **Readable Stream**, it arrives in **chunks**, each represented as a **Buffer**.

### Example:

```js
const fs = require('fs');

const stream = fs.createReadStream('file.txt');

stream.on('data', (chunk) => {
  console.log('Chunk (Buffer):', chunk);
  console.log('Chunk (String):', chunk.toString());
});
```

🧠 Each chunk of data read from the file is a `Buffer` — streams automatically handle these buffers under the hood.

---

## 🔹 **6. Memory Management with Buffers**

Buffers are allocated **outside of the V8 heap**, directly in **Node’s native memory space**.

### Tips for Efficient Memory Use:

✅ Use `Buffer.alloc()` instead of `Buffer.allocUnsafe()` to avoid data leaks
✅ Free up references when buffers are no longer needed
✅ Avoid creating large buffers unnecessarily
✅ Use streams to process large files in chunks instead of reading them fully

---

## 🧩 **Example: Reading and Writing with Buffers**

```js
const fs = require('fs');

// Read data as a buffer
const data = fs.readFileSync('input.txt');
console.log('Raw Buffer:', data);
console.log('As Text:', data.toString());

// Write buffer data to a file
const newBuffer = Buffer.from('Hello Utsav!');
fs.writeFileSync('output.txt', newBuffer);
console.log('Buffer written to output.txt');
```

🧠 This example reads and writes data using buffers instead of plain strings.

---

## 💡 **Quick Recap**

* Buffers handle **binary data** efficiently.
* Strings are **immutable**, Buffers are **mutable**.
* Used heavily in **streams, file I/O, and networking**.
* Support multiple **encodings** like UTF-8, Base64, Hex.
* **Efficient memory management** ensures performance and security.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
