# 📘 2. Event Handling

In JavaScript, **events** are actions or occurrences that happen in the browser (like clicks, typing, scrolling, etc.).
Event handling allows you to respond to these interactions.

In **React**, events are handled in a more structured and declarative way using the **Virtual DOM** and **synthetic event system**.

---

## ⚡ **Event Types**

Different types of events are available in the browser. Let’s look at each category.

---

### 🖱️ **Mouse Events (click, mouseover, mouseout, etc.)**

#### JavaScript Example:

```js
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Button Clicked!");
});
```

#### React Equivalent:

```jsx
function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

👉 Common Mouse Events:

* `click`
* `dblclick`
* `mousedown`
* `mouseup`
* `mouseover`
* `mouseout`
* `mousemove`

---

### ⌨️ **Keyboard Events (keydown, keyup, keypress)**

#### JavaScript Example:

```js
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});
```

#### React Equivalent:

```jsx
function KeyLogger() {
  const handleKeyDown = (e) => {
    console.log("Key pressed:", e.key);
  };

  return <input onKeyDown={handleKeyDown} placeholder="Type something..." />;
}
```

👉 Common Keyboard Events:

* `keydown` → triggers when key is pressed down
* `keyup` → triggers when key is released
* `keypress` → (deprecated) used for character input

---

### 📝 **Form Events (submit, change, input, focus, blur)**

#### JavaScript Example:

```js
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted!");
});
```

#### React Equivalent:

```jsx
import { useState } from "react";

function FormExample() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

👉 Common Form Events:

* `submit`
* `change`
* `input`
* `focus`
* `blur`

---

### 🌍 **Window Events (load, resize, scroll)**

#### JavaScript Example:

```js
window.addEventListener("resize", () => {
  console.log("Window resized!");
});
```

#### React Equivalent (using useEffect):

```jsx
import { useEffect } from "react";

function WindowResize() {
  useEffect(() => {
    const handleResize = () => console.log("Window resized!");
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Resize the window and check the console!</p>;
}
```

👉 Common Window Events:

* `load`
* `resize`
* `scroll`
* `unload`

---

## ➕ **addEventListener()**

Used to **register** an event listener on a DOM element.

```js
element.addEventListener("click", functionName);
```

Example:

```js
const btn = document.querySelector("button");
btn.addEventListener("click", () => console.log("Clicked!"));
```

🧠 **React Equivalent:**
You do not use `addEventListener()` directly.
Instead, use event props like:

```jsx
<button onClick={() => console.log("Clicked!")}>Click</button>
```

React automatically handles listener binding through its Virtual DOM.

---

## ➖ **removeEventListener()**

Removes a previously added event listener.

```js
function greet() {
  console.log("Hello!");
}
btn.addEventListener("click", greet);
btn.removeEventListener("click", greet);
```

🧠 **React Equivalent:**
In React, cleanup is done inside `useEffect()`’s return function.

```jsx
useEffect(() => {
  const handleClick = () => console.log("Clicked!");
  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);
```

---

## 📦 **Event Object**

When an event occurs, an **Event Object** is automatically passed to the handler containing useful information.

### JavaScript Example:

```js
document.addEventListener("click", (e) => {
  console.log(e.type); // click
  console.log(e.target); // clicked element
});
```

### React Equivalent:

```jsx
function App() {
  const handleClick = (e) => {
    console.log(e.type);
    console.log(e.target);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

🧠 In React, events are wrapped in a **SyntheticEvent** — a cross-browser wrapper around the native event for consistency.

---

## 🌊 **Event Propagation (Bubbling and Capturing)**

Events travel through the DOM in two phases:

1. **Capturing phase** → from root to target.
2. **Bubbling phase** → from target back to root.

### JavaScript Example:

```js
document.querySelector(".outer").addEventListener("click", () => {
  console.log("Outer Div");
});

document.querySelector(".inner").addEventListener("click", () => {
  console.log("Inner Div");
});
```

Clicking `.inner` logs both messages due to bubbling.

🧠 React also supports bubbling but not capturing by default. You can use `onClickCapture` for capturing phase.

```jsx
<div onClickCapture={() => console.log("Capturing Div")}>
  <button onClick={() => console.log("Button Clicked")}>Click</button>
</div>
```

---

## 🧭 **Event Delegation**

Instead of attaching listeners to every element, attach one listener to a parent and handle events using `event.target`.

### JavaScript Example:

```js
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

🧠 **React Equivalent:**
React inherently uses **event delegation** — all events bubble up to the root using synthetic events, making the app efficient.

---

## 🚫 **preventDefault()**

Stops the default behavior of an element (e.g., form submission or link navigation).

### Example:

```js
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submission stopped!");
});
```

### React Equivalent:

```jsx
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission stopped!");
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## ⛔ **stopPropagation()**

Prevents an event from propagating (bubbling up) to parent elements.

### Example:

```js
document.querySelector(".inner").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner clicked only");
});
```

### React Equivalent:

```jsx
<div onClick={() => console.log("Parent Clicked")}>
  <button
    onClick={(e) => {
      e.stopPropagation();
      console.log("Button Clicked Only");
    }}
  >
    Click Me
  </button>
</div>
```

---

## 🧠 Summary

| Concept           | JavaScript              | React                        |
| ----------------- | ----------------------- | ---------------------------- |
| Adding Events     | `addEventListener()`    | `onEventName={}`             |
| Removing Events   | `removeEventListener()` | Cleanup inside `useEffect()` |
| Event Object      | `event`                 | `SyntheticEvent`             |
| Propagation       | Bubbling & Capturing    | Same with `onClickCapture`   |
| preventDefault()  | Yes                     | Yes                          |
| stopPropagation() | Yes                     | Yes                          |
| Delegation        | Manual                  | Built-in                     |

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
