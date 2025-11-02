
# 🛡️ **18. Database Security**

📘 **Docs & Resources:**

* [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)
* [bcrypt.js GitHub](https://www.npmjs.com/package/bcryptjs)
* [Helmet for Express](https://www.npmjs.com/package/helmet)
* [Validator.js](https://www.npmjs.com/package/validator)

---

## 🧠 **Overview**

Database security ensures the **confidentiality, integrity, and availability** of data.
In a Node.js backend, proper handling of **user input**, **passwords**, and **database queries** prevents attacks like **SQL injection** and **data leaks**.

---

## 🔹 **1. SQL Injection Prevention**

SQL Injection occurs when attackers inject malicious SQL queries into inputs.

### ⚠️ Vulnerable Example:

```js
const user = req.query.username;
const query = `SELECT * FROM users WHERE username = '${user}'`;
db.query(query); // ❌ Unsafe
```

If user input is:
`' OR '1'='1`
→ This query exposes all records!

---

### ✅ Safe Methods

#### ✅ **Using Prepared Statements**

```js
const [rows] = await pool.execute(
  'SELECT * FROM users WHERE username = ? AND password = ?',
  [req.body.username, req.body.password]
);
```

#### ✅ **Using Query Builder / ORM**

```js
const user = await User.findOne({ where: { username: req.body.username } });
```

🧠 **Key Rule:** Never concatenate raw user input directly into SQL queries.

---

## 🔹 **2. Data Validation**

Validation ensures that user input follows expected rules — type, length, and format.

### 🧩 Example using `validator.js`

```js
const validator = require('validator');

if (!validator.isEmail(req.body.email)) {
  return res.status(400).json({ error: 'Invalid email format' });
}

if (!validator.isLength(req.body.password, { min: 8 })) {
  return res.status(400).json({ error: 'Password too short' });
}
```

---

### 🧩 Example using Joi Schema

```js
const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const { error } = schema.validate(req.body);
if (error) return res.status(400).send(error.details[0].message);
```

🧠 **Tip:** Always validate both frontend **and** backend input.

---

## 🔹 **3. Input Sanitization**

Sanitization removes malicious or unexpected characters that could harm the system.

### 🧩 Example using `validator.js`

```js
const sanitizedInput = validator.escape(req.body.comment);
console.log(sanitizedInput);
// "<script>" → "&lt;script&gt;"
```

### 🧩 Express Middleware Example:

```js
import xss from 'xss-clean';
import helmet from 'helmet';
import express from 'express';

const app = express();
app.use(helmet());    // Secure headers
app.use(xss());       // Prevent XSS
```

🧠 **Tip:** Combine sanitization with validation for full protection.

---

## 🔹 **4. Password Hashing**

Never store passwords in plain text — always hash them using algorithms like **bcrypt** or **Argon2**.

### 🧩 Using bcrypt.js

```js
const bcrypt = require('bcryptjs');

// Hash password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compare password
const isMatch = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
```

🧠 **Why Hashing?**

* Hashing converts plain text into irreversible encrypted values.
* Even database leaks won’t reveal actual passwords.

---

## 🔹 **5. Database Encryption**

Sensitive data (like credit card numbers or personal info) can be encrypted using **crypto** module.

### 🧩 Example using Node.js Crypto

```js
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const data = 'Sensitive Data';
const enc = encrypt(data);
console.log('Encrypted:', enc);
console.log('Decrypted:', decrypt(enc));
```

🧠 **Best Practice:** Store encryption keys in **environment variables**, not in code.

---

## 🧩 **Security Best Practices Summary**

| Category       | Practice                     | Tools / Methods            |
| -------------- | ---------------------------- | -------------------------- |
| Input Security | Validate + Sanitize inputs   | Joi, validator.js          |
| Query Security | Use prepared statements      | Knex, Sequelize            |
| Passwords      | Use bcrypt or Argon2 hashing | bcryptjs                   |
| Sensitive Data | Encrypt with AES / Crypto    | Node.js crypto             |
| API Security   | Use Helmet + Rate Limiting   | helmet, express-rate-limit |
| Environment    | Store secrets in `.env`      | dotenv                     |

---

## ⚙️ **Example Secure Express Setup**

```js
import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(helmet()); // Secure HTTP headers
app.use(xss()); // Prevent XSS
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);
```

🧠 **Result:** Your Node.js app is secure from common web attacks.

---

## ✅ **Key Takeaways**

| Concept           | Description                              |
| ----------------- | ---------------------------------------- |
| **SQL Injection** | Prevented via prepared statements or ORM |
| **Validation**    | Ensures input follows correct structure  |
| **Sanitization**  | Cleans harmful data before storing       |
| **Hashing**       | Protects user passwords irreversibly     |
| **Encryption**    | Secures sensitive stored data            |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
