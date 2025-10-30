# ⚛️ 18. Refs & DOM Access

---

## 📘 Overview

In React, **Refs (References)** are a way to **directly access and interact with DOM elements or React components**.
Normally, React encourages declarative manipulation — but sometimes, you need imperative control, for example:

* Focusing an input field
* Playing or pausing a video
* Measuring element dimensions

Refs allow you to **“reference”** those DOM elements directly.

---

## 🧩 Creating Refs

You can create Refs using the **`useRef()`** Hook in functional components or **`React.createRef()`** in class components.

### 🧠 Syntax:

```jsx
const refName = useRef(initialValue);
```

* The `.current` property holds the reference value.
* Changing `.current` does **not** trigger re-renders.

---

### ✅ Example 1: Focusing an Input Field

```jsx
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```

🔹 `ref={inputRef}` attaches the ref to the `<input>` element.
🔹 `inputRef.current` points to that DOM node.
🔹 `focus()` gives imperative access to the element.

---

### ✅ Example 2: Class Component with createRef()

```jsx
import React, { Component } from "react";

class RefExample extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  focusInput = () => {
    this.myRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" />
        <button onClick={this.focusInput}>Focus</button>
      </div>
    );
  }
}

export default RefExample;
```

✅ **React.createRef()** works similarly, but new refs are created for each instance.

---

## ⚙️ Forwarding Refs

Normally, refs **cannot be passed directly** from parent to child because they are not regular props.
**React.forwardRef()** allows a component to forward its ref to a child component.

### 🧩 Example: Forwarding Refs to Child

```jsx
import React, { useRef, forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function Form() {
  const inputRef = useRef();

  const handleFocus = () => inputRef.current.focus();

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Focus me via parent!" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default Form;
```

✅ Here:

* The **parent** (`Form`) holds the ref.
* The **child** (`CustomInput`) forwards it to its `<input>`.
* This allows **direct DOM access across components**.

---

## 🧠 useImperativeHandle

The **`useImperativeHandle()`** Hook customizes the instance value that’s exposed when using `ref` with `forwardRef`.
It allows **controlling what methods or properties** the parent component can access.

### 🧩 Example: Exposing Controlled Functions

```jsx
import React, { useRef, useImperativeHandle, forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Controlled by parent" />;
});

function Parent() {
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.focusInput()}>Focus</button>
      <button onClick={() => childRef.current.clearInput()}>Clear</button>
    </div>
  );
}

export default Parent;
```

✅ **Explanation:**

* `useImperativeHandle(ref, () => ({}))` defines the custom API exposed to the parent.
* Parent calls `childRef.current.focusInput()` to invoke the child’s function.
* Keeps internal logic hidden while exposing only what’s necessary.

---

## 💡 When to Use Refs

✅ **Use Refs for:**

* Managing focus, text selection, or media playback
* Integrating with third-party DOM libraries
* Triggering animations
* Storing mutable values without causing re-renders

🚫 **Avoid Refs for:**

* Managing app data
* Communicating between components (use props or context instead)

---

## 📊 Summary Table

| Concept                   | Purpose                           | Example                                |
| ------------------------- | --------------------------------- | -------------------------------------- |
| **useRef()**              | Create ref in function components | `const ref = useRef(null)`             |
| **React.createRef()**     | Create ref in class components    | `this.ref = React.createRef()`         |
| **forwardRef()**          | Pass ref from parent to child     | `forwardRef((props, ref) => ...)`      |
| **useImperativeHandle()** | Expose limited methods to parent  | `useImperativeHandle(ref, () => ({}))` |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
