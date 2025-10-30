# ⚛️ 14. Context API

---

## 📘 Overview

The **Context API** in React provides a way to share data **across multiple components** without having to pass props manually through every level of the component tree (known as **prop drilling**).

It is commonly used for **global state management**, **themes**, **authentication**, and **user preferences**.

---

## 🌐 Creating Context

To create a context, use the `createContext()` function from React.

```jsx
import React, { createContext } from "react";

// Step 1: Create a context
const ThemeContext = createContext();

export default ThemeContext;
```

### Explanation

* `createContext()` returns an object with two components:

  * **Provider** – used to supply data to the component tree.
  * **Consumer** – used to access the context data (or `useContext` hook in functional components).

---

## 🧩 Provider & Consumer

The **Provider** component makes data available to all its child components.
Any component inside the provider can access the data using a **Consumer** or the **useContext hook**.

```jsx
import React, { createContext } from "react";
import Child from "./Child";

// Step 1: Create Context
export const UserContext = createContext();

function App() {
  const user = { name: "Utsav", role: "Developer" };

  return (
    // Step 2: Wrap children with Provider
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}

export default App;
```

### Accessing Data with Consumer (Class Component Style)

```jsx
import React from "react";
import { UserContext } from "./App";

function Child() {
  return (
    <UserContext.Consumer>
      {user => <h2>Hello, {user.name}! Your role is {user.role}.</h2>}
    </UserContext.Consumer>
  );
}

export default Child;
```

---

## ⚙️ useContext Hook

In modern React (functional components), the **useContext** hook is the preferred way to access context values.

```jsx
import React, { useContext } from "react";
import { UserContext } from "./App";

function Child() {
  const user = useContext(UserContext);
  return <h2>Hello, {user.name}! You are a {user.role}.</h2>;
}

export default Child;
```

### Advantages of `useContext`:

✅ Cleaner syntax
✅ Easier to read and maintain
✅ Works perfectly with other React Hooks

---

## 🧱 Avoiding Prop Drilling

**Prop drilling** occurs when data is passed down manually through multiple nested components, even if only one component deep inside needs it.

### ❌ Without Context

```jsx
function App() {
  const theme = "dark";
  return <Parent theme={theme} />;
}

function Parent({ theme }) {
  return <Child theme={theme} />;
}

function Child({ theme }) {
  return <p>Current theme: {theme}</p>;
}
```

### ✅ With Context API

```jsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

export default App;
```

✅ Context helps **avoid passing props manually** through intermediate components, making code cleaner and more maintainable.

---

## 💡 Common Use Cases

| Use Case                  | Description                                 |
| ------------------------- | ------------------------------------------- |
| **Theme Switching**       | Light/Dark mode toggle                      |
| **User Authentication**   | Store user info and login state             |
| **Language/Localization** | Manage multilingual support                 |
| **Global App State**      | Share data like notifications or cart items |

---

## 🧠 Summary

| Concept                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| **createContext()**      | Creates a new Context object                   |
| **Provider**             | Makes data available to child components       |
| **useContext()**         | Consumes the data inside functional components |
| **Avoids Prop Drilling** | Prevents passing props deeply down the tree    |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
