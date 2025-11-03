# ⚙️ **31. Caching**

📘 **Docs & References:**

* [Redis Official Docs](https://redis.io/docs/latest/develop/)
* [Node.js Caching Guide](https://nodejs.dev/en/learn/how-to-use-caching-in-nodejs/)
* [Memory Cache (npm)](https://www.npmjs.com/package/node-cache)

---

## 🧠 **Overview**

**Caching** is the process of storing data temporarily so that future requests for that data can be served faster.
It improves **performance**, reduces **database load**, and enhances **user experience**.

---

## 🔹 **1. In-Memory Caching**

**In-memory caching** means storing data directly in the server’s memory (RAM).
It’s ideal for **small applications** or **temporary data** that needs to be accessed frequently.

---

### ⚙️ **Using `node-cache`**

Install:

```bash
npm install node-cache
```

Example:

```js
import NodeCache from "node-cache";
const cache = new NodeCache({ stdTTL: 60 }); // Cache expires after 60 seconds

// Set cache
cache.set("user_1", { name: "Utsav", age: 22 });

// Get cache
const user = cache.get("user_1");
console.log(user); // { name: "Utsav", age: 22 }

// Delete cache
cache.del("user_1");
```

---

### ✅ **Advantages**

* Super fast (in-memory)
* No external dependency
* Easy to implement

### ⚠️ **Limitations**

* Cache clears when server restarts
* Limited by available memory
* Not suitable for distributed systems (multi-server apps)

---

## 🔹 **2. Redis Caching**

**Redis** is an **in-memory data store** often used for **distributed caching**.
Unlike local caching, Redis can share cache data between **multiple servers**.

---

### ⚙️ **Setup Redis**

```bash
# Install Redis (Linux)
sudo apt install redis-server

# Start Redis
redis-server
```

Install Redis client for Node.js:

```bash
npm install redis
```

---

### Example: **Basic Redis Caching**

```js
import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient();

client.connect();

// Mock database call
async function fetchUserFromDB(id) {
  console.log("Fetching from database...");
  return { id, name: "Utsav", age: 22 };
}

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  // Check cache
  const cachedData = await client.get(`user:${id}`);
  if (cachedData) {
    return res.json({ source: "cache", data: JSON.parse(cachedData) });
  }

  // Fetch from "DB"
  const user = await fetchUserFromDB(id);

  // Store in cache (TTL = 60 seconds)
  await client.setEx(`user:${id}`, 60, JSON.stringify(user));

  res.json({ source: "database", data: user });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

🧩 **Explanation:**

* First checks if the data exists in Redis cache
* If found → returns cached data
* If not found → fetches from DB, caches it, and then returns

---

## 🔹 **When to Use Redis Caching**

✅ API responses that don’t change frequently
✅ Heavy database queries
✅ Session storage
✅ User profile data
✅ Search results

---

## 🧩 **Cache Expiration (TTL)**

TTL = **Time To Live** — defines how long data stays in cache before it expires.

Example:

```js
await client.setEx("user:101", 120, JSON.stringify({ name: "Meet" }));
```

⏱ This will store the cache for **120 seconds** only.

---

## 🔹 **Cache Invalidation**

When underlying data changes, cached data must be **invalidated** (removed/updated).

Strategies:

| Strategy                | Description                            |
| ----------------------- | -------------------------------------- |
| **Time-based (TTL)**    | Auto-remove data after a fixed time    |
| **Write-through**       | Update cache when database updates     |
| **Manual invalidation** | Manually clear cache when data changes |

Example (manual invalidation):

```js
await client.del("user:101");
```

---

## 🔹 **Performance Tip**

You can also combine both types:

* Use **in-memory cache** (NodeCache) for **ultra-fast short-term data**
* Use **Redis cache** for **shared, persistent caching across servers**

---

## ✅ **Key Takeaways**

| Concept                | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| **In-Memory Cache**    | Stores data in server RAM using libraries like `node-cache` |
| **Redis Cache**        | Distributed cache, shared among multiple servers            |
| **TTL (Time-To-Live)** | Automatic expiration of cached data                         |
| **Cache Invalidation** | Ensures data consistency after updates                      |
| **Performance Gain**   | Reduces DB calls, improves response time                    |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
