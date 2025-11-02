
# 🌐 **5. HTTP Module**

📺 **YouTube:** [Node.js HTTP Module Crash Course – Traversy Media](https://www.youtube.com/watch?v=aTThXMRxmiE)
📖 **Docs:** [Node.js HTTP Docs](https://nodejs.org/dist/latest-v20.x/docs/api/http.html)

---

## 🧠 **Overview**

The **HTTP module** in Node.js allows you to create web servers and handle HTTP requests and responses **without using any external framework** like Express.

It is part of Node’s **core modules**, so no installation is required.

---

## ⚙️ **1. Creating HTTP Server**

Use `http.createServer()` to create a basic server that listens on a specific port.

### Example:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js Server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

🧠 **Explanation:**

* `createServer()` — creates an HTTP server.
* `req` — represents the **request object**.
* `res` — represents the **response object**.
* `writeHead()` — sets status code and headers.
* `end()` — sends the response and ends it.

---

## 📬 **2. Handling Requests and Responses**

You can inspect request URLs and respond dynamically.

### Example:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>About Us</h1>");
  } else {
    res.statusCode = 404;
    res.write("<h1>404 Not Found</h1>");
  }
  res.end();
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 🧾 **3. HTTP Methods (GET, POST, PUT, DELETE)**

The HTTP module allows handling different **methods** manually.

### Example:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "GET all users" }));
  } else if (req.method === "POST" && req.url === "/users") {
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User created successfully" }));
  } else {
    res.writeHead(404);
    res.end("Route not found");
  }
});

server.listen(4000, () => console.log("Server listening on port 4000"));
```

🧠 Common HTTP Methods:

| Method     | Purpose              |
| ---------- | -------------------- |
| **GET**    | Retrieve data        |
| **POST**   | Create new data      |
| **PUT**    | Update existing data |
| **DELETE** | Remove data          |

---

## 💡 **4. Request and Response Objects**

### Request (`req`)

Contains information about the client request:

```js
req.url      // URL path
req.method   // HTTP method (GET, POST, etc.)
req.headers  // HTTP headers
```

### Response (`res`)

Used to send data back to the client:

```js
res.writeHead(statusCode, headers);
res.write(data);
res.end();
```

---

## 🔢 **5. Status Codes**

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

### Example:

```js
res.writeHead(404, { "Content-Type": "text/plain" });
res.end("Page not found!");
```

---

## 🧾 **6. Headers**

HTTP headers contain metadata about requests and responses.

### Example:

```js
res.writeHead(200, {
  "Content-Type": "application/json",
  "Custom-Header": "NodeJS-Tutorial"
});
res.end(JSON.stringify({ message: "Headers Example" }));
```

🧠 You can also use `res.setHeader()` to set headers one by one.

---

## 🔍 **7. Query Parameters**

You can parse URL query parameters using the `url` module.

### Example:

```js
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  console.log(query);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ query }));
});

server.listen(5000, () => console.log("Server running on port 5000"));
```

🧠
If you access → `http://localhost:5000/?name=Utsav&age=21`
Output → `{ name: "Utsav", age: "21" }`

---

## 🗺️ **8. URL Routing**

A simple example of manual routing:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home Page");
      break;
    case "/about":
      res.end("About Page");
      break;
    case "/contact":
      res.end("Contact Page");
      break;
    default:
      res.statusCode = 404;
      res.end("404 Not Found");
  }
});

server.listen(3000);
```

🧠 For complex routing, you can later use **Express.js**.

---

## 🖼️ **9. Serving Static Files**

Serve HTML, CSS, or JS files using the **fs** module.

### Example:

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  const ext = path.extname(filePath);
  let contentType = "text/html";

  if (ext === ".css") contentType = "text/css";
  if (ext === ".js") contentType = "text/javascript";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(8080, () => console.log("Static server running on port 8080"));
```

🧠 This is the foundation of how Express and other frameworks serve files behind the scenes.

---


⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)

