
# 🕓 9. JavaScript Date Object

The **Date object** in JavaScript is used to **work with dates and times**.  
It provides methods to **create, read, and modify** date and time values easily.

---

## 🧩 Creating Dates

You can create date objects in several ways:

```js
// Current date and time
const now = new Date();
console.log(now);

// Specific date (YYYY, MM, DD)
const date1 = new Date(2025, 0, 10); // January 10, 2025
console.log(date1);

// Specific date and time
const date2 = new Date(2025, 0, 10, 14, 30, 0);
console.log(date2);

// Using date string
const date3 = new Date("2025-10-10T12:00:00");
console.log(date3);

// Using timestamp (milliseconds since Jan 1, 1970)
const date4 = new Date(1696929600000);
console.log(date4);
````

---

## 🧠 Date Get Methods

| Method          | Description                        | Example              |
| --------------- | ---------------------------------- | -------------------- |
| `getDate()`     | Returns day of the month (1–31)    | `date.getDate()`     |
| `getMonth()`    | Returns month (0–11, Jan = 0)      | `date.getMonth()`    |
| `getFullYear()` | Returns 4-digit year               | `date.getFullYear()` |
| `getDay()`      | Returns day of week (0–6, Sun = 0) | `date.getDay()`      |
| `getHours()`    | Returns hour (0–23)                | `date.getHours()`    |
| `getMinutes()`  | Returns minutes (0–59)             | `date.getMinutes()`  |
| `getSeconds()`  | Returns seconds (0–59)             | `date.getSeconds()`  |

**Example:**

```js
const d = new Date();
console.log(d.getFullYear()); // e.g., 2025
console.log(d.getMonth());    // e.g., 9 (October)
console.log(d.getDate());     // e.g., 10
console.log(d.getDay());      // e.g., 5 (Friday)
```

---

## 🧮 Date Set Methods

| Method              | Description       | Example                   |
| ------------------- | ----------------- | ------------------------- |
| `setDate(day)`      | Sets day of month | `d.setDate(15)`           |
| `setMonth(month)`   | Sets month (0–11) | `d.setMonth(0)` → January |
| `setFullYear(year)` | Sets full year    | `d.setFullYear(2030)`     |
| `setHours(hour)`    | Sets hour (0–23)  | `d.setHours(14)`          |
| `setMinutes(min)`   | Sets minutes      | `d.setMinutes(30)`        |

**Example:**

```js
let d = new Date();
d.setFullYear(2030);
d.setMonth(0);
d.setDate(1);
console.log(d.toDateString()); // Tue Jan 01 2030
```

---

## 🗓️ Date Formatting Methods

| Method                 | Description                  | Example                                          |
| ---------------------- | ---------------------------- | ------------------------------------------------ |
| `toDateString()`       | Returns readable date string | `d.toDateString()` → `"Fri Oct 10 2025"`         |
| `toLocaleDateString()` | Returns localized date       | `d.toLocaleDateString()` → `"10/10/2025"`        |
| `toISOString()`        | Returns ISO format string    | `d.toISOString()` → `"2025-10-10T07:00:00.000Z"` |

**Example:**

```js
const d = new Date();
console.log(d.toDateString());
console.log(d.toLocaleDateString());
```

---

## ⏱️ Time Methods

| Method       | Description                              | Example       |
| ------------ | ---------------------------------------- | ------------- |
| `getTime()`  | Returns timestamp (ms since Jan 1, 1970) | `d.getTime()` |
| `Date.now()` | Returns current timestamp                | `Date.now()`  |

**Example:**

```js
const now = new Date();
console.log(now.getTime());
console.log(Date.now());
```

🧮 You can use this to calculate time differences:

```js
const start = Date.now();
// ... some operation
const end = Date.now();
console.log(`Execution Time: ${end - start} ms`);
```

---

## 📆 Summary Diagram

```
JavaScript Date Object
│
├── Creation
│   ├── new Date()
│   ├── new Date(year, month, day, ...)
│   ├── new Date("YYYY-MM-DD")
│   └── new Date(milliseconds)
│
├── Get Methods
│   ├── getDate()
│   ├── getMonth()
│   ├── getFullYear()
│   ├── getDay()
│   ├── getHours(), getMinutes(), getSeconds()
│
├── Set Methods
│   ├── setDate()
│   ├── setMonth()
│   ├── setFullYear()
│   ├── setHours(), setMinutes()
│
├── Format
│   ├── toDateString()
│   ├── toLocaleDateString()
│   └── toISOString()
│
└── Time
    ├── getTime()
    └── Date.now()
```

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)