# Redux Todo App (Vite + React)

A simple **Todo List Application** built using **React** and **Redux** with Vite as the bundler.  
This app allows users to:
- Add new todos
- Mark todos as completed
- Delete todos

---

## 📂 Project Structure
src/
│
├── redux/
│ ├── actionTypes.js
│ ├── actions.js
│ ├── reducer.js
│ └── store.js
│
├── components/
│ ├── TodoInput.jsx
│ └── TodoList.jsx
│
├── App.jsx
├── main.jsx
└── index.css

yaml
Copy code

---

## 🛠 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd redux-todo-app
2. Install dependencies
bash
Copy code
npm install
npm install redux react-redux
3. Run the development server
bash
Copy code
npm run dev
⚙️ Features
Add Todo: Type a task and click "Add Todo"

Toggle Todo: Click on a task to mark it as complete/incomplete

Delete Todo: Click ❌ to remove the task

Redux State Management: Uses Redux to manage global state

🏗 How Redux Works in This App
Actions → Define the type of change (add, toggle, delete)

Reducer → Updates state based on the action

Store → Holds the state

Provider → Makes store available to all components

useSelector → Read state in components

useDispatch → Send actions from components

📦 Technologies Used
React

Redux

React-Redux

Vite

