//FUNCTION BASED COMPONENTS
import React, { useEffect, useState } from "react";

function TodoFunc() {
  const [currTodo, setCurrTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = () => {
    setCurrTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, currTodo]);
    setCurrTodo("");
  };


  useEffect(() => {
    console.log("Component Did Mount: Fetching initial to-do items");
    setTimeout(()=> {
        setTodos(["Learn React", "Read a Book"]);
    }, 1000);

    return () => {
        console.log('Component Will Unmount: cleaning up resources');
    }

  },[]);

  useEffect(() => {
    console.log("Component Did update: checking if new to-do was added");
    console.log("Updated To-dos: ", todos);
  },[todos]);

  console.log("Render: Rendering the todo list");

  return (
    <div>
      <h1>My To-Do List</h1>
      <input
        type="text"
        placeholder="Enter your tasks..."
        value={currTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add To-Do</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoFunc;
