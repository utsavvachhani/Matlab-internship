# ⚡ 6. Performance Optimization

Performance optimization in JavaScript and React is all about making your applications **faster, efficient, and smoother** for users — by reducing resource usage, improving rendering speed, and optimizing memory consumption.

---

## 🧠 **Code Optimization Techniques**

Writing optimized code is the foundation of performance improvement.

### 🔹 Best Practices:

1. **Avoid unnecessary computations**

   ```js
   // ❌ Bad
   for (let i = 0; i < arr.length; i++) {
     console.log(arr.length); // repeated call
   }

   // ✅ Good
   const len = arr.length;
   for (let i = 0; i < len; i++) console.log(i);
   ```

2. **Use local variables instead of global**

   * Local lookups are faster than global object references.
   * In React, prefer using **state** or **props** carefully instead of global variables.

3. **Use efficient loops and array methods**

   * Prefer **map**, **filter**, **reduce** for clean functional iterations.
   * Avoid nested loops where possible.

4. **Avoid Re-rendering in React**

   * Use `React.memo()` to prevent unnecessary re-renders.
   * Use `useCallback()` and `useMemo()` to memoize functions and values.

   ```jsx
   const MemoizedButton = React.memo(({ onClick }) => {
     console.log("Rendered");
     return <button onClick={onClick}>Click Me</button>;
   });
   ```

---

## 🧠 **Memory Management**

JavaScript uses **automatic garbage collection**, but poor code can still cause **memory leaks**.

### 🔹 Common Causes of Memory Leaks:

* Unremoved **event listeners**
* Unreferenced **intervals/timers**
* Large data in **closures**
* **Detached DOM nodes** (removed from the DOM but still referenced)

### 🧹 Fixes:

```js
// ❌ Potential leak
window.addEventListener('resize', () => console.log('Resized!'));

// ✅ Proper cleanup
function handleResize() { console.log('Resized!'); }
window.addEventListener('resize', handleResize);
window.removeEventListener('resize', handleResize);
```

### 🧠 React Example:

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Running..."), 1000);
  return () => clearInterval(timer); // cleanup
}, []);
```

---

## 🌿 **Minimizing DOM Manipulation**

Frequent DOM updates slow down performance.
The **Virtual DOM** in React helps minimize this, but it’s still important to manage updates wisely.

### 🔹 Techniques:

* Batch updates (React does this automatically since React 18).
* Update **only necessary** parts of the DOM.
* Use **document fragments** when creating multiple elements dynamically.

### Example:

```js
// ❌ Inefficient
for (let i = 0; i < 1000; i++) {
  document.body.appendChild(document.createElement("div"));
}

// ✅ Efficient
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  fragment.appendChild(document.createElement("div"));
}
document.body.appendChild(fragment);
```

---

## 🧩 **Event Delegation**

Instead of attaching multiple event listeners to child elements, attach one to the **parent element** and handle events based on the target.

### 🔹 Example:

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```js
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Clicked:', e.target.textContent);
  }
});
```

### 🧠 React Version:

In React, this concept is naturally optimized since React uses **synthetic event delegation** internally — all events bubble to a single root listener.

---

## 💤 **Lazy Loading**

Lazy loading delays the loading of resources until they’re needed.
This reduces initial load time and improves performance.

### 🔹 React Example:

```jsx
import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
}
```

* ✅ Loads `<About />` **only when it’s required** (e.g., when rendered).

---

## ✂️ **Code Splitting**

Code splitting divides large bundles into smaller chunks — only the required code is loaded initially.

### 🔹 Techniques:

* **React.lazy + Suspense**
* **Dynamic Imports**
* **React Router-based lazy loading**

### Example:

```jsx
// Dynamic import
const Contact = React.lazy(() => import('./Contact'));

// Using it
<Suspense fallback={<div>Loading Contact...</div>}>
  <Contact />
</Suspense>
```

### 🔹 Webpack automatically handles splitting when using dynamic imports.

---

## ⚙️ Summary Table

| Optimization Area     | Purpose                       | Technique                              |
| --------------------- | ----------------------------- | -------------------------------------- |
| **Code Optimization** | Reduce redundant computations | Use memoization, avoid global vars     |
| **Memory Management** | Prevent leaks                 | Cleanup intervals, listeners           |
| **DOM Optimization**  | Faster rendering              | Minimize direct DOM manipulation       |
| **Event Delegation**  | Fewer listeners               | Handle events on parent elements       |
| **Lazy Loading**      | Faster page load              | React.lazy(), Suspense                 |
| **Code Splitting**    | Optimize bundle size          | Dynamic imports, route-based splitting |

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
