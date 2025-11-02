# 🛣️ **14. Express Router**

📘 **Docs:** [Express Router Official Docs](https://expressjs.com/en/guide/routing.html)
📺 **YouTube:** [Modular Routing in Express – Web Dev Simplified](https://www.youtube.com/watch?v=pKd0Rpw7O48)

---

## 🧠 **What is Express Router?**

The **Express Router** is used to create **modular, mountable route handlers**.
It helps organize your application routes into smaller files, keeping your project clean and maintainable — especially in large applications.

---

## 🔹 **1. Creating Modular Routes (Nested, Prefixes)**

You can define routes in **separate modules** and mount them with a **path prefix** in the main app.

### 🧩 **Example:**

#### 📁 Project Structure:

```
project/
 ├── app.js
 └── routes/
      ├── userRoutes.js
      └── productRoutes.js
```

#### 🗂️ **app.js**

```js
const express = require('express');
const app = express();

// Import route modules
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Mount routers with prefixes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
```

#### 🧩 **routes/userRoutes.js**

```js
const express = require('express');
const router = express.Router();

// GET /users/
router.get('/', (req, res) => {
  res.send('All Users');
});

// GET /users/:id
router.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
```

#### 🧩 **routes/productRoutes.js**

```js
const express = require('express');
const router = express.Router();

// GET /products/
router.get('/', (req, res) => {
  res.send('All Products');
});

// POST /products/add
router.post('/add', (req, res) => {
  res.send('Product Added');
});

module.exports = router;
```

✅ **Result:**

| Route           | Description       |
| --------------- | ----------------- |
| `/users`        | List all users    |
| `/users/:id`    | Get user by ID    |
| `/products`     | List all products |
| `/products/add` | Add new product   |

---

## 🔹 **2. Nested Routers**

You can **nest routers** to handle sub-resources like `/users/:id/posts`.

### 🧩 **Example:**

#### 🗂️ **routes/userRoutes.js**

```js
const express = require('express');
const router = express.Router();
const postRouter = require('./postRoutes');

// Mount nested route
router.use('/:userId/posts', postRouter);

router.get('/', (req, res) => {
  res.send('All Users');
});

module.exports = router;
```

#### 🗂️ **routes/postRoutes.js**

```js
const express = require('express');
const router = express.Router({ mergeParams: true });

// Access userId from parent route
router.get('/', (req, res) => {
  res.send(`Posts for User ID: ${req.params.userId}`);
});

module.exports = router;
```

✅ **Resulting Route:**
`GET /users/123/posts` → “Posts for User ID: 123”

---

## 🔹 **3. Router Middleware**

Routers can also have **middleware** — functions that run before route handlers.
These are useful for **authentication**, **logging**, or **validation**.

### 🧩 **Example:**

```js
const express = require('express');
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log(`Request made to: ${req.originalUrl} at ${new Date().toISOString()}`);
  next();
});

router.get('/', (req, res) => {
  res.send('All Users - with logging middleware');
});

router.get('/:id', (req, res) => {
  res.send(`User details for ID: ${req.params.id}`);
});

module.exports = router;
```

✅ This middleware runs **only for routes in this router**, not the whole app.

---

## 💡 **Key Takeaways**

| Concept                      | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `express.Router()`           | Creates a modular route handler                   |
| `app.use('/prefix', router)` | Mounts routes with a URL prefix                   |
| `mergeParams: true`          | Allows nested routers to access parent parameters |
| `router.use()`               | Adds middleware specific to a router              |
| Modular Routing              | Keeps routes organized and maintainable           |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
