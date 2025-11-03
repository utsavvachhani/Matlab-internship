# ⚡ **28. RESTful APIs**

📘 **Docs & References:**

* [MDN REST API Guide](https://developer.mozilla.org/en-US/docs/Glossary/REST)
* [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* [Swagger / OpenAPI](https://swagger.io/resources/open-api/)

---

## 🧠 **Overview**

A **RESTful API (Representational State Transfer)** is an **architectural style** for designing networked applications.
It uses **HTTP methods** to perform CRUD operations on resources and provides a **stateless**, **client-server** communication model.

---

## 🔹 **1. REST Principles**

REST is based on **six key principles**:

| Principle                     | Description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| **Stateless**                 | Each request is independent and contains all necessary data.  |
| **Client-Server**             | Separation between client (UI) and server (data logic).       |
| **Uniform Interface**         | Consistent structure for endpoints, resources, and responses. |
| **Cacheable**                 | Responses should define cacheability to improve performance.  |
| **Layered System**            | Architecture can include intermediaries (proxies, gateways).  |
| **Code on Demand (optional)** | Server can return executable code (e.g., JavaScript).         |

🧩 Example Flow:

```
Client → [GET] /api/users → Server → Returns list of users
```

---

## 🔹 **2. HTTP Methods and Status Codes**

### 🧩 **Common HTTP Methods**

| Method     | Description                 | Example               |
| ---------- | --------------------------- | --------------------- |
| **GET**    | Retrieve data               | `GET /api/users`      |
| **POST**   | Create a new resource       | `POST /api/users`     |
| **PUT**    | Update a resource (replace) | `PUT /api/users/1`    |
| **PATCH**  | Partially update a resource | `PATCH /api/users/1`  |
| **DELETE** | Delete a resource           | `DELETE /api/users/1` |

### ✅ **Common Status Codes**

| Code                          | Meaning                      | Example        |
| ----------------------------- | ---------------------------- | -------------- |
| **200 OK**                    | Successful request           | Resource found |
| **201 Created**               | Resource created             | POST success   |
| **204 No Content**            | Success but no response body | DELETE success |
| **400 Bad Request**           | Invalid data or parameters   |                |
| **401 Unauthorized**          | Authentication required      |                |
| **403 Forbidden**             | Access denied                |                |
| **404 Not Found**             | Resource not found           |                |
| **500 Internal Server Error** | Server issue                 |                |

---

## 🔹 **3. Resource Naming Conventions**

Resources should be **nouns**, not verbs, and use **plural forms**.

### 🧩 **Good Practices**

| Action        | Endpoint                | Description            |
| ------------- | ----------------------- | ---------------------- |
| Get all users | `GET /api/users`        | List all users         |
| Get one user  | `GET /api/users/:id`    | Retrieve a single user |
| Create user   | `POST /api/users`       | Add new user           |
| Update user   | `PUT /api/users/:id`    | Update full user       |
| Delete user   | `DELETE /api/users/:id` | Remove user            |

### ❌ Avoid:

```
/getUsers, /createUser, /deleteUser
```

### ✅ Use:

```
/users, /users/:id
```

---

## 🔹 **4. API Versioning**

Versioning helps maintain backward compatibility when APIs evolve.

### 🧩 **Common Approaches**

| Type                             | Example                               | Description        |
| -------------------------------- | ------------------------------------- | ------------------ |
| **URL Versioning (most common)** | `/api/v1/users`                       | Version in the URL |
| **Header Versioning**            | `Accept: application/vnd.app.v1+json` | Version in header  |
| **Query Param Versioning**       | `/api/users?version=1`                | Version as query   |

✅ **Recommended:** Use **URL-based versioning** — it’s clear and simple.

---

## 🔹 **5. API Documentation**

Documentation improves collaboration and helps consumers understand endpoints.

### 🧩 **Tools for Documentation**

| Tool                  | Description                                   |
| --------------------- | --------------------------------------------- |
| **Swagger / OpenAPI** | Interactive UI for API testing                |
| **Postman**           | Used for testing and generating documentation |
| **Redoc**             | Clean, developer-friendly API docs            |
| **apidoc.js**         | Inline documentation generator                |

### Example Swagger Setup

```bash
npm install swagger-ui-express swagger-jsdoc
```

```js
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "My API", version: "1.0.0" },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
```

Now visit → [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🧩 **Example RESTful API with Express**

```js
const express = require("express");
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "Utsav" }];

// GET all users
app.get("/api/users", (req, res) => res.status(200).json(users));

// GET one user
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  user ? res.json(user) : res.status(404).send("User not found");
});

// POST new user
app.post("/api/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log("API running on port 3000"));
```

---

## ✅ **Key Takeaways**

| Concept                | Description                        |
| ---------------------- | ---------------------------------- |
| **REST**               | Stateless design for scalable APIs |
| **HTTP Methods**       | Define CRUD operations             |
| **Status Codes**       | Indicate request outcome           |
| **Naming Conventions** | Use plural nouns for endpoints     |
| **Versioning**         | Maintain backward compatibility    |
| **Documentation**      | Use Swagger or Postman for clarity |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
