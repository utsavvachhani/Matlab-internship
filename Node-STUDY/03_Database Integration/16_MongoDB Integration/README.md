# 🍃 **16. MongoDB Integration**

📘 **Docs:** [Mongoose Official Docs](https://mongoosejs.com/docs/)
📺 **YouTube:** [Mongoose Crash Course](https://www.youtube.com/watch?v=DZBGEVgL2eE)

---

## 🧠 **Overview**

MongoDB is a **NoSQL** database that stores data in flexible, JSON-like **documents**.
In Node.js, **Mongoose** is the most popular **ODM (Object Data Modeling)** library that simplifies schema definition, validation, and CRUD operations.

---

## 🔹 **1. MongoDB Connection with Mongoose**

### 🧩 Install Dependencies:

```bash
npm install mongoose dotenv
```

### 🧩 Example Connection:

```js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (err) {
    console.error('❌ Connection Failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

**.env**

```
MONGO_URI=mongodb://localhost:27017/myDatabase
```

---

## 🔹 **2. Schema Definition**

Mongoose schemas define the structure and validation rules for documents within a collection.

### 🧩 Example:

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  email: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
```

🧠 **Key Point:**
Schema defines *data shape*, *validation*, and *default values*.

---

## 🔹 **3. Model Creation**

A **Model** is a constructor compiled from a Schema.
It represents a **collection** in MongoDB and provides methods for database interaction.

### 🧩 Example:

```js
const User = mongoose.model('User', userSchema);
```

You can now perform CRUD operations using this model:

```js
const newUser = new User({ name: 'Utsav', age: 21, email: 'utsav@example.com' });
await newUser.save();
```

---

## 🔹 **4. CRUD Operations**

### ✅ **Create**

```js
await User.create({ name: 'John', email: 'john@example.com', age: 25 });
```

### 📖 **Read**

```js
const users = await User.find();          // All users
const user = await User.findById(id);     // Find by ID
const one = await User.findOne({ email: 'john@example.com' });
```

### ✏️ **Update**

```js
await User.updateOne({ email: 'john@example.com' }, { age: 30 });
await User.findByIdAndUpdate(id, { name: 'Updated Name' }, { new: true });
```

### ❌ **Delete**

```js
await User.deleteOne({ email: 'john@example.com' });
await User.findByIdAndDelete(id);
```

---

## 🔹 **5. Query Methods**

Mongoose queries support filtering, sorting, limiting, and projection.

### 🧩 Example:

```js
const users = await User.find({ age: { $gt: 18 } })
  .sort({ age: -1 })
  .limit(5)
  .select('name email');
```

📘 **Common Query Operators:**

* `$gt`, `$lt`, `$gte`, `$lte` → comparison
* `$in`, `$nin` → inclusion/exclusion
* `$and`, `$or` → logical operations

---

## 🔹 **6. Population**

Used to **join documents** across collections — similar to foreign key relationships in SQL.

### 🧩 Example:

```js
const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', postSchema);

// Fetch posts with author details
const posts = await Post.find().populate('author', 'name email');
```

---

## 🔹 **7. Aggregation Pipeline**

Used for **data transformation and analytics** directly inside MongoDB.

### 🧩 Example:

```js
const result = await User.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: '$age', total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

console.log(result);
```

🧠 **Common Stages:**
`$match`, `$group`, `$sort`, `$limit`, `$project`, `$lookup`, `$unwind`

---

## 🔹 **8. Indexing**

Indexes improve query performance by allowing faster lookups.
However, they increase write time and memory usage.

### 🧩 Example:

```js
userSchema.index({ email: 1 }); // Ascending index
userSchema.index({ name: "text" }); // Text index for search
```

Check indexes:

```js
User.collection.getIndexes();
```

---

## 🔹 **9. Schema Validation**

Mongoose provides **built-in validation** and allows **custom validators**.

### 🧩 Example:

```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [3, 'Too short!']
  },
  age: {
    type: Number,
    validate: {
      validator: v => v > 0,
      message: props => `${props.value} is not a valid age!`
    }
  }
});
```

You can also validate before saving:

```js
try {
  await new User({ username: 'U', age: -5 }).save();
} catch (err) {
  console.log(err.message);
}
```

---

## 💡 **Key Takeaways**

| Concept         | Description                                    |
| --------------- | ---------------------------------------------- |
| **Schema**      | Defines document structure and validation      |
| **Model**       | Represents a MongoDB collection                |
| **CRUD**        | Basic operations: Create, Read, Update, Delete |
| **Population**  | Joins documents across collections             |
| **Aggregation** | Data analytics and transformation              |
| **Indexing**    | Improves query performance                     |
| **Validation**  | Ensures data correctness                       |

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
