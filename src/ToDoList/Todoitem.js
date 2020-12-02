import React from "react";

const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
        padding: '15px'
    },
    btn: {
        backgroundColor: '#3c424a',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        color: 'red'
    },
    underline: {
        textDecoration: 'line-through'
    },

    noneUnderline: {
        textDecoration: 'none'
    }
}



export default function TodoItem({todo, onChange}) {
    return (
        todo.map(todo => {
            const underline = todo.completed ? style.underline : style.noneUnderline;
            return (
                <li key={todo.id} style={style.li}>
                    <input type="checkbox" onChange={ ()=> onChange(todo.id)}  />
                    <label style={underline}>{todo.title}</label>
                    <button style={style.btn}>&times;</button>
                </li>
        )
        }))
};
