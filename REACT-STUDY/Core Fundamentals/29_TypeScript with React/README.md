# 🧩 29. TypeScript with React

---

## 📘 Overview

**TypeScript** adds **static typing** to JavaScript, which helps catch errors early and improves developer productivity.
When used with **React**, it ensures your components, props, and hooks are type-safe — reducing runtime bugs and improving IDE support.

---

## 🔹 Typing Props & State

### 🧠 Typing Props

There are two common ways to type props in React:
1️⃣ Using **Type aliases (`type`)**
2️⃣ Using **Interfaces (`interface`)**

### 🧩 Example (Functional Component Props)

```tsx
type GreetingProps = {
  name: string;
  age?: number; // Optional prop
};

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <h2>
      Hello, {name}! {age && `You are ${age} years old.`}
    </h2>
  );
};
```

✅ Props are **type-checked** during development.
✅ Optional properties (`age?`) prevent errors when missing.

---

### 🧩 Example (Class Component Props & State)

```tsx
interface CounterProps {
  initialCount?: number;
}

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: props.initialCount || 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>;
  }
}
```

✅ Props and state are both explicitly typed.

---

## 🔹 Generics in Components

**Generics** make components reusable and flexible by allowing type parameters to be passed in.

### 🧩 Example (Reusable List Component)

```tsx
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}

// ✅ Usage Example
<List
  items={["React", "TypeScript", "Node.js"]}
  renderItem={(item) => <li key={item}>{item}</li>}
/>;
```

✅ Works with any data type (`string`, `number`, `object`, etc.) while maintaining full type safety.

---

## 🔹 Hooks with TypeScript

### 🧠 useState Hook

TypeScript can automatically infer the type from the initial value — but you can also specify it manually.

```tsx
// Type inferred
const [count, setCount] = useState(0);

// Explicit type
const [name, setName] = useState<string>("");
```

### 🧩 Example with Object State

```tsx
type User = {
  name: string;
  age: number;
};

const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  setUser({ name: "Utsav", age: 21 });
}, []);
```

✅ The state is type-checked — no more invalid property access errors.

---

### 🧠 useRef Hook

You can type refs to DOM elements or custom values.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```

✅ TypeScript ensures `inputRef.current` has the correct HTML element type.

---

### 🧩 Example (Custom Hook with Types)

```tsx
function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

const [isOpen, toggleOpen] = useToggle();
```

✅ Custom hooks can return **typed arrays, objects, or functions**, providing strong typing across usage.

---

## 🧠 Best Practices

✅ Use **interfaces** for objects and **types** for primitives or unions.
✅ Always type **props**, **state**, and **custom hooks**.
✅ Use **React.FC** sparingly (avoid overusing `children` auto-type).
✅ Prefer **`React.ReactNode`** for JSX return types.
✅ Use **generics** for reusable logic in hooks and components.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
