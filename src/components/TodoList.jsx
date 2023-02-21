import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = prompt("Adicionar nova tarefa:");
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
