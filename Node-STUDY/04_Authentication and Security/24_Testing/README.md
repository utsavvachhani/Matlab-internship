# ⚡ **24. Testing**

📘 **Docs & References:**

* [Jest Official Documentation](https://jestjs.io/docs/getting-started)
* [Node.js Assert Module](https://nodejs.org/api/assert.html)

---

## 🧠 **Overview**

Testing ensures your code behaves as expected.
In Node.js, **Jest** is one of the most popular testing frameworks due to its simplicity, built-in test runner, and mocking capabilities.

---

## 🔹 **1. What is Unit Testing?**

Unit testing involves testing **individual units or functions** of code to ensure they work correctly in isolation.

✅ **Benefits:**

* Detects bugs early
* Makes refactoring safer
* Increases code reliability and confidence

---

## 🔹 **2. Installing Jest**

Install Jest in your project:

```bash
npm install --save-dev jest
```

Then, update your `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Run all tests using:

```bash
npm test
```

---

## 🔹 **3. Writing a Simple Function**

Let’s create a simple function file `math.js`:

```js
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
```

---

## 🔹 **4. Writing Test Cases using Jest**

Create a test file `math.test.js` in the same folder:

```js
// math.test.js
const { add, subtract, multiply, divide } = require('./math');

test('adds two numbers correctly', () => {
  expect(add(3, 7)).toBe(10);
});

test('subtracts numbers correctly', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiplies numbers correctly', () => {
  expect(multiply(3, 5)).toBe(15);
});

test('divides numbers correctly', () => {
  expect(divide(20, 4)).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
```

---

## 🔹 **5. Running Tests**

Run:

```bash
npm test
```

✅ **Example Output:**

```
PASS  ./math.test.js
✓ adds two numbers correctly (3 ms)
✓ subtracts numbers correctly
✓ multiplies numbers correctly
✓ divides numbers correctly
✓ throws error when dividing by zero

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
```

---

## 🔹 **6. Jest Matchers**

| Matcher         | Description                    | Example                       |
| --------------- | ------------------------------ | ----------------------------- |
| `.toBe()`       | Strict equality                | `expect(a).toBe(b)`           |
| `.toEqual()`    | Deep equality (objects/arrays) | `expect(obj).toEqual({x: 1})` |
| `.toBeTruthy()` | Checks truthy value            | `expect(value).toBeTruthy()`  |
| `.toThrow()`    | Checks if error is thrown      | `expect(fn).toThrow()`        |

---

## 🔹 **7. Folder Structure Example**

```
project/
│
├── math.js
├── math.test.js
├── package.json
└── node_modules/
```

---

✅ **Summary**

| Step | Description                                      |
| ---- | ------------------------------------------------ |
| 1️⃣  | Install Jest using `npm install --save-dev jest` |
| 2️⃣  | Write your function (`math.js`)                  |
| 3️⃣  | Create test file (`math.test.js`)                |
| 4️⃣  | Use `test()` and `expect()` for assertions       |
| 5️⃣  | Run tests using `npm test`                       |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
