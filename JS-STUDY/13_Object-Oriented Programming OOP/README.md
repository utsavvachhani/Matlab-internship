
# 🧠13. JavaScript Object-Oriented Programming (OOP)

**Object-Oriented Programming (OOP)** is a paradigm that organizes code into reusable **objects** that combine data (properties) and behavior (methods).
In JavaScript, OOP is based on **prototypes** but ES6 introduced the **`class`** syntax for simpler implementation.

---

## 🔹 1. Classes and Objects

A **class** defines a blueprint, and an **object** is an instance of that class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Person("Utsav", 21);
p1.greet(); // Hi, I'm Utsav
```

---

## 🔹 2. Constructor Functions (Old Way)

Before ES6, we used **constructor functions** to create objects.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const p2 = new Person("John", 25);
p2.greet();
```

---

## 🔹 3. Class Constructor

The **`constructor()`** method initializes new objects created from a class.

```javascript
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}
const car1 = new Car("Tesla", 2025);
```

---

## 🔹 4. `this` Keyword

Refers to the **current object** in context.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}
const u1 = new User("Alice");
u1.show(); // Alice
```

---

## 🔹 5. this, call(), apply(), and bind()

Used to control the value of `this`.

```javascript
const user = {
  name: "Utsav",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const greetFunc = user.greet;
greetFunc(); // undefined (this lost)

greetFunc.call(user);  // Hello, Utsav
greetFunc.apply(user); // Hello, Utsav
const boundFunc = greetFunc.bind(user);
boundFunc();           // Hello, Utsav
```

✅ **Difference:**

| Method    | Description                                                |
| --------- | ---------------------------------------------------------- |
| `call()`  | Calls function immediately with `this` and args separately |
| `apply()` | Same as call, but args as an array                         |
| `bind()`  | Returns a new function with bound `this`                   |

---

## 🔹 6. Prototypes and Inheritance

Every JS object has an internal **prototype** that allows inheritance.

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
```

---

## 🔹 7. Prototype Chain

Objects inherit from their prototype, forming a **prototype chain**.

```
dog → Animal.prototype → Object.prototype → null
```

---

## 🔹 8. Object.prototype

All JavaScript objects inherit methods like `.toString()`, `.hasOwnProperty()` from `Object.prototype`.

```javascript
console.log(dog.hasOwnProperty("name")); // true
```

---

## 🔹 9. Prototype Inheritance

We can inherit from one constructor to another.

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d1 = new Dog("Buddy", "Labrador");
d1.speak();
```

---

## 🔹 10. Class Inheritance (extends)

ES6 introduced `extends` for cleaner inheritance.

```javascript
class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const dog1 = new Dog();
dog1.speak(); // Dog barks
```

---

## 🔹 11. super Keyword

Used to access the parent class constructor or methods.

```javascript
class Parent {
  greet() {
    console.log("Hello from parent");
  }
}

class Child extends Parent {
  greet() {
    super.greet(); // Calls parent method
    console.log("Hello from child");
  }
}

new Child().greet();
```

---

## 🔹 12. Static Methods

Methods that belong to the class, not instances.

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10)); // 15
```

---

## 🔹 13. Getters and Setters

Used to define **accessor properties**.

```javascript
class User {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name.toUpperCase();
  }
  set name(value) {
    this._name = value.trim();
  }
}

const u = new User("utsav");
console.log(u.name); // UTSAV
u.name = " Vachhani ";
console.log(u.name); // VACHHANI
```

---

## 🔹 14. Private and Public Fields

Introduced in ES2022 — use `#` for private properties.

```javascript
class Account {
  #balance = 1000; // private
  showBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}

const acc = new Account();
acc.showBalance(); // Balance: 1000
// acc.#balance ❌ Error: Private field
```

---

## 🔹 15. Encapsulation

Encapsulation means **protecting data** by keeping it private and exposing only what’s needed.

```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const b1 = new BankAccount();
b1.deposit(500);
console.log(b1.getBalance()); // 500
```

---

## 🔹 16. Abstraction

Hides complex logic from the user, exposing only required methods.

```javascript
class CoffeeMachine {
  start() { console.log("Starting machine..."); }
  brew() { console.log("Brewing coffee..."); }

  makeCoffee() {
    this.start();
    this.brew();
    console.log("Coffee ready!");
  }
}

const c = new CoffeeMachine();
c.makeCoffee();
```

---

## 🔹 17. Polymorphism

Different classes can define the same method but behave differently.

```javascript
class Shape {
  area() {
    console.log("Calculating area...");
  }
}

class Circle extends Shape {
  area() {
    console.log("Area = πr²");
  }
}

class Rectangle extends Shape {
  area() {
    console.log("Area = l × b");
  }
}

const shapes = [new Circle(), new Rectangle()];
shapes.forEach(s => s.area());
```

✅ Output:

```
Area = πr²
Area = l × b
```

---

## 🧩 Summary Table

| Concept             | Description                | Example               |
| ------------------- | -------------------------- | --------------------- |
| **Class & Object**  | Blueprint and instance     | `class Person {}`     |
| **Constructor**     | Initializes object         | `constructor(name){}` |
| **this**            | Refers to current object   | `this.name`           |
| **call/apply/bind** | Set custom `this`          | `fn.call(obj)`        |
| **Prototype**       | Shared methods             | `Object.create()`     |
| **Inheritance**     | Reuse functionality        | `extends`             |
| **super**           | Access parent class        | `super.method()`      |
| **Static**          | Belongs to class           | `Class.method()`      |
| **Get/Set**         | Controlled access          | `get name()`          |
| **Encapsulation**   | Hide details               | Private fields        |
| **Abstraction**     | Show essential only        | Methods only          |
| **Polymorphism**    | Same method, diff behavior | Overriding            |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
