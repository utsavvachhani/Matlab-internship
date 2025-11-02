# 🌐 **13. Static Files and Assets in Express.js**

📘 **Docs:** [Express Static Files](https://expressjs.com/en/starter/static-files.html)
📺 **YouTube:** [Serving Static Files in Express – Traversy Media](https://www.youtube.com/watch?v=9OfL9H6AmhQ)

---

## 🧠 **What are Static Files?**

**Static files** are assets like **HTML**, **CSS**, **JavaScript**, **images**, and **fonts** that are served directly to the client **without any server-side processing**.

In Express, static files are typically stored in a folder like `public/` or `assets/`.

---

## 🔹 **1. express.static Middleware**

The `express.static()` middleware serves static files directly.

### 🧩 **Example:**

```js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Server running on port 3000'));
```

✅ **Now you can access files like:**

```
public/
 ├── index.html
 ├── css/
 │    └── style.css
 ├── js/
 │    └── script.js
 └── images/
      └── logo.png
```

| File Request             | Browser URL                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| `public/index.html`      | [http://localhost:3000/index.html](http://localhost:3000/index.html)           |
| `public/css/style.css`   | [http://localhost:3000/css/style.css](http://localhost:3000/css/style.css)     |
| `public/images/logo.png` | [http://localhost:3000/images/logo.png](http://localhost:3000/images/logo.png) |

---

## 🔹 **2. Serving CSS, JS, and Images**

You can organize and serve multiple static directories or serve them under a **virtual path prefix**.

### 🧩 **Example:**

```js
// Serve assets under a prefix
app.use('/static', express.static(path.join(__dirname, 'assets')));

// Directory structure
// assets/css/style.css → http://localhost:3000/static/css/style.css
// assets/js/app.js → http://localhost:3000/static/js/app.js
// assets/images/logo.png → http://localhost:3000/static/images/logo.png
```

✅ **Tip:**
If you serve multiple static folders, Express will look for files **in order of declaration**.

---

## 🔹 **3. Asset Organization**

A clean structure improves maintainability and scalability.

### 📁 **Recommended Structure**

```
project/
 ├── server.js
 ├── public/
 │    ├── css/
 │    ├── js/
 │    ├── images/
 │    └── uploads/
 └── views/
      └── index.ejs
```

✅ Use `public/` for static frontend files
✅ Use `uploads/` for files uploaded by users
✅ Use `views/` for templating (EJS, Pug, etc.)

---

## 🔹 **4. File Upload Handling**

Express does not handle file uploads natively — you use **middleware like Multer** for this.

### 📦 Install Multer

```bash
npm install multer
```

---

## 🔹 **5. Multer for File Uploads**

**Multer** is a Node.js middleware for handling `multipart/form-data` (used in file uploads).

### 🧩 **Basic Setup:**

```js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Storage configuration
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({ storage });

// File upload route
app.post('/upload', upload.single('image'), (req, res) => {
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

### 🧠 **Explanation:**

* `destination` → Directory where files are stored
* `filename` → Custom name for uploaded files
* `upload.single('image')` → For single file upload
* `upload.array('images', 5)` → For multiple uploads (limit 5)

---

## 🔹 **6. Accessing Uploaded Files**

Once files are uploaded to `public/uploads`, you can access them directly through your browser.

✅ Example:
If a file is uploaded to `public/uploads/photo.jpg`,
you can access it at:
👉 `http://localhost:3000/uploads/photo.jpg`

---

## 🔹 **7. Handling File Type & Size**

You can validate file types and limit file size using Multer options.

### 🧩 **Example:**

```js
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    const allowed = /jpg|jpeg|png|gif/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.test(ext)) cb(null, true);
    else cb(new Error('Only images allowed!'));
  }
});
```

---

## 💡 **Quick Recap**

✅ `express.static()` → Serves static files
✅ Supports multiple static folders
✅ Use Multer for file uploads
✅ Organize files into `/public`, `/uploads`, `/views`
✅ Validate file types and size with Multer configuration

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
