Here’s the complete and structured documentation for —

# ⚛️ 13. Custom Hooks

---

## 📘 Overview

**Custom Hooks** allow you to **reuse stateful logic** across multiple components without duplicating code.
They are a powerful way to **organize**, **encapsulate**, and **share logic** in React applications.

A Custom Hook is simply a **JavaScript function that uses built-in React Hooks** (like `useState`, `useEffect`, etc.) and follows the naming convention `useSomething`.

---

## 🧩 1. Naming Conventions (`use*`)

React requires custom hooks to start with the prefix **`use`**, which helps React recognize it as a hook.

✅ Correct Naming:

```jsx
function useCounter() {
  // Hook logic
}
```

❌ Incorrect Naming:

```jsx
function counterHook() {
  // React won’t treat this as a hook
}
```

> ⚠️ The `use` prefix ensures React’s rules of hooks are properly applied, like detecting violations inside ESLint or DevTools.

---

## 🔁 2. Sharing Logic via Hooks

Custom Hooks let you **share logic, not state** — each component using the hook gets its own isolated state.

For example, multiple components can use `useFetch()` to get data from APIs — the logic is shared, but each fetch call is independent.

### 🧠 Example: `useFetch()` Hook

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Network Error");
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

### Usage:

```jsx
import useFetch from "./useFetch";

function Users() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default Users;
```

✅ This makes the fetch logic **reusable** across multiple components.

---

## ⚙️ 3. Parameterization & Return Values

Custom Hooks are **flexible and reusable** because they accept parameters and return any type of data — objects, arrays, or values.

### 🧠 Example: Parameterized Hook – `useCounter(initialValue, step)`

```jsx
import { useState } from "react";

function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```

### Usage:

```jsx
import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(10, 2);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+2</button>
      <button onClick={decrement}>-2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
```

✅ You can pass **custom arguments** and the hook will behave accordingly.

---

## 🧠 4. Common Use Cases for Custom Hooks

| Custom Hook                   | Purpose                                     |
| ----------------------------- | ------------------------------------------- |
| `useFetch(url)`               | Fetch data from APIs                        |
| `useLocalStorage(key, value)` | Store & retrieve values from `localStorage` |
| `useWindowSize()`             | Track window width/height                   |
| `usePrevious(value)`          | Access previous state value                 |
| `useDebounce(value, delay)`   | Delay updates for performance optimization  |
| `useOnlineStatus()`           | Check user’s internet connection            |

Example – `useLocalStorage()`

```jsx
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
```

---

## 🧩 Key Benefits

✅ Reusable — avoids repetitive logic across components
✅ Readable — encapsulates complex logic into simple hooks
✅ Composable — can combine multiple hooks together
✅ Isolated — each component using a custom hook has its own state

---

## 🧠 Summary

| Concept               | Description                                             |
| --------------------- | ------------------------------------------------------- |
| **Naming Convention** | Must start with `use`                                   |
| **Logic Sharing**     | Share logic, not state                                  |
| **Parameters**        | Make hooks flexible and configurable                    |
| **Return Values**     | Return objects, arrays, or values for use in components |

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)