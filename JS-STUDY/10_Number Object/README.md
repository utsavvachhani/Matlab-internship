
---

# 🧮 10. JavaScript Number Object

The **Number object** in JavaScript is a wrapper around the numeric values. It allows you to work with numbers and provides useful **properties** and **methods** to perform numeric operations easily.

---

## 🔹 Creating Numbers

Numbers in JavaScript can be created in two ways:

```javascript
// Using number literal
let num1 = 25;

// Using Number object
let num2 = new Number(25);

console.log(typeof num1); // "number"
console.log(typeof num2); // "object"
```

> ⚠️ It's recommended to use **number literals** instead of `new Number()` because the latter creates an object, not a primitive number.

---

## 🔸 Number Properties

| Property                     | Description                                            | Example                                  |
| ---------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| **Number.MAX_VALUE**         | The largest possible number in JavaScript (~1.79e+308) | `console.log(Number.MAX_VALUE);`         |
| **Number.MIN_VALUE**         | The smallest positive number (~5e-324)                 | `console.log(Number.MIN_VALUE);`         |
| **Number.NaN**               | Represents a “Not-a-Number” value                      | `console.log(Number.NaN);`               |
| **Number.POSITIVE_INFINITY** | Represents positive infinity                           | `console.log(Number.POSITIVE_INFINITY);` |
| **Number.NEGATIVE_INFINITY** | Represents negative infinity                           | `console.log(Number.NEGATIVE_INFINITY);` |

---

## 🔹 Number Methods

### 1. **toFixed()**

Rounds a number to a fixed number of decimal places (returns a string).

```javascript
let x = 12.3456;
console.log(x.toFixed(2)); // "12.35"
```

---

### 2. **toPrecision()**

Formats a number to a specified total number of digits.

```javascript
let num = 123.456;
console.log(num.toPrecision(4)); // "123.5"
```

---

### 3. **Number()**

Converts a valid value to a number.

```javascript
console.log(Number("25"));     // 25
console.log(Number("25abc"));  // NaN
console.log(Number(true));     // 1
console.log(Number(false));    // 0
```

---

### 4. **parseInt()**

Parses a string and returns an integer.

```javascript
console.log(parseInt("25.99"));   // 25
console.log(parseInt("100px"));   // 100
```

---

### 5. **parseFloat()**

Parses a string and returns a floating-point number.

```javascript
console.log(parseFloat("25.99"));   // 25.99
console.log(parseFloat("3.14abc")); // 3.14
```

---

### 6. **isNaN()**

Checks if a value is **Not-a-Number**.

```javascript
console.log(isNaN("Hello"));  // true
console.log(isNaN(123));      // false
```

---

### 7. **isFinite()**

Checks if a value is a finite number.

```javascript
console.log(isFinite(100));     // true
console.log(isFinite(Infinity)); // false
console.log(isFinite("50"));     // true
console.log(isFinite("abc"));    // false
```

---

## 🧠 Summary Table

| Method / Property          | Description                  | Example                            |
| -------------------------- | ---------------------------- | ---------------------------------- |
| `toFixed(n)`               | Rounds to n decimal places   | `3.14159.toFixed(2)` → "3.14"      |
| `toPrecision(n)`           | Formats to n total digits    | `123.456.toPrecision(4)` → "123.5" |
| `Number(value)`            | Converts to number           | `Number("25")` → 25                |
| `parseInt(value)`          | Extracts integer from string | `parseInt("12px")` → 12            |
| `parseFloat(value)`        | Extracts decimal from string | `parseFloat("12.34m")` → 12.34     |
| `isNaN(value)`             | Checks for NaN               | `isNaN("abc")` → true              |
| `isFinite(value)`          | Checks if number is finite   | `isFinite(100)` → true             |
| `Number.MAX_VALUE`         | Max possible number          | `1.7976931348623157e+308`          |
| `Number.MIN_VALUE`         | Min positive number          | `5e-324`                           |
| `Number.NaN`               | Not a number                 | `NaN`                              |
| `Number.POSITIVE_INFINITY` | Positive infinity            | `Infinity`                         |
| `Number.NEGATIVE_INFINITY` | Negative infinity            | `-Infinity`                        |

---

## 🧩 Example Program

```javascript
let a = 123.456;

console.log("Fixed (2):", a.toFixed(2));
console.log("Precision (4):", a.toPrecision(4));
console.log("Parsed Int:", parseInt("45.67"));
console.log("Parsed Float:", parseFloat("45.67abc"));
console.log("Is NaN:", isNaN("abc"));
console.log("Is Finite:", isFinite(12345));
```

**Output:**

```
Fixed (2): 123.46
Precision (4): 123.5
Parsed Int: 45
Parsed Float: 45.67
Is NaN: true
Is Finite: true
```


---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
