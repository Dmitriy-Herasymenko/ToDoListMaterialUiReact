import TodoList from "./ToDoList/Todolist";
import './App.css';
import React from "react";

const style = {
  wraper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20% auto',
    padding: '15px',
    width: '500px',
    backgroundColor: '#3c424a',
  }
}

function App() {

  const [todo, setTodo] = React.useState([
    {id: 1, completed: false, title: 'Workout: 9:00', status: true },
    {id: 2, completed: false, title: 'React tutorial: 12:00', status: true  },
    {id: 3, completed: false, title: 'Guitar: 16:00', status: true  },
  ])

  const changeToggle = id => {
    setTodo(todo.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }));
  }


  return (
    <div style={style.wraper}>
      <TodoList todo={todo} onToggle={changeToggle}/>
    </div>
  );
}

export default App;
