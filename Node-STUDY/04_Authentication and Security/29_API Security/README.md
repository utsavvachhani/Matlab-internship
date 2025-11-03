# 🛡️ **29. API Security**

📘 **Docs & References:**

* [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
* [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
* [Helmet.js](https://www.npmjs.com/package/helmet)
* [Rate-Limiter-Flexible](https://www.npmjs.com/package/rate-limiter-flexible)

---

## 🧠 **Overview**

API security ensures that **only authorized users** access your API and that **data integrity and confidentiality** are maintained.
It involves securing endpoints, validating inputs, controlling access, and monitoring activity.

---

## 🔹 **1. API Authentication**

Authentication verifies the **identity** of the user making a request.

### 🧩 **Common Methods**

| Method                   | Description                                              | Example                                          |
| ------------------------ | -------------------------------------------------------- | ------------------------------------------------ |
| **Basic Auth**           | Username and password in headers (not secure over HTTP). | `Authorization: Basic base64(username:password)` |
| **API Key**              | A static key sent via headers or query.                  | `x-api-key: YOUR_API_KEY`                        |
| **JWT (JSON Web Token)** | Token-based authentication using signed payload.         | `Authorization: Bearer <token>`                  |
| **OAuth2**               | Third-party authorization (e.g., Google, GitHub login).  | Access tokens via OAuth flow                     |

### Example: **JWT Authentication**

```js
import jwt from "jsonwebtoken";
import express from "express";

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";

// Generate Token
app.post("/login", (req, res) => {
  const user = { id: 1, username: "Utsav" };
  const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Middleware for Auth
function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected Route
app.get("/profile", authenticate, (req, res) => res.json(req.user));

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 🔹 **2. Rate Limiting**

Prevents **DDoS attacks** and **API abuse** by limiting the number of requests per client.

### Example: **express-rate-limit**

```bash
npm install express-rate-limit
```

```js
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests
  message: "Too many requests, please try again later."
});

app.use("/api", limiter);
```

✅ **Best Practice:** Apply rate limits per route (e.g., login routes have stricter limits).

---

## 🔹 **3. Input Validation**

Protects APIs from **injection attacks** (like SQL Injection, XSS) by ensuring that incoming data is valid.

### Example: **Using express-validator**

```bash
npm install express-validator
```

```js
import { body, validationResult } from "express-validator";

app.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    res.send("User registered successfully!");
  }
);
```

✅ **Tip:** Always sanitize input (`trim()`, `escape()`) and use **parameterized queries** in databases.

---

## 🔹 **4. CORS Configuration**

CORS (**Cross-Origin Resource Sharing**) controls which domains can access your API.

### Example: **Using cors middleware**

```bash
npm install cors
```

```js
import cors from "cors";

const corsOptions = {
  origin: ["https://yourfrontend.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
```

✅ **Best Practice:**
Allow only trusted origins and use strict method/headers policies.

---

## 🔹 **5. API Monitoring**

Monitoring helps detect **unauthorized access**, **performance issues**, and **error spikes** in real-time.

### 🧩 **Tools for Monitoring**

| Tool                     | Description                             |
| ------------------------ | --------------------------------------- |
| **morgan**               | Logs API requests to console or file    |
| **winston**              | Advanced logging with custom transports |
| **Sentry**               | Error tracking and alerting             |
| **Prometheus + Grafana** | Performance metrics dashboard           |
| **New Relic / Datadog**  | Enterprise-level monitoring             |

### Example: **Using morgan**

```bash
npm install morgan
```

```js
import morgan from "morgan";
app.use(morgan("combined")); // Logs method, URL, status, and response time
```

---

## ✅ **Key Takeaways**

| Concept              | Description                           |
| -------------------- | ------------------------------------- |
| **Authentication**   | Verify user identity (JWT, OAuth)     |
| **Rate Limiting**    | Protect API from excessive requests   |
| **Input Validation** | Prevent injection and malicious input |
| **CORS**             | Restrict origins for secure access    |
| **Monitoring**       | Track API health, errors, and traffic |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
