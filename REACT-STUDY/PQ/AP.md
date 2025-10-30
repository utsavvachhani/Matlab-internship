# ⚛️ **React Advanced Practice Projects**

This section includes **real-world, production-level React challenges** to help you master **state management, performance optimization, authentication, and scalability**.
Each exercise focuses on applying **advanced patterns and APIs** for professional-grade React development.

---

## 🧩 **1. Build a Redux Toolkit Shopping Cart**

### 🟢 **Goal:**

Create a fully functional e-commerce cart using **Redux Toolkit** for centralized state management.

### 🧠 **Concepts Covered:**

* Redux Store, Slice, and Actions
* Dispatching actions (`addToCart`, `removeFromCart`)
* State persistence with `localStorage`
* Selectors for computed values (e.g., total price)

```jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => { state.push(action.payload); },
    removeItem: (state, action) => state.filter(item => item.id !== action.payload),
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
```

---

## 🧩 **2. Implement Authentication Flow with Context + JWT**

### 🟢 **Goal:**

Secure your app with login/logout flow using **JWT authentication** and **Context API**.

### 🧠 **Concepts Covered:**

* `AuthContext` with `useContext`
* Login/Logout functions with JWT storage in `localStorage`
* Protected routes with `react-router-dom`
* Token validation and refresh logic

---

## 🧩 **3. Real-time Chat App using WebSockets**

### 🟢 **Goal:**

Build a live chat system where messages update in real time using **WebSockets** or **Socket.IO**.

### 🧠 **Concepts Covered:**

* WebSocket event handling (`onmessage`, `send`)
* State synchronization between users
* Handling connection/disconnection events
* Scroll-to-latest message logic

---

## 🧩 **4. Build a Data Grid with Virtualization**

### 🟢 **Goal:**

Render large datasets efficiently using **windowing** or **virtualization** techniques.

### 🧠 **Concepts Covered:**

* `react-window` or `react-virtualized` library
* Performance optimization with lazy rendering
* Handling infinite scroll + pagination
* Dynamic cell rendering

---

## 🧩 **5. Implement Optimistic UI Updates with React Query**

### 🟢 **Goal:**

Improve user experience by showing instant UI updates before the server response returns.

### 🧠 **Concepts Covered:**

* `useMutation` from React Query
* Optimistic updates & rollback on failure
* Caching and refetching strategies
* Toast notifications for API feedback

---

## 🧩 **6. Create a Performance Profiler Dashboard**

### 🟢 **Goal:**

Measure and visualize React component render times.

### 🧠 **Concepts Covered:**

* React Profiler API
* Memoization strategies (`React.memo`, `useMemo`, `useCallback`)
* Performance measurement tools
* Lazy loading and Suspense optimization

---

## 🧩 **7. Implement Error Boundary with Logging**

### 🟢 **Goal:**

Create an **Error Boundary** that catches component errors and logs them to an external service.

### 🧠 **Concepts Covered:**

* `componentDidCatch` and `getDerivedStateFromError`
* Fallback UI pattern
* Integration with logging tools (Sentry / custom API)
* Handling async and render-level errors

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Logged Error:", error, info);
  }

  render() {
    if (this.state.hasError) return <h2>Something went wrong 😢</h2>;
    return this.props.children;
  }
}
```

---

## 🧩 **8. Create a Reusable Modal using Portals & HOC**

### 🟢 **Goal:**

Build a reusable modal component rendered outside the main DOM tree using **React Portals** and **HOC pattern**.

### 🧠 **Concepts Covered:**

* `ReactDOM.createPortal()`
* Higher-Order Component for modal logic reuse
* Overlay and accessibility considerations
* Declarative open/close state management

---

## 🧩 **9. Build a File Uploader with Progress Bar**

### 🟢 **Goal:**

Implement a drag-and-drop or button-based file upload with real-time progress tracking.

### 🧠 **Concepts Covered:**

* File input handling (`<input type="file">`)
* Upload progress with Axios or Fetch API
* Visual feedback using Progress Bar
* Cancel and retry features with `AbortController`

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [React Study](../../../REACT-STUDY/) | [JS Study](../../../JS-STUDY/) | [Node Study](../../../Node-STUDY/)
