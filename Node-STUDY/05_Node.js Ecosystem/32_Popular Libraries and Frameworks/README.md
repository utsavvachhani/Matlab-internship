
# ⚙️ **32. Popular Libraries and Frameworks**

📘 **Docs & References:**

* [Express.js Official Docs](https://expressjs.com/)
* [NestJS Official Docs](https://docs.nestjs.com/)
* [Hapi.js Official Docs](https://hapi.dev/api/)
* [Socket.IO Docs](https://socket.io/docs/v4/)
* [Mongoose Docs](https://mongoosejs.com/docs/)
* [Sequelize Docs](https://sequelize.org/)

---

## 🧠 **Overview**

Node.js by itself provides core functionality, but real-world backend apps often use **frameworks and libraries** to handle routing, database interactions, and real-time communication efficiently.

Here’s an overview of the **most popular and widely used Node.js libraries and frameworks** 👇

---

## 🔹 **1. Express.js**

### ⚙️ Overview

* The **most popular web framework** for Node.js
* Lightweight, fast, and minimal
* Used for building RESTful APIs and web servers

### 🧩 Example

```js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### ✅ Features

* Middleware support
* Routing system
* Request & response handling
* Integration with databases and templating engines

---

## 🔹 **2. NestJS**

### ⚙️ Overview

* **Enterprise-grade Node.js framework** built with **TypeScript**
* Inspired by **Angular architecture** (modules, controllers, services)
* Highly scalable and maintainable

### 🧩 Example

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return ["Utsav", "Meet", "Raj"];
  }
}
```

### ✅ Features

* TypeScript first-class support
* Dependency Injection (DI)
* Modular structure
* Integrated testing and validation tools

---

## 🔹 **3. Hapi.js**

### ⚙️ Overview

* A **configuration-centric** framework for building **secure** and **scalable APIs**
* Developed by Walmart Labs
* Focused on **code quality**, **validation**, and **security**

### 🧩 Example

```js
import Hapi from "@hapi/hapi";

const init = async () => {
  const server = Hapi.server({ port: 3000, host: "localhost" });

  server.route({
    method: "GET",
    path: "/",
    handler: () => "Hello from Hapi.js!",
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();
```

### ✅ Features

* Built-in validation and authentication
* Configuration-based approach
* Secure defaults

---

## 🔹 **4. Socket.IO**

### ⚙️ Overview

* Enables **real-time, bidirectional communication** between client and server
* Commonly used for **chat apps**, **live notifications**, and **gaming**

### 🧩 Example

```js
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (msg) => {
    console.log("Received:", msg);
    io.emit("message", msg); // broadcast message
  });
});

httpServer.listen(3000, () => console.log("Socket.IO running on port 3000"));
```

### ✅ Features

* Real-time events
* Rooms and namespaces
* Works with Express and NestJS

---

## 🔹 **5. Mongoose**

### ⚙️ Overview

* **ODM (Object Data Modeling)** library for MongoDB
* Simplifies schema creation, validation, and CRUD operations

### 🧩 Example

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb://localhost:27017/testDB").then(async () => {
  const user = new User({ name: "Utsav", age: 22 });
  await user.save();
  console.log("User saved!");
});
```

### ✅ Features

* Schema-based models
* Middleware hooks (pre/post)
* Population (joins)
* Validation

---

## 🔹 **6. Sequelize**

### ⚙️ Overview

* **ORM (Object Relational Mapper)** for SQL databases (MySQL, PostgreSQL, etc.)
* Makes it easy to interact with relational databases using JavaScript/TypeScript

### 🧩 Example

```js
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("testdb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

await sequelize.sync();
await User.create({ name: "Meet", email: "meet@gmail.com" });
console.log("User inserted!");
```

### ✅ Features

* Model-based database management
* Associations (1:1, 1:N, N:M)
* Migration support
* Query builder

---

## 🧩 **When to Use What**

| Framework/Library | Best For                  | Database Type | Key Strength         |
| ----------------- | ------------------------- | ------------- | -------------------- |
| **Express.js**    | REST APIs, Microservices  | Any           | Fast, minimal        |
| **NestJS**        | Large enterprise projects | Any           | Scalable, TypeScript |
| **Hapi.js**       | Secure APIs               | Any           | Validation, security |
| **Socket.IO**     | Real-time apps            | Any           | WebSockets           |
| **Mongoose**      | MongoDB apps              | NoSQL         | Schema-based ODM     |
| **Sequelize**     | SQL databases             | Relational    | ORM with migrations  |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
