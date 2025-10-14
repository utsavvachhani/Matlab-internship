
# 🧵 8. JavaScript String Object

Strings in JavaScript are **sequences of characters** enclosed within single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ` ``).  
They are **immutable**, meaning once created, their values cannot be changed — but new strings can be created based on existing ones.

---

## 🔹 String Properties

| Property | Description | Example |
|-----------|--------------|----------|
| `length` | Returns the number of characters in a string | `"Hello".length // 5` |
| `constructor` | Returns the function that created the String object | `"Hi".constructor // ƒ String()` |

---

## 🔹 String Methods

---

### 🧩 Character Methods

| Method | Description | Example |
|---------|--------------|----------|
| `charAt(index)` | Returns the character at the given index | `"Hello".charAt(1)` → `e` |
| `charCodeAt(index)` | Returns the Unicode of the character | `"A".charCodeAt(0)` → `65` |

---

### 🔠 Case Conversion

| Method | Description | Example |
|---------|--------------|----------|
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` → `"HELLO"` |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` → `"hello"` |

---

### ✂️ Extracting Substrings

| Method | Description | Example |
|---------|--------------|----------|
| `slice(start, end)` | Extracts a section (supports negative index) | `"JavaScript".slice(0, 4)` → `"Java"` |
| `substring(start, end)` | Extracts between indexes (no negative values) | `"JavaScript".substring(0, 4)` → `"Java"` |
| `substr(start, length)` | Extracts given number of chars (deprecated) | `"JavaScript".substr(4, 6)` → `"Script"` |

---

### 🔍 Searching

| Method | Description | Example |
|---------|--------------|----------|
| `indexOf(substr)` | First occurrence index | `"hello world".indexOf("o")` → `4` |
| `lastIndexOf(substr)` | Last occurrence index | `"hello world".lastIndexOf("o")` → `7` |
| `includes(substr)` | Checks if substring exists | `"hello".includes("he")` → `true` |

---

### 🔁 Replace & Modify

| Method | Description | Example |
|---------|--------------|----------|
| `replace(old, new)` | Replaces first match | `"apple apple".replace("apple", "banana")` → `"banana apple"` |
| `replaceAll(old, new)` | Replaces all matches | `"apple apple".replaceAll("apple", "banana")` → `"banana banana"` |

---

### 🧹 Trimming

| Method | Description | Example |
|---------|--------------|----------|
| `trim()` | Removes spaces from both ends | `"  Hello  ".trim()` → `"Hello"` |
| `trimStart()` | Removes from start only | `"  Hello".trimStart()` → `"Hello"` |
| `trimEnd()` | Removes from end only | `"Hello  ".trimEnd()` → `"Hello"` |

---

### 🔗 Split, Repeat, Join

| Method | Description | Example |
|---------|--------------|----------|
| `split(separator)` | Splits into array by separator | `"a,b,c".split(",")` → `["a","b","c"]` |
| `repeat(n)` | Repeats string `n` times | `"Hi ".repeat(3)` → `"Hi Hi Hi "` |

---

### 🔎 Start / End Checking

| Method | Description | Example |
|---------|--------------|----------|
| `startsWith(value)` | Checks if string starts with value | `"JavaScript".startsWith("Java")` → `true` |
| `endsWith(value)` | Checks if string ends with value | `"JavaScript".endsWith("Script")` → `true` |

---

### 🔢 Padding

| Method | Description | Example |
|---------|--------------|----------|
| `padStart(length, char)` | Pads at the start | `"5".padStart(3, "0")` → `"005"` |
| `padEnd(length, char)` | Pads at the end | `"5".padEnd(3, "0")` → `"500"` |

---

## 🧮 Template Literals (Backticks `` ` ``)

Template literals provide an **easier way to embed variables and expressions** inside strings.  
They also allow **multiline strings** without using escape characters.

```js
const name = "Utsav";
const course = "JavaScript";
const message = `Hello ${name}, welcome to the ${course} study!`;
console.log(message); // Hello Utsav, welcome to the JavaScript study!
````

---

## 💡 String Interpolation (⭐ Very Important)

**String interpolation** is the process of embedding expressions or variables inside template literals.

```js
const a = 10;
const b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
// Output: The sum of 10 and 20 is 30
```

✅ Advantages:

* Easier to read and maintain
* Supports multiline strings
* Can evaluate expressions directly

---

## 🧠 Summary Diagram

```
JavaScript String Object
│
├── Properties
│   ├── length
│   └── constructor
│
├── Methods
│   ├── Character: charAt(), charCodeAt()
│   ├── Case: toUpperCase(), toLowerCase()
│   ├── Extract: slice(), substring(), substr()
│   ├── Search: indexOf(), lastIndexOf(), includes()
│   ├── Replace: replace(), replaceAll()
│   ├── Trim: trim(), trimStart(), trimEnd()
│   ├── Split & Repeat: split(), repeat()
│   ├── Check: startsWith(), endsWith()
│   └── Pad: padStart(), padEnd()
│
└── Advanced
    ├── Template Literals
    └── String Interpolation
```


---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)