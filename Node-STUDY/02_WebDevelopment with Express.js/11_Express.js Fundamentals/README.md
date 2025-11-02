
# ⚙️ **11. Express.js Fundamentals**

📘 **Docs:** [Express.js Official Documentation](https://expressjs.com/)
📺 **YouTube:** [Express.js Crash Course – Traversy Media](https://www.youtube.com/watch?v=L72fhGm1tfE)

---

## 🧠 **Overview**

**Express.js** is a fast, minimalist, and flexible web application framework for **Node.js**.
It simplifies handling **HTTP requests**, **routing**, **middleware**, and **server configuration**, making backend development much easier and cleaner.

---

## 🔹 **1. Express Installation and Setup**

### 🧩 **Install Express**

```bash
npm install express
```

### 🧩 **Basic Setup**

```js
const express = require('express');
const app = express();
const PORT = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

✅ Run the file using:

```bash
node index.js
```

---

## 🔹 **2. Creating Express Applications**

An Express app is essentially a **function** created by calling `express()`.

### Example:

```js
const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(5000, () => console.log('Server started on port 5000'));
```

🧠 **Tip:**
Express apps use **middleware functions** to handle requests — from parsing JSON to authentication.

---

## 🔹 **3. Request and Response Objects**

Express provides `req` (request) and `res` (response) objects to interact with client requests.

| Object | Purpose                                        |
| ------ | ---------------------------------------------- |
| `req`  | Represents HTTP request (data sent by client)  |
| `res`  | Represents HTTP response (data sent by server) |

### Example:

```js
app.get('/user', (req, res) => {
  console.log(req.method);      // GET
  console.log(req.url);         // /user
  res.status(200).json({ name: 'Utsav', role: 'Developer' });
});
```

🧩 Common Methods:

* `req.params`, `req.query`, `req.body`
* `res.send()`, `res.json()`, `res.status()`, `res.redirect()`

---

## 🔹 **4. Routing**

Routing defines **how an application responds** to different HTTP requests.

### Example:

```js
app.get('/', (req, res) => res.send('Home Page'));
app.post('/login', (req, res) => res.send('Login Page'));
app.put('/update', (req, res) => res.send('Update Page'));
app.delete('/delete', (req, res) => res.send('Delete Page'));
```

🧠 Each route can have **different methods** for the same path — following RESTful API design.

---

## 🔹 **5. Route Parameters**

Route parameters let you **capture dynamic values** from the URL.

### Example:

```js
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

📌 Access with:

```
GET http://localhost:3000/users/42
```

✅ Output → `User ID: 42`

---

## 🔹 **6. Query Strings**

Used for **optional filters or additional data** in the URL — after `?`.

### Example:

```js
app.get('/search', (req, res) => {
  const { q, limit } = req.query;
  res.send(`Search Query: ${q}, Limit: ${limit}`);
});
```

📌 Access with:

```
GET http://localhost:3000/search?q=node&limit=5
```

✅ Output → `Search Query: node, Limit: 5`

---

## 🔹 **7. HTTP Methods in Express**

Express supports all standard HTTP methods:

| Method   | Purpose               | Example                         |
| -------- | --------------------- | ------------------------------- |
| `GET`    | Retrieve data         | `app.get('/users', ...)`        |
| `POST`   | Create new data       | `app.post('/users', ...)`       |
| `PUT`    | Update existing data  | `app.put('/users/:id', ...)`    |
| `DELETE` | Remove data           | `app.delete('/users/:id', ...)` |
| `PATCH`  | Partially update data | `app.patch('/users/:id', ...)`  |

### Example (CRUD API):

```js
app.get('/api/items', (req, res) => res.send('Get all items'));
app.post('/api/items', (req, res) => res.send('Add new item'));
app.put('/api/items/:id', (req, res) => res.send(`Update item ${req.params.id}`));
app.delete('/api/items/:id', (req, res) => res.send(`Delete item ${req.params.id}`));
```

---

## 💡 **Quick Recap**

* Express simplifies server-side development in Node.js.
* Handles routes, parameters, and middleware with ease.
* Request (`req`) and Response (`res`) objects allow full control over HTTP flow.
* Supports all **RESTful methods** — GET, POST, PUT, DELETE, etc.
* Query and route parameters enable **dynamic and flexible endpoints**.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
