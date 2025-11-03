# ⚙️ **26. Build Tools and Development**

📘 **Docs & References:**

* [Nodemon Official Docs](https://nodemon.io/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)

---

## 🧠 **Overview**

During Node.js development, **build tools** help automate tasks, improve productivity, and maintain **code quality**.
This section covers essential tools like **Nodemon**, **ESLint**, and **Prettier**, along with **build scripts** for smoother workflows.

---

## 🔹 **1. Nodemon for Auto-Restart**

Nodemon automatically restarts your Node.js server whenever you make file changes — ideal for development.

### 🛠️ Installation

```bash
npm install --save-dev nodemon
```

### ▶️ Usage

In your `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Then run:

```bash
npm run dev
```

### ✅ Benefits

* Auto-restarts on file save
* Supports custom extensions (`.js`, `.ts`, `.json`)
* Can ignore specific folders (like `node_modules/`)

Example `nodemon.json` config:

```json
{
  "watch": ["src"],
  "ext": "js,json",
  "ignore": ["node_modules"],
  "exec": "node src/app.js"
}
```

---

## 🔹 **2. Build Scripts**

`npm` scripts let you automate tasks like linting, building, or testing your project.

### Example `package.json`

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

Run commands:

```bash
npm run lint
npm run format
```

You can chain scripts:

```json
"scripts": {
  "build": "npm run lint && npm run format && node build.js"
}
```

---

## 🔹 **3. Code Linting (ESLint)**

**ESLint** helps identify and fix syntax and style issues in JavaScript code.

### 🛠️ Installation

```bash
npm install --save-dev eslint
```

### ▶️ Initialize ESLint

```bash
npx eslint --init
```

Choose your preferences (module type, framework, and style guide).
This creates an `.eslintrc.json` config file.

### Example `.eslintrc.json`

```json
{
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-console": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

### Run ESLint

```bash
npx eslint .
```

To fix issues automatically:

```bash
npx eslint . --fix
```

---

## 🔹 **4. Code Formatting (Prettier)**

**Prettier** automatically formats your code for consistent styling across your project.

### 🛠️ Installation

```bash
npm install --save-dev prettier
```

### ▶️ Create a `.prettierrc` file

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Run Prettier

```bash
npx prettier --write .
```

---

## 💡 **Integrate ESLint + Prettier**

Install both integrations:

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Update `.eslintrc.json`:

```json
{
  "extends": ["eslint:recommended", "plugin:prettier/recommended"]
}
```

Now ESLint and Prettier work together — ESLint handles **errors**, Prettier handles **formatting**.

---

## ✅ **Best Practices**

| Tool            | Purpose                       | Benefit                |
| --------------- | ----------------------------- | ---------------------- |
| **Nodemon**     | Auto-restarts server          | Speeds up development  |
| **ESLint**      | Detects syntax & logic errors | Ensures code quality   |
| **Prettier**    | Formats code automatically    | Keeps consistent style |
| **NPM Scripts** | Automates workflows           | Reduces manual effort  |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
