
# ⚛️ 4. Props (0.5 Day)

🎥 **YouTube Resource:** [React Props](https://www.youtube.com/watch?v=PHaECbrKgs0)
📘 **Official Docs:** [Passing Props to a Component – React.dev](https://react.dev/learn/passing-props-to-a-component)

---

## 🧾 Passing Props

**Props (short for “properties”)** are used to **pass data** from a parent component to a child component.
They make components **reusable** and **dynamic**.

### 🔹 Example:

```jsx
// Parent Component
function App() {
  return <Greet name="Utsav" />;
}

// Child Component
function Greet(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```

✅ **Props are:**

* Read-only (immutable)
* Passed from **parent → child**
* Help in **customizing** component behavior

### 🔹 Using Destructuring:

```jsx
function Greet({ name, age }) {
  return <h2>Hello, {name}! You are {age} years old.</h2>;
}

<Greet name="Utsav" age={22} />;
```

---

## 🧩 Prop Types & Validation

You can define **data types** for props using the `prop-types` library.
This helps catch errors early by validating the props passed to a component.

### 🔹 Installation:

```bash
npm install prop-types
```

### 🔹 Example:

```jsx
import PropTypes from 'prop-types';

function User({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

✅ **Benefits:**

* Ensures type safety
* Improves debugging
* Helps maintain large-scale applications

---

## ⚙️ Default Props

Default props provide **fallback values** if no prop is passed.

### 🔹 Example:

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}

Button.defaultProps = {
  label: 'Click Me'
};

// Usage
<Button />   // Output: Click Me
<Button label="Submit" />  // Output: Submit
```

✅ **Best Practice:** Always define `defaultProps` for optional props.

---

## 🔄 Prop Drilling

**Prop Drilling** happens when you pass data through multiple nested components
just to reach a deeply nested child — even if intermediate components don’t need it.

### 🔹 Example:

```jsx
function App() {
  const user = "Utsav";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>Hello, {user}!</p>;
}
```

📌 **Problem:** Too many intermediate layers.
💡 **Solution:** Use **Context API** or **state management libraries** like Redux or Zustand to avoid it.

---

## 👶 Children Prop

The **children prop** is a special prop used to pass JSX or components between tags.

### 🔹 Example:

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
<Card>
  <h2>Welcome to React!</h2>
  <p>This is inside the Card component.</p>
</Card>
```

✅ **Key Points:**

* Useful for reusable wrapper components
* Used in UI containers like Modals, Cards, Layouts, etc.

---

## 🧠 Summary Table

| Concept           | Description                           | Example                                    |
| ----------------- | ------------------------------------- | ------------------------------------------ |
| **Props**         | Pass data from parent to child        | `<Child name="Utsav" />`                   |
| **PropTypes**     | Type-checking for props               | `PropTypes.string.isRequired`              |
| **Default Props** | Fallback values for props             | `Button.defaultProps = { label: 'Click' }` |
| **Prop Drilling** | Passing props through multiple layers | Avoid with Context API                     |
| **Children Prop** | Pass JSX as content                   | `<Card><p>Content</p></Card>`              |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
