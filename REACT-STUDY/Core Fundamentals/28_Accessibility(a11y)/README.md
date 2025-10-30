# ♿ 28. Accessibility (a11y)

---

## 📘 Overview

**Accessibility (a11y)** in React ensures that **everyone**, including people with disabilities, can use and navigate your web applications effectively.
The term **a11y** is short for “**accessibility**” (there are 11 letters between *a* and *y*).

React provides tools and patterns that help developers build **inclusive**, **keyboard-friendly**, and **screen-reader-accessible** user interfaces.

---

## 🔹 ARIA Attributes

**ARIA** stands for **Accessible Rich Internet Applications**.
These are special attributes that make dynamic content and custom UI elements more accessible to screen readers.

### 🧩 Common ARIA Attributes:

| Attribute     | Description                                                           | Example                                         |
| ------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| `aria-label`  | Adds a label for an element (especially when there’s no visible text) | `<button aria-label="Close menu">X</button>`    |
| `aria-hidden` | Hides elements from assistive technologies                            | `<div aria-hidden="true">Hidden text</div>`     |
| `aria-live`   | Announces dynamic content changes                                     | `<div aria-live="polite">Loading data...</div>` |
| `role`        | Defines the purpose of an element                                     | `<div role="alert">Error occurred!</div>`       |

### 🧠 Example:

```jsx
function Notification({ message, type }) {
  return (
    <div role="alert" aria-live="assertive">
      {type === "error" ? "❌ " : "✅ "} {message}
    </div>
  );
}
```

✅ Screen readers will announce “Error occurred!” or “Success” immediately when this component updates.

---

## 🔹 Semantic HTML in JSX

**Semantic HTML** gives meaning to the structure of the page.
Using the **right HTML tags** (like `<header>`, `<main>`, `<button>`, `<form>`, etc.) improves accessibility automatically.

### 🧩 Example:

❌ **Non-semantic (bad)**:

```jsx
<div onClick={handleClick}>Submit</div>
```

✅ **Semantic (good)**:

```jsx
<button onClick={handleClick}>Submit</button>
```

### 💡 Semantic Elements:

* `<header>` – Page or section header
* `<nav>` – Navigation links
* `<main>` – Main page content
* `<section>` – Group of related content
* `<article>` – Independent, self-contained content
* `<footer>` – Footer content
* `<button>`, `<label>`, `<input>`, `<form>` – Interactive elements

### 🧠 Example (Accessible Form):

```jsx
function ContactForm() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" aria-required="true" />

      <button type="submit">Submit</button>
    </form>
  );
}
```

✅ Screen readers automatically read label associations and required fields.

---

## 🔹 Focus Management

**Focus management** ensures that keyboard users and assistive technologies can navigate the app smoothly.

### 🧠 Key Concepts:

* Use **`tabindex`** for controlling focus order.
* Use **`autoFocus`** for automatically focusing an input when a component loads.
* Use **`ref`** with `focus()` for manually managing focus changes.

### 🧩 Example:

```jsx
import { useRef, useEffect } from "react";

function LoginForm() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Automatically focus input
  }, []);

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input ref={inputRef} id="username" type="text" />
    </div>
  );
}
```

✅ The input box receives focus automatically when the component mounts.

### 🔹 Managing Focus After State Changes

When modals, dialogs, or alerts appear, shift focus to them dynamically:

```jsx
import { useEffect, useRef } from "react";

function Modal({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  return (
    <div
      ref={modalRef}
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <h2 id="modal-title">Confirm Action</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```

✅ Ensures keyboard users land directly inside the modal when it opens.

---

## 🧠 Best Practices

✅ Use **semantic HTML** first — avoid replacing `<button>` with `<div>`.
✅ Provide **ARIA labels** when visual text isn’t present.
✅ Ensure **color contrast** meets WCAG standards.
✅ Make **all interactive elements keyboard accessible**.
✅ Test with screen readers (e.g., NVDA, VoiceOver).
✅ Handle focus properly when modals, menus, or alerts appear/disappear.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)