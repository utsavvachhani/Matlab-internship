# ⚛️ 6. Event Handling

---

## 📘 Overview

Event handling in React is very similar to handling events in plain JavaScript,
but with **synthetic events** and **camelCase naming conventions**.

React normalizes events so that they work **identically across all browsers**, using its own **SyntheticEvent** system.

---

## 🎯 Handling Events in React

In React, event handlers are written as **camelCase** and passed as functions, not strings.

### 🔹 Example:

```jsx
function ButtonClick() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

✅ **Key Differences from HTML:**

| HTML                               | React                            |
| ---------------------------------- | -------------------------------- |
| `<button onclick="handleClick()">` | `<button onClick={handleClick}>` |
| String handler                     | Function handler                 |
| Event not normalized               | Synthetic event system           |

---

## ⚙️ Synthetic Events

React uses a **SyntheticEvent** wrapper around the native browser event for better performance and cross-browser compatibility.

### 🔹 Example:

```jsx
function InputLogger() {
  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.nativeEvent); // Access native browser event if needed
  }

  return <input type="text" onChange={handleChange} />;
}
```

✅ **Features of Synthetic Events:**

* Works identically across all browsers.
* Automatically **pooled** for performance (reused between events).
* You can call `event.persist()` to access it asynchronously.

---

## 🧩 Event Binding Techniques

Event binding determines how you connect an event handler to a component, especially when you need access to `this`.

### 🔹 In Class Components:

```jsx
class Clicker extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this); // Binding in constructor
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.handleClick}>Count: {this.state.count}</button>;
  }
}
```

✅ **Binding Options:**

1. **Constructor Binding (Best Performance)**

   ```jsx
   this.handleClick = this.handleClick.bind(this);
   ```
2. **Arrow Function as Class Property**

   ```jsx
   handleClick = () => { ... };
   ```
3. **Inline Arrow Function (not recommended for large lists)**

   ```jsx
   <button onClick={() => this.handleClick()}>Click</button>
   ```

### 🔹 In Functional Components:

With functional components, event binding is automatic since there’s no `this`.

```jsx
function Clicker() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

---

## 🎯 Passing Arguments to Handlers

When you need to pass additional data (like an ID or name) to your event handler:

### 🔹 Example 1: Inline Arrow Function

```jsx
function UserList() {
  const users = ["Utsav", "Meet", "Ravi"];

  function greetUser(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <div>
      {users.map(user => (
        <button key={user} onClick={() => greetUser(user)}>
          Greet {user}
        </button>
      ))}
    </div>
  );
}
```

### 🔹 Example 2: Using `.bind()`

```jsx
function Button({ id }) {
  function handleClick(id) {
    console.log("Button ID:", id);
  }

  return <button onClick={handleClick.bind(this, id)}>Click</button>;
}
```

✅ **Note:** Arrow functions are preferred for readability and performance,
but `.bind()` is still common in class components.

---

## 🧠 Common Event Types in React

| Event Type                  | Example                   |
| --------------------------- | ------------------------- |
| onClick                     | `<button onClick={fn}>`   |
| onChange                    | `<input onChange={fn}>`   |
| onSubmit                    | `<form onSubmit={fn}>`    |
| onMouseEnter / onMouseLeave | `<div onMouseEnter={fn}>` |
| onKeyDown / onKeyUp         | `<input onKeyDown={fn}>`  |
| onFocus / onBlur            | `<input onFocus={fn}>`    |

---

## 🧩 Summary

| Concept              | Description                           | Example                                |
| -------------------- | ------------------------------------- | -------------------------------------- |
| **Handling Events**  | Attach handlers in JSX with camelCase | `onClick={handleClick}`                |
| **Synthetic Events** | Cross-browser React event system      | `event.persist()`                      |
| **Binding**          | Connects method to `this`             | `this.method = this.method.bind(this)` |
| **Passing Args**     | Use arrow functions or `.bind()`      | `onClick={() => fn(id)}`               |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)
