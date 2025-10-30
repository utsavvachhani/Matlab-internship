# ⚛️ 16. Error Boundaries
---
## 📘 Overview

In React, **Error Boundaries** are **special components** that catch JavaScript errors in their child component tree and display a **fallback UI** instead of crashing the whole app.
They are used to handle **runtime errors gracefully**, improving app stability and user experience.

---

## 💡 What Are Error Boundaries?

Error boundaries are **React components** that implement either or both of the following lifecycle methods:

* `static getDerivedStateFromError(error)`
* `componentDidCatch(error, info)`

They **catch errors during rendering**, in lifecycle methods, and in constructors of their child components.

> 🧠 Note: Error boundaries **don’t catch** errors inside:
>
> * Event handlers
> * Asynchronous code (e.g., `setTimeout`)
> * Server-side rendering
> * Errors thrown in the error boundary itself

---

## 🧩 Basic Example

```jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // ✅ Update state when an error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // ✅ Log error details (optional)
  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error);
    console.error("Component stack:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // ✅ Fallback UI
      return <h2>Something went wrong 😢</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

Now you can wrap your components inside this `ErrorBoundary`:

```jsx
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
```

---

## ⚙️ `getDerivedStateFromError(error)`

This **static lifecycle method** is used to **update the state** when an error occurs.

### 🧠 Key Points:

* Called during **rendering** when an error is thrown.
* Should **return an object** to update the state (e.g., `{ hasError: true }`).
* Does **not** have access to component instance (`this`).

```jsx
static getDerivedStateFromError(error) {
  return { hasError: true };
}
```

---

## ⚙️ `componentDidCatch(error, info)`

This lifecycle method is used to **log error information** for debugging or sending it to an error tracking service (like Sentry or Firebase).

### 🧩 Example:

```jsx
componentDidCatch(error, info) {
  console.log("Caught error:", error);
  console.log("Component stack trace:", info.componentStack);
  // You can also log this to an external service
}
```

---

## 🎨 Fallback UI Patterns

A **Fallback UI** is what the user sees when a component fails to render properly.

You can customize it in different ways depending on your app’s needs.

### 🧩 Example 1 — Simple Text Message:

```jsx
if (this.state.hasError) {
  return <h2>Something went wrong.</h2>;
}
```

### 🧩 Example 2 — Retry Button:

```jsx
if (this.state.hasError) {
  return (
    <div>
      <h2>Oops! Something went wrong 😔</h2>
      <button onClick={() => this.setState({ hasError: false })}>
        Try Again
      </button>
    </div>
  );
}
```

### 🧩 Example 3 — Custom Error Page:

```jsx
if (this.state.hasError) {
  return (
    <div className="error-page">
      <img src="/error-illustration.svg" alt="Error" />
      <h2>Unexpected Error</h2>
      <p>We're fixing it! Please try again later.</p>
    </div>
  );
}
```

---

## 🧠 Example: Component that Throws Error

```jsx
function BuggyComponent() {
  throw new Error("Something broke!");
  return <div>Buggy Component</div>;
}
```

If this is wrapped in `ErrorBoundary`, the fallback UI will be displayed instead of crashing the app.

---

## 🧩 Combining Error Boundaries with Lazy Loading

```jsx
import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}
```

✅ **Explanation:**

* `Suspense` handles loading errors.
* `ErrorBoundary` handles runtime rendering errors.

---

## 🧾 Summary Table

| Concept                      | Description                               | Example                                    |
| ---------------------------- | ----------------------------------------- | ------------------------------------------ |
| **Error Boundary**           | Component that catches render-time errors | `class ErrorBoundary extends Component`    |
| **getDerivedStateFromError** | Updates UI after an error                 | `static getDerivedStateFromError()`        |
| **componentDidCatch**        | Logs error info                           | `componentDidCatch(error, info)`           |
| **Fallback UI**              | Shown when an error occurs                | `<h2>Something went wrong</h2>`            |
| **Usage**                    | Wrap components with boundary             | `<ErrorBoundary><Child /></ErrorBoundary>` |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)