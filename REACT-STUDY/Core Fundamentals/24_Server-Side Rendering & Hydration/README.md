# ⚡ 24. Server-Side Rendering & Hydration

---

## 📘 Overview

**Server-Side Rendering (SSR)** is a technique where React components are **rendered on the server** and sent to the client as **fully formed HTML**.
Once the page loads in the browser, React **hydrates** the static HTML — making it interactive.

SSR improves **performance**, **SEO**, and **initial page load speed**, especially for content-heavy or public-facing applications.

---

## 🔹 Principles of SSR

### 🧠 What Happens in SSR

1. **Server renders** React components to HTML.
2. **Browser receives** fully rendered HTML.
3. **React reattaches (hydrates)** event listeners on the client side to make the page interactive.

### ⚙️ Example Flow

```jsx
// Server-side (Node.js or Next.js)
import { renderToString } from "react-dom/server";
import App from "./App";

const html = renderToString(<App />);
res.send(`<html><body><div id="root">${html}</div></body></html>`);
```

Then, on the client:

```jsx
import { hydrateRoot } from "react-dom/client";
import App from "./App";

hydrateRoot(document.getElementById("root"), <App />);
```

✅ **Benefits of SSR:**

* Better **SEO** (search engines can read pre-rendered HTML).
* Faster **initial render** for users.
* Ideal for **content-driven** or **dynamic** pages (e.g., blogs, e-commerce).

---

## 🔹 Next.js Pages & App Router

Next.js is the most popular framework for implementing **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** in React.

It provides two main routing systems:

### 🧩 1. **Pages Router (Pre Next.js 13)**

Each file inside the `/pages` directory automatically becomes a route.

```jsx
// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}
```

### 🧭 2. **App Router (Next.js 13+)**

Uses the `/app` directory — built with **React Server Components (RSC)** for better performance and flexibility.

```jsx
// app/page.js
export default function Home() {
  return <h1>Home Page - Server Component</h1>;
}
```

💡 The **App Router** uses **server and client components**:

* **Server Components:** Render on the server (default).
* **Client Components:** Declared with `"use client"` and handle interactivity.

---

## 🔹 Data Fetching

Next.js provides special functions for data fetching depending on rendering type.

### ⚙️ 1. `getServerSideProps()` → **Server-Side Rendering**

Runs **on every request**. Data is fetched and rendered on the server.

```jsx
// pages/products.js
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return { props: { products } };
}

export default function Products({ products }) {
  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}
```

✅ Always fresh data.
❌ Slower response (fetches data on each request).

---

### ⚙️ 2. `getStaticProps()` → **Static Site Generation (SSG)**

Runs **at build time** — pre-renders pages as static HTML.

```jsx
// pages/blog.js
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
```

✅ Very fast page load.
❌ Data becomes outdated unless revalidated.

---

### ⚙️ 3. `getStaticPaths()` → For **Dynamic Routes**

Used with `getStaticProps()` to pre-render dynamic routes.

```jsx
export async function getStaticPaths() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  const paths = posts.map(post => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: false };
}
```

---

## 🔹 Streaming & React Server Components

### 🧩 Streaming

Streaming allows React to **send HTML in chunks** instead of waiting for the entire page to render before sending anything.

This improves **Time to First Byte (TTFB)** and makes SSR even faster.

```jsx
import { renderToPipeableStream } from "react-dom/server";

function handleRequest(req, res) {
  const stream = renderToPipeableStream(<App />, {
    onShellReady() {
      res.statusCode = 200;
      stream.pipe(res);
    },
  });
}
```

### 🧠 React Server Components (RSC)

* Introduced in **React 18** and heavily used in **Next.js App Router**.
* Allow React components to **run entirely on the server**, fetching data directly without sending extra JavaScript to the client.
* Great for performance because the browser doesn’t need to download, parse, or execute as much code.

```jsx
// app/page.js (Server Component by default)
export default async function Page() {
  const data = await fetch("https://api.example.com/posts").then(r => r.json());
  return <div>{data.map(d => <p key={d.id}>{d.title}</p>)}</div>;
}
```

💡 Combine **Server Components** + **Streaming** for ultra-fast SSR experiences.

---

## 🔍 Summary

| **Concept**    | **Description**                               | **Example / Feature**      |
| -------------- | --------------------------------------------- | -------------------------- |
| **SSR**        | Render HTML on the server                     | `getServerSideProps`       |
| **Hydration**  | Attach React events on client                 | `hydrateRoot()`            |
| **SSG**        | Pre-render HTML at build time                 | `getStaticProps`           |
| **App Router** | New Next.js routing (React Server Components) | `/app` directory           |
| **Streaming**  | Send HTML chunks as they render               | `renderToPipeableStream()` |
| **RSC**        | Server-only components with data fetching     | Default in App Router      |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
