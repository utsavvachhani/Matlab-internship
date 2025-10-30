
# ⚛️ **React Intermediate Practice Questions**

This section includes **real-world React challenges** designed to strengthen your understanding of **data fetching**, **state management**, **context**, and **custom hooks**.
Each project focuses on hands-on implementation for **interview-level proficiency**.

---

## 🧩 **1. Fetch Data from Public API and Render Table**

### 🟢 **Goal:**

Use the `useEffect` hook to fetch and display API data in a table format.

### 🧠 **Concepts Covered:**

* `useEffect` for side effects
* Data fetching with `fetch()` or `axios`
* Conditional rendering for loading/error states

### 🧪 **Example:**

```jsx
import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Email</th></tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
```

---

## 🧩 **2. Build a Search Filter with Debounce**

### 🟢 **Goal:**

Implement a search input that filters a list with a delay (debounce) to avoid excessive renders.

### 🧠 **Concepts Covered:**

* `useState` and `useEffect`
* Debounce using `setTimeout` / `clearTimeout`

---

## 🧩 **3. Implement Pagination Component**

### 🟢 **Goal:**

Render a list of items with pagination buttons (Next, Prev).

### 🧠 **Concepts Covered:**

* Slice arrays using current page index
* Dynamic UI updates via state
* Reusable Pagination Component pattern

---

## 🧩 **4. Create a Multi-Step Form with Validation**

### 🟢 **Goal:**

Divide a form into multiple steps and validate each before proceeding.

### 🧠 **Concepts Covered:**

* Conditional rendering
* Form state persistence
* Validation logic with `useState` or `Formik`

---

## 🧩 **5. Theme Switcher using Context API**

### 🟢 **Goal:**

Toggle between light and dark mode using React Context.

### 🧠 **Concepts Covered:**

* `createContext`, `useContext`
* Context Provider pattern
* CSS class toggling via state

---

## 🧩 **6. Build Image Carousel with Autoplay**

### 🟢 **Goal:**

Showcase images with previous/next buttons and autoplay functionality.

### 🧠 **Concepts Covered:**

* useState for active index
* setInterval for autoplay
* Animation transitions

---

## 🧩 **7. Implement Infinite Scrolling List**

### 🟢 **Goal:**

Load more data as the user scrolls to the bottom of the page.

### 🧠 **Concepts Covered:**

* Scroll event listeners
* API pagination
* Performance optimization

---

## 🧩 **8. Create Custom Hook for Local Storage**

### 🟢 **Goal:**

Write a custom hook `useLocalStorage` to store and retrieve data persistently.

### 🧠 **Concepts Covered:**

* Custom hook creation
* Synchronizing with `localStorage`
* Reusable utility hooks

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => 
    JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

---

## 🧩 **9. Implement Drag & Drop Kanban Board**

### 🟢 **Goal:**

Build a board with draggable tasks across different columns.

### 🧠 **Concepts Covered:**

* React DnD / native drag events
* Managing state across multiple lists
* UI updates after drag/drop

---

## 🧩 **10. Build a Weather Dashboard with React Router**

### 🟢 **Goal:**

Display weather data with navigation for different cities using routes.

### 🧠 **Concepts Covered:**

* `react-router-dom` for navigation
* API integration (OpenWeatherMap, etc.)
* Dynamic routes with parameters

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [React Study](../../../REACT-STUDY/) | [JS Study](../../../JS-STUDY/) | [Node Study](../../../Node-STUDY/)
