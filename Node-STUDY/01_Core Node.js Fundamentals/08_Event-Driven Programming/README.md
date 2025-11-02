# ⚙️ **8. Event-Driven Programming**

📘 **Docs:** [Node.js Events Documentation](https://nodejs.org/api/events.html)
📺 **YouTube:** [EventEmitter Explained – Fireship](https://www.youtube.com/watch?v=GntEmGzZKxA)

---

## 🧠 **Overview**

Node.js applications are built on an **event-driven architecture**, meaning actions are triggered in response to **events** (like HTTP requests, file reads, or custom triggers).
This is made possible through the **EventEmitter** class, which allows you to:

* Create and emit your own events
* Attach and remove event listeners
* Handle errors gracefully

---

## 🔹 **1. EventEmitter Class**

Node.js provides the **`EventEmitter`** class from the `events` module.

### Example:

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
```

You can now emit and listen to custom events.

---

## 🔹 **2. Creating Custom Events**

Use the `.emit()` method to **trigger** an event and `.on()` to **listen** for it.

### Example:

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit event
emitter.emit('greet', 'Utsav');
```

🧠 Output:

```
Hello, Utsav!
```

💡 You can pass **multiple arguments** while emitting events.

---

## 🔹 **3. Event Listeners**

Each event can have **multiple listeners** attached to it.

```js
emitter.on('welcome', () => console.log('Listener 1: Welcome!'));
emitter.on('welcome', () => console.log('Listener 2: Good to see you!'));

emitter.emit('welcome');
```

🧠 Output:

```
Listener 1: Welcome!
Listener 2: Good to see you!
```

### Get count of listeners:

```js
console.log(emitter.listenerCount('welcome')); // 2
```

---

## 🔹 **4. Event Propagation**

Event propagation in Node.js is **manual**, unlike browser DOM events.

You can create **parent-child event relationships** using multiple emitters.

### Example:

```js
const parent = new EventEmitter();
const child = new EventEmitter();

child.on('data', (msg) => {
  console.log('Child received:', msg);
  parent.emit('parentData', msg.toUpperCase());
});

parent.on('parentData', (msg) => {
  console.log('Parent processed:', msg);
});

child.emit('data', 'hello world');
```

🧠 Output:

```
Child received: hello world
Parent processed: HELLO WORLD
```

---

## 🔹 **5. Removing Event Listeners**

To prevent memory leaks or handle dynamic behavior, you can remove listeners using `.off()` or `.removeListener()`.

### Example:

```js
function greet() {
  console.log("Hello!");
}

emitter.on('sayHello', greet);
emitter.emit('sayHello');  // Hello!

emitter.off('sayHello', greet);  // Remove listener
emitter.emit('sayHello');  // No output
```

💡 You can also remove **all listeners** for an event:

```js
emitter.removeAllListeners('sayHello');
```

---

## 🔹 **6. Once vs On Methods**

| Method                   | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| `.on(event, listener)`   | Registers a listener that triggers **every time** the event is emitted |
| `.once(event, listener)` | Registers a listener that triggers **only once**                       |

### Example:

```js
emitter.once('start', () => console.log('Started once only!'));

emitter.emit('start'); // Triggered ✅
emitter.emit('start'); // Ignored ❌
```

---

## 🔹 **7. Error Events**

If an `error` event is emitted **without a listener**, Node.js will **crash** the process.

### Example:

```js
emitter.on('error', (err) => {
  console.error('Caught error:', err.message);
});

emitter.emit('error', new Error('Something went wrong!'));
```

🧠 Always attach an `'error'` listener when working with EventEmitters.

---

## 🧩 **Example: Combining Concepts**

```js
const EventEmitter = require('events');
const server = new EventEmitter();

server.on('request', (url) => {
  console.log(`Request received for: ${url}`);
});

server.once('init', () => {
  console.log('Server initialized!');
});

server.emit('init');
server.emit('request', '/home');
server.emit('request', '/about');
```

🧠 Output:

```
Server initialized!
Request received for: /home
Request received for: /about
```

---

## 🧠 **Real-World Use Cases**

* HTTP servers (`req`, `res` objects emit events)
* Streams (`data`, `end`, `error` events)
* Database connectors
* WebSockets or socket.io event systems
* Logging or monitoring systems

---


⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
