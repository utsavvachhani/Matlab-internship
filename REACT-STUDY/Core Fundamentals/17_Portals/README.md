# ⚛️ 17. Portals

---

## 📘 Overview

**React Portals** provide a way to **render components outside their parent DOM hierarchy**, while still preserving React’s **component structure, event bubbling, and state management**.

They are most commonly used for **modals**, **tooltips**, **pop-ups**, and **dropdowns** that need to visually appear above other elements but remain logically part of the same component tree.

---

## 🧩 What Are React Portals?

Normally, React components are rendered inside the **DOM node** where the React app is mounted (usually a `<div id="root"></div>`).
However, with **Portals**, you can render a component **into any other DOM node**.

### 🧠 Syntax:

```jsx
ReactDOM.createPortal(child, container)
```

* **child** → React element to render
* **container** → DOM node where the child should be rendered

---

## ⚙️ Example — Rendering Outside Parent DOM Tree

### 🧩 HTML Structure (public/index.html):

```html
<body>
  <div id="root"></div>
  <div id="portal-root"></div>
</body>
```

### 🧩 React Component Example:

```jsx
import ReactDOM from "react-dom";
import React from "react";

function PortalExample() {
  return ReactDOM.createPortal(
    <h2>This is rendered outside the root DOM hierarchy!</h2>,
    document.getElementById("portal-root")
  );
}

export default PortalExample;
```

Here, the component’s JSX is **rendered inside `#portal-root`**, not inside the main React root (`#root`).
Yet, it behaves as part of the same React component tree — meaning **context, state, and events still work normally.**

---

## 🎯 Why Use Portals?

* To **escape overflow and z-index issues** when rendering modals or dropdowns.
* To **avoid CSS stacking problems** caused by nested DOM structure.
* To **position elements freely** on the page while keeping React’s declarative model.

---

## 💡 Common Use Cases

### 1️⃣ Modal Dialogs

Modals often need to appear **above everything else** in the UI and not be limited by parent CSS overflow or stacking.

```jsx
import ReactDOM from "react-dom";
import React from "react";

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Modal;
```

Usage:

```jsx
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {show && (
        <Modal onClose={() => setShow(false)}>
          <h2>Portal Modal</h2>
          <p>This modal is rendered via React Portal!</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
```

✅ **Explanation:**

* The modal is rendered into `#portal-root`.
* `onClick` on overlay closes the modal.
* `stopPropagation()` prevents the modal content from closing when clicked.

---

### 2️⃣ Tooltips

Tooltips often need to **escape the flow of parent components** (e.g., hidden overflow or z-index issues).

```jsx
import ReactDOM from "react-dom";
import React from "react";

function Tooltip({ text, position = { top: 0, left: 0 } }) {
  return ReactDOM.createPortal(
    <div
      className="tooltip"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        background: "#222",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "14px",
      }}
    >
      {text}
    </div>,
    document.getElementById("portal-root")
  );
}

export default Tooltip;
```

✅ The tooltip appears **on top of all elements** but is still part of React’s tree for updates and cleanup.

---

## 🧠 Event Bubbling with Portals

Even though a portal’s children are **rendered outside** the parent DOM tree, **events still propagate** through the React component hierarchy as if the component were a normal child.

### Example:

```jsx
function Parent() {
  const handleClick = () => alert("Clicked inside Parent!");
  return (
    <div onClick={handleClick}>
      <PortalExample />
    </div>
  );
}
```

Even though `PortalExample` renders outside the parent DOM node, the `onClick` event will **bubble up** to `Parent`.

✅ This maintains React’s **consistent event system** across the app.

---

## 📊 Summary Table

| Concept            | Description                                | Example                                  |
| ------------------ | ------------------------------------------ | ---------------------------------------- |
| **Portal**         | Renders components outside parent DOM node | `ReactDOM.createPortal()`                |
| **Use Case**       | Modals, Tooltips, Popovers                 | `<Modal />`, `<Tooltip />`               |
| **Container**      | Target DOM node                            | `document.getElementById("portal-root")` |
| **Event Bubbling** | Still works across React tree              | Parent event handlers triggered normally |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)