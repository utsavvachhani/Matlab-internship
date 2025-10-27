# ⚙️ 16. JavaScript Engines and Performance

JavaScript is a **single-threaded**, **synchronous** language — but it can handle **asynchronous** tasks efficiently through the **event loop**, **callbacks**, and **promises**.
Behind the scenes, the **JavaScript Engine** (like Google’s **V8**) is responsible for parsing, compiling, executing, and managing memory efficiently.

---

## 🔹 1. Call Stack

The **Call Stack** is a data structure used by the JavaScript engine to **keep track of function execution**.

* When a function is called → it’s **pushed** onto the stack.
* When it returns → it’s **popped** from the stack.
* JavaScript executes code **top-to-bottom** and **one function at a time**.

### 🧠 Example:

```js
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();
```

### 🧩 Execution Flow:

```
1. Call second() → pushed
2. Call first()  → pushed
3. Execute console.log("First") → popped
4. Execute console.log("Second") → popped
```

📊 **Stack Visual:**

```
| second()  |  ← top
| first()   |
| main()    |
```

---

## 🔹 2. Event Loop

JavaScript is **non-blocking**, meaning it can perform asynchronous operations.
The **Event Loop** continuously checks:

1. Is the **Call Stack** empty?
2. If yes, it moves **callbacks** from the **Message Queue** or **Microtask Queue** to the Call Stack.

🌀 The Event Loop ensures JavaScript handles async tasks like `setTimeout`, `fetch`, or `Promises` smoothly.

---

## 🔹 3. Message Queue (Callback Queue)

The **Message Queue** (also called the **Callback Queue**) holds **callbacks** waiting to be executed after asynchronous operations complete.

### Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
```

### Output:

```
Start
End
Async Task
```

✅ `setTimeout` callback goes to the **Message Queue** and executes **after the stack is empty**.

---

## 🔹 4. Microtasks vs Macrotasks

| Type           | Examples                                           | Executed When                                              |
| -------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| **Microtasks** | `Promise.then()`, `queueMicrotask()`               | Before next rendering cycle (after current stack finishes) |
| **Macrotasks** | `setTimeout`, `setInterval`, `I/O`, `setImmediate` | After microtasks complete                                  |

### Example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Output:

```
A
D
C
B
```

💡 **Reason:** Promises (microtasks) run **before** setTimeout (macrotasks).

---

## 🔹 5. JavaScript Engines

A **JavaScript Engine** executes JS code. It has two main components:

1. **Memory Heap** – where variables and objects are stored.
2. **Call Stack** – where execution happens.

### ⚙️ Popular JavaScript Engines:

| Engine                     | Developer | Used In               |
| -------------------------- | --------- | --------------------- |
| **V8**                     | Google    | Chrome, Node.js, Deno |
| **SpiderMonkey**           | Mozilla   | Firefox               |
| **JavaScriptCore (Nitro)** | Apple     | Safari                |
| **Chakra**                 | Microsoft | Edge (Legacy)         |
| **Hermes**                 | Meta      | React Native          |

### 🔧 Simplified Flow:

```
Source Code → Parser → AST → Interpreter → Machine Code (Optimized by JIT Compiler)
```

---

## 🔹 6. Memory Management

Memory management involves **allocating**, **using**, and **freeing** memory efficiently.

* **Memory Heap**: Large, unstructured region storing variables and objects.
* **Stack**: Stores primitive values and references to objects.

### Example:

```js
let num = 10;       // stored in stack
let obj = { x: 1 }; // object stored in heap
```

---

## 🔹 7. Garbage Collection

The **Garbage Collector (GC)** automatically removes unused objects from memory to prevent leaks.

It uses algorithms like:

* **Mark-and-Sweep Algorithm**

  * Marks all reachable (in-use) objects.
  * Removes all unreferenced (unreachable) ones.

### Example:

```js
let person = { name: "Utsav" };
person = null; // object is now unreachable → GC will reclaim memory
```

✅ You don’t manually free memory — GC does it automatically!

---

## 🔹 8. `setTimeout` and `setInterval`

### **`setTimeout()`**

Executes a function **once** after a specified delay.

```js
setTimeout(() => console.log("Executed once"), 1000);
```

---

### **`setInterval()`**

Executes a function **repeatedly** at a fixed interval.

```js
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);
  if (count === 3) clearInterval(intervalId); // stops after 3 times
}, 1000);
```

---

## 🔹 9. 🧩 Visual Flow Diagram

```
         ┌─────────────────────────┐
         │     JavaScript Code     │
         └────────────┬────────────┘
                      ↓
               ┌──────────────┐
               │  Call Stack  │
               └──────────────┘
                      ↓
         ┌─────────────────────────┐
         │   Web APIs (Timers, IO) │
         └─────────────────────────┘
                      ↓
               ┌──────────────┐
               │ Message Queue│ ← setTimeout, setInterval
               └──────────────┘
                      ↓
               ┌──────────────┐
               │ Microtasks   │ ← Promises, queueMicrotask
               └──────────────┘
                      ↓
               ┌──────────────┐
               │ Event Loop   │
               └──────────────┘
```

---

## 🧠 Summary

| Concept                      | Description                               |
| ---------------------------- | ----------------------------------------- |
| **Call Stack**               | Executes functions one by one             |
| **Event Loop**               | Manages async operations                  |
| **Message Queue**            | Holds async callbacks                     |
| **Microtasks**               | Promise-based callbacks (higher priority) |
| **JavaScript Engine**        | Parses, compiles, and executes code       |
| **Memory Management**        | Allocation and cleanup of memory          |
| **Garbage Collection**       | Automatically frees unused memory         |
| **setTimeout / setInterval** | Schedule delayed or repeated tasks        |

---

⭐ **Tip for Performance Optimization:**

* Avoid blocking the main thread (use async code).
* Use **debouncing/throttling** for event-heavy functions.
* Optimize loops and minimize memory usage.
* Use **Web Workers** for CPU-heavy tasks.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
