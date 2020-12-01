import Todos from "./Todos";
import React from "react";

export default function TodoItem() {
    return (
        Todos.map((todo, index) => {
            return (
                <li key={todo.id}>
                    <input type="checkbox"/>
                    <strong>{index + 1}</strong>
                    {todo.title}
                    <button>&times;</button>
                </li>
            )
        })
    )
};
