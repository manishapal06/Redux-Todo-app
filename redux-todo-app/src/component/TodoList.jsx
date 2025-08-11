import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            {todos.length === 0 && <p>No todos yet!</p>}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.status ? "line-through" : "none",
                            margin: "5px 0"
                        }}
                    >
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                            {todo.title}
                        </span>
                        <button
                            style={{ marginLeft: "10px" }}
                            onClick={() => dispatch(deleteTodo(todo.id))}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
