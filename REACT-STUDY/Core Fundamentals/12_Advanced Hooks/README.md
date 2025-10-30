# ⚛️ 12. Advanced Hooks

---

## 📘 Overview

Advanced React Hooks provide **fine-grained control** over performance, optimization, and complex state management.
They go beyond `useState` and `useEffect` to help developers build efficient and scalable applications.

---

## 🧱 1. `useRef()` — Accessing DOM & Persistent Values

The `useRef` hook provides a **mutable reference object** that doesn’t cause re-renders when changed.

### 🔹 Common Uses:

* Accessing DOM elements
* Storing previous values
* Keeping mutable variables

### 🧠 Example: Accessing DOM Element

```jsx
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

export default InputFocus;
```

✅ `useRef` does **not re-render** the component when updated.

---

## ⚙️ 2. `useMemo()` — Memoizing Expensive Computations

`useMemo` caches the result of an expensive calculation and only recomputes it when dependencies change.

### 🔹 Syntax:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 🧠 Example:

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default ExpensiveCalculation;
```

✅ Prevents unnecessary recalculations on every render.

---

## 🔁 3. `useCallback()` — Memoizing Functions

`useCallback` returns a **memoized function**, preventing unnecessary re-creations between renders.

Useful when passing callbacks to child components to **avoid re-renders**.

### 🔹 Syntax:

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### 🧠 Example:

```jsx
import React, { useState, useCallback } from "react";

function Button({ onClick, label }) {
  console.log("Button rendered:", label);
  return <button onClick={onClick}>{label}</button>;
}

const MemoButton = React.memo(Button);

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <MemoButton onClick={increment} label="Increment" />
      <p>Count: {count}</p>
    </>
  );
}

export default Parent;
```

✅ Prevents re-rendering of memoized children unless dependencies change.

---

## 🔄 4. `useReducer()` — Complex State Management

`useReducer` is an alternative to `useState` when managing **complex state logic** or multiple sub-values.

### 🔹 Syntax:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### 🧠 Example:

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default Counter;
```

✅ Ideal for managing forms, complex UI logic, or nested state.

---

## 🧩 5. `useLayoutEffect()` — DOM Mutation Timing

`useLayoutEffect` works like `useEffect` but runs **synchronously after DOM mutations** and **before the browser paints**.

Useful for measuring layout or synchronizing visual changes.

### 🧠 Example:

```jsx
import React, { useLayoutEffect, useRef } from "react";

function Box() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.style.background = "skyblue";
    console.log("Box layout updated before paint");
  }, []);

  return <div ref={boxRef} style={{ width: 100, height: 100 }}>Box</div>;
}

export default Box;
```

⚠️ Use **sparingly** — it blocks visual updates until executed.

---

## ⏳ 6. `useDeferredValue()` — Deferring Slow Updates

`useDeferredValue` helps keep the UI responsive by deferring **expensive re-renders** (like filtering large lists).

### 🧠 Example:

```jsx
import React, { useState, useDeferredValue } from "react";

function FilteredList({ list }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = list.filter(item => item.includes(deferredQuery));

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{filtered.map(i => <li key={i}>{i}</li>)}</ul>
    </>
  );
}

export default FilteredList;
```

✅ Keeps typing smooth even if filtering large datasets.

---

## 🔄 7. `useTransition()` — Prioritizing UI Updates

`useTransition` allows you to **mark state updates as non-urgent**, helping React prioritize smooth rendering.

### 🔹 Syntax:

```jsx
const [isPending, startTransition] = useTransition();
```

### 🧠 Example:

```jsx
import React, { useState, useTransition } from "react";

function SearchList({ items }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = e => {
    const value = e.target.value;
    setQuery(value);
    startTransition(() => {
      setFiltered(items.filter(i => i.includes(value)));
    });
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>{filtered.map(i => <li key={i}>{i}</li>)}</ul>
    </>
  );
}

export default SearchList;
```

✅ UI remains responsive even during heavy computations.

---

## 🧠 Summary

| Hook               | Purpose                     | Common Use                      |
| ------------------ | --------------------------- | ------------------------------- |
| `useRef`           | Access DOM / persist values | Focus, scroll, store prev state |
| `useMemo`          | Cache computed results      | Performance optimization        |
| `useCallback`      | Cache functions             | Prevent child re-renders        |
| `useReducer`       | Complex state logic         | Forms, counters, nested state   |
| `useLayoutEffect`  | Sync after DOM changes      | Layout measurements             |
| `useDeferredValue` | Defer rendering             | Smooth typing/filtering         |
| `useTransition`    | Prioritize UI updates       | Async heavy UI                  |

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)