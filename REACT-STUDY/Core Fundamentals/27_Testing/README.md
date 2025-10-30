# 🧪 27. Testing

---

## 📘 Overview

Testing ensures your **React components and logic** work correctly before deploying to production.
It helps prevent bugs, improves code reliability, and gives confidence when refactoring.

React supports multiple testing layers:

* **Unit Testing** → small pieces of logic (functions, components).
* **Integration Testing** → components working together.
* **End-to-End (E2E)** → full user flow in the browser.

---

## 🔹 Jest Basics

**Jest** is a popular testing framework created by **Meta (Facebook)**, mainly used for testing React and JavaScript applications.

It provides:
✅ Zero configuration setup
✅ Snapshot testing
✅ Mocking utilities

### ⚙️ Installation:

```bash
npm install --save-dev jest
```

Add to **package.json**:

```json
"scripts": {
  "test": "jest"
}
```

### 🧩 Example:

```jsx
// sum.js
export function sum(a, b) {
  return a + b;
}
```

```jsx
// sum.test.js
import { sum } from "./sum";

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
```

✅ Run tests:

```bash
npm test
```

---

## 🔹 React Testing Library (RTL)

**React Testing Library** focuses on testing **UI behavior** rather than component internals.
It encourages testing how users interact with the app — not the implementation details.

### ⚙️ Installation:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

### 🧩 Example:

```jsx
// Greeting.js
export default function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

```jsx
// Greeting.test.js
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting message", () => {
  render(<Greeting name="Utsav" />);
  expect(screen.getByText("Hello, Utsav!")).toBeInTheDocument();
});
```

✅ **Benefits:**

* Simulates real-world user interactions.
* Encourages writing maintainable tests.
* Built-in `@testing-library/jest-dom` for custom DOM matchers.

---

## 🔹 Snapshot Testing

Snapshot testing checks whether the **UI output changes unexpectedly**.
When you run snapshot tests, Jest saves a snapshot of the rendered component.

### 🧩 Example:

```jsx
import React from "react";
import renderer from "react-test-renderer";
import Greeting from "./Greeting";

test("matches the snapshot", () => {
  const tree = renderer.create(<Greeting name="Utsav" />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

✅ **Benefits:**

* Quick way to detect unintended UI changes.
* Works well for static components.

❌ **Limitations:**

* Not ideal for dynamic or frequently changing UIs.

---

## 🔹 Enzyme (Legacy)

**Enzyme**, developed by Airbnb, was the primary React testing library before **RTL** became the standard.

### ⚙️ Installation:

```bash
npm install --save-dev enzyme enzyme-adapter-react-16
```

### 🧩 Example:

```jsx
import { shallow } from "enzyme";
import Greeting from "./Greeting";

test("renders name correctly", () => {
  const wrapper = shallow(<Greeting name="Utsav" />);
  expect(wrapper.text()).toContain("Utsav");
});
```

⚠️ **Note:** Enzyme is no longer recommended for React 18+.
Use **React Testing Library** for modern apps.

---

## 🔹 Cypress / Playwright (E2E Testing)

**Cypress** and **Playwright** are used for **end-to-end (E2E)** testing — simulating user interactions in a real browser.

### ⚙️ Cypress Installation:

```bash
npm install --save-dev cypress
```

### 🧩 Example (Cypress):

```js
// cypress/e2e/sample.cy.js
describe("Home Page Test", () => {
  it("should load the page and display a greeting", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hello, Utsav");
  });
});
```

✅ **Cypress Features:**

* Real browser automation.
* Visual test runner.
* Network stubbing and debugging tools.

---

### 🧩 Example (Playwright):

```bash
npm install --save-dev @playwright/test
```

```js
// tests/example.spec.js
import { test, expect } from "@playwright/test";

test("homepage has title and heading", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/React App/);
  await expect(page.getByRole("heading", { name: "Hello" })).toBeVisible();
});
```

✅ **Playwright Features:**

* Cross-browser testing (Chromium, Firefox, WebKit).
* Parallel test execution.
* Screenshot and video recording.

---

## 🧠 Summary

| **Testing Type**             | **Tool/Library**      | **Purpose**                         | **Recommended For** |
| ---------------------------- | --------------------- | ----------------------------------- | ------------------- |
| **Unit Testing**             | Jest                  | Test small functions/components     | Core logic          |
| **UI Testing**               | React Testing Library | Test rendered output & interactions | Component behavior  |
| **Snapshot Testing**         | Jest                  | Track UI changes                    | Visual consistency  |
| **Legacy Component Testing** | Enzyme                | Test internals (older React)        | React < 17 apps     |
| **E2E Testing**              | Cypress / Playwright  | Simulate real user flows            | Production-ready UI |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
