
# 🟨 JavaScript Fundamentals

This section covers the **core building blocks** of JavaScript — comments, variables, data types, and scoping rules — which form the foundation for all JS programs.

---

## 🗒️ 1. JavaScript Comments

Comments are used to explain code and make it more readable. They are ignored by the JavaScript engine.

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment
*/
````

---

## 🧩 2. JavaScript Keywords and Reserved Words

**Keywords** are special words that have predefined meanings in JavaScript.
They cannot be used as variable names, function names, or identifiers.

Examples:

```
break, case, catch, class, const, continue,
debugger, default, delete, do, else, export,
extends, finally, for, function, if, import,
let, new, return, super, switch, this, throw,
try, typeof, var, void, while, with, yield
```

> ⚠️ Using reserved words as variable names causes errors.

---

## 🔢 3. Data Types in JavaScript

JavaScript supports **two main categories** of data types:

| Type      | Category  | Example                |
| --------- | --------- | ---------------------- |
| String    | Primitive | `"Hello"`              |
| Number    | Primitive | `42`                   |
| Boolean   | Primitive | `true`                 |
| Undefined | Primitive | `let x;`               |
| Null      | Primitive | `let y = null;`        |
| Symbol    | Primitive | `Symbol('id')`         |
| BigInt    | Primitive | `1234567890123456789n` |
| Object    | Reference | `{ name: "Utsav" }`    |
| Array     | Reference | `[1, 2, 3]`            |
| Function  | Reference | `function(){}`         |

---

## ⚖️ 4. Value Types and Reference Types

* **Value Types (Primitive):** Stored directly in the stack memory.
  Example:

  ```javascript
  let a = 10;
  let b = a;
  b = 20;
  console.log(a); // 10 (remains unchanged)
  ```

* **Reference Types (Objects, Arrays, Functions):** Stored in heap memory, and variables hold a reference to that memory.

  ```javascript
  let obj1 = { name: "Utsav" };
  let obj2 = obj1;
  obj2.name = "Vachhani";
  console.log(obj1.name); // "Vachhani"
  ```

---

## 🧮 5. JavaScript Variables

Variables store data values that can be used and manipulated throughout your program.

Syntax:

```javascript
let name = "Utsav";
```

Naming Rules:

* Must begin with a letter, `_`, or `$`
* Case-sensitive (`Name` ≠ `name`)
* Cannot use reserved words

---

## 🔠 6. Types of Variables in JavaScript

JavaScript provides three main ways to declare variables:

1. `var` – Function-scoped
2. `let` – Block-scoped (introduced in ES6)
3. `const` – Block-scoped constant (cannot be reassigned)

---

## 📦 7. Variable Declaration (`var`, `let`, `const`)

```javascript
var a = 10;      // Function scoped
let b = 20;      // Block scoped
const c = 30;    // Constant, cannot be reassigned
```

> ✅ Best Practice: Use `let` and `const` instead of `var` for predictable scoping and fewer bugs.

---

## 🌍 8. Variable Scope

**Scope** defines the area in which a variable is accessible.

* **Global Scope:** Declared outside any function or block.
* **Function Scope:** Declared inside a function using `var`.
* **Block Scope:** Declared inside `{}` using `let` or `const`.

Example:

```javascript
let x = 10; // Global
function demo() {
  var y = 20; // Function scoped
  if (true) {
    let z = 30; // Block scoped
  }
}
```

---

## 🧱 9. Block Scope

Introduced with ES6 (`let` and `const`), **block scope** means variables exist only inside `{}`.

```javascript
{
  let blockVar = "Hello";
  console.log(blockVar); // Works
}
console.log(blockVar); // ❌ Error
```

---

## ⬆️ 10. Variable Hoisting

**Hoisting** means moving variable or function declarations to the top of their scope before execution.

```javascript
console.log(a); // undefined
var a = 5;
```

> 🔸 Only declarations are hoisted, not initializations.
> `let` and `const` are also hoisted but not initialized — using them before declaration gives a **ReferenceError**.

---

## ⚔️ 11. Key Difference Between `var`, `let`, and `const`

| Feature       | var                                  | let           | const         |
| ------------- | ------------------------------------ | ------------- | ------------- |
| Scope         | Function                             | Block         | Block         |
| Redeclaration | ✅ Allowed                            | ❌ Not allowed | ❌ Not allowed |
| Reassignment  | ✅ Allowed                            | ✅ Allowed     | ❌ Not allowed |
| Hoisting      | ✅ Yes (initialized with `undefined`) | ✅ Yes (TDZ)   | ✅ Yes (TDZ)   |
| Introduced    | ES1                                  | ES6           | ES6           |

**TDZ (Temporal Dead Zone):** The time between hoisting and declaration where the variable cannot be accessed.

---

## 🔹 12. Primitive Types

Primitive values are immutable and directly stored in memory.

Examples:

```javascript
let str = "Hello";   // String
let num = 42;        // Number
let bool = true;     // Boolean
let undef;           // Undefined
let nul = null;      // Null
let sym = Symbol();  // Symbol
let big = 9007199254740991n; // BigInt
```

> When you modify a primitive value, a new copy is created.

---

## 🧠 13. Typing in JavaScript

JavaScript uses **dynamic typing** — variable types are determined at runtime.
Still, typing can be described in several ways:

| Type                  | Meaning                                                                                      | Example              |
| --------------------- | -------------------------------------------------------------------------------------------- | -------------------- |
| **Implicit Typing**   | Type inferred automatically                                                                  | `let x = 10;`        |
| **Explicit Typing**   | Type converted manually                                                                      | `Number("42")`       |
| **Nominal Typing**    | Based on declared names (Not in JS)                                                          | –                    |
| **Structural Typing** | Type compatibility based on structure                                                        | Common in TypeScript |
| **Duck Typing**       | “If it looks like a duck and quacks like a duck, it’s a duck.” JS uses this idea for objects | Example below        |

### 🦆 Duck Typing Example:

```javascript
function makeSound(obj) {
  if (obj.quack) {
    obj.quack();
  }
}

let duck = { quack: () => console.log("Quack!") };
let person = { quack: () => console.log("I can mimic a duck!") };

makeSound(duck);   // Quack!
makeSound(person); // I can mimic a duck!
```

---
## 🧩 Summary

JavaScript fundamentals introduce how variables, data types, and scoping work — essential for understanding larger concepts like functions, objects, and closures.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
