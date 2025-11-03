# ⚙️ **30. Message Queues**

📘 **Docs & References:**

* [Redis Official Docs](https://redis.io/docs/latest/develop/)
* [Bull Queue GitHub](https://github.com/OptimalBits/bull)
* [BullMQ Docs](https://docs.bullmq.io/)
* [RabbitMQ vs Redis Comparison](https://www.rabbitmq.com/tutorials)

---

## 🧠 **Overview**

A **Message Queue** helps in managing asynchronous tasks by sending messages between different parts of an application.
It allows **decoupled**, **scalable**, and **resilient** system design.

💡 **Example:** When a user uploads a file, instead of processing it immediately, you can queue the task and process it in the background.

---

## 🔹 **1. Redis for Queuing**

**Redis** (Remote Dictionary Server) is an **in-memory data store** often used as a **message broker** for queues.

### 🧩 **Common Use Cases**

* Sending emails in background
* Processing images or reports
* Managing delayed or retryable jobs
* Handling notifications and event processing

---

### ⚙️ **Setup Redis**

```bash
# Install Redis on local machine (Windows/Linux)
sudo apt install redis-server

# Start Redis
redis-server
```

Then install the Redis client:

```bash
npm install redis
```

### Example: **Basic Producer & Consumer**

```js
import { createClient } from "redis";

// Producer
const publisher = createClient();
publisher.connect();

async function addTask() {
  await publisher.lPush("taskQueue", JSON.stringify({ id: 1, action: "sendEmail" }));
  console.log("Task added to queue");
}
addTask();

// Consumer
const subscriber = createClient();
subscriber.connect();

async function processTasks() {
  while (true) {
    const task = await subscriber.brPop("taskQueue", 0);
    console.log("Processing task:", JSON.parse(task.element));
  }
}
processTasks();
```

✅ **Explanation:**

* `lPush()` → Adds task to queue
* `brPop()` → Waits for and retrieves a task from the queue

---

## 🔹 **2. Job Processing**

Instead of managing queues manually, we can use **Bull** or **BullMQ**, built on Redis for **job scheduling and retries**.

### Install Bull

```bash
npm install bull
```

### Example: **Bull Job Queue**

```js
import Queue from "bull";

const emailQueue = new Queue("emailQueue", "redis://127.0.0.1:6379");

// Producer — Add job
emailQueue.add({ to: "user@example.com", subject: "Welcome!", body: "Hello Utsav!" });

// Consumer — Process job
emailQueue.process(async (job) => {
  console.log("Sending email to:", job.data.to);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate delay
  console.log("Email sent successfully!");
});
```

🧩 **Features of Bull/BullMQ**

* Job retries and delay support
* Priority queues
* Concurrency control
* Event-based (completed, failed, etc.)
* Cron jobs / scheduled tasks

---

## 🔹 **3. Background Tasks**

**Background tasks** are jobs that run **outside the main request-response cycle** to improve performance.

### ⚙️ Example: Send Email in Background

Instead of doing this in API response:

```js
app.post("/register", (req, res) => {
  sendWelcomeEmail(req.body.email); // ❌ Blocks response
  res.send("User registered");
});
```

✅ Use Queue instead:

```js
app.post("/register", async (req, res) => {
  await emailQueue.add({ email: req.body.email });
  res.send("User registered — email will be sent shortly!");
});
```

This approach makes the API **faster** and **non-blocking**.

---

## 🧩 **Popular Message Queuing Tools**

| Tool                         | Description                 | Best For                            |
| ---------------------------- | --------------------------- | ----------------------------------- |
| **Redis (with Bull/BullMQ)** | Simple, fast, lightweight   | Background jobs, small apps         |
| **RabbitMQ**                 | Advanced message broker     | Enterprise-grade, pub/sub           |
| **Kafka**                    | Distributed event streaming | Real-time analytics, event sourcing |
| **AWS SQS**                  | Cloud-based queue           | Scalable microservices in AWS       |

---

## ✅ **Key Takeaways**

| Concept              | Description                                         |
| -------------------- | --------------------------------------------------- |
| **Message Queue**    | Enables asynchronous communication between services |
| **Redis**            | In-memory data store used as a message broker       |
| **Bull/BullMQ**      | High-level libraries for queue and job management   |
| **Background Tasks** | Offload heavy or slow tasks to separate workers     |
| **Scalability**      | Message queues improve system resilience and speed  |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
