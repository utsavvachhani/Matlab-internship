# ⚙️ **12. Middleware in Express.js**

📘 **Docs:** [Express Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
📺 **YouTube:** [Express Middleware Crash Course – Traversy Media](https://www.youtube.com/watch?v=lY6icfhap2o)

---

## 🧠 **What is Middleware?**

**Middleware** functions in Express are functions that have access to the **request (`req`)**, **response (`res`)**, and the **next** middleware function in the request-response cycle.

They can:

* Execute any code.
* Modify the request and response objects.
* End the request-response cycle.
* Call the next middleware using `next()`.

### Basic Syntax:

```js
app.use((req, res, next) => {
  console.log('Middleware executed!');
  next(); // Pass control to the next middleware
});
```

---

## 🔹 **1. Built-in Middleware**

Express provides some built-in middleware functions.

### 🧩 **Examples:**

```js
const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
```

✅ **Usage:**

* `express.json()` → parses incoming JSON payloads.
* `express.urlencoded()` → handles form submissions.
* `express.static()` → serves static assets like images, CSS, and JS.

---

## 🔹 **2. Third-party Middleware**

You can install external middleware via **npm**.

### 🧩 **Examples:**

```bash
npm install morgan cors cookie-parser
```

```js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));       // Logs HTTP requests
app.use(cors());              // Enables CORS
app.use(cookieParser());      // Parses cookies
```

✅ **Popular Middleware Packages**

| Package           | Purpose                      |
| ----------------- | ---------------------------- |
| `morgan`          | Logging requests             |
| `cors`            | Enable cross-origin requests |
| `helmet`          | Secure HTTP headers          |
| `express-session` | Manage user sessions         |
| `cookie-parser`   | Parse cookies                |

---

## 🔹 **3. Custom Middleware**

You can define your own middleware for custom logic.

### 🧩 **Example:**

```js
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});
```

### 🧩 **Auth Example:**

```js
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === '12345') next();
  else res.status(401).send('Unauthorized');
};

app.get('/secure', verifyToken, (req, res) => {
  res.send('Access Granted!');
});
```

---

## 🔹 **4. Application-level Middleware**

Applied globally to the entire Express app using `app.use()` or specific routes.

### Example:

```js
app.use((req, res, next) => {
  console.log('Application-level middleware executed!');
  next();
});

app.get('/', (req, res) => res.send('Home Page'));
```

---

## 🔹 **5. Router-level Middleware**

You can attach middleware only to specific **routers**.

### Example:

```js
const express = require('express');
const router = express.Router();

// Middleware specific to router
router.use((req, res, next) => {
  console.log('Router-level middleware active');
  next();
});

router.get('/profile', (req, res) => res.send('User Profile'));
router.get('/settings', (req, res) => res.send('User Settings'));

app.use('/user', router);
```

✅ Access → `/user/profile` or `/user/settings`

---

## 🔹 **6. Error Handling Middleware**

Error-handling middleware has **4 parameters**: `(err, req, res, next)`.

### Example:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

If an error is thrown or passed to `next(err)`, Express automatically routes it here.

---

## 🔹 **7. Middleware Execution Order**

Middleware runs in the **order they are declared**.

### Example:

```js
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res) => {
  console.log('Final Route Handler');
  res.send('Done!');
});
```

🧩 **Output Order:**

```
Middleware 1
Middleware 2
Final Route Handler
```

🧠 **Tip:**
Always ensure middleware that depends on other logic (e.g., authentication) is declared **after** required dependencies.

---

## 💡 **Quick Recap**

✅ Middleware functions control request–response flow.
✅ Can modify requests, run logic, or end cycles.
✅ Supports **built-in**, **custom**, and **third-party** types.
✅ Works at both **application** and **router** levels.
✅ Error-handling middleware catches runtime issues.
✅ Execution order is **top to bottom**.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
