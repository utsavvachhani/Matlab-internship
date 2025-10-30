# ⚛️ 15. Performance Optimization

---

## 📘 Overview

Performance optimization in React focuses on **reducing unnecessary re-renders**, **optimizing rendering logic**, and **loading resources efficiently**.
React provides several tools and techniques like `React.memo`, `PureComponent`, `useMemo`, `useCallback`, `lazy`, and `Suspense` to improve application performance.

---

## ⚡ React.memo

`React.memo` is a **higher-order component (HOC)** used to **memoize functional components**.
It prevents re-rendering of a component if its **props haven’t changed**.

### 🧩 Example:

```jsx
import React from "react";

const Greeting = React.memo(function Greeting({ name }) {
  console.log("Rendering:", name);
  return <h2>Hello, {name}!</h2>;
});

export default function App() {
  return (
    <div>
      <Greeting name="Utsav" />
      <Greeting name="Meet" />
    </div>
  );
}
```

✅ **Explanation:**

* React only re-renders the `Greeting` component when the `name` prop changes.
* If the parent re-renders but the props are the same, `React.memo` skips re-rendering.

---

## 🧱 PureComponent

`PureComponent` is similar to `React.memo` but used in **class components**.
It performs a **shallow comparison** of state and props to determine whether to re-render.

### 🧩 Example:

```jsx
import React, { PureComponent } from "react";

class Counter extends PureComponent {
  render() {
    console.log("Rendering Counter...");
    return <h3>Count: {this.props.count}</h3>;
  }
}

export default Counter;
```

✅ **Explanation:**

* `PureComponent` automatically implements `shouldComponentUpdate()` to prevent unnecessary renders.
* It only re-renders when the props or state change.

---

## 🧮 Memoization (useMemo / useCallback)

### 🧩 `useMemo`

`useMemo` is used to **memoize the result of a computation** — preventing expensive recalculations unless dependencies change.

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log("Calculating...");
    return num * 10;
  }, [num]);

  return <p>Result: {result}</p>;
}

export default ExpensiveCalculation;
```

✅ **Explanation:**

* `useMemo` stores the result of `num * 10`.
* It only re-computes when `num` changes.

---

### 🧩 `useCallback`

`useCallback` memoizes **functions** — preventing re-creation of the same function on every render.

```jsx
import React, { useCallback, useState } from "react";

function Button({ onClick, label }) {
  console.log("Rendering Button:", label);
  return <button onClick={onClick}>{label}</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);
  
  return (
    <div>
      <Button onClick={increment} label="Increment" />
      <p>Count: {count}</p>
    </div>
  );
}
```

✅ **Explanation:**

* `useCallback` ensures `increment` function reference stays the same between renders.
* Prevents unnecessary child re-renders when used with `React.memo`.

---

## 💤 Lazy Loading & Suspense

### 🧩 Lazy Loading Components

Lazy loading allows you to **load components only when needed**, reducing the initial bundle size.

```jsx
import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
}
```

✅ **Explanation:**

* `React.lazy()` dynamically imports the component.
* `Suspense` provides a fallback UI while loading.

---

## 📦 Code Splitting

Code splitting divides your app’s JavaScript into smaller chunks that load **on demand**, improving performance and reducing initial load time.

### 🧩 Example (with React Router)

```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

✅ **Explanation:**

* Each route is loaded **only when visited**.
* Helps optimize load time and network usage.

---

## 🧠 Summary

| Concept             | Description                     | Example                              |
| ------------------- | ------------------------------- | ------------------------------------ |
| **React.memo**      | Memoizes functional components  | `React.memo(MyComponent)`            |
| **PureComponent**   | Memoizes class components       | `class MyComp extends PureComponent` |
| **useMemo**         | Memoizes computed values        | `useMemo(() => compute(), [dep])`    |
| **useCallback**     | Memoizes functions              | `useCallback(fn, [dep])`             |
| **Lazy & Suspense** | Loads components dynamically    | `lazy(() => import(...))`            |
| **Code Splitting**  | Breaks code into smaller chunks | `React.lazy()` + routing             |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)

