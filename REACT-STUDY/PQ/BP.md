# ⚛️ React Practice — Basic Projects

This section includes **hands-on mini-projects** designed to strengthen your understanding of **React fundamentals**, including **state management**, **props**, **conditional rendering**, and **basic interactivity**.
Each example uses **functional components** and **React Hooks** for modern best practices.

---

## 🧩 **1. Build a Counter Component**

A simple component demonstrating the `useState` Hook for state management.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
}

export default Counter;
```

📘 **Concepts Covered:**

* `useState` Hook
* Event handling
* Updating component state

---

## 🧩 **2. Create a Toggle Switch**

A component that toggles between ON/OFF state.

```jsx
import React, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Switch is {isOn ? "ON" : "OFF"}</h3>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default ToggleSwitch;
```

📘 **Concepts Covered:**

* Conditional rendering
* Boolean state toggling

---

## 🧩 **3. Implement a Dynamic Greeting using Props**

```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}! 👋</h2>;
}

export default function App() {
  return (
    <div>
      <Greeting name="Utsav" />
      <Greeting name="Meet" />
    </div>
  );
}
```

📘 **Concepts Covered:**

* Props passing
* Reusable components

---

## 🧩 **4. Render a List of Users from Static Array**

```jsx
function UserList() {
  const users = ["Utsav", "Meet", "Ravi", "Priya"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

📘 **Concepts Covered:**

* Rendering lists with `.map()`
* Using keys in list items

---

## 🧩 **5. Controlled Input Form**

```jsx
import React, { useState } from "react";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

📘 **Concepts Covered:**

* Controlled components
* Form submission handling

---

## 🧩 **6. Conditional Display of Components**

```jsx
import React, { useState } from "react";

function ConditionalDisplay() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <p>This message is conditionally rendered!</p>}
    </div>
  );
}

export default ConditionalDisplay;
```

📘 **Concepts Covered:**

* Conditional rendering
* `&&` operator in JSX

---

## 🧩 **7. Build a Simple Accordion**

```jsx
import React, { useState } from "react";

function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setOpen(!open)}>
        📘 What is React? {open ? "▲" : "▼"}
      </h3>
      {open && <p>React is a JavaScript library for building UIs.</p>}
    </div>
  );
}

export default Accordion;
```

📘 **Concepts Covered:**

* Conditional rendering
* Toggling visibility

---

## 🧩 **8. Create a Star Rating Component**

```jsx
import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: "pointer",
            color: rating >= star ? "gold" : "gray",
            fontSize: "24px",
          }}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
      <p>Rating: {rating}</p>
    </div>
  );
}

export default StarRating;
```

📘 **Concepts Covered:**

* Dynamic rendering with arrays
* Updating state from click events

---

## 🧩 **9. Build a Stopwatch with useState & setInterval**

```jsx
import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>⏱ Time: {time}s</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default Stopwatch;
```

📘 **Concepts Covered:**

* `useEffect` and cleanup
* Side effects & timers

---

## 🧩 **10. Basic Todo List (Add/Delete)**

```jsx
import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>📝 Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

📘 **Concepts Covered:**

* Managing arrays in state
* Adding and removing list items
