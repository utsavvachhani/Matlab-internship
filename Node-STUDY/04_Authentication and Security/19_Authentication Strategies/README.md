
# 🔐 **19. Authentication Strategies**

📘 **Docs & Resources:**

* [Passport.js Official Docs](http://www.passportjs.org/docs/)
* [JWT.io](https://jwt.io/)
* [OAuth 2.0 Overview](https://oauth.net/2/)
* [Express-session](https://www.npmjs.com/package/express-session)

---

## 🧠 **Overview**

Authentication is the process of **verifying user identity** before allowing access to protected resources.
Node.js and Express provide multiple strategies, such as **sessions**, **JWT tokens**, and **OAuth**.

---

## 🔹 **1. Session-based Authentication**

Sessions store user login data **on the server**. The server assigns a unique **session ID**, stored in a **cookie** on the client.

### ⚙️ Example using `express-session`

```js
import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // secure: true in production (HTTPS)
}));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === '1234') {
    req.session.user = username;
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) res.send(`Welcome ${req.session.user}`);
  else res.status(403).send('Not logged in');
});
```

🧠 **Best For:** Traditional web apps with server-side rendering (e.g., EJS, Handlebars).

---

## 🔹 **2. Token-based Authentication**

Instead of sessions, the server issues a **token** after login.
The client stores this token (usually in `localStorage`) and sends it with every request.

### 🧩 Flow:

1. User logs in → server validates credentials.
2. Server returns a **token** (e.g., JWT).
3. Client stores it and includes it in `Authorization: Bearer <token>` header.
4. Server verifies the token on each request.

---

## 🔹 **3. JWT (JSON Web Token)**

JWT is a compact, signed token that securely transmits user data between client and server.

### 🧩 Structure:

`Header.Payload.Signature`

### ⚙️ Example Implementation:

```js
import jwt from 'jsonwebtoken';
import express from 'express';

const app = express();
app.use(express.json());

const SECRET_KEY = 'secret123';

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Middleware for Token Verification
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token required' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};

// Protected Route
app.get('/profile', authenticate, (req, res) => {
  res.send(`Welcome, ${req.user.username}`);
});
```

🧠 **Best For:** REST APIs, SPAs, and mobile applications.

---

## 🔹 **4. OAuth Integration**

OAuth allows users to **log in using external providers** like Google, GitHub, or Facebook without sharing passwords.

### 🧩 OAuth Flow:

1. User clicks “Login with Google”.
2. Google prompts user to authorize your app.
3. Google sends a token to your backend.
4. Your backend verifies and fetches user profile data.

🧠 **Libraries:**

* `passport-google-oauth20`
* `passport-github2`
* `passport-facebook`

---

### ⚙️ Example (Google OAuth with Passport.js)

```js
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const app = express();

app.use(session({ secret: 'secretKey', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.send('Logged in with Google!')
);
```

---

## 🔹 **5. Passport.js**

**Passport.js** is a popular authentication middleware that supports:

* Local authentication
* OAuth (Google, GitHub, Facebook, etc.)
* JWT-based login

🧠 **Benefits:**

* Modular strategies
* Easy to integrate
* Works well with Express sessions or tokens

---

## 🔹 **6. Local Authentication**

Used for **username/email + password** login without third-party providers.

### ⚙️ Example:

```js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';

passport.use(new LocalStrategy((username, password, done) => {
  const user = { username: 'admin', passwordHash: '$2a$10$....' }; // Example

  bcrypt.compare(password, user.passwordHash, (err, isMatch) => {
    if (err) return done(err);
    if (!isMatch) return done(null, false, { message: 'Invalid credentials' });
    return done(null, user);
  });
}));
```

---

## 🔹 **7. Social Media Authentication**

Social login allows authentication via:

* Google (`passport-google-oauth20`)
* GitHub (`passport-github2`)
* Facebook (`passport-facebook`)

🧠 **Advantages:**

* No need to handle password storage.
* Fast user onboarding.
* Trusted authentication via third parties.

---

## ✅ **Comparison Table**

| Strategy          | Token Storage         | Server State | Best For             |
| ----------------- | --------------------- | ------------ | -------------------- |
| **Session-based** | Cookie                | Yes          | Traditional web apps |
| **JWT-based**     | LocalStorage / Header | No           | APIs & SPAs          |
| **OAuth**         | Access Token          | Partial      | Third-party logins   |
| **Passport.js**   | Varies                | Optional     | Multi-strategy setup |

---

## ⚙️ **Best Practices**

* Always use **HTTPS** for secure token transmission.
* Use **short token lifetimes** with refresh tokens.
* Store **JWT secret** in environment variables.
* Implement **logout** to invalidate tokens or sessions.
* Combine with **role-based authorization** for access control.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
