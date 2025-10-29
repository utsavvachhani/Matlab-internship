# 🧩 5. Testing and Debugging

Testing and debugging are critical parts of JavaScript and React development.
They ensure that your code runs correctly, is maintainable, and behaves as expected across various scenarios.

---

## 🧠 **Console Methods**

The **console** object in JavaScript provides powerful tools for debugging and inspecting data during runtime.

### 🔹 Common Console Methods:

| Method                                   | Description                       | Example                                                        |
| ---------------------------------------- | --------------------------------- | -------------------------------------------------------------- |
| `console.log()`                          | Prints information to the console | `console.log("Hello World")`                                   |
| `console.error()`                        | Displays an error message         | `console.error("Something went wrong!")`                       |
| `console.warn()`                         | Displays a warning message        | `console.warn("Deprecated API used!")`                         |
| `console.table()`                        | Displays tabular data             | `console.table(users)`                                         |
| `console.time()` / `console.timeEnd()`   | Measures execution time           | `console.time('test'); console.timeEnd('test');`               |
| `console.group()` / `console.groupEnd()` | Groups related logs               | `console.group('Data'); console.log(...); console.groupEnd();` |

### 🧠 React Example:

```jsx
useEffect(() => {
  console.log("Component mounted");
  console.warn("Check prop validation!");
  console.table([{ id: 1, name: "Utsav" }, { id: 2, name: "Jay" }]);
}, []);
```

---

## 🪲 **Debugging Tools**

Debugging tools help identify, trace, and fix logical or runtime errors efficiently.

### 🔹 Methods:

* **`debugger` keyword**: pauses execution in DevTools.
* Use **console logs** to trace variable values.
* Add **breakpoints** to inspect the state step-by-step.

### 🧠 Example:

```js
function add(a, b) {
  debugger; // Execution will pause here
  return a + b;
}
console.log(add(2, 3));
```

---

## 🧭 **Browser DevTools**

All modern browsers (Chrome, Firefox, Edge) provide built-in developer tools for debugging.

### 🔹 Key Panels:

1. **Elements Tab** – Inspect HTML/CSS in real-time.
2. **Console Tab** – View logs, errors, warnings, and custom messages.
3. **Sources Tab** – Debug JavaScript with breakpoints and call stacks.
4. **Network Tab** – Monitor API calls, responses, and load times.
5. **Performance Tab** – Profile and optimize your app performance.

### 🧠 React Tip:

Use **React Developer Tools Extension** to inspect React component trees, props, and state.

---

## 🎯 **Breakpoints**

Breakpoints let you pause code execution at a specific line to inspect variables, stack trace, and flow.

### 🔹 Steps:

1. Open **Sources** tab in DevTools.
2. Click the line number to set a breakpoint.
3. Reload or re-run the code to pause execution.
4. Inspect the current values in the **Scope** section.

### 🧠 React Example:

You can debug hooks or state updates directly in `useEffect()` or inside event handlers:

```jsx
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    debugger; // pause here
    console.log("Count changed:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
}
```

---

## 🧪 **Unit Testing**

Unit testing involves testing **individual functions or components** in isolation to verify correctness.

### 🔹 Example:

```js
function add(a, b) {
  return a + b;
}

// Simple test
console.assert(add(2, 3) === 5, "Addition test failed!");
```

---

## 🧰 **Testing Frameworks (Jest, Mocha)**

### 🔹 **Jest**

* Most commonly used with **React**.
* Comes preconfigured with **Create React App**.
* Supports **snapshots**, **mocking**, and **async tests**.

#### Example:

```js
// sum.js
export function sum(a, b) {
  return a + b;
}

// sum.test.js
import { sum } from "./sum";

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
```

Run with:

```bash
npm test
```

### 🔹 **Mocha + Chai**

* Flexible testing setup for Node.js or vanilla JS projects.
* Mocha handles test running; Chai provides assertion styles.

#### Example:

```js
const { expect } = require("chai");

function multiply(a, b) {
  return a * b;
}

describe("multiply", () => {
  it("should multiply correctly", () => {
    expect(multiply(2, 3)).to.equal(6);
  });
});
```

---

## 🧱 **Test-Driven Development (TDD)**

**TDD** is a software development approach where tests are written **before** code implementation.
It follows the **Red → Green → Refactor** cycle.

### 🔹 Steps:

1. **Write a failing test** (Red)
2. **Write code to pass the test** (Green)
3. **Refactor the code** while keeping tests green

### 🧠 Example Flow:

```js
// Step 1: Write test
test("should capitalize first letter", () => {
  expect(capitalize("utsav")).toBe("Utsav");
});

// Step 2: Implement function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

---

## 🧠 Summary Table

| Tool/Concept    | Purpose               | Common Use               |
| --------------- | --------------------- | ------------------------ |
| **Console**     | Quick debugging       | Log values, errors       |
| **Debugger**    | Pause execution       | Inspect runtime behavior |
| **DevTools**    | Visual debugging      | Inspect DOM, network, JS |
| **Breakpoints** | Stepwise debugging    | Check variable states    |
| **Unit Tests**  | Validate small pieces | Functions/components     |
| **Jest/Mocha**  | Testing frameworks    | Automation, async tests  |
| **TDD**         | Design approach       | Write tests before code  |

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
