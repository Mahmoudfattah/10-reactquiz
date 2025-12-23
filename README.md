# React Quiz App ✅ (React + Vite)

A fast, clean **React Quiz** app built to practice real-world React fundamentals like **useReducer state management**, UI states, scoring, and a countdown timer.

🔗 **Live Demo:** https://usereactquizz.netlify.app/  
📦 **Repository:** https://github.com/Mahmoudfattah/10-reactquiz

---

## ✨ Features

- ✅ Multiple choice quiz flow (Start → Questions → Finish)
- ⏱️ Countdown timer (auto-finish when time ends)
- 🎯 Scoring system (points per question)
- 🏆 High score tracking
- 📊 Progress indicator (question index / total)
- 🔁 Restart / reset quiz without refetching questions
- 🧠 Clear UI states: `loading` / `ready` / `active` / `finish` / `error`

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **useReducer** for state management
- **CSS** for styling

---

## 📂 Data Source (Questions)

You can load questions in different ways:

### Option A (Recommended for hosting): `public/questions.json`
1. Create: `public/questions.json`
2. Fetch:
```js
const res = await fetch("/questions.json");
const data = await res.json();
dispatch({ type: "dataReceived", payload: data.questions });
