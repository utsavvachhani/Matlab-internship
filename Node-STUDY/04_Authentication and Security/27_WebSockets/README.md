# ⚡ **27. WebSockets**

📘 **Docs & References:**

* [MDN WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [Socket.IO Documentation](https://socket.io/docs/v4/)

---

## 🧠 **Overview**

**WebSockets** enable **real-time, bidirectional communication** between the client and server over a single TCP connection.
Unlike HTTP, which is **request-response-based**, WebSockets keep the connection open, allowing **instant updates** — ideal for chat apps, games, dashboards, and live notifications.

---

## 🔹 **1. WebSocket Protocol**

* Introduced in **HTML5**, built on **TCP**.
* Starts with an HTTP **handshake** and upgrades to the WebSocket protocol.
* Communication happens over a **persistent full-duplex** connection.

### 🧩 Example Handshake

```http
GET /chat HTTP/1.1
Host: server.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
```

If accepted:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

---

## 🔹 **2. Socket.IO Implementation**

**Socket.IO** is a library that simplifies WebSocket communication and adds fallbacks for compatibility.

### 🛠️ Installation

```bash
npm install socket.io
npm install socket.io-client
```

### 🧩 Server Setup (`server.js`)

```js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Received:", data);
    io.emit("message", data); // Broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

### 🧩 Client Setup (`index.html`)

```html
<script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>
<script>
  const socket = io("http://localhost:3000");

  socket.on("connect", () => console.log("Connected:", socket.id));

  socket.emit("message", "Hello from Client!");

  socket.on("message", (msg) => console.log("Server says:", msg));
</script>
```

---

## 🔹 **3. Real-time Communication**

Real-time communication allows **instant message broadcasting** between clients and server without page reloads.

Example:

```js
socket.on("chat message", (msg) => {
  io.emit("chat message", msg); // send to all clients
});
```

Use `io.emit()` for global messages, or `socket.emit()` for one-to-one communication.

---

## 🔹 **4. Broadcasting Messages**

Broadcasting sends a message to all connected clients except the sender.

```js
socket.broadcast.emit("user-joined", `${socket.id} joined the chat`);
```

Common use cases:

* Chat notifications
* Live user updates
* Realtime dashboards

---

## 🔹 **5. Rooms and Namespaces**

### 🏠 **Rooms**

Rooms allow grouping clients logically.

```js
socket.join("room1");
io.to("room1").emit("message", "Welcome to Room 1");
```

You can leave rooms:

```js
socket.leave("room1");
```

### 🌐 **Namespaces**

Namespaces separate logic within a single server.

```js
const chat = io.of("/chat");
chat.on("connection", (socket) => {
  console.log("User joined chat namespace");
});
```

---

## 🔹 **6. Authentication with Socket.IO**

You can authenticate users before connection.

### Example:

```js
const io = new Server(server, {
  cors: { origin: "*" },
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (token === "12345") next();
  else next(new Error("Authentication failed"));
});

io.on("connection", (socket) => {
  console.log("Authenticated user:", socket.id);
});
```

Client:

```js
const socket = io("http://localhost:3000", {
  auth: { token: "12345" }
});
```

---

## 🔹 **7. Scaling WebSocket Applications**

When scaling to multiple servers, connections need synchronization.

### Techniques:

* **Redis Adapter** for scaling Socket.IO across multiple instances.
* **Sticky Sessions** for consistent client-server connections.
* **Load Balancing** with Nginx or HAProxy.

### Example (Redis Adapter):

```bash
npm install socket.io-redis
```

```js
const { createAdapter } = require("@socket.io/redis-adapter");
const { createClient } = require("redis");

const pubClient = createClient({ host: "localhost", port: 6379 });
const subClient = pubClient.duplicate();

io.adapter(createAdapter(pubClient, subClient));
```

---

## ✅ **Key Takeaways**

| Concept                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| **WebSocket Protocol** | Persistent, full-duplex communication channel       |
| **Socket.IO**          | Simplifies real-time communication                  |
| **Broadcasting**       | Send messages to all or specific clients            |
| **Rooms / Namespaces** | Logical separation for scalable structure           |
| **Authentication**     | Secure connections with tokens                      |
| **Scaling**            | Redis adapters, sticky sessions, and load balancing |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
