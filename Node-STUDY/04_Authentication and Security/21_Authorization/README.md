# 🔐 **21. Authorization**

📘 **Docs & References:**

* [Express Middleware Docs](https://expressjs.com/en/guide/using-middleware.html)
* [OWASP Access Control Guidelines](https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control)
* [RBAC vs ABAC Explained](https://auth0.com/docs/authorization/rbac/)

---

## 🧠 **Overview**

**Authorization** determines **what actions a user can perform** after they have been **authenticated**.
In Node.js (especially with Express), authorization is commonly implemented using **Role-Based Access Control (RBAC)** or **Permission-Based Access Control (PBAC)**.

---

## 🔹 **1. Role-Based Access Control (RBAC)**

RBAC assigns each user a **role**, and permissions are linked to these roles.
For example, a typical system might have roles like:

* `admin`
* `editor`
* `user`

Each role can perform specific actions.

### ⚙️ Example: Defining Roles

```js
const roles = {
  admin: ['create', 'read', 'update', 'delete'],
  editor: ['read', 'update'],
  user: ['read']
};
```

---

## 🔹 **2. Permissions-Based Access Control (PBAC)**

Instead of assigning broad roles, PBAC defines **fine-grained permissions**.
For example:

* `user:create`
* `user:read`
* `post:delete`

This allows more **flexibility** and **granular control**.

### ⚙️ Example: Defining Permissions

```js
const permissions = {
  user: ['read_profile'],
  editor: ['read_profile', 'edit_post'],
  admin: ['read_profile', 'edit_post', 'delete_post', 'manage_users']
};
```

---

## 🔹 **3. Protecting Routes**

After a user logs in, you can attach their role (and permissions) to the request object — typically from a **JWT token** or **session**.
Then use middleware to check if they are allowed to access a specific route.

### ⚙️ Example: Role-Based Middleware

```js
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    const userRole = req.user.role; // e.g. "editor"
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access Denied' });
    }
    next();
  };
}
```

### 🧩 Usage:

```js
import express from 'express';
const app = express();

app.get('/admin', authorizeRoles('admin'), (req, res) => {
  res.send('Welcome Admin');
});

app.get('/editor', authorizeRoles('admin', 'editor'), (req, res) => {
  res.send('Editor Access Granted');
});
```

---

## 🔹 **4. Permission-Based Middleware**

You can also authorize based on **specific actions**, not roles.

### ⚙️ Example: Permission Middleware

```js
function authorizePermissions(requiredPermission) {
  return (req, res, next) => {
    const userPermissions = req.user.permissions; // e.g. ['read_profile', 'edit_post']
    if (!userPermissions.includes(requiredPermission)) {
      return res.status(403).json({ message: 'Permission Denied' });
    }
    next();
  };
}
```

### 🧩 Usage:

```js
app.post('/posts/delete', authorizePermissions('delete_post'), (req, res) => {
  res.send('Post deleted successfully.');
});
```

---

## 🔹 **5. Combining Authentication + Authorization**

Typically, you’ll use a **JWT verification middleware** before authorization middleware.

### ⚙️ Example:

```js
import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // Attach decoded user info
    next();
  });
}
```

### 🧩 Full Usage:

```js
app.get(
  '/admin/dashboard',
  authenticateToken,
  authorizeRoles('admin'),
  (req, res) => res.send('Admin Dashboard')
);
```

---

## 🔹 **6. Middleware for Authorization**

Authorization logic is best implemented as **middleware**, so it can be **reused across routes**.

### ⚙️ Example: Combined Middleware

```js
function accessControl(requiredRoles = [], requiredPermissions = []) {
  return (req, res, next) => {
    const { role, permissions } = req.user;

    const hasRole = requiredRoles.length === 0 || requiredRoles.includes(role);
    const hasPermission = requiredPermissions.every(p => permissions.includes(p));

    if (!hasRole || !hasPermission) {
      return res.status(403).json({ message: 'Access Forbidden' });
    }

    next();
  };
}
```

### 🧩 Usage:

```js
app.get(
  '/users',
  authenticateToken,
  accessControl(['admin'], ['manage_users']),
  (req, res) => res.send('User Management Page')
);
```

---

## 🧩 **Summary Table**

| Concept              | Description                      | Example                                      |
| -------------------- | -------------------------------- | -------------------------------------------- |
| **RBAC**             | Role-based access (admin, user)  | `authorizeRoles('admin')`                    |
| **PBAC**             | Fine-grained permission control  | `authorizePermissions('delete_post')`        |
| **Protected Routes** | Secured endpoints requiring auth | `/admin/dashboard`                           |
| **Middleware**       | Reusable access logic            | `accessControl(['admin'], ['manage_users'])` |
| **JWT Integration**  | Token-based user info storage    | `req.user.role`, `req.user.permissions`      |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
