# 💻 **React Coding Challenges**

This section contains **real-world coding problems** designed to test your **React mastery**, including hooks, performance optimization, UI rendering, and architectural problem-solving.
Each challenge focuses on reusable, scalable, and optimized code practices for advanced developers.

---

## 🧩 **1. Deep Clone React Tree Utility**

### 🟢 **Goal:**

Create a utility function that performs a **deep clone of a React element tree**, ensuring all props, keys, and children are copied.

### 🧠 **Concepts Covered:**

* `React.cloneElement()`
* Recursive traversal of `props.children`
* Immutability and shallow vs deep copying
* Performance-safe cloning for large trees

```jsx
function deepCloneElement(element) {
  if (!React.isValidElement(element)) return element;
  const children = React.Children.map(element.props.children, deepCloneElement);
  return React.cloneElement(element, { ...element.props }, children);
}
```

---

## 🧩 **2. Implement a Custom usePrevious Hook**

### 🟢 **Goal:**

Build a **custom React hook** that tracks the previous value of a variable between renders.

### 🧠 **Concepts Covered:**

* Custom hook creation
* `useRef` and `useEffect` usage
* Value tracking across renders

```jsx
function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

---

## 🧩 **3. Build a Debounced Autocomplete Component**

### 🟢 **Goal:**

Create a **search input** that fetches suggestions from an API with a **debounce delay** to reduce API calls.

### 🧠 **Concepts Covered:**

* `useEffect` with cleanup
* Debounce logic using `setTimeout`
* Controlled inputs
* Async fetching and conditional rendering

---

## 🧩 **4. Implement a Light / Dark Mode Persisted in Local Storage**

### 🟢 **Goal:**

Allow users to switch between **light** and **dark** themes, persisting their choice using `localStorage`.

### 🧠 **Concepts Covered:**

* Theme context
* Persistent state with `localStorage`
* CSS variable theming
* `useEffect` synchronization

---

## 🧩 **5. Create a Scroll-to-Top Button with useEffect**

### 🟢 **Goal:**

Add a floating “⬆️ Scroll to Top” button that appears only when the user scrolls down.

### 🧠 **Concepts Covered:**

* Window scroll event handling
* Conditional rendering
* Smooth scroll behavior with `window.scrollTo()`
* Cleanup using `useEffect`

---

## 🧩 **6. Build a Dynamic Form Renderer from JSON Schema**

### 🟢 **Goal:**

Render a complete form UI dynamically based on a provided **JSON schema**.

### 🧠 **Concepts Covered:**

* Dynamic rendering of form fields
* Controlled components
* Validation logic
* Schema-driven UI generation

```js
const formSchema = [
  { type: "text", label: "Name", name: "name" },
  { type: "email", label: "Email", name: "email" },
  { type: "checkbox", label: "Subscribe", name: "subscribe" },
];
```

---

## 🧩 **7. Implement an Image Lazy Loader using IntersectionObserver**

### 🟢 **Goal:**

Load images only when they are **visible in the viewport**, improving performance.

### 🧠 **Concepts Covered:**

* `IntersectionObserver` API
* `useRef` and observer cleanup
* Placeholder and image swapping
* Lazy loading patterns

---

## 🧩 **8. Build a Virtualized Chat Window with 10k Messages**

### 🟢 **Goal:**

Render thousands of chat messages efficiently using **windowing** and **virtualization**.

### 🧠 **Concepts Covered:**

* `react-window` or `react-virtualized`
* Infinite scrolling
* Scroll position restoration
* Performance optimization for long lists

---

## 🧩 **9. Create a Calendar Date Picker**

### 🟢 **Goal:**

Build a **fully interactive calendar UI** where users can select dates or ranges.

### 🧠 **Concepts Covered:**

* Date manipulation with `Date` and `dayjs`
* Controlled state and input synchronization
* Grid-based calendar rendering
* Keyboard accessibility

---

## 🧩 **10. Implement a Chess Board with Move Validation**

### 🟢 **Goal:**

Build an 8×8 chessboard with **interactive piece movement** and **basic move validation**.

### 🧠 **Concepts Covered:**

* 2D array rendering
* Drag-and-drop with `react-dnd`
* Game logic for valid moves
* State management for board and turn tracking

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [React Study](../../../REACT-STUDY/) | [JS Study](../../../JS-STUDY/) | [Node Study](../../../NODE-STUDY/)
