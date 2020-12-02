import TodoItem from "./Todoitem";
import React from "react";



const style = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '100%',
    }
}

export default function TodoList(props) {
    return (
        <ul style={style.ul}>{<TodoItem todo={props.todo} onChange={props.onToggle}/>}</ul>
    )
}
