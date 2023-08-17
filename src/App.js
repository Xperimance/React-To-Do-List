import React, { useState } from 'react';
import './App.css';

// Define state variables
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to add a new to-do item. If the user input is not empty, it will create a new item to the existing to-do list and then clear the user input field
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false}]);
      setInputValue('');
    }
  };

  // Update completition status of a specific item on the to-do list
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Function to delete an item on the to-do list
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // User Interface
  return (
    <div>
      <h1>TO-DO LIST</h1>
      <div>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
            />
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
                </span>
                <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;