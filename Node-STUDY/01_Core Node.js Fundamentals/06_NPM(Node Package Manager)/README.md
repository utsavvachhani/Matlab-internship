# 📦 **6. NPM (Node Package Manager)**

📺 **YouTube:** [Node.js NPM Crash Course – Traversy Media](https://www.youtube.com/watch?v=jHDhaSSKmB0)
📖 **Docs:** [NPM Official Documentation](https://docs.npmjs.com/)

---

## 🧠 **Overview**

**NPM (Node Package Manager)** is the default package manager for Node.js.
It helps developers **install**, **share**, and **manage** open-source packages (modules) that extend the functionality of Node.js applications.

When you install Node.js, **npm** automatically comes with it.

---

## 📘 **1. package.json Structure**

The **`package.json`** file is the heart of every Node.js project — it holds metadata, dependencies, and scripts.

### Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "author": "Utsav Vachhani",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

🧠 **Create package.json:**

```bash
npm init
```

or

```bash
npm init -y   # Automatically fills default values
```

---

## 📦 **2. Installing Dependencies**

Install packages to your project using:

```bash
npm install express
```

This command:

* Adds **express** to your project.
* Saves it automatically under `"dependencies"` in `package.json`.
* Creates a **node_modules/** folder and **package-lock.json**.

### Installing multiple:

```bash
npm install express mongoose cors dotenv
```

### Installing a specific version:

```bash
npm install express@4.18.2
```

---

## 🧑‍💻 **3. Development vs Production Dependencies**

* **Dependencies (`dependencies`)**
  → Required for running the app in production.

  ```bash
  npm install express
  ```

* **Dev Dependencies (`devDependencies`)**
  → Needed only for development (e.g., testing, compiling).

  ```bash
  npm install nodemon --save-dev
  ```

📁 These are saved in separate sections in `package.json`.

---

## 🏃 **4. NPM Scripts**

NPM allows you to define custom commands inside the `scripts` section.

### Example:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "test": "jest"
}
```

### Run Scripts:

```bash
npm start
npm run dev
npm run test
```

🧠 You can name scripts anything — `npm run build`, `npm run lint`, etc.

---

## 🔢 **5. Semantic Versioning**

NPM follows **Semantic Versioning (SemVer)**:
`MAJOR.MINOR.PATCH`

Example:
`"express": "^4.18.2"`

| Symbol    | Meaning                                 | Example                  |
| --------- | --------------------------------------- | ------------------------ |
| `^`       | Compatible updates (same major version) | `^4.18.2` → any `4.x.x`  |
| `~`       | Minor updates only                      | `~4.18.2` → any `4.18.x` |
| No symbol | Exact version only                      | `4.18.2`                 |

🧠

* `MAJOR`: Breaking changes
* `MINOR`: New features (no breaking changes)
* `PATCH`: Bug fixes

---

## 🔐 **6. Package Lock File**

The **`package-lock.json`** file is automatically created when installing dependencies.

It:

* Records the exact version of every installed package.
* Ensures consistent installs across different systems.
* Should always be **committed to Git**.

🧠 If `package.json` says `"express": "^4.18.2"` but lock file has `"4.18.2"`, then that exact version will install every time.

---

## 🧩 **7. Common NPM Commands**

| Command                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `npm init`                | Create a package.json file                            |
| `npm install`             | Install all dependencies from package.json            |
| `npm install <pkg>`       | Install a specific package                            |
| `npm uninstall <pkg>`     | Remove a package                                      |
| `npm update`              | Update packages                                       |
| `npm list`                | List installed packages                               |
| `npm outdated`            | Check for outdated packages                           |
| `npm run <script>`        | Run a custom script                                   |
| `npm ci`                  | Clean install using package-lock.json (used in CI/CD) |
| `npm cache clean --force` | Clear NPM cache                                       |
| `npm audit`               | Scan for security vulnerabilities                     |

---

## ⚔️ **8. NPM vs Yarn**

| Feature         | **NPM**             | **Yarn**                        |
| --------------- | ------------------- | ------------------------------- |
| Developer       | Node.js team        | Facebook                        |
| Lock file       | `package-lock.json` | `yarn.lock`                     |
| Speed           | Slower (before v7)  | Faster due to parallel installs |
| Offline mode    | Limited             | Strong offline caching          |
| Workspaces      | Supported (v7+)     | Supported earlier               |
| Command Example | `npm install`       | `yarn add`                      |

🧠
Yarn is great for **monorepos** and offline usage, but NPM has improved greatly in recent versions.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
