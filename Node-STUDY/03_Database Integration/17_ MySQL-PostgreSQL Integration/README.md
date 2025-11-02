# 🗄️ **17. MySQL / PostgreSQL Integration**

📘 **Docs:**

* [MySQL Node.js Docs](https://www.npmjs.com/package/mysql2)
* [PostgreSQL Node.js Docs (pg)](https://www.npmjs.com/package/pg)
* [Sequelize ORM](https://sequelize.org/)

---

## 🧠 **Overview**

Relational databases like **MySQL** and **PostgreSQL** store data in **tables (rows and columns)** with **structured schemas** and **SQL-based queries**.
Node.js connects to these databases using **drivers** or **ORMs (Object Relational Mappers)** such as **Sequelize** or **Prisma**.

---

## 🔹 **1. Database Drivers**

Drivers are libraries that let Node.js communicate directly with SQL databases.

| Database   | Popular Driver | Install Command      |
| ---------- | -------------- | -------------------- |
| MySQL      | `mysql2`       | `npm install mysql2` |
| PostgreSQL | `pg`           | `npm install pg`     |

### 🧩 Example: MySQL Driver

```js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected');
});
```

### 🧩 Example: PostgreSQL Driver

```js
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'mydb'
});

client.connect()
  .then(() => console.log('✅ PostgreSQL Connected'))
  .catch(err => console.error('❌ Connection Error:', err));
```

---

## 🔹 **2. Connection Setup**

For production systems, use **connection pooling** for performance and scalability.

### 🧩 MySQL Pool Example:

```js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shopdb',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
```

### 🧩 PostgreSQL Pool Example:

```js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shopdb',
  password: 'password',
  port: 5432,
});

module.exports = pool;
```

---

## 🔹 **3. Prepared Statements**

Prepared statements help prevent **SQL Injection** and improve performance.

### 🧩 Example (MySQL)

```js
const [rows] = await pool.execute(
  'SELECT * FROM users WHERE email = ? AND status = ?',
  ['utsav@gmail.com', 'active']
);
```

### 🧩 Example (PostgreSQL)

```js
const result = await pool.query(
  'SELECT * FROM users WHERE email = $1 AND status = $2',
  ['utsav@gmail.com', 'active']
);
```

🧠 **Benefit:** The query is compiled once and reused, reducing risk of malicious input.

---

## 🔹 **4. Transactions**

Transactions ensure **atomicity** — all queries succeed or none do.

### 🧩 MySQL Example:

```js
const connection = await pool.getConnection();
try {
  await connection.beginTransaction();

  await connection.query('UPDATE accounts SET balance = balance - 100 WHERE id = 1');
  await connection.query('UPDATE accounts SET balance = balance + 100 WHERE id = 2');

  await connection.commit();
  console.log('✅ Transaction Successful');
} catch (err) {
  await connection.rollback();
  console.log('❌ Transaction Rolled Back');
} finally {
  connection.release();
}
```

### 🧩 PostgreSQL Example:

```js
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('UPDATE users SET credits = credits - 10 WHERE id = 1');
  await client.query('UPDATE users SET credits = credits + 10 WHERE id = 2');
  await client.query('COMMIT');
  console.log('✅ Transaction Successful');
} catch (err) {
  await client.query('ROLLBACK');
  console.error('❌ Transaction Rolled Back');
} finally {
  client.release();
}
```

---

## 🔹 **5. Query Building**

You can use **raw SQL queries**, or adopt a **query builder** like [Knex.js](https://knexjs.org/).

### 🧩 Raw Query Example:

```js
const [rows] = await pool.query('SELECT * FROM products WHERE price > ?', [100]);
```

### 🧩 Knex Query Builder:

```js
const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'shopdb'
  }
});

const products = await knex('products')
  .select('id', 'name')
  .where('price', '>', 100)
  .orderBy('name');
```

🧠 **Advantage:** Knex provides a **SQL-agnostic**, chainable syntax that works with MySQL, PostgreSQL, SQLite, etc.

---

## 🔹 **6. ORM vs Raw Queries**

| Approach                     | Description                | Pros                        | Cons                       |
| ---------------------------- | -------------------------- | --------------------------- | -------------------------- |
| **Raw SQL**                  | Direct SQL commands        | Fast, full control          | Verbose, error-prone       |
| **Query Builder (Knex)**     | Chain-based SQL generation | Cleaner syntax, DB-agnostic | Slight overhead            |
| **ORM (Sequelize / Prisma)** | Maps tables to JS objects  | Easy CRUD, migrations       | Higher abstraction, slower |

---

## 🔹 **7. Migration Scripts**

Migrations help manage schema changes (e.g., adding columns, tables) in a version-controlled manner.

### 🧩 Knex Migration Example:

```bash
npx knex migrate:make create_users_table
```

**Migration File:**

```js
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
```

Run migrations:

```bash
npx knex migrate:latest
```

🧠 **Why Use Migrations?**

* Version control for schema
* Easier rollback
* Consistent environments across dev, test, and prod

---

## 💡 **Key Takeaways**

| Concept                 | Description                                  |
| ----------------------- | -------------------------------------------- |
| **Drivers**             | Allow Node.js to connect to MySQL/PostgreSQL |
| **Prepared Statements** | Protect against SQL injection                |
| **Transactions**        | Ensure atomic operations                     |
| **Query Builders**      | Generate dynamic SQL easily                  |
| **ORMs**                | Simplify complex database logic              |
| **Migrations**          | Manage schema evolution safely               |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
