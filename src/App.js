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

  return (
    <div style={style.wraper}>
      <TodoList />
    </div>
  );
}

export default App;
