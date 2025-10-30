# ⚙️ 22. Asynchronous Patterns

---

## 📘 Overview

Asynchronous patterns in React are essential for handling tasks that take time — such as **API calls**, **data fetching**, or **timers** — without blocking the UI.
React applications rely on **Promises**, **async/await**, and **hooks like `useEffect()`** to manage side effects and asynchronous workflows efficiently.

---

## 🔹 Promises & Async/Await in React

### ✅ Promises

A **Promise** represents a value that may be available now, later, or never.
It helps you handle asynchronous operations without deeply nested callbacks.

Example using **Promise chaining**:

```jsx
import React, { useEffect, useState } from "react";

function PromiseExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h3>Post Data:</h3>
      {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  );
}

export default PromiseExample;
```

---

### ⚡ Async / Await

`async/await` provides a cleaner syntax for handling Promises — it looks synchronous but runs asynchronously.

```jsx
import React, { useEffect, useState } from "react";

function AsyncAwaitExample() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h3>User Info:</h3>
      {user ? <p>{user.name}</p> : <p>Loading...</p>}
    </div>
  );
}

export default AsyncAwaitExample;
```

✅ **Advantages:**

* Cleaner and more readable syntax.
* Easy error handling using `try...catch`.

---

## 🔹 useEffect Data Fetching Pattern

React’s **`useEffect` hook** is designed to handle side effects — like data fetching — after component rendering.

---

### 🧩 Basic Data Fetching Pattern

```jsx
import React, { useState, useEffect } from "react";

function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }

    loadPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default FetchPosts;
```

---

### ⚙️ useEffect Best Practices

✅ **Define async function inside `useEffect`** (not directly async on `useEffect`).
✅ **Cleanup ongoing requests** when components unmount using `AbortController`.
✅ **Handle errors gracefully** with `try...catch`.

---

## 🔹 AbortController

The **AbortController API** allows you to cancel ongoing fetch requests when a component unmounts or a dependency changes.
This prevents **memory leaks** or setting state on an **unmounted component**.

---

### 🧠 Example: Using AbortController

```jsx
import React, { useEffect, useState } from "react";

function AbortControllerExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
          { signal: controller.signal }
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error:", err);
        }
      }
    };

    fetchData();

    // Cleanup when unmounted
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h3>Comments:</h3>
      {data ? <p>{data[0].body}</p> : <p>Loading...</p>}
    </div>
  );
}

export default AbortControllerExample;
```

✅ **Benefits of using AbortController:**

* Prevents unnecessary network requests.
* Avoids setting state after unmount (common React warning).
* Improves performance and memory management.

---

## 🧩 Summary

| **Concept**                 | **Purpose**                        | **Example / Usage**      |
| --------------------------- | ---------------------------------- | ------------------------ |
| **Promises**                | Handle async logic using `.then()` | Fetch API calls          |
| **Async/Await**             | Cleaner syntax for Promises        | Inside useEffect         |
| **useEffect Data Fetching** | Trigger async tasks after render   | Fetch data on mount      |
| **AbortController**         | Cancel pending requests            | Cleanup async operations |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
