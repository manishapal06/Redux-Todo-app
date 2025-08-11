import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export default function TodoInput() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (title.trim() !== "") {
            dispatch(addTodo(title));
            setTitle("");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}
