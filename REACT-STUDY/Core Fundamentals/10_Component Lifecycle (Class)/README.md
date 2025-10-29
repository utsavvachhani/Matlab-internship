# ⚛️ 10. Component Lifecycle (Class Components)

---

## 📘 Overview

React class components have a well-defined **lifecycle**, meaning they go through different **phases** from creation to removal from the DOM.
Understanding these phases is essential for managing state, side effects, and performance efficiently.

There are **four main phases** of the React class component lifecycle:

1. **Mounting Phase** – Component is being created and inserted into the DOM.
2. **Updating Phase** – Component is re-rendered due to changes in props or state.
3. **Unmounting Phase** – Component is removed from the DOM.
4. **Error Phase** – Errors during rendering, lifecycle methods, or child components are handled.

---

## 🧩 Mounting Phase

Occurs when a component is **first created and added** to the DOM.
Lifecycle methods called in order:

| Order | Method                                | Description                                                                  |
| ----- | ------------------------------------- | ---------------------------------------------------------------------------- |
| 1️⃣   | **constructor()**                     | Initializes state and binds methods.                                         |
| 2️⃣   | **static getDerivedStateFromProps()** | Syncs state with props before rendering. (rarely used)                       |
| 3️⃣   | **render()**                          | Returns JSX to render the UI.                                                |
| 4️⃣   | **componentDidMount()**               | Runs after the component is mounted. Perfect for API calls or subscriptions. |

### 🧠 Example:

```jsx
import React from "react";

class MountingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Component is mounting..." };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({ message: "Mounted Successfully!" });
    }, 2000);
  }

  render() {
    console.log("Render called");
    return <h2>{this.state.message}</h2>;
  }
}

export default MountingExample;
```

✅ **Use `componentDidMount()` for:**

* Fetching data from APIs.
* Setting up event listeners or timers.
* Manipulating the DOM.

---

## 🧩 Updating Phase

Triggered when **props or state change**.
Lifecycle methods are called in order:

| Order | Method                                | Description                                                       |
| ----- | ------------------------------------- | ----------------------------------------------------------------- |
| 1️⃣   | **static getDerivedStateFromProps()** | Syncs state before re-render.                                     |
| 2️⃣   | **shouldComponentUpdate()**           | Determines if re-rendering is needed (returns `true` or `false`). |
| 3️⃣   | **render()**                          | Re-renders the component.                                         |
| 4️⃣   | **getSnapshotBeforeUpdate()**         | Captures information before DOM updates (e.g., scroll position).  |
| 5️⃣   | **componentDidUpdate()**              | Runs after the component has been updated.                        |

### 🧠 Example:

```jsx
import React from "react";

class UpdatingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true; // Allows re-render
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default UpdatingExample;
```

✅ **Use `componentDidUpdate()` for:**

* Fetching new data when props/state change.
* Performing DOM updates after a render.
* Comparing previous and current props/state.

---

## 🧩 Unmounting Phase

Triggered when a component is **removed from the DOM**.

| Method                     | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| **componentWillUnmount()** | Called just before the component is destroyed. Used for cleanup. |

### 🧠 Example:

```jsx
import React from "react";

class UnmountExample extends React.Component {
  componentWillUnmount() {
    console.log("Component will unmount - cleanup here");
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);
  }

  render() {
    return <h3>Component Active</h3>;
  }
}

export default UnmountExample;
```

✅ **Use `componentWillUnmount()` for:**

* Clearing timers or intervals.
* Removing event listeners.
* Canceling API requests.

---

## 🧩 Error Phase

Handles **errors** that occur during rendering, lifecycle methods, or in child components.

| Method                                | Description                         |
| ------------------------------------- | ----------------------------------- |
| **static getDerivedStateFromError()** | Updates state when an error occurs. |
| **componentDidCatch()**               | Logs or handles error information.  |

### 🧠 Example (Error Boundary):

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

✅ **Usage:**

```jsx
<ErrorBoundary>
  <SomeComponent />
</ErrorBoundary>
```

✅ **Use `Error Boundaries` for:**

* Preventing app crashes.
* Logging error details to a service.

---

## 🧠 Summary Table

| Phase              | Methods                                                                                                        | Purpose              |
| ------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------- |
| **Mounting**       | `constructor`, `getDerivedStateFromProps`, `render`, `componentDidMount`                                       | Initialization       |
| **Updating**       | `getDerivedStateFromProps`, `shouldComponentUpdate`, `render`, `getSnapshotBeforeUpdate`, `componentDidUpdate` | React to changes     |
| **Unmounting**     | `componentWillUnmount`                                                                                         | Cleanup              |
| **Error Handling** | `getDerivedStateFromError`, `componentDidCatch`                                                                | Catch runtime errors |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)
