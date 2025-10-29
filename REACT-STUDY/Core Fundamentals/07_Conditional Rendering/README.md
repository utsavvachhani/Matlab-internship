# ⚛️ 7. Conditional Rendering

---

## 📘 Overview

Conditional rendering in React allows you to **display different UI elements** based on certain conditions — just like `if` statements in JavaScript.
It helps create **dynamic and interactive interfaces** where components render differently depending on state, props, or logic.

---

## 🔹 if / else

The most basic way to render conditionally is by using a regular JavaScript `if / else` statement before returning JSX.

### 🧩 Example:

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Back, User!</h2>;
  } else {
    return <h2>Please Log In</h2>;
  }
}
```

✅ **Explanation:**

* React can conditionally return different components or JSX blocks based on the value of `isLoggedIn`.

### ⚙️ Another Example (returning null):

```jsx
function Notification({ hasMessage }) {
  if (!hasMessage) {
    return null; // Prevent rendering anything
  }
  return <p>You have new messages!</p>;
}
```

Returning `null` means **React won’t render anything** for that component.

---

## 🔹 Ternary Operator

The **ternary operator (`condition ? expr1 : expr2`)** is commonly used inside JSX for compact conditional rendering.

### 🧩 Example:

```jsx
function UserStatus({ isOnline }) {
  return (
    <div>
      <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}
```

✅ **Explanation:**

* Short and clean syntax.
* Best for inline conditional rendering inside JSX expressions.

### 🧩 Example (Render Different Components):

```jsx
return isOnline ? <OnlineUser /> : <OfflineUser />;
```

---

## 🔹 Logical &&

If you only need to render **something when a condition is true**,
you can use the **logical AND (`&&`)** operator.

### 🧩 Example:

```jsx
function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      <h2>Welcome to React!</h2>
      {isLoggedIn && <p>You are logged in 🎉</p>}
    </div>
  );
}
```

✅ **Explanation:**

* `isLoggedIn && <p>...</p>` means React will render the `<p>` only if `isLoggedIn` is `true`.
* If false, React ignores it and renders nothing.

### ⚠️ Note:

Avoid using `&&` with non-boolean values that can return falsy values like `0`, since they may accidentally render `0` in the UI.

---

## 🔹 Guard Clauses

**Guard clauses** help simplify components by returning early from functions when certain conditions are not met.
They are useful to **avoid nested if-else structures**.

### 🧩 Example:

```jsx
function Profile({ user }) {
  if (!user) return <p>Loading...</p>; // Guard clause

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

✅ **Explanation:**

* If `user` is undefined, React will render "Loading...".
* Once data is available, it renders the profile.

---

## 🧠 Combining Techniques

You can combine multiple techniques for real-world use cases.

### 🧩 Example:

```jsx
function Dashboard({ user, isAdmin }) {
  if (!user) return <p>Loading...</p>; // Guard Clause

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      {isAdmin ? (
        <button>Go to Admin Panel</button>
      ) : (
        <p>You have limited access.</p>
      )}
    </div>
  );
}
```

✅ Combines:

* Guard clause to check for user.
* Ternary operator for admin permissions.

---

## 🧩 Summary

| Technique            | Description                       | Example                              |
| -------------------- | --------------------------------- | ------------------------------------ |
| **if / else**        | Conditional branching outside JSX | `if (cond) return A; else return B;` |
| **Ternary Operator** | Inline JSX condition              | `{cond ? <A /> : <B />}`             |
| **Logical &&**       | Render only when true             | `{cond && <A />}`                    |
| **Guard Clause**     | Return early to simplify logic    | `if (!data) return null;`            |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../Node-STUDY/)