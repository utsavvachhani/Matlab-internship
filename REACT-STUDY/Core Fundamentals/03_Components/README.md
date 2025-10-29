

# ⚛️ 3. Components (1 Day)

🎥 **YouTube Resource:** [React Components](https://www.youtube.com/watch?v=SqcY0GlETPk)
📘 **Official Docs:** [Your First Component – React.dev](https://react.dev/learn/your-first-component)

---

## 🧩 Functional Components

Functional Components are the **most commonly used** way to build React components.
They are **JavaScript functions** that return **JSX** to describe UI elements.

### 🔹 Example:

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

Or using **arrow functions**:

```jsx
const Welcome = () => <h1>Hello, React!</h1>;
```

✅ **Key Points:**

* Must start with a **capital letter** (React uses this to distinguish components from HTML tags).
* Must **return JSX**.
* Can accept **props** for dynamic data.

### 🔹 Example with Props:

```jsx
function Greet(props) {
  return <h2>Hello, {props.name}!</h2>;
}

<Greet name="Utsav" />;
```

---

## 🧱 Class Components (Legacy)

Class components were the **original** way to define components before React Hooks were introduced (in React 16.8).
They are still used in older projects, but **functional components are preferred** today.

### 🔹 Example:

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

✅ **Key Features:**

* Must extend `React.Component`.
* Have a `render()` method.
* Can use **state** and **lifecycle methods** (e.g., `componentDidMount()`).

📌 **Note:** Functional components now handle all these with **Hooks**, making them simpler and more efficient.

---

## 🧩 Component Naming Conventions

Following naming conventions improves readability and consistency.

| Rule                                               | Example                            |
| -------------------------------------------------- | ---------------------------------- |
| Component names must start with **Capital Letter** | `UserCard`, not `userCard`         |
| Use **PascalCase** for file and folder names       | `UserProfile.jsx`                  |
| Keep **one component per file**                    | `Header.jsx`, `Footer.jsx`         |
| File name should match component name              | `Navbar.jsx` → `function Navbar()` |

---

## 🔄 Default & Named Exports

Components can be exported in **two ways**:
**Default export** or **Named export**.

### 🔹 Default Export:

```jsx
// Button.jsx
export default function Button() {
  return <button>Click Me</button>;
}

// Import
import Button from './Button';
```

### 🔹 Named Export:

```jsx
// Button.jsx
export function PrimaryButton() {
  return <button>Primary</button>;
}

export function SecondaryButton() {
  return <button>Secondary</button>;
}

// Import
import { PrimaryButton, SecondaryButton } from './Button';
```

✅ **Default Exports:** Only one per file.
✅ **Named Exports:** Multiple allowed per file.

---

## 📁 Organizing Component Files

A clean project structure helps scalability and maintenance.

### 🔹 Recommended Folder Structure:

```
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── Footer.jsx
 │    ├── Button/
 │    │    ├── Button.jsx
 │    │    └── Button.css
 │    └── Card/
 │         ├── Card.jsx
 │         └── Card.css
 ├── App.jsx
 └── index.js
```

✅ **Tips:**

* Group related files (JSX, CSS, tests) in the same folder.
* Use **index.js** for re-exporting multiple components.
* Use descriptive names like `UserList`, `ProfileCard`, `Navbar`.

---

## ⚙️ Summary Table

| Concept                  | Description                         | Example                              |
| ------------------------ | ----------------------------------- | ------------------------------------ |
| **Functional Component** | Function that returns JSX           | `function Greet() {}`                |
| **Class Component**      | ES6 class extending React.Component | `class Welcome extends Component {}` |
| **Naming Convention**    | PascalCase for files and components | `UserCard.jsx`                       |
| **Default Export**       | One export per file                 | `export default Component`           |
| **Named Export**         | Multiple exports allowed            | `export { CompA, CompB }`            |
| **File Structure**       | Organized folder system             | `src/components/`                    |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
