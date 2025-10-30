# 🎨 25. Styling in React

---

## 📘 Overview

Styling in React can be done in several ways — from **simple inline styles** to **advanced CSS-in-JS** libraries.
React doesn’t impose any styling approach; instead, it gives flexibility to choose what best fits your project’s size, structure, and scalability.

---

## 🔹 Inline Styles

Inline styles are applied directly to elements using the `style` attribute as a JavaScript object.

### 🧠 Syntax:

```jsx
function App() {
  const headingStyle = {
    color: "blue",
    fontSize: "24px",
    textAlign: "center"
  };

  return <h1 style={headingStyle}>Hello React!</h1>;
}
```

🧩 **Key Rules:**

* Property names are written in **camelCase** (`backgroundColor`, not `background-color`).
* Values are usually strings.
* Inline styles are **scoped to the element**, avoiding global conflicts.

✅ **Pros:**

* Quick for small components.
* No external CSS file needed.

❌ **Cons:**

* No pseudo-classes (`:hover`) or media queries.
* Hard to maintain in large apps.

---

## 🔹 CSS Modules

**CSS Modules** help you write **scoped and reusable CSS** by automatically generating unique class names.

### 🧱 Example:

`Button.module.css`

```css
.btn {
  background-color: teal;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
```

`Button.jsx`

```jsx
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```

✅ **Pros:**

* Class names are locally scoped — no naming collisions.
* Works well with frameworks like Next.js and CRA.

❌ **Cons:**

* Slightly more setup.
* Can get verbose for very dynamic styles.

---

## 🔹 Styled-Components / Emotion

**Styled-Components** and **Emotion** are popular **CSS-in-JS** libraries that let you write actual CSS inside JavaScript files.

### 💅 Styled-Components Example:

```bash
npm install styled-components
```

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: teal;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background: darkcyan;
  }
`;

export default function App() {
  return <Button>Click Me</Button>;
}
```

🧩 **Features:**

* Dynamic styles using **props**:

  ```jsx
  const Button = styled.button`
    background: ${props => (props.primary ? "blue" : "gray")};
  `;
  ```

✅ **Pros:**

* Scoped styles.
* Conditional and dynamic styling.
* Reusable, theme-friendly design.

❌ **Cons:**

* Slight runtime overhead.
* Requires a build setup.

---

## 🔹 Tailwind CSS Integration

**Tailwind CSS** is a utility-first CSS framework — it uses predefined classes to build interfaces rapidly.

### ⚙️ Setup (in CRA or Next.js)

```bash
npm install tailwindcss
npx tailwindcss init
```

Then add Tailwind directives to your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ⚡ Example:

```jsx
export default function Card() {
  return (
    <div className="p-6 max-w-sm bg-white rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-semibold mb-2">React + Tailwind</h2>
      <p className="text-gray-600">Fast, responsive styling.</p>
    </div>
  );
}
```

✅ **Pros:**

* Extremely fast to design UI.
* No CSS files required.
* Built-in responsive design utilities.

❌ **Cons:**

* Can make JSX cluttered.
* Requires learning Tailwind class naming.

---

## 🔹 CSS-in-JS Patterns

**CSS-in-JS** is a general term for writing CSS inside JavaScript code, dynamically generating styles at runtime or build-time.

Popular libraries:

* **Styled-Components**
* **Emotion**
* **JSS**
* **Linaria** (zero-runtime)

### ✨ Example (Emotion)

```bash
npm install @emotion/react @emotion/styled
```

```jsx
import styled from "@emotion/styled";

const Title = styled.h1`
  color: hotpink;
  font-size: 2rem;
`;

export default function App() {
  return <Title>Hello Emotion!</Title>;
}
```

✅ **Pros:**

* Scoped, maintainable, and dynamic.
* Perfect for large React projects with theming.

❌ **Cons:**

* Adds library dependency.
* Slightly higher bundle size.

---

## 🧩 Summary

| **Styling Method**              | **Scoped**       | **Dynamic**     | **Best For**                  |
| ------------------------------- | ---------------- | --------------- | ----------------------------- |
| **Inline Styles**               | ✅                | ⚙️ Limited      | Quick demos / prototypes      |
| **CSS Modules**                 | ✅                | ⚙️ Limited      | Medium-sized apps             |
| **Styled-Components / Emotion** | ✅                | ✅               | Themed, component-driven apps |
| **Tailwind CSS**                | ⚙️ Utility-based | ⚙️ Class-driven | Rapid UI development          |
| **CSS-in-JS (general)**         | ✅                | ✅               | Large-scale apps with themes  |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
