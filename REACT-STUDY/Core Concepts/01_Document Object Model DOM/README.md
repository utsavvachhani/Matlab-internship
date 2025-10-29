# 📘 1. Document Object Model (DOM)

In traditional JavaScript, the **Document Object Model (DOM)** represents the structure of a webpage as a tree of objects.
In **React**, we rarely manipulate the DOM directly — instead, React uses a **Virtual DOM** to update only the parts that change, ensuring fast performance and clean code.

---

## 🌳 **DOM Tree Structure**

* The DOM represents every HTML document as a **tree-like hierarchy**.
* Each tag (`<div>`, `<p>`, `<h1>`) is a **node**.
* Example HTML:

```html
<html>
  <body>
    <div id="root">
      <h1>Hello World</h1>
    </div>
  </body>
</html>
```

* DOM Tree:

```
Document
 └── html
      └── body
           └── div#root
                └── h1
```

### 🧠 React Equivalent:

React builds a **Virtual DOM tree** internally. When the state changes, React compares the new virtual tree with the old one (using a process called **diffing**) and updates only the changed nodes in the **real DOM**.

---

## 🎯 **Selecting Elements**

Traditional JavaScript provides various methods to select elements.

### 🔹 getElementById()

Selects an element by its `id`.

```js
const title = document.getElementById("main-title");
```

### 🔹 getElementsByClassName()

Selects elements by class name (returns HTMLCollection).

```js
const buttons = document.getElementsByClassName("btn");
```

### 🔹 getElementsByTagName()

Selects elements by tag name.

```js
const divs = document.getElementsByTagName("div");
```

### 🔹 querySelector()

Selects the **first** element that matches a CSS selector.

```js
const firstBtn = document.querySelector(".btn");
```

### 🔹 querySelectorAll()

Selects **all** elements matching the selector (returns NodeList).

```js
const allButtons = document.querySelectorAll(".btn");
```

### ⚛️ React Equivalent:

React **controls the DOM automatically** through **JSX**.
You usually don’t select elements manually — instead, React manages them via **state** and **props**.

If needed (for animations, libraries, etc.), you can use **Refs**:

```jsx
import { useRef, useEffect } from "react";

function Example() {
  const headingRef = useRef();

  useEffect(() => {
    headingRef.current.style.color = "blue";
  }, []);

  return <h1 ref={headingRef}>Hello DOM</h1>;
}
```

---

## ✏️ **Modifying Elements**

Traditional DOM modification involves changing content, attributes, and styles directly.

### 🔹 innerHTML, textContent, innerText

```js
const para = document.querySelector("p");
para.innerHTML = "<b>Updated</b> text";   // Parses HTML
para.textContent = "Plain Text";          // Shows text as-is
para.innerText = "Visible Text Only";     // Ignores hidden elements
```

### 🔹 setAttribute(), getAttribute()

```js
const img = document.querySelector("img");
img.setAttribute("alt", "Profile Photo");
console.log(img.getAttribute("src"));
```

### 🔹 classList Methods

```js
const box = document.querySelector(".box");
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("highlight");
```

### 🔹 style Property

```js
const btn = document.querySelector("button");
btn.style.backgroundColor = "blue";
btn.style.padding = "10px";
```

### ⚛️ React Equivalent:

React updates these dynamically using **JSX** and **state**:

```jsx
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={active ? "active-box" : "inactive-box"}
      style={{ color: active ? "green" : "red" }}
      onClick={() => setActive(!active)}
    >
      {active ? "Active" : "Inactive"}
    </div>
  );
}
```

✅ No need for `setAttribute()` or `innerHTML` — React re-renders elements declaratively.

---

## 🧱 **Creating and Removing Elements**

### 🔹 createElement()

Creates a new element in the DOM.

```js
const newDiv = document.createElement("div");
newDiv.textContent = "New Element";
```

### 🔹 appendChild(), insertBefore()

```js
const parent = document.querySelector(".container");
const newChild = document.createElement("p");
newChild.textContent = "Added Text";
parent.appendChild(newChild);
```

### 🔹 removeChild(), remove()

```js
const removeMe = document.querySelector(".to-remove");
removeMe.remove(); // modern and simple
```

### ⚛️ React Equivalent:

React handles all this **automatically** via **conditional rendering**.

```jsx
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>Element Visible</p>}
    </div>
  );
}
```

✅ React internally uses `createElement()` and `remove()` when rendering JSX.

---

## ⚙️ **Element Properties and Methods**

Every DOM element has properties and methods you can read or modify.

### Example (Vanilla JS):

```js
const btn = document.querySelector("button");
btn.disabled = true;
console.log(btn.tagName); // BUTTON
```

### ⚛️ React Equivalent:

You can directly use properties as JSX attributes:

```jsx
function App() {
  const [disabled, setDisabled] = useState(false);

  return (
    <button disabled={disabled} onClick={() => setDisabled(true)}>
      {disabled ? "Disabled" : "Click Me"}
    </button>
  );
}
```

✅ React automatically binds attributes to element properties.

---

## 🧠 Summary

| Concept         | JavaScript DOM                     | React                        |
| --------------- | ---------------------------------- | ---------------------------- |
| Element Access  | Manual via selectors               | JSX-based Virtual DOM        |
| Modify Elements | `innerHTML`, `setAttribute()`      | Controlled by state & props  |
| Create/Remove   | `createElement()`, `appendChild()` | Conditional rendering        |
| Style           | `element.style.property`           | Inline styles or CSS         |
| Efficiency      | Slower (direct DOM)                | Faster (Virtual DOM diffing) |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)

