# 💬 React Chatbot

A simple chatbot web application built with **React and JavaScript** as part of my React learning journey.

The project was created while learning React through the **SuperSimpleDev React Course** and helped me practice components, state, event handling, asynchronous JavaScript, and user interaction in a React application.

---

## ✨ Features

- Send messages through a chat input
- Display user and chatbot messages
- Generate chatbot responses asynchronously
- Display a loading message while waiting for a response
- Prevent multiple messages from being sent while the chatbot is loading
- Send messages using the **Enter** key
- Clear the input using the **Escape** key
- Automatically generate unique IDs for messages
- Dynamic rendering of the conversation

---

## 🛠️ Technologies

- React
- JavaScript
- HTML5
- CSS3
- Vite
- npm
- Git
- GitHub

---

## ⚛️ React Concepts Practiced

This project helped me practice:

- React components
- Props
- `useState`
- Controlled inputs
- Event handlers
- Conditional rendering
- Rendering arrays with `.map()`
- Updating arrays with the spread operator
- Keyboard events
- Async / await
- Loading states
- Component communication

---

## 🤖 Chatbot Logic

Messages are stored in React state and rendered dynamically in the chat interface.

When the user sends a message:

1. The input is validated
2. The user message is added to the conversation
3. A loading state is activated
4. The chatbot response is requested asynchronously
5. The chatbot response is added to the conversation
6. The loading state is disabled

Unique message IDs are generated using:

```js
crypto.randomUUID()
```

The loading state also prevents users from sending multiple requests while the chatbot is already generating a response.

---

## ⌨️ Keyboard Controls

The chat input supports keyboard shortcuts:

- **Enter** — Send the current message
- **Escape** — Clear the input

---

## 💻 Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

Install the dependencies:

```bash
npm install
```

---

## ▶️ Running Locally

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📚 What I Learned

Building this chatbot helped me better understand how React state and components work together in an interactive application.

I practiced:

- Managing input values with controlled components
- Updating state based on user actions
- Managing arrays of messages
- Rendering dynamic content
- Handling keyboard events
- Working with asynchronous functions
- Using loading states during asynchronous operations
- Preventing duplicate actions while a request is processing
- Breaking an interface into reusable React components

This project also helped prepare me for working on larger React applications.

---

## 🙏 Credits

This project was built while following the **SuperSimpleDev React Course**.

The course provided the lessons and guidance used to learn the React concepts applied in this chatbot project.

Special thanks to **SuperSimpleDev** for creating the course and the learning materials used as the foundation for this project.

### SuperSimpleDev

YouTube: https://www.youtube.com/@SuperSimpleDev

---

## 👨‍💻 Author

**Carl Amiel Balita**

Web developer currently developing my skills in modern frontend and full-stack web development.

- GitHub: https://github.com/amielitoss
- Portfolio: https://carl-balita.netlify.app/

---

## 📌 Project Status

**Completed React learning project.**

- ✅ React components
- ✅ State management
- ✅ Controlled input
- ✅ Dynamic messages
- ✅ Async chatbot responses
- ✅ Loading state
- ✅ Keyboard controls
- ✅ Production build