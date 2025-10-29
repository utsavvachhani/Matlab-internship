# 🌐 3. Browser Object Model (BOM)

The **Browser Object Model (BOM)** allows JavaScript to interact with the browser itself (not just the web page).
It provides objects like **window**, **navigator**, **location**, **history**, and **screen** that represent different parts of the browser environment.

Unlike the **DOM**, which deals with HTML elements, the **BOM** deals with the browser interface and environment.

---

## 🪟 **Window Object**

The `window` object is the **global object** in browsers — everything in the browser runs under it.

All global variables, functions, and objects are properties of `window`.

### 🔹 Example:

```js
console.log(window.innerHeight); // Height of browser window
console.log(window.innerWidth);  // Width of browser window

window.alert("Hello, Utsav!");
window.open("https://github.com/utsavvachhani", "_blank");
```

### 🧠 React Context:

In React, you can safely access the window object inside `useEffect()` to ensure it runs after rendering.

```jsx
import { useEffect } from "react";

function WindowInfo() {
  useEffect(() => {
    console.log("Window Width:", window.innerWidth);
  }, []);

  return <p>Check the console for window details.</p>;
}
```

---

## 📍 **Location Object**

The `location` object gives information about the **current page URL** and allows navigation to other URLs.

### 🔹 Example:

```js
console.log(location.href);     // Full URL
console.log(location.hostname); // Domain
console.log(location.pathname); // Path
console.log(location.protocol); // Protocol (http/https)
```

#### 🔁 Redirect Example:

```js
location.href = "https://www.google.com";  // Redirects to Google
```

#### 🔄 Reload Example:

```js
location.reload();  // Reloads the current page
```

### 🧠 React Context:

In React, instead of using `location.href`, you typically use **React Router**’s navigation:

```jsx
import { useNavigate } from "react-router-dom";

function NavigateExample() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/home")}>Go Home</button>;
}
```

---

## 🕓 **History Object**

The `history` object allows navigation through the browser’s **session history**.

### 🔹 Example:

```js
history.back();  // Go to previous page
history.forward();  // Go to next page
history.go(-2);  // Go back two pages
```

### 🧠 React Context:

In React (React Router), you use `useNavigate()` or `useHistory()` instead of the native history API.

```jsx
import { useNavigate } from "react-router-dom";

function HistoryExample() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
}
```

---

## 🧭 **Navigator Object**

The `navigator` object provides information about the browser and user’s system.

### 🔹 Example:

```js
console.log(navigator.userAgent);  // Browser details
console.log(navigator.language);   // Browser language
console.log(navigator.onLine);     // Online status
```

#### 🌐 Check Online/Offline Example:

```js
if (navigator.onLine) {
  console.log("You are online!");
} else {
  console.log("You are offline!");
}
```

### 🧠 React Context:

In React, you can use hooks to track online status dynamically:

```jsx
import { useEffect, useState } from "react";

function NetworkStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => setOnline(navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return <p>{online ? "🟢 Online" : "🔴 Offline"}</p>;
}
```

---

## 💻 **Screen Object**

The `screen` object provides information about the user’s screen (not browser window).

### 🔹 Example:

```js
console.log(screen.width);   // Full screen width
console.log(screen.height);  // Full screen height
console.log(screen.availWidth);  // Available width
console.log(screen.colorDepth);  // Color depth
```

### 🧠 React Example:

You can display screen information in a React component dynamically:

```jsx
import { useState, useEffect } from "react";

function ScreenDetails() {
  const [size, setSize] = useState({
    width: screen.width,
    height: screen.height,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: screen.width, height: screen.height });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Screen: {size.width} x {size.height}</p>;
}
```

---

## 🪟 **Working with Frames**

Frames divide a webpage into multiple sections, each containing its own document (not commonly used now).

### 🔹 Example (Traditional HTML):

```html
<frameset cols="50%,50%">
  <frame src="left.html">
  <frame src="right.html">
</frameset>
```

You can access frames using:

```js
window.frames[0];  // Access first frame
window.frames.length; // Count total frames
```

### ⚠️ Note:

Frames are **deprecated** in modern HTML5.
Instead, use `<iframe>` for embedding external content.

#### Example:

```html
<iframe src="https://example.com" width="400" height="300"></iframe>
```

You can access it in JS like:

```js
const frame = document.querySelector("iframe");
console.log(frame.contentWindow);
```

---

## 🧠 Summary Table

| Object        | Purpose                            | Example                               |
| ------------- | ---------------------------------- | ------------------------------------- |
| **window**    | Represents browser window          | `window.alert()`, `window.innerWidth` |
| **location**  | Handles current URL and navigation | `location.href`, `location.reload()`  |
| **history**   | Navigation through session history | `history.back()`                      |
| **navigator** | Info about browser & device        | `navigator.userAgent`                 |
| **screen**    | Info about user’s screen           | `screen.width`, `screen.height`       |
| **frames**    | Access to frames or iframes        | `window.frames[0]`                    |

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY) | [Node Study](../../../Node-STUDY/)
