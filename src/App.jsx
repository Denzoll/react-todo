import React, { useState } from "react";
import "./index.css";

import "./index.css";
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy bananas",
      favorite: false,
    },
    {
      text: "Buy snus ",
      favorite: false,
    },
    {
      text: "Buy explorer",
      favorite: false,
    },
  ]);
     const [text, setText] = useState('')
  
     const deleteTodo = (indexOfDelTodo) => {
    const filtered = todos.filter((todo, index) => {
      if (index === indexOfDelTodo) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const makeFavorite = (i) => {
    const newTodos = todos.map((item,index) => {
      if( i ===index) {
        return  {
          ...item,
          favorite:!item.favorite
        }
      }
      return item
    })
    setTodos(newTodos)
  };
  const newTodos = todos.map((todo, index) => {
    return (
      <div className={`todo ${todo.favorite ? "selected" : ""}`}>
        <div className="favorite">
          <button onClick={() => makeFavorite(index)}>★</button>
        </div>
        <div className="todo-text">{todo.text}</div>
        <div className="actions">
          <button onClick={() => deleteTodo(index)}>❌</button>
        </div>
      </div>
    );
  });
  const addTodo = () => {
    setTodos([{
      text:text,
      favorite: false 
    },
    ...todos
  ])

    setText('')
  }
  return (
    <>
      <div className="app">
        <div className="header">Add text</div>
        <div className="form">
          <input placeholder="Add text..." type="text" 
          value={text} 
          onChange = {(e) => setText(e.target.value)} />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="todos">{newTodos}</div>
      </div>
    </>
  );
}

export default App;
