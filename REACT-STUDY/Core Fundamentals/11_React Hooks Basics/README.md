# ⚛️ 11. React Hooks Basics

---

## 📘 Overview

React **Hooks** are special functions introduced in **React 16.8** that allow you to “hook into” React features (like state and lifecycle) **without using class components**.

Hooks make your code simpler, more readable, and functional-based instead of class-based.

---

## 🪝 1. `useState()` — Managing State

The `useState` hook lets you add state variables in functional components.

### 🔹 Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

* `state`: Current value.
* `setState`: Function to update that value.
* `initialValue`: The starting value of the state.

### 🧠 Example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

✅ **Notes:**

* State updates are **asynchronous**.
* You can store strings, numbers, arrays, or even objects.

### 🧩 Updating Objects/Arrays:

```jsx
const [user, setUser] = useState({ name: "Utsav", age: 21 });

// Update age only
setUser(prev => ({ ...prev, age: prev.age + 1 }));
```

---

## 🪝 2. `useEffect()` — Side Effects

The `useEffect` hook lets you perform **side effects** in function components — similar to lifecycle methods in classes.

### 🔹 Common Side Effects:

* Fetching data from APIs
* Updating the DOM manually
* Setting up subscriptions or timers

### 🔹 Syntax:

```jsx
useEffect(() => {
  // Side effect logic here
  return () => {
    // Optional cleanup
  };
}, [dependencies]);
```

* The **callback** runs after every render by default.
* The **dependencies array** controls when it runs.

---

### 🧠 Example 1: Run on Every Render

```jsx
useEffect(() => {
  console.log("Component re-rendered");
});
```

### 🧠 Example 2: Run Only Once (Mount)

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []); // empty array → runs only once
```

### 🧠 Example 3: Run When Dependency Changes

```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

---

## 🧹 3. Cleaning up Effects

Sometimes effects create resources that need cleanup (like timers, subscriptions, or event listeners).
Return a **cleanup function** inside `useEffect()`.

### 🧠 Example:

```jsx
import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);

    return () => {
      clearInterval(timer); // cleanup before unmount
      console.log("Timer stopped");
    };
  }, []);

  return <h2>Seconds: {seconds}</h2>;
}

export default Timer;
```

✅ **Cleanup runs:**

* Before component unmounts
* Before re-running the effect on dependency change

---

## ⚖️ 4. Rules of Hooks

Hooks must follow two strict rules:

### 🔹 Rule 1: **Call hooks only at the top level**

* ✅ ✅ Call inside the main body of a component or a custom hook.
* ❌ ❌ Don’t call inside loops, conditions, or nested functions.

**Bad:**

```jsx
if (show) {
  const [count, setCount] = useState(0); // ❌
}
```

**Good:**

```jsx
const [count, setCount] = useState(0); // ✅
```

### 🔹 Rule 2: **Call hooks only from React functions**

* ✅ Call inside **functional components** or **custom hooks**.
* ❌ Not inside normal JS functions.

✅ Example of correct usage:

```jsx
function App() {
  const [name, setName] = useState("Utsav");
  useEffect(() => console.log(name), [name]);
  return <h3>{name}</h3>;
}
```

---

## 🧩 Comparison with Class Lifecycle

| Class Component Method | Equivalent Hook                   |
| ---------------------- | --------------------------------- |
| `componentDidMount`    | `useEffect(..., [])`              |
| `componentDidUpdate`   | `useEffect(..., [deps])`          |
| `componentWillUnmount` | Cleanup function in `useEffect()` |

---

## 🧠 Summary

| Hook           | Purpose                     | Common Use Case                 |
| -------------- | --------------------------- | ------------------------------- |
| `useState`     | Manage component state      | Toggle buttons, forms, counters |
| `useEffect`    | Handle side effects         | API calls, timers, listeners    |
| Cleanup        | Prevent memory leaks        | Clear intervals, unsubscribe    |
| Rules of Hooks | Ensure predictable behavior | Always at top level             |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)