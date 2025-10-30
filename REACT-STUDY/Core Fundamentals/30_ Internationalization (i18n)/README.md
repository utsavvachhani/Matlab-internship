# 🌐 30. Internationalization (i18n)

---

## 📘 Overview

**Internationalization (i18n)** allows your React app to support **multiple languages** and **regional formats** (like date, time, numbers).
It helps make your application accessible to a global audience by providing **language switching** and **localized content rendering**.

One of the most popular libraries for this is **`react-i18next`**, which integrates the i18next ecosystem seamlessly with React.

---

## 🔹 react-i18next Basics

### 🧩 Installation

```bash
npm install react-i18next i18next
```

### 🧠 Project Setup

1️⃣ Create a folder named `locales/` for language JSON files.

```
src/
 └── locales/
      ├── en/translation.json
      └── fr/translation.json
```

2️⃣ Example: `en/translation.json`

```json
{
  "welcome": "Welcome to our app!",
  "greeting": "Hello, {{name}}!"
}
```

3️⃣ Example: `fr/translation.json`

```json
{
  "welcome": "Bienvenue dans notre application !",
  "greeting": "Bonjour, {{name}}!"
}
```

---

### 🧠 Initialize i18next

Create a file named `i18n.js` inside your `src/` folder:

```jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
```

✅ `resources` contain all translations.
✅ `lng` defines the default language.
✅ `fallbackLng` is used if a key is missing in the selected language.

---

### 🧩 Using Translations in Components

You can use the `useTranslation()` hook from `react-i18next`.

```jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // Import the configuration

const Welcome = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h2>{t("welcome")}</h2>
      <p>{t("greeting", { name: "Utsav" })}</p>

      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
};

export default Welcome;
```

✅ The `t()` function translates text based on the current language.
✅ Dynamic values (like `{ name: "Utsav" }`) can be passed easily.

---

## 🔹 Formatting & Pluralization

`react-i18next` supports **plural forms**, **interpolation**, and **date/number formatting**.

### 🧩 Pluralization Example

```json
{
  "item": "{{count}} item",
  "item_plural": "{{count}} items"
}
```

Usage in React:

```jsx
<p>{t("item", { count: 1 })}</p>  // "1 item"
<p>{t("item", { count: 5 })}</p>  // "5 items"
```

✅ Automatically selects the correct plural form based on the count.

---

### 🧩 Date & Number Formatting Example

You can use i18next’s built-in **formatters** for date and number localization:

```js
i18n.init({
  interpolation: {
    format: (value, format, lng) => {
      if (value instanceof Date) {
        return new Intl.DateTimeFormat(lng, { dateStyle: "long" }).format(value);
      }
      if (format === "currency") {
        return new Intl.NumberFormat(lng, {
          style: "currency",
          currency: "USD",
        }).format(value);
      }
      return value;
    },
  },
});
```

Usage:

```jsx
<p>{t("today", { value: new Date(), format: "date" })}</p>
<p>{t("price", { value: 199.99, format: "currency" })}</p>
```

✅ Localized dates, times, and numbers adjust automatically for each language.

---

## 🧠 Best Practices

✅ Store all translation files inside a `locales/` folder.
✅ Keep translation keys consistent across languages.
✅ Avoid inline text; always use `t()` for static UI text.
✅ Lazy-load translations for large apps to improve performance.

---

⭐ **Author:** [Utsav Vachhani](https://github.com/utsavvachhani)
📘 **Part of:** [JS Study](../../../JS-STUDY/) | [React Study](../../../REACT-STUDY/) | [Node Study](../../../NODE-STUDY/)
