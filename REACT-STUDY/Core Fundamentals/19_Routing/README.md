# 🧭 19. Routing

---

## 📘 Overview

In React, **Routing** allows users to navigate between different views or pages **without reloading the entire application**.
This is possible because of **React Router**, a popular library that manages navigation in **Single Page Applications (SPAs)**.

📦 **Install React Router (v6+):**

```bash
npm install react-router-dom
```

Then wrap your app inside the `BrowserRouter` component to enable routing.

---

## 🚀 react-router Basics

React Router provides components and hooks to manage navigation and rendering of views.

**Main Concepts:**

* **Router**: Enables navigation.
* **Routes**: Define paths and components to render.
* **Link/NavLink**: Navigate between routes.
* **Outlet**: Renders nested routes.

### ✅ Basic Example:

```jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

✅ Clicking the links updates the page **without refreshing** the browser.

---

## 🌐 BrowserRouter vs HashRouter

| Router Type       | Description                         | Example URL |
| ----------------- | ----------------------------------- | ----------- |
| **BrowserRouter** | Uses HTML5 history API (clean URLs) | `/about`    |
| **HashRouter**    | Uses hash portion of URL            | `#/about`   |

### Example:

```jsx
import { HashRouter } from "react-router-dom";

<HashRouter>
  <App />
</HashRouter>
```

Use `HashRouter` when deploying on static servers that don’t support dynamic routing (like GitHub Pages).

---

## 🔗 Links & NavLinks

### 🧩 Link

The `Link` component is used to navigate between routes **without reloading** the page.

```jsx
<Link to="/contact">Go to Contact</Link>
```

### 🧩 NavLink

`NavLink` works like `Link` but allows **active styling**.

```jsx
<NavLink
  to="/about"
  className={({ isActive }) => (isActive ? "active-link" : "")}
>
  About
</NavLink>
```

✅ **`isActive`** helps highlight the current active route.

---

## 🧮 Route Params & Query Strings

### 🧩 Dynamic Route Params

You can define dynamic parameters using `:paramName` in the route path.

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h3>User ID: {id}</h3>;
}
```

```jsx
<Route path="/user/:id" element={<User />} />
```

➡️ Visiting `/user/101` renders “User ID: 101”.

---

### 🧩 Query Strings

Use `useSearchParams` to access URL query parameters.

```jsx
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [params] = useSearchParams();
  const keyword = params.get("q");
  return <p>Searching for: {keyword}</p>;
}
```

➡️ URL Example: `/search?q=react`

---

## 🧩 Nested & Dynamic Routes

React Router supports **nested routes** for hierarchical UI structures.

```jsx
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}

function Profile() {
  return <h3>Profile Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

✅ The `Outlet` component renders the child routes dynamically.

---

## 🔁 Redirects & Navigation Guards

### 🧩 Redirects using `Navigate`

If you want to redirect a user programmatically, use the `<Navigate />` component:

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn }) {
  return isLoggedIn ? <Dashboard /> : <Navigate to="/login" />;
}
```

### 🧩 Navigation using `useNavigate()`

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // after login logic
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

✅ You can control navigation programmatically based on conditions.

---

## 📊 Summary Table

| Concept                      | Description                           | Example                    |
| ---------------------------- | ------------------------------------- | -------------------------- |
| **BrowserRouter**            | Standard routing using history API    | `<BrowserRouter>`          |
| **HashRouter**               | Uses hash (#) for routing             | `<HashRouter>`             |
| **Link / NavLink**           | Navigate between routes               | `<Link to="/about" />`     |
| **useParams()**              | Get route parameters                  | `/user/:id`                |
| **useSearchParams()**        | Read query parameters                 | `?q=term`                  |
| **Navigate / useNavigate()** | Redirect or navigate programmatically | `<Navigate to="/login" />` |
| **Outlet**                   | Renders child routes                  | `<Outlet />`               |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)