# ⚡ 23. Code Splitting & Suspense

---

## 📘 Overview

As React applications grow larger, performance can degrade due to **large bundle sizes**.
**Code splitting** and **Suspense** are modern React features that help optimize performance by **loading only the code needed at the moment**.

Instead of loading the entire application at once, React lets you **split your code into smaller chunks** and **load them on demand** — improving speed and user experience.

---

## 🔹 React.lazy

`React.lazy()` allows components to be loaded **dynamically** (lazy-loaded) when they are actually needed, instead of including them in the main bundle.

### 🧩 Example: Lazy Loading a Component

```jsx
import React, { Suspense } from "react";

// Lazy import of component
const About = React.lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      
      {/* Suspense wraps lazy-loaded components */}
      <Suspense fallback={<p>Loading About Page...</p>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;
```

### ⚙️ How It Works

* The `About` component is **not included** in the main bundle.
* It is loaded **only when needed**, reducing initial load time.
* The `fallback` prop provides temporary UI until the component loads.

✅ **Benefit:** Smaller bundle, faster initial load, better performance.

---

## 🔹 Suspense Fallbacks

`<Suspense>` is a built-in React component that **waits** for lazy-loaded components (or data) to become available.
You can define a **fallback** UI — like a spinner, loader, or text — to display while waiting.

### 🧠 Example: Multiple Lazy Components

```jsx
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));
const Settings = React.lazy(() => import("./Settings"));

function App() {
  return (
    <Suspense fallback={<div>Loading Components...</div>}>
      <Dashboard />
      <Settings />
    </Suspense>
  );
}

export default App;
```

### 💡 Best Practices

* Always wrap lazy components inside `<Suspense>`.
* Keep fallbacks **lightweight and visually clear**.
* Avoid overusing lazy loading for small components — use it strategically for larger sections or routes.

---

## 🔹 Dynamic Imports

JavaScript’s **dynamic import()** allows code to be loaded **asynchronously**.
React.lazy() is actually built on top of `import()`.

You can use dynamic imports for **conditionally loading modules** or **on-demand loading**.

### ⚙️ Example: Conditional Import

```jsx
async function loadUtils() {
  if (someCondition) {
    const utils = await import("./utils");
    utils.performTask();
  }
}
```

### 📦 Example: Dynamic Component Loading

```jsx
import React, { useState, Suspense } from "react";

function DynamicComponentLoader() {
  const [Component, setComponent] = useState(null);

  const loadComponent = async () => {
    const module = await import("./DynamicComponent");
    setComponent(() => module.default);
  };

  return (
    <div>
      <button onClick={loadComponent}>Load Component</button>
      <Suspense fallback={<p>Loading Component...</p>}>
        {Component && <Component />}
      </Suspense>
    </div>
  );
}

export default DynamicComponentLoader;
```

✅ **Advantages:**

* Reduce unused JavaScript.
* Improve Time-to-Interactive (TTI).
* Load resources when they’re actually needed.

---

## 🔍 Summary

| **Feature**         | **Purpose**                       | **Example / Usage**                               |
| ------------------- | --------------------------------- | ------------------------------------------------- |
| **React.lazy()**    | Lazy-load components dynamically  | `const Page = React.lazy(() => import('./Page'))` |
| **Suspense**        | Display fallback UI while loading | `<Suspense fallback={<Loader />}>...</Suspense>`  |
| **Dynamic Imports** | Load JS modules conditionally     | `import('./module').then(...)`                    |

---

## ⚡ Real-World Use Cases

* **Route-based splitting:** Lazy-load pages when navigating between routes.
* **Component splitting:** Lazy-load heavy components like charts or modals.
* **Feature toggles:** Dynamically import experimental features when enabled.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
