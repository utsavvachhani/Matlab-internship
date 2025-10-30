# 🌐 21. Server State & Data Fetching

---

## 📘 Overview

Unlike client state (which lives inside components), **server state** comes from external sources — like APIs or databases.
Managing server state efficiently ensures smooth UI updates, fast data fetching, and consistent user experiences.

In React, we can manage server state using:

* **Fetch API / Axios**
* **React Query (TanStack Query)**
* **SWR (by Vercel)**

---

## ⚙️ Fetch API / Axios

### 🔹 Fetch API

The **Fetch API** is a built-in browser feature used to make network requests.

```jsx
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

✅ **Pros:**

* Native and simple for small use-cases.
* No external library required.

❌ **Cons:**

* Manual error/loading handling.
* No built-in caching or revalidation.

---

### 🔹 Axios

**Axios** is a popular library for HTTP requests, offering better syntax and error handling than Fetch.

📦 **Install:**

```bash
npm install axios
```

```jsx
import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {posts.slice(0, 5).map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
```

✅ **Pros:**

* Supports interceptors, cancel tokens, and custom configs.
* Automatically parses JSON.

---

## ⚡ React Query (TanStack Query)

**React Query** (now called **TanStack Query**) is the most popular tool for managing server state in React.

📦 **Install:**

```bash
npm install @tanstack/react-query
```

---

### ⚙️ Basic Setup

```jsx
import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

function FetchUsers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchUsers />
    </QueryClientProvider>
  );
}
```

✅ **Features:**

* Automatic caching & re-fetching.
* Background updates.
* Pagination and infinite scroll support.
* Mutation handling for POST/PUT/DELETE requests.

---

### 🔄 Mutations Example

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser) => axios.post("/api/users", newUser),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  return (
    <button onClick={() => mutation.mutate({ name: "John Doe" })}>
      Add User
    </button>
  );
}
```

✅ Automatically **invalidates old data** and **refetches** the updated list.

---

## 🔁 SWR (by Vercel)

**SWR** stands for “**stale-while-revalidate**” — a caching strategy that returns cached data immediately while revalidating in the background.

📦 **Install:**

```bash
npm install swr
```

---

### ⚙️ Example: Using SWR

```jsx
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function UsersSWR() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default UsersSWR;
```

✅ **SWR Features:**

* Auto revalidation on focus.
* Built-in caching.
* Works seamlessly with Fetch or Axios.

---

## 💾 Caching & Revalidation

Caching improves performance by reducing redundant network requests.
Revalidation ensures cached data stays **fresh** and **accurate**.

### React Query & SWR handle caching automatically:

* **Cache Time:** Data remains in memory for a specific period.
* **Stale Time:** Determines when data is considered “outdated.”
* **Revalidation:** Automatically fetches new data in the background.

**Example:**

```js
useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
  staleTime: 5000, // data considered fresh for 5s
  cacheTime: 10000 // cached for 10s after unmount
});
```

---

## 🧠 Summary Table

| Feature               | **Fetch / Axios** | **React Query**       | **SWR**             |
| --------------------- | ----------------- | --------------------- | ------------------- |
| **Setup**             | Manual            | Easy                  | Easy                |
| **Caching**           | ❌ Manual          | ✅ Automatic           | ✅ Automatic         |
| **Revalidation**      | ❌ Manual          | ✅ Background Re-fetch | ✅ On Focus          |
| **Error Handling**    | Manual            | Built-in              | Built-in            |
| **Mutations Support** | Partial           | ✅ Full                | Partial             |
| **Best For**          | Simple APIs       | Complex data-fetching | Lightweight caching |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)