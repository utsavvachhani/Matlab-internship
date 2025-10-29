# ⚛️ 8. Lists & Keys

---

## 📘 Overview

In React, you often need to **render multiple similar components** — like a list of users, items, or messages.
React provides an efficient way to handle such lists using the **`map()`** function and **unique keys** to track individual elements efficiently.

---

## 🔹 Rendering Lists with `map()`

The JavaScript **`map()`** method creates a new array by applying a function to each element.
In React, it’s commonly used to **render lists of JSX elements** dynamically.

### 🧩 Example:

```jsx
function UserList() {
  const users = ["Utsav", "Meet", "Priya", "Raj"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
```

✅ **Explanation:**

* `users.map()` iterates through each user.
* Each user name is rendered inside an `<li>`.
* A unique `key` prop is added to help React identify each list item.

---

## 🔹 Unique Keys

Each element inside a list **must have a unique `key` prop**.
Keys help React efficiently update and re-render only the changed items — improving performance.

### 🧩 Example (with unique IDs):

```jsx
const users = [
  { id: 1, name: "Utsav" },
  { id: 2, name: "Meet" },
  { id: 3, name: "Priya" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

✅ **Why use unique keys:**

* Keys make React’s **Virtual DOM diffing algorithm** faster.
* Prevents bugs during updates, insertions, and deletions.

⚠️ **Avoid using indexes as keys** (like `key={index}`) unless the list is static or never changes.
If items are reordered or deleted, index keys can cause incorrect re-renders.

---

## 🔹 Key Best Practices

Here are the most important rules when working with keys in React:

| ✅ **Best Practice**                                            | 🚫 **Avoid**                                                     |
| -------------------------------------------------------------- | ---------------------------------------------------------------- |
| Use a **unique, stable ID** from your data (like `id`, `uuid`) | Using array **index** as key (e.g., `key={index}`)               |
| Keys must be **consistent** between renders                    | Using random values or changing keys on every render             |
| Use keys on the **outermost element** in the iteration         | Adding keys to child elements inside a single `li` unnecessarily |

### 🧩 Example (Good Practice):

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
```

### 🧩 Example (Bad Practice):

```jsx
<li key={Math.random()}>{todo.task}</li>  // ❌ Changes every render
```

---

## 🧩 Combining Example

```jsx
function ProductList() {
  const products = [
    { id: "p1", name: "Laptop", price: 65000 },
    { id: "p2", name: "Phone", price: 30000 },
    { id: "p3", name: "Tablet", price: 20000 },
  ];

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

✅ **Explanation:**

* Uses `map()` to render multiple product items.
* Each product has a **unique `id` as key**.
* The list updates efficiently when products change.

---

## 🧠 Summary

| Concept            | Description                                 | Example                                |
| ------------------ | ------------------------------------------- | -------------------------------------- |
| **map()**          | Renders multiple JSX elements from an array | `{array.map(item => <li>{item}</li>)}` |
| **Keys**           | Unique identifier for each rendered item    | `<li key={item.id}>...</li>`           |
| **Best Practices** | Use stable IDs, not indexes                 | `key={todo.id}` ✅ vs `key={index}` ❌   |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)