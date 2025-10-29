# 🗄️ 4. Web Storage APIs

The **Web Storage API** allows websites and web applications to store data directly in the browser — safely and efficiently.
It provides mechanisms to store **key–value pairs** locally on the client-side, which persist even after refreshing the page (depending on the storage type).

Web storage includes:

* **localStorage** — stores data with no expiration.
* **sessionStorage** — stores data per browser tab/session.
* **Cookies** — small pieces of data sent with every HTTP request.

---

## 💾 **Local Storage (localStorage)**

The `localStorage` object allows you to store key–value pairs in the browser with **no expiration date**.
Data persists even after the page is closed or the browser is restarted.

### 🔹 Basic Methods:

| Method                | Description            |
| --------------------- | ---------------------- |
| `setItem(key, value)` | Store data             |
| `getItem(key)`        | Retrieve data          |
| `removeItem(key)`     | Delete specific data   |
| `clear()`             | Remove all stored data |
| `key(index)`          | Get key name by index  |

### 🔹 Example:

```js
// Store data
localStorage.setItem("username", "Utsav");

// Retrieve data
let user = localStorage.getItem("username");
console.log(user); // Utsav

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```

### 🧠 React Example:

In React, you often use `useEffect()` to interact with localStorage for persisting user data or preferences.

```jsx
import { useState, useEffect } from "react";

function LocalStorageExample() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <p>Stored Name: {name}</p>
    </div>
  );
}
```

---

## 🌐 **Session Storage (sessionStorage)**

`sessionStorage` works like `localStorage` but stores data only for **one browser session**.
The data is deleted when the browser tab is closed.

### 🔹 Example:

```js
sessionStorage.setItem("sessionID", "12345");

console.log(sessionStorage.getItem("sessionID")); // 12345

sessionStorage.removeItem("sessionID");
sessionStorage.clear();
```

### 🧠 React Example:

Used for temporary UI state (like page visit data):

```jsx
import { useEffect, useState } from "react";

function SessionExample() {
  const [count, setCount] = useState(() => {
    return Number(sessionStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h3>Session Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

## 🍪 **Cookies**

**Cookies** are small text files stored in the browser and sent automatically with every HTTP request.
They are often used for **authentication**, **tracking**, or **session management**.

### 🔹 Setting, Getting, and Deleting Cookies:

```js
// Set cookie
document.cookie = "username=Utsav; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Get all cookies
console.log(document.cookie);

// Delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

### ⚠️ Note:

Cookies have a **size limit (~4KB)** and are included in every HTTP request,
making them slower compared to `localStorage` and `sessionStorage`.

### 🧠 React Tip:

In React, use libraries like **js-cookie** for easier cookie handling.

```bash
npm install js-cookie
```

```jsx
import Cookies from "js-cookie";

Cookies.set("theme", "dark");
console.log(Cookies.get("theme"));
Cookies.remove("theme");
```

---

## 🔔 **Storage Events**

The **storage event** is triggered when data in the storage area changes (in another tab or window).

This helps synchronize data across multiple browser tabs.

### 🔹 Example:

```js
window.addEventListener("storage", (event) => {
  console.log("Storage changed!");
  console.log(`Key: ${event.key}`);
  console.log(`Old Value: ${event.oldValue}`);
  console.log(`New Value: ${event.newValue}`);
});
```

### 🧠 React Example:

You can use this to synchronize login/logout state across tabs:

```jsx
import { useEffect } from "react";

function StorageSync() {
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "authToken") {
        console.log("Auth status changed:", e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return <p>Open this app in two tabs to test synchronization.</p>;
}
```

---

## 🧠 Summary Table

| Storage Type       | Persistence           | Accessible From | Data Sent to Server | Use Case                 |
| ------------------ | --------------------- | --------------- | ------------------- | ------------------------ |
| **localStorage**   | Permanent             | All tabs        | ❌ No                | Save preferences, theme  |
| **sessionStorage** | Until tab close       | Same tab        | ❌ No                | Temporary data           |
| **Cookies**        | Configurable (expiry) | All tabs        | ✅ Yes               | Authentication, tracking |

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
