import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTodo();
  }

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
