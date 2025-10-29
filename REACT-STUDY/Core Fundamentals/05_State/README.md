# ⚛️ 5. State

---

## 📘 Overview

In React, **state** represents **mutable data** that determines a component’s behavior and how it renders.
Unlike **props** (which are read-only), **state** can change over time — and when it does, React **re-renders** the component automatically.

---

## 🧩 State in Class Components

Before React Hooks, state was managed **only in class components** using the `this.state` property.

### 🔹 Declaring State:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
```

---

### 🔹 Updating State with `setState()`:

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

✅ **Important Notes:**

* `setState()` is **asynchronous**.
* Use the **callback form** when updating based on the previous state:

  ```jsx
  this.setState(prev => ({ count: prev.count + 1 }));
  ```

---

## ⚙️ useState Hook

In **functional components**, state is managed using the **useState() Hook**.

### 🔹 Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

### 🔹 Example:

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
```

✅ **Key Points:**

* The initial value is only used during the first render.
* Updating state triggers **re-rendering** of the component.
* You can use multiple `useState` calls for different values.

---

## 🧱 State Initialization

You can initialize state in multiple ways:

### 🔹 Static Value:

```jsx
const [theme, setTheme] = useState("light");
```

### 🔹 From Props:

```jsx
function Welcome({ user }) {
  const [name, setName] = useState(user.name);
}
```

### 🔹 From Function (Lazy Initialization):

Used when the initial state is **expensive to compute**.

```jsx
const [result, setResult] = useState(() => heavyComputation());
```

---

## 🔄 Updating State Patterns

React **batches state updates** and re-renders efficiently.
Here are some best practices:

### 🔹 Using the Setter Function:

```jsx
setCount(count + 1);
```

### 🔹 Based on Previous State:

```jsx
setCount(prev => prev + 1);
```

### 🔹 Updating Objects:

```jsx
const [user, setUser] = useState({ name: "Utsav", age: 21 });

setUser(prev => ({ ...prev, age: prev.age + 1 }));
```

### 🔹 Updating Arrays:

```jsx
const [todos, setTodos] = useState(["Code", "Read"]);

setTodos(prev => [...prev, "Sleep"]);
```

✅ **Always treat state as immutable!**
Never mutate directly — always create a new copy.

---

## 🧠 Derived State

Derived state is **computed from existing state or props**.
It should **not** be duplicated inside your state, as that can cause inconsistencies.

### ❌ Bad:

```jsx
const [discountPrice, setDiscountPrice] = useState(price * 0.9);
```

### ✅ Good:

```jsx
const discountPrice = price * 0.9;
```

If you need to compute something from props or state, **derive it dynamically** inside the render function.

---

## 🧩 Summary

| Concept            | Description                                    | Example                      |
| ------------------ | ---------------------------------------------- | ---------------------------- |
| **State**          | Mutable data in a component                    | `useState(0)`                |
| **Class State**    | `this.state`, `this.setState()`                | Legacy syntax                |
| **useState Hook**  | Adds state to functional components            | `[count, setCount]`          |
| **Updating State** | Always use setter and treat state as immutable | `setState(prev => prev + 1)` |
| **Derived State**  | Computed dynamically from other data           | `const total = price * qty`  |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)
