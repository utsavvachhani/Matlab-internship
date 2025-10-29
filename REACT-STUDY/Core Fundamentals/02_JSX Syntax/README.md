# ⚛️ 2. JSX Syntax

🎥 **YouTube Resource:** [JSX in React – Codevolution](https://www.youtube.com/watch?v=6Ied4aZxUzc)
📘 **Official Docs:** [Writing Markup with JSX – React.dev](https://react.dev/learn/writing-markup-with-jsx)

---

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React to describe what the UI should look like.
It allows you to **write HTML-like code directly inside JavaScript** — making it more readable and intuitive.

### 🔹 Example:

```jsx
const element = <h1>Hello, JSX!</h1>;
```

### 🔹 Rules:

1. JSX must have **one parent element** (usually wrapped in a `<div>` or `<>...</>` fragment).
2. **HTML tags** are lowercase (`<div>`), **React components** are uppercase (`<App />`).
3. JSX elements are **converted to React elements** via `React.createElement()` behind the scenes.

```jsx
// JSX
const element = <h1>Hello, world!</h1>;

// Compiled (by Babel)
const element = React.createElement("h1", null, "Hello, world!");
```

---

## 🧮 Expressions in JSX

You can embed **JavaScript expressions** inside JSX using **curly braces `{}`**.
Expressions can include variables, function calls, or operations.

### 🔹 Example:

```jsx
const name = "Utsav";
const element = <h2>Hello, {name}!</h2>;
```

### 🔹 Expressions allowed:

```jsx
const user = { firstName: "Utsav", lastName: "Vachhani" };
const element = <p>{user.firstName + " " + user.lastName}</p>;

const multiply = (a, b) => a * b;
const result = <p>2 × 3 = {multiply(2, 3)}</p>;
```

🚫 **Note:**
You can’t use statements (like `if`, `for`) directly inside JSX — use ternary operators or logical expressions.

```jsx
{isLoggedIn ? <p>Welcome!</p> : <p>Please Login</p>}
```

---

## 🧱 Attributes & Props in JSX

JSX attributes are **camelCase** versions of HTML attributes.

### 🔹 Common JSX Attributes:

| HTML Attribute | JSX Equivalent |
| -------------- | -------------- |
| class          | className      |
| for            | htmlFor        |
| onclick        | onClick        |
| tabindex       | tabIndex       |

```jsx
const element = <button className="btn" onClick={() => alert("Clicked!")}>Click Me</button>;
```

### 🔹 Passing Props:

In React components, attributes are used as **props** (properties).

```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

<Welcome name="Utsav" />;
```

🧠 **Note:**

* You can pass **strings, numbers, expressions, or even components** as props.
* Props are **read-only**.

---

## 🧩 Fragments

React components must return a **single root element**.
When you don’t want to add an extra `<div>`, use **React Fragments** (`<>...</>`).

### 🔹 Example:

```jsx
function List() {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
    </>
  );
}
```

Fragments don’t render any additional DOM node — keeping your structure clean.

---

## 💬 Comments & Whitespace Rules

### 🔹 Comments in JSX:

Use `{/* ... */}` for inline comments **inside** JSX.

```jsx
function App() {
  return (
    <div>
      {/* This is a JSX comment */}
      <h1>Hello React!</h1>
    </div>
  );
}
```

🚫 Regular `//` or `/* */` comments won’t work directly inside JSX markup.

---

### 🔹 Whitespace Rules:

JSX treats **whitespace literally**:

* Spaces, tabs, and newlines inside text nodes are **collapsed** like in HTML.
* If you need explicit spacing, use `{' '}`.

```jsx
<p>Hello{' '}World</p>  // Outputs: Hello World
```

---

## ⚙️ Summary Table

| Concept              | Description                      | Example                                |
| -------------------- | -------------------------------- | -------------------------------------- |
| **JSX Element**      | HTML-like syntax in JS           | `<h1>Hello</h1>`                       |
| **Expressions**      | Embed JS inside `{}`             | `{name}`                               |
| **Attributes/Props** | Use camelCase, pass data         | `className`, `onClick`, `{props.name}` |
| **Fragments**        | Return multiple elements         | `<>...</>`                             |
| **Comments**         | `{/* comment */}`                | Inline only                            |
| **Whitespace**       | Collapsed; use `{' '}` for space | `<p>Hello{' '}World</p>`               |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
