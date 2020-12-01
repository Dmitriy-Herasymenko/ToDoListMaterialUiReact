import TodoItem from "./Todoitem";
import React from "react";

const style = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList() {
    return (
        <ul style={style.ul} >
           <TodoItem />
        </ul>
    )
}
