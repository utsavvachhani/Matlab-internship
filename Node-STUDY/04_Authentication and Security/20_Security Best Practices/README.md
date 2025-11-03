
# 🛡️ **20. Security Best Practices**

📘 **Docs & Resources:**

* [OWASP Node.js Security Cheat Sheet](https://cheatsheetseries.owasp.org/)
* [Helmet.js Documentation](https://helmetjs.github.io/)
* [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
* [CORS NPM Package](https://www.npmjs.com/package/cors)
* [CSURF Middleware](https://www.npmjs.com/package/csurf)

---

## 🧠 **Overview**

Security is **critical** in every Node.js application — whether it’s an API or a full web server.
Node.js apps often face attacks like **XSS**, **CSRF**, **SQL Injection**, and **Denial of Service (DoS)** if not properly secured.

This section covers best practices to keep your Express applications secure and reliable.

---

## 🔹 **1. HTTPS Implementation**

HTTPS encrypts the data between the **client and server**, ensuring privacy and preventing man-in-the-middle (MITM) attacks.

### ⚙️ Example using HTTPS with Express

```js
import https from 'https';
import fs from 'fs';
import express from 'express';

const app = express();

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

app.get('/', (req, res) => {
  res.send('Secure HTTPS Server');
});

https.createServer(options, app).listen(443, () => {
  console.log('Server running on https://localhost');
});
```

🧠 **Tip:** Always use **SSL certificates** from trusted authorities like **Let’s Encrypt** in production.

---

## 🔹 **2. CORS (Cross-Origin Resource Sharing)**

CORS controls which domains can send requests to your server — preventing **unauthorized resource access**.

### ⚙️ Example:

```js
import cors from 'cors';
import express from 'express';

const app = express();

// Allow specific origins
const corsOptions = {
  origin: ['https://yourdomain.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
```

🧠 **Tip:** Never use `app.use(cors())` with `*` (wildcard) in production.

---

## 🔹 **3. Helmet.js for Security Headers**

Helmet helps protect your app by setting **HTTP headers** that prevent common vulnerabilities (like XSS, clickjacking, MIME sniffing).

### ⚙️ Example:

```js
import helmet from 'helmet';
import express from 'express';

const app = express();
app.use(helmet());
```

Helmet sets headers like:

* `X-Content-Type-Options: nosniff`
* `X-DNS-Prefetch-Control`
* `X-Frame-Options: DENY`
* `Strict-Transport-Security`

🧠 **Tip:** Customize Helmet for APIs that need specific header rules.

---

## 🔹 **4. Rate Limiting**

Rate limiting prevents **Denial of Service (DoS)** attacks by restricting the number of requests from a single IP.

### ⚙️ Example:

```js
import rateLimit from 'express-rate-limit';
import express from 'express';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later.'
});

app.use(limiter);
```

🧠 **Tip:** Combine rate limiting with **IP blacklisting** or **CAPTCHA** for extra protection.

---

## 🔹 **5. Input Validation**

Validate and sanitize all user inputs to prevent **SQL Injection** and **XSS**.

### ⚙️ Example using `express-validator`:

```js
import { body, validationResult } from 'express-validator';
import express from 'express';

const app = express();
app.use(express.json());

app.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  res.send('User registered successfully');
});
```

🧠 **Tip:** Always validate on both **client and server** sides.

---

## 🔹 **6. XSS (Cross-Site Scripting) Prevention**

Attackers can inject malicious JavaScript into pages.
Prevent this by sanitizing outputs and using libraries like **xss-clean**.

### ⚙️ Example:

```js
import xss from 'xss-clean';
import express from 'express';

const app = express();
app.use(xss());
```

🧠 **Tip:** Avoid using `innerHTML` in frontend frameworks unless sanitized.

---

## 🔹 **7. CSRF (Cross-Site Request Forgery) Protection**

CSRF attacks trick users into performing actions unknowingly.
Use **CSRF tokens** to validate legitimate requests.

### ⚙️ Example:

```js
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) => {
  res.send(`<form action="/process" method="POST">
              <input type="hidden" name="_csrf" value="${req.csrfToken()}">
              <button type="submit">Submit</button>
            </form>`);
});
```

🧠 **Tip:** Always use CSRF protection for state-changing requests (`POST`, `PUT`, `DELETE`).

---

## 🔹 **8. Security Auditing**

Regularly audit dependencies and your application to identify vulnerabilities.

### ⚙️ Commands:

```bash
npm audit
npm audit fix
```

### 🧩 Additional Tools:

* **Snyk:** Continuous security monitoring
* **nsp / retire.js:** Detect known vulnerabilities
* **Helmet & OWASP ZAP:** Automated scanning tools

---

## ✅ **Bonus Tips**

* Hide **X-Powered-By** header:

  ```js
  app.disable('x-powered-by');
  ```
* Use environment variables for **API keys** and **DB credentials**.
* Always hash passwords using **bcrypt**.
* Regularly update dependencies.
* Use **Docker** or **Kubernetes secrets** for secure key management.

---

## 🧩 **Summary Table**

| Security Aspect  | Tool / Method        | Description                         |
| ---------------- | -------------------- | ----------------------------------- |
| HTTPS            | SSL/TLS              | Encrypt client-server communication |
| CORS             | `cors` package       | Control cross-domain access         |
| Security Headers | `helmet`             | Set secure HTTP headers             |
| Rate Limiting    | `express-rate-limit` | Limit request frequency             |
| Input Validation | `express-validator`  | Validate & sanitize data            |
| XSS Protection   | `xss-clean`, Helmet  | Prevent script injections           |
| CSRF             | `csurf`              | Protect against CSRF attacks        |
| Auditing         | `npm audit`, Snyk    | Detect vulnerabilities              |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)