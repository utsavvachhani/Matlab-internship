# ⚛️ 9. Forms

---

## 📘 Overview

Forms are essential in React for collecting and handling user input (like text fields, dropdowns, checkboxes, etc.).
React offers two main approaches to manage form data — **Controlled Components** and **Uncontrolled Components**.
Libraries like **React Hook Form** and **Formik** simplify form handling, validation, and submission.

---

## 🔹 Controlled Components

A **controlled component** is a form element that is **controlled by React state**.
The input’s value is stored in the component’s state, and any change updates that state using an event handler.

### 🧩 Example:

```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

✅ **Key Points:**

* Input value is tied to state (`value={name}`).
* Updates are managed by `onChange`.
* React re-renders the input whenever the state changes.

⚙️ **Advantages:**

* Full control over input data.
* Easy to validate or modify data before submission.

---

## 🔹 Uncontrolled Components & Refs

An **uncontrolled component** stores its data **in the DOM itself**, not in React state.
You can access form values using the **`useRef`** hook.

### 🧩 Example:

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

✅ **Key Points:**

* Input value is **not tied to React state**.
* Accessed using `ref.current.value`.
* Useful for simple forms or third-party UI components.

⚙️ **Advantages:**

* Less re-rendering since state isn’t updated on each keystroke.
* Suitable for large forms with minimal interactivity.

---

## 🔹 Form Validation Basics

Form validation ensures users enter data in the correct format before submission.

### 🧩 Example (Basic Validation):

```jsx
import { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

✅ **Key Points:**

* Validation logic runs before submission.
* Displays error messages using conditional rendering.

---

## 🔹 React Hook Form / Formik (Overview)

When forms become complex, libraries like **React Hook Form** and **Formik** make validation, submission, and error handling easier.

---

### 🧩 React Hook Form (Lightweight & Fast)

```bash
npm install react-hook-form
```

```jsx
import { useForm } from "react-hook-form";

function HookFormExample() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", { required: "Username is required" })}
        placeholder="Username"
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input type="submit" />
    </form>
  );
}
```

✅ **Advantages:**

* Very lightweight.
* Minimizes re-renders.
* Easy integration with validation rules.

---

### 🧩 Formik (Powerful and Structured)

```bash
npm install formik
```

```jsx
import { useFormik } from "formik";

function FormikExample() {
  const formik = useFormik({
    initialValues: { email: "" },
    validate: (values) => {
      const errors = {};
      if (!values.email.includes("@")) {
        errors.email = "Invalid email";
      }
      return errors;
    },
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && <p>{formik.errors.email}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

✅ **Advantages:**

* Built-in validation and field management.
* Great for large-scale forms.

---

## 🧠 Summary

| Concept                     | Description              | Example                      |
| --------------------------- | ------------------------ | ---------------------------- |
| **Controlled Components**   | Managed via React state  | `value={state}` + `onChange` |
| **Uncontrolled Components** | Managed via DOM (Refs)   | `ref={inputRef}`             |
| **Validation**              | Checks input correctness | Email/Password validation    |
| **React Hook Form**         | Lightweight, hook-based  | `useForm()`                  |
| **Formik**                  | Robust form library      | `useFormik()`                |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)