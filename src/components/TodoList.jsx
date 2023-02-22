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
    <div className="flex-col h-screen flex items-center justify-center">
      <h1 className="pb-8 text-5xl text-gray-700">To-Do List</h1>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Adicionar Tarefa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={newTodo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li className="flex items-center justify-between w-72" key={index}>
            <span>{todo}</span>
            <button>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
