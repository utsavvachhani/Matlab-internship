# 🧠 20. State Management Libraries

---
utsav vachhani 

## 📘 Overview

As React applications grow, managing state across multiple components becomes challenging.
**State management libraries** help you store, update, and access shared data predictably and efficiently.

The most popular solutions are **Redux**, **Redux Toolkit**, **MobX**, **Recoil**, **Zustand**, and **Jotai**.
Let’s break them down 👇

---

## 🔴 Redux Core Concepts

**Redux** is a predictable state container for JavaScript applications.
It uses a **unidirectional data flow** — making your state changes predictable and easy to debug.

---

### 🧩 Redux Flow Diagram

**Component → Dispatch(Action) → Reducer → Store → Component**

---

### 🧱 Core Concepts

| Concept     | Description                                      | Example                       |
| ----------- | ------------------------------------------------ | ----------------------------- |
| **Store**   | Centralized place holding the entire app state   | `createStore(reducer)`        |
| **Action**  | Plain JS object describing *what happened*       | `{ type: "INCREMENT" }`       |
| **Reducer** | Pure function that updates state based on action | `(state, action) => newState` |

---

### ⚙️ Example: Simple Counter with Redux

```js
import { createStore } from "redux";

// 1️⃣ Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 2️⃣ Store
const store = createStore(counterReducer);

// 3️⃣ Dispatch Actions
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

console.log(store.getState()); // 👉 { count: 1 }
```

✅ Redux ensures predictable updates and a single source of truth.

---

## ⚡ Redux Toolkit (RTK) Basics

**Redux Toolkit** simplifies Redux setup with modern syntax and built-in utilities.
It reduces boilerplate code significantly.

📦 **Install:**

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 🧩 Example with Redux Toolkit

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1️⃣ Slice (Reducer + Actions)
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 },
  },
});

// 2️⃣ Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// 3️⃣ Dispatch Actions
store.dispatch(counterSlice.actions.increment());
console.log(store.getState()); // { counter: { count: 1 } }
```

✅ RTK uses **Immer.js** internally — so you can "mutate" state safely.

---

### 🔗 React Integration

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>−</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

---

## ⚖️ Context vs Redux

| Feature         | **Context API**                        | **Redux**                                 |
| --------------- | -------------------------------------- | ----------------------------------------- |
| **Purpose**     | Pass data easily without prop drilling | Manage complex global state predictably   |
| **Setup**       | Very minimal                           | More structured (store, reducer, actions) |
| **Performance** | Re-renders on every update             | Selective updates via connect/useSelector |
| **Best For**    | Theme, language, auth                  | Large-scale apps with shared logic        |

✅ Use **Context API** for small global states.
✅ Use **Redux** for enterprise or complex apps with many state updates.

---

## ⚙️ MobX Overview

**MobX** is a reactive state management library — simpler and more automatic than Redux.

### ⚡ Key Concepts:

* Uses **observable** state.
* Automatically tracks **derivations**.
* UI updates automatically when observable data changes.

### Example:

```jsx
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}

const store = new CounterStore();

const Counter = observer(() => (
  <div>
    <h3>{store.count}</h3>
    <button onClick={() => store.increment()}>Increment</button>
  </div>
));

export default Counter;
```

✅ MobX automatically reacts to state changes — no need for reducers or dispatchers.

---

## 🌀 Recoil / Zustand / Jotai Overview

### 🔷 **Recoil**

* Created by Facebook.
* Works like React’s built-in state but globally.
* Uses **atoms** (state pieces) and **selectors** (derived data).

```jsx
import { atom, useRecoilState } from "recoil";

const counterAtom = atom({
  key: "counter",
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(counterAtom);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

### 🔶 **Zustand**

* Lightweight and minimal.
* Uses simple hooks — no reducers or boilerplate.

```js
import { create } from "zustand";

const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useCounter();
  return <button onClick={increment}>Count: {count}</button>;
}
```

✅ Very popular for small-to-medium apps due to simplicity and speed.

---

### 🟢 **Jotai**

* Atom-based like Recoil.
* Works with primitive atoms and hooks — simple and fast.

```jsx
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

✅ Ideal for small global state sharing with minimal setup.

---

## 📊 Summary Table

| Library           | Best For            | Key Feature              | Boilerplate |
| ----------------- | ------------------- | ------------------------ | ----------- |
| **Redux Toolkit** | Large apps          | Predictable & structured | Moderate    |
| **Context API**   | Small global data   | Built-in React feature   | Low         |
| **MobX**          | Reactive apps       | Automatic tracking       | Low         |
| **Recoil**        | Complex React apps  | Atom-based state         | Moderate    |
| **Zustand**       | Lightweight apps    | Hook-based global state  | Very low    |
| **Jotai**         | Simple global state | Atom-based minimalism    | Very low    |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
