# ⚡ 31. Progressive Web Apps (PWA)

---

## 📘 Overview

**Progressive Web Apps (PWAs)** bring native app-like experiences to web users — combining the best of **web performance**, **offline capabilities**, and **installability**.

React projects (especially those created with **CRA** or **Vite**) can easily be turned into PWAs using **Service Workers** and **manifest files**.

---

## 🔹 What is a PWA?

A **Progressive Web App** is a web application that:

* Can work **offline** or with **poor network**.
* Is **installable** on the user’s device.
* Loads **fast** and uses **caching** for assets and data.
* Offers **push notifications** and **background sync**.

---

## 🔹 Key PWA Components

1️⃣ **Service Worker** — A background script that intercepts network requests and manages caching.
2️⃣ **Web App Manifest** — A JSON file that defines app metadata (icons, colors, name).
3️⃣ **HTTPS** — Required for security and service worker registration.

---

## 🧠 1. Service Workers with CRA / Vite

### 🧩 With Create React App (CRA)

If you created your React app with CRA, it comes with built-in **service worker support** via the `registerServiceWorker` setup.

#### ✅ Step 1: Enable Service Worker

In `index.js`, change the default registration line:

```js
// Default
serviceWorker.unregister();

// Change to:
serviceWorker.register();
```

#### ✅ Step 2: File Location

You’ll find the file at:

```
src/service-worker.js
```

You can modify this file to customize caching behavior (like precaching assets or API data).

#### ✅ Step 3: Example Caching Code

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll(["/", "/index.html", "/styles.css", "/app.js"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

✅ This ensures that when the user is offline, cached files are served instead of fetching from the network.

---

### 🧩 With Vite

Vite doesn’t have built-in PWA support, but you can add it with a plugin.

#### ✅ Step 1: Install Plugin

```bash
npm install vite-plugin-pwa --save-dev
```

#### ✅ Step 2: Update `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My React PWA",
        short_name: "ReactPWA",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
```

#### ✅ Step 3: Run Build

```bash
npm run build
npm run preview
```

Now your app will automatically register a **service worker**, show **install prompts**, and cache pages offline.

---

## 🔹 2. Offline Strategies

To make your PWA handle network issues efficiently, you can apply different **offline caching strategies**:

### 1️⃣ **Cache First**

* Serve assets from cache first, fallback to network.
* Ideal for static resources (images, CSS, JS).

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    })
  );
});
```

---

### 2️⃣ **Network First**

* Try network first, fallback to cache if offline.
* Good for dynamic data (API calls, content).

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open("dynamic-cache").then((cache) => {
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
```

---

### 3️⃣ **Stale-While-Revalidate**

* Serve cached content immediately, but fetch new data in background to update cache.

This provides **instant loading** while keeping data **fresh**.

---

## 🧩 Example Offline UI

```jsx
function OfflineNotice() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <p>✅ You are online!</p>
      ) : (
        <p style={{ color: "red" }}>⚠️ You are offline. Some features may not work.</p>
      )}
    </div>
  );
}

export default OfflineNotice;
```

---

## 🧠 Benefits of PWAs

✅ Works Offline
✅ Installable on Devices
✅ Faster Load Time
✅ Better User Retention
✅ Push Notifications Support

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
