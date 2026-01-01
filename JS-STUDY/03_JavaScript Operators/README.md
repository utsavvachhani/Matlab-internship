
# ⚙️ 3. JavaScript Operators

JavaScript **operators** are symbols or keywords used to perform operations on values and variables.  
They allow you to manipulate data, perform calculations, compare values, and control program logic.

Here's a small, perfect message for your GitHub repository:

-----

---

## 🔹 1. Assignment Operators

Assignment operators are used to assign values to variables.

| Operator | Example | Description |
|-----------|----------|-------------|
| `=`  | `x = 10` | Assigns value 10 to `x` |
| `+=` | `x += 5` → `x = x + 5` | Adds and assigns |
| `-=` | `x -= 3` → `x = x - 3` | Subtracts and assigns |
| `*=` | `x *= 2` → `x = x * 2` | Multiplies and assigns |
| `/=` | `x /= 2` → `x = x / 2` | Divides and assigns |
| `%=` | `x %= 2` → `x = x % 2` | Assigns remainder |

🧠 **Example:**
```js
let a = 10;
a += 5; // 15
a *= 2; // 30
````

---

## 🔹 2. Arithmetic Operators

Used for performing mathematical operations.

| Operator | Description         | Example  | Output |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `5 + 3`  | `8`    |
| `-`      | Subtraction         | `5 - 3`  | `2`    |
| `*`      | Multiplication      | `5 * 3`  | `15`   |
| `/`      | Division            | `10 / 2` | `5`    |
| `%`      | Modulus (remainder) | `10 % 3` | `1`    |
| `**`     | Exponentiation      | `2 ** 3` | `8`    |

---

## 🔹 3. Comparison Operators

Used to compare two values.
Returns a **boolean value (true or false)**.

| Operator | Description                 | Example     | Output  |
| -------- | --------------------------- | ----------- | ------- |
| `==`     | Equal to                    | `5 == '5'`  | `true`  |
| `===`    | Strict equal (value + type) | `5 === '5'` | `false` |
| `!=`     | Not equal                   | `5 != 3`    | `true`  |
| `!==`    | Strict not equal            | `5 !== '5'` | `true`  |
| `>`      | Greater than                | `8 > 5`     | `true`  |
| `<`      | Less than                   | `2 < 4`     | `true`  |
| `>=`     | Greater or equal            | `6 >= 6`    | `true`  |
| `<=`     | Less or equal               | `3 <= 5`    | `true`  |

---

## 🔹 4. Logical Operators

Used to combine conditional expressions.

| Operator | Description | Example            | Result     |         |   |         |        |
| -------- | ----------- | ------------------ | ---------- | ------- | - | ------- | ------ |
| `&&`     | Logical AND | `(5 > 3 && 6 > 4)` | `true`     |         |   |         |        |
| `        |             | `                  | Logical OR | `(5 < 3 |   | 6 > 4)` | `true` |
| `!`      | Logical NOT | `!(5 > 3)`         | `false`    |         |   |         |        |

🧠 **Example:**

```js
let x = 5, y = 10;
console.log(x > 0 && y > 5); // true
```

---

## 🔹 5. Conditional (Ternary) Operator

A shorthand for an `if...else` statement.

**Syntax:**

```js
condition ? expressionIfTrue : expressionIfFalse
```

🧠 **Example:**

```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

## 🔹 6. Bitwise Operators

Operate on numbers at the **binary level**.

| Operator | Name        | Example  | Result |    |     |
| -------- | ----------- | -------- | ------ | -- | --- |
| `&`      | AND         | `5 & 1`  | `1`    |    |     |
| `        | `           | OR       | `5     | 1` | `5` |
| `^`      | XOR         | `5 ^ 1`  | `4`    |    |     |
| `~`      | NOT         | `~5`     | `-6`   |    |     |
| `<<`     | Left Shift  | `5 << 1` | `10`   |    |     |
| `>>`     | Right Shift | `5 >> 1` | `2`    |    |     |

💡 **Note:** Bitwise operators treat operands as 32-bit integers.

---

## 🔹 7. Unary Operators

Unary operators operate on a **single operand**.

| Operator | Description                | Example          | Output     |
| -------- | -------------------------- | ---------------- | ---------- |
| `+`      | Converts operand to number | `+"5"`           | `5`        |
| `-`      | Negates operand            | `-10`            | `-10`      |
| `!`      | Logical NOT                | `!true`          | `false`    |
| `typeof` | Returns type of operand    | `typeof 123`     | `"number"` |
| `delete` | Deletes a property         | `delete obj.key` | `true`     |

---

## 🔹 8. `typeof` Operator

Determines the **type of a variable or expression**.

🧠 **Example:**

```js
console.log(typeof "Hello"); // string
console.log(typeof 123);     // number
console.log(typeof true);    // boolean
console.log(typeof {});      // object
console.log(typeof undefined); // undefined
```

---

## 🔹 9. Operator Precedence

Operator **precedence** determines the order in which operations are performed.

| Precedence | Operator                 | Description                         |   |            |
| ---------- | ------------------------ | ----------------------------------- | - | ---------- |
| 1          | `()`                     | Parentheses                         |   |            |
| 2          | `++`, `--`               | Increment / Decrement               |   |            |
| 3          | `*`, `/`, `%`            | Multiplication / Division / Modulus |   |            |
| 4          | `+`, `-`                 | Addition / Subtraction              |   |            |
| 5          | `>`, `<`, `>=`, `<=`     | Comparisons                         |   |            |
| 6          | `==`, `!=`, `===`, `!==` | Equality                            |   |            |
| 7          | `&&`                     | Logical AND                         |   |            |
| 8          | `                        |                                     | ` | Logical OR |
| 9          | `? :`                    | Ternary                             |   |            |
| 10         | `=`, `+=`, `-=`          | Assignment                          |   |            |

🧠 **Example:**

```js
let result = 10 + 5 * 2; // 20 (not 30)
```

---

## 🔹 10. Increment and Decrement Operators

Used to **increase or decrease** a variable’s value by 1.

| Operator | Type      | Example        | Result               |
| -------- | --------- | -------------- | -------------------- |
| `++`     | Increment | `x++` or `++x` | Increases value by 1 |
| `--`     | Decrement | `x--` or `--x` | Decreases value by 1 |

🧠 **Example:**

```js
let a = 5;
console.log(a++); // 5 (post-increment)
console.log(a);   // 6
console.log(++a); // 7 (pre-increment)
```

---

## 🧩 Summary Diagram

```
JavaScript Operators
│
├── Assignment ( =, +=, -=, *=, /= )
├── Arithmetic ( +, -, *, /, %, ** )
├── Comparison ( ==, ===, !=, >, <, >=, <= )
├── Logical ( &&, ||, ! )
├── Conditional / Ternary ( ? : )
├── Bitwise ( &, |, ^, ~, <<, >> )
├── Unary ( +, -, !, typeof, delete )
├── typeof ( identifies data type )
└── Increment / Decrement ( ++, -- )
```

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)