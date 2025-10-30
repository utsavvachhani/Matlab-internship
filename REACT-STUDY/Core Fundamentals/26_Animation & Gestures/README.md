# 🎞️ 26. Animation & Gestures

---

## 📘 Overview

Animations bring React interfaces to life, improving **user experience**, **visual feedback**, and **interaction flow**.
React supports both **CSS-based animations** and **JavaScript-driven animation libraries** for advanced motion effects.

---

## 🔹 CSS Transitions

**CSS Transitions** are the simplest way to animate elements when a style changes.
They work with `:hover`, `:focus`, or dynamic class changes.

### 🧱 Example:

```jsx
import "./Box.css";

export default function Box() {
  return <div className="box"></div>;
}
```

**Box.css**

```css
.box {
  width: 100px;
  height: 100px;
  background-color: teal;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.box:hover {
  background-color: darkcyan;
  transform: scale(1.1);
}
```

✅ **Pros:**

* Simple and lightweight.
* No external libraries required.

❌ **Cons:**

* Limited to basic transitions.
* No control over complex sequences.

---

## 🔹 React Spring

**React Spring** is a physics-based animation library for smooth, natural-feeling motion.

### ⚙️ Installation:

```bash
npm install @react-spring/web
```

### 🧩 Example:

```jsx
import { useSpring, animated } from "@react-spring/web";

export default function FadeInBox() {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return <animated.div style={styles}>I fade in smoothly!</animated.div>;
}
```

✅ **Pros:**

* Realistic, fluid motion.
* Declarative and composable.
* Works with gestures and physics simulation.

❌ **Cons:**

* Slightly steeper learning curve than CSS transitions.

---

## 🔹 Framer Motion

**Framer Motion** is one of the most popular React animation libraries — powerful, declarative, and gesture-friendly.

### ⚙️ Installation:

```bash
npm install framer-motion
```

### ⚡ Example:

```jsx
import { motion } from "framer-motion";

export default function MotionBox() {
  return (
    <motion.div
      className="motion-box"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      Hover Me 🚀
    </motion.div>
  );
}
```

**CSS (optional):**

```css
.motion-box {
  width: 120px;
  height: 120px;
  background-color: salmon;
  border-radius: 10px;
  text-align: center;
  line-height: 120px;
  font-weight: bold;
}
```

🧠 **Key Features:**

* `initial`, `animate`, `exit` for lifecycle animations.
* `whileHover`, `whileTap` for gestures.
* Variants for reusable animation definitions.

✅ **Pros:**

* Modern and beginner-friendly.
* Built-in support for gestures and layout transitions.
* Used in production-grade apps.

❌ **Cons:**

* Slightly larger bundle size than React Spring.

---

## 🔹 React Transition Group

**React Transition Group** helps manage **component mount/unmount transitions**.
It doesn’t handle the animations itself — instead, it coordinates class name changes.

### ⚙️ Installation:

```bash
npm install react-transition-group
```

### 🧩 Example:

```jsx
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Fade.css";

export default function FadeExample() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Box
      </button>

      <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
        <div className="box"></div>
      </CSSTransition>
    </div>
  );
}
```

**Fade.css**

```css
.box {
  width: 100px;
  height: 100px;
  background: teal;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms ease-out;
}
```

✅ **Pros:**

* Great for route transitions.
* Fine-grained control over DOM entering/leaving.

❌ **Cons:**

* Requires external CSS or another animation library.

---

## 🧩 Summary

| **Method**                 | **Type**         | **Best For**                        | **Highlights**                 |
| -------------------------- | ---------------- | ----------------------------------- | ------------------------------ |
| **CSS Transitions**        | CSS              | Simple hover/appear animations      | Lightweight, easy              |
| **React Spring**           | JS Physics-based | Smooth, natural motion              | Declarative API                |
| **Framer Motion**          | JS Modern        | Complex UI & gesture animations     | Gestures, layout, variants     |
| **React Transition Group** | JS + CSS         | Component mount/unmount transitions | Route & conditional animations |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
