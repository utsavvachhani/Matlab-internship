# 🗃️ **15. Working with Databases**

📘 **Docs:** [Node.js Database Integration Guide](https://nodejs.org/en/learn/database)
📺 **YouTube:** [Connecting Node.js to Databases (MySQL, MongoDB)](https://www.youtube.com/watch?v=9zUHg7xjIqQ)

---

## 🧠 **Overview**

Node.js can integrate with various databases to store and manage data efficiently.
Databases are generally divided into **SQL (Relational)** and **NoSQL (Non-relational)** categories.
Each has its own query language, storage pattern, and scalability approach.

---

## 🔹 **1. SQL vs NoSQL Databases**

| Feature        | SQL (Relational)                       | NoSQL (Non-relational)                        |
| -------------- | -------------------------------------- | --------------------------------------------- |
| Structure      | Tables with rows and columns           | Collections with documents or key-value pairs |
| Schema         | Fixed (predefined schema)              | Flexible (schema-less)                        |
| Query Language | SQL (Structured Query Language)        | Various APIs or query languages               |
| Examples       | MySQL, PostgreSQL, SQLite              | MongoDB, Redis, Cassandra                     |
| Scaling        | Vertical Scaling                       | Horizontal Scaling                            |
| Relationships  | Strongly defined (Foreign Keys, Joins) | Weakly defined (Embedded Documents)           |

### 🧩 Example:

**SQL:**

```sql
SELECT * FROM users WHERE id = 1;
```

**NoSQL (MongoDB):**

```js
db.users.findOne({ _id: 1 });
```

---

## 🔹 **2. Database Connection Patterns**

There are two common ways Node.js connects to databases:

### ✅ **Direct Connection (Single Connection)**

Used for lightweight or one-time database operations.

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});
```

### ✅ **Connection Pooling**

Used for **production-grade apps** to manage multiple concurrent database requests efficiently.

```js
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb',
  connectionLimit: 10
});

pool.getConnection((err, conn) => {
  if (err) throw err;
  console.log('Database connection established');
  conn.release();
});
```

---

## 🔹 **3. Connection Pooling**

Connection pooling maintains a set of database connections for reuse.
It helps improve performance and avoids overhead from creating new connections each time.

### ⚙️ **Benefits:**

* Reduces connection setup time
* Prevents connection exhaustion
* Handles concurrent database queries efficiently

### 🧩 Example (MongoDB with Mongoose):

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10
})
.then(() => console.log('Connected to MongoDB with Pooling'))
.catch(err => console.error(err));
```

---

## 🔹 **4. Database Configuration**

Best practice is to store all database credentials and settings in a **separate configuration file** or **environment variables**.

### 🧩 Example:

**config/db.js**

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

**server.js**

```js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

connectDB();
const app = express();
app.listen(3000, () => console.log('Server running...'));
```

---

## 🔹 **5. Environment-based Configuration**

Different environments (development, testing, production) use different database URLs.
You can manage them with a `.env` file.

### 🧩 Example:

**.env**

```
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/dev_db
```

**Production:**

```
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/prod_db
```

Then, in your code:

```js
const env = process.env.NODE_ENV;
console.log(`Running in ${env} mode`);
```

✅ This makes your application **secure**, **portable**, and **configurable** across environments.

---

## 💡 **Key Takeaways**

| Concept              | Description                                         |
| -------------------- | --------------------------------------------------- |
| SQL                  | Structured, relational database with defined schema |
| NoSQL                | Non-relational, schema-less database                |
| Connection Pooling   | Reuse of multiple DB connections for efficiency     |
| Environment Config   | Store DB credentials in `.env` for security         |
| Mongoose / Sequelize | Popular Node.js ORM/ODM libraries                   |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
