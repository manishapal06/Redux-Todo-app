import React from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

export default function App() {
    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h1>Redux Todo App</h1>
            <TodoInput />
            <TodoList />
        </div>
    );
}
