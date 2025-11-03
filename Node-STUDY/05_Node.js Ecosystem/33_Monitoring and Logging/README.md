# 🧾 **33. Monitoring and Logging**

📘 **Docs & References:**

* [Winston Docs](https://github.com/winstonjs/winston)
* [Morgan Docs](https://www.npmjs.com/package/morgan)
* [Node.js Error Handling Guide](https://nodejs.org/en/docs/guides/error-handling-best-practices)

---

## 🧠 **Overview**

Monitoring and logging are essential parts of **production-grade Node.js applications**.
They help developers **track system activity, detect issues, debug errors**, and improve application reliability.

---

## 🔹 **1. Winston for Logging**

### ⚙️ Overview

Winston is a **versatile logging library** for Node.js supporting:

* Multiple transports (file, console, database, etc.)
* Log levels (info, warn, error, debug)
* Custom formats (timestamp, JSON, colorized)

---

### 🧩 Example: Basic Winston Logger

```js
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" })
  ],
});

logger.info("Server started successfully!");
logger.warn("Low disk space!");
logger.error("Database connection failed!");
```

### ✅ Features

* Log rotation & file logging
* JSON logging for APIs
* Separate logs for errors and info
* Integration with external monitoring tools (Datadog, AWS CloudWatch)

---

## 🔹 **2. Morgan for HTTP Request Logging**

### ⚙️ Overview

Morgan is an **HTTP request logger middleware** for Express.js.
It logs request details such as **method, URL, status code, and response time.**

---

### 🧩 Example: Morgan with Express

```js
import express from "express";
import morgan from "morgan";

const app = express();

// Use predefined logging format
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from Morgan Logger!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### ✅ Features

* Predefined formats: `dev`, `tiny`, `combined`, etc.
* Can write logs to a file:

  ```js
  import fs from "fs";
  import path from "path";

  const accessLogStream = fs.createWriteStream(path.join("./logs", "access.log"), { flags: "a" });
  app.use(morgan("combined", { stream: accessLogStream }));
  ```
* Middleware for Express → automatically logs all routes

---

## 🔹 **3. Logging Errors**

### ⚙️ Overview

Error logging captures **unexpected runtime errors** and stores them for debugging or alerting.

You can combine **Winston** + **Express error handling middleware**.

---

### 🧩 Example: Logging Errors in Express

```js
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message} | Stack: ${err.stack}`);
  res.status(500).json({ message: "Internal Server Error" });
});
```

### ✅ Best Practices

* Log **errors separately** from standard logs
* Include **timestamps** and **request context** (URL, user ID)
* Use **environment-based logging levels** (e.g., less verbose in production)
* Monitor logs via **services like Datadog, ELK Stack, Prometheus + Grafana**

---

## 🔹 **4. Monitoring Tools**

While logging records events, **monitoring** provides insights into **system health** and performance.

Popular tools:

* **PM2** → Process monitoring, restart on crash, log management
* **New Relic / Datadog** → Real-time performance analytics
* **Prometheus + Grafana** → Dashboard visualization for Node metrics

---

## 🧩 **Combined Example (Winston + Morgan)**

```js
import express from "express";
import morgan from "morgan";
import winston from "winston";

const app = express();

// Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

// Morgan for HTTP logging
app.use(morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
}));

// Example route
app.get("/", (req, res) => {
  res.send("Logging with Morgan + Winston");
});

// Error middleware
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => logger.info("Server started on port 3000"));
```

---

## ✅ **Summary Table**

| Tool              | Purpose                     | Example Use                   |
| ----------------- | --------------------------- | ----------------------------- |
| **Winston**       | General logging (app-level) | Save info, error logs         |
| **Morgan**        | HTTP request logging        | Log requests, methods, status |
| **PM2 / Datadog** | Monitoring                  | Track uptime, CPU, memory     |
| **ELK Stack**     | Centralized log management  | Analyze logs visually         |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
