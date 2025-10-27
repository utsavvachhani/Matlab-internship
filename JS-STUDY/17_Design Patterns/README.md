# 🧩17. JavaScript Design Patterns

**Design Patterns** are reusable solutions to common problems in software design.
They help make code **modular**, **maintainable**, and **scalable**.

In JavaScript, these patterns leverage the language’s **functions**, **closures**, and **prototypes** to implement object-oriented design principles effectively.

---

## 📘 Table of Contents

1. [Module Pattern](#-module-pattern)
2. [Singleton Pattern](#-singleton-pattern)
3. [Factory Pattern](#-factory-pattern)
4. [Observer Pattern](#-observer-pattern)
5. [Constructor Pattern](#-constructor-pattern)
6. [Prototype Pattern](#-prototype-pattern)
7. [Decorator Pattern](#-decorator-pattern)

---

## 🔹 Module Pattern

The **Module Pattern** allows us to group related code (variables and functions) together while keeping some parts **private** and others **public**.

It helps in:

* Avoiding global namespace pollution.
* Encapsulating logic for better maintainability.

### 🧠 Example:

```js
const CounterModule = (function () {
  let count = 0; // private variable

  function increment() {
    count++;
    console.log("Count:", count);
  }

  function reset() {
    count = 0;
    console.log("Reset to 0");
  }

  return {
    increment,
    reset,
  };
})();

CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2
CounterModule.reset();     // Reset to 0
```

✅ **Private Data:** `count` is not accessible outside the module.

---

## 🔹 Singleton Pattern

The **Singleton Pattern** ensures **only one instance** of a class or object exists throughout the application.

It’s useful for:

* Managing global configurations
* Shared resources (like database connections)

### 🧠 Example:

```js
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { message: "I am the only instance!" };
  }

  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true
```

🔗 Reference: [Singleton Pattern – patterns.dev](https://www.patterns.dev/vanilla/singleton-pattern/)

---

## 🔹 Factory Pattern

The **Factory Pattern** provides a way to **create objects** without exposing the creation logic to the client.

It helps when:

* Objects share a common interface but differ in behavior.

### 🧠 Example:

```js
class Developer {
  constructor(name) {
    this.name = name;
    this.role = "Developer";
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.role = "Tester";
  }
}

class EmployeeFactory {
  static createEmployee(name, type) {
    if (type === "developer") return new Developer(name);
    if (type === "tester") return new Tester(name);
  }
}

const dev = EmployeeFactory.createEmployee("Utsav", "developer");
const test = EmployeeFactory.createEmployee("Meet", "tester");

console.log(dev.role); // Developer
console.log(test.role); // Tester
```

---

## 🔹 Observer Pattern

The **Observer Pattern** defines a **one-to-many relationship** between objects.
When one object (the **subject**) changes state, all its dependents (**observers**) are notified automatically.

### 🧠 Example:

```js
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  notify(data) {
    this.observers.forEach(obs => obs.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

const subject = new Subject();
const obs1 = new Observer("Observer 1");
const obs2 = new Observer("Observer 2");

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify("New Data Available!");
```

✅ **Use Case:** Real-time notifications, event systems, or live dashboards.

---

## 🔹 Constructor Pattern

The **Constructor Pattern** is used to create objects using **constructor functions** or **classes** in JavaScript.

### 🧠 Example:

```js
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.getDetails = function () {
    return `${this.brand} ${this.model}`;
  };
}

const car1 = new Car("Tesla", "Model X");
console.log(car1.getDetails()); // Tesla Model X
```

✅ **Modern Approach:**

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  getDetails() {
    return `${this.brand} ${this.model}`;
  }
}
```

---

## 🔹 Prototype Pattern

The **Prototype Pattern** allows objects to share properties and methods through a **prototype chain**.

It is memory efficient — methods defined on the prototype are shared across all instances.

### 🧠 Example:

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
```

✅ Here, all instances of `Animal` share the same `speak()` method.

---

## 🔹 Decorator Pattern

The **Decorator Pattern** allows you to **add new behavior** to existing objects **dynamically**, without altering their structure.

It’s useful when:

* You want to extend functionality without modifying the original code.

### 🧠 Example:

```js
function Coffee() {
  this.cost = function () {
    return 5;
  };
}

function MilkDecorator(coffee) {
  const cost = coffee.cost();
  coffee.cost = function () {
    return cost + 2;
  };
}

function SugarDecorator(coffee) {
  const cost = coffee.cost();
  coffee.cost = function () {
    return cost + 1;
  };
}

const myCoffee = new Coffee();
MilkDecorator(myCoffee);
SugarDecorator(myCoffee);

console.log("Total cost:", myCoffee.cost()); // Total cost: 8
```

✅ **Used In:** Middleware systems, logging, or styling frameworks.

---

## 🧠 Summary Table

| Pattern         | Purpose                        | Example Use Case                |
| --------------- | ------------------------------ | ------------------------------- |
| **Module**      | Encapsulate and organize code  | Utility libraries               |
| **Singleton**   | One shared instance            | Global config or cache          |
| **Factory**     | Object creation logic          | User types, roles               |
| **Observer**    | Notify multiple subscribers    | Event listeners, live updates   |
| **Constructor** | Blueprint for objects          | Creating multiple instances     |
| **Prototype**   | Shared methods via inheritance | Memory-efficient object sharing |
| **Decorator**   | Add features dynamically       | Middleware, logging             |

---

## 🔗 References

* [Patterns.dev – Vanilla JS Design Patterns](https://www.patterns.dev/vanilla/singleton-pattern/)
* *JavaScript.info – Design Patterns*
* *MDN – Object-Oriented JavaScript*

---

⭐ **Pro Tip:**
Combine these patterns wisely — avoid over-engineering.
Patterns are meant to **simplify**, not complicate.

---
⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../) | [React Study](../../REACT-STUDY) | [Node Study](../../NODE-STUDY)
