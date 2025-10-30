# ⚙️ 34. Advanced Patterns in React

---

## 📘 Overview

Advanced patterns in React help you **reuse logic**, **enhance component flexibility**, and **improve code organization**.
They go beyond basic props and state management, offering elegant ways to structure **scalable and maintainable** React applications.

In this section, we’ll explore:

* **Higher-Order Components (HOC)**
* **Render Props**
* **Compound Components**
* **State Reducer Pattern**
* **Controlled vs Uncontrolled Patterns**

---

## 🔹 1. Higher-Order Components (HOC)

A **Higher-Order Component (HOC)** is a function that **takes a component as input** and **returns an enhanced component**.

### 📘 Concept:

> HOC = A function that adds extra features or logic to an existing component.

### 🧩 Syntax:

```jsx
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}
```

### 🧠 Example:

```jsx
const DisplayUser = ({ name }) => <h2>Hello, {name}</h2>;

const EnhancedDisplayUser = withLogger(DisplayUser);

function App() {
  return <EnhancedDisplayUser name="Utsav" />;
}
```

✅ **Use Cases:**

* Authentication checks
* Logging
* Caching
* Injecting props

⚠️ **Note:** HOCs can cause **wrapper hell** if overused. Hooks are often preferred today.

---

## 🔹 2. Render Props

**Render Props** is a pattern where a component’s **child is a function** that receives dynamic data or logic.

### 📘 Concept:

> “A technique for sharing code between components using a prop whose value is a function.”

### 🧩 Example:

```jsx
function MouseTracker({ render }) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => <h3>Mouse at ({x}, {y})</h3>}
    />
  );
}
```

✅ **Use Cases:**

* Reusing complex logic like mouse tracking, form handling, etc.
* Alternative to HOCs.

⚠️ **Drawback:** Can lead to **“callback hell”** if deeply nested.

---

## 🔹 3. Compound Components

Compound components allow **multiple subcomponents** to work together under a **shared parent context**.
They improve flexibility and API design by letting users control the internal structure.

### 🧩 Example:

```jsx
const Tabs = ({ children }) => {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { active, setActive, index })
      )}
    </div>
  );
};

const Tab = ({ index, active, setActive, children }) => (
  <button onClick={() => setActive(index)}>
    {children} {active === index && "✓"}
  </button>
);

const TabPanel = ({ index, active, children }) =>
  active === index ? <div>{children}</div> : null;

function App() {
  return (
    <Tabs>
      <Tab>React</Tab>
      <Tab>JavaScript</Tab>
      <TabPanel>Welcome to React!</TabPanel>
      <TabPanel>Learning JS</TabPanel>
    </Tabs>
  );
}
```

✅ **Use Cases:**

* Tab systems
* Accordions
* Dropdowns
* Modals

💡 Enables **cleaner APIs** for reusable UI libraries.

---

## 🔹 4. State Reducer Pattern

The **State Reducer Pattern** provides complete control over component state transitions.
It’s similar to `useReducer`, but allows **users to override or customize** internal logic.

### 🧩 Example:

```jsx
function useToggle({ initial = false, reducer = (s, a) => !s } = {}) {
  const [state, dispatch] = React.useReducer(reducer, initial);
  return [state, () => dispatch()];
}

function App() {
  const [on, toggle] = useToggle({
    reducer: (state, action) => (state ? state : !state), // custom logic
  });

  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}
```

✅ **Use Cases:**

* Reusable hooks with override logic
* Form or toggle components with customizable behavior

💡 Common in **headless UI libraries** (like Downshift by Kent C. Dodds).

---

## 🔹 5. Controlled vs Uncontrolled Patterns

### ⚙️ Controlled Components:

State is **fully managed by React** using `useState` or `props`.

```jsx
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```

✅ Predictable
✅ Easier validation

---

### ⚙️ Uncontrolled Components:

State is **managed by the DOM** using `refs`.

```jsx
function UncontrolledInput() {
  const inputRef = React.useRef();
  const handleSubmit = () => alert(inputRef.current.value);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

✅ Simpler setup for quick forms
⚠️ Harder to sync with React state

---

## 🧠 Summary

| Pattern                     | Description                              | When to Use                           |
| --------------------------- | ---------------------------------------- | ------------------------------------- |
| **HOC**                     | Wraps a component to add logic or data   | Reuse logic across components         |
| **Render Props**            | Shares logic via function-as-children    | When you need flexible data rendering |
| **Compound Components**     | Multiple subcomponents sharing context   | UI libraries, modular components      |
| **State Reducer**           | Allows external control of state updates | Custom hooks and reusable UI          |
| **Controlled/Uncontrolled** | React-managed vs DOM-managed state       | Forms, input handling                 |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
