
# 🔍15.  JavaScript Regular Expressions (RegEx)

Regular Expressions (RegEx) are powerful tools for matching, searching, and manipulating text patterns in strings.
They are widely used in **validation**, **searching**, **parsing**, and **data cleaning** tasks.

---

## 🔹 1. Creating Regular Expressions

You can create a regular expression in **two ways**:

### ✅ **1. Literal Syntax**

```js
const regex = /hello/;
```

### ✅ **2. Constructor Function**

```js
const regex = new RegExp("hello");
```

Both expressions above match the word `"hello"` in a string.

### Example:

```js
const text = "Hello world";
const pattern = /hello/i; // 'i' makes it case-insensitive
console.log(pattern.test(text)); // true
```

---

## 🔹 2. RegEx Methods

### **1. test()**

Returns `true` if a match is found, otherwise `false`.

```js
const pattern = /code/;
console.log(pattern.test("Learn code daily")); // true
```

---

### **2. match()**

Returns an array of matches or `null` if no match is found.

```js
const str = "I love JavaScript and JavaScript loves me!";
console.log(str.match(/JavaScript/g)); // ['JavaScript', 'JavaScript']
```

---

### **3. replace()**

Replaces matched text with another string.

```js
const str = "I like JavaScript";
const result = str.replace(/JavaScript/, "Python");
console.log(result); // I like Python
```

---

### **4. search()**

Returns the **index** of the first match or `-1` if not found.

```js
const str = "JavaScript is awesome";
console.log(str.search(/script/i)); // 4
```

---

## 🔹 3. RegEx Flags

| Flag | Description                    |
| ---- | ------------------------------ |
| `g`  | Global — find all matches      |
| `i`  | Case-insensitive match         |
| `m`  | Multiline — match across lines |

### Example:

```js
const text = "JS is cool. js is fun.";
const regex = /js/gi;
console.log(text.match(regex)); // ['JS', 'js']
```

---

## 🔹 4. Common Patterns

| Pattern | Description                       | Example                                      |
| ------- | --------------------------------- | -------------------------------------------- |
| `\d`    | Digit (0–9)                       | `/\d+/` → matches `123`                      |
| `\w`    | Word character (A–Z, a–z, 0–9, _) | `/\w+/` → matches `Hello123`                 |
| `\s`    | Whitespace (space, tab)           | `/\s+/` → matches spaces                     |
| `.`     | Any character except newline      | `/h.t/` → matches `hat`, `hit`               |
| `\b`    | Word boundary                     | `/\bcat\b/` matches `cat` but not `category` |

---

## 🔹 5. Character Classes

Character classes let you define a set of characters to match.

| Pattern    | Meaning                                  | Example                          |
| ---------- | ---------------------------------------- | -------------------------------- |
| `[abc]`    | Match `a`, `b`, or `c`                   | `/[abc]/` → matches `bat`, `cat` |
| `[^abc]`   | Match anything *except* `a`, `b`, or `c` | `/[^abc]/`                       |
| `[0-9]`    | Match any digit                          | `/[0-9]/`                        |
| `[A-Z]`    | Match uppercase letters                  | `/[A-Z]/`                        |
| `[a-zA-Z]` | Match any letter                         | `/[a-zA-Z]/`                     |

---

## 🔹 6. Quantifiers

Quantifiers specify **how many times** a character or pattern should appear.

| Quantifier | Meaning                   | Example                    |
| ---------- | ------------------------- | -------------------------- |
| `*`        | 0 or more times           | `/go*/` → `g`, `go`, `goo` |
| `+`        | 1 or more times           | `/go+/` → `go`, `goo`      |
| `?`        | 0 or 1 time               | `/go?/` → `g`, `go`        |
| `{n}`      | Exactly `n` times         | `/\d{3}/` → `123`          |
| `{n,}`     | At least `n` times        | `/\d{2,}/` → `12`, `12345` |
| `{n,m}`    | Between `n` and `m` times | `/\d{2,4}/` → `12`, `1234` |

---

## 🔹 7. Anchors

Anchors are used to match **positions** in a string rather than actual characters.

| Anchor | Description       | Example                                     |
| ------ | ----------------- | ------------------------------------------- |
| `^`    | Start of string   | `/^Hello/` matches `Hello world`            |
| `$`    | End of string     | `/world$/` matches `Hello world`            |
| `\b`   | Word boundary     | `/\bcat\b/` matches `cat` but not `catalog` |
| `\B`   | Non-word boundary | `/\Bcat\B/`                                 |

---

## 🧠 Example Summary

```js
const regex = /^\d{3}-\d{2}-\d{4}$/;
console.log(regex.test("123-45-6789")); // true
console.log(regex.test("1234-56-789")); // false
```

✅ This regex checks if a string follows the pattern `XXX-XX-XXXX` (like a U.S. Social Security number).

---

## 🧩 Summary Table

| Concept               | Purpose                        |
| --------------------- | ------------------------------ |
| `test()`              | Check for a match (true/false) |
| `match()`             | Return all matches             |
| `replace()`           | Replace matched text           |
| `search()`            | Return first match index       |
| Flags (`g`, `i`, `m`) | Modify search behavior         |
| Character Classes     | Match groups of characters     |
| Quantifiers           | Control repetition             |
| Anchors               | Match start or end positions   |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
