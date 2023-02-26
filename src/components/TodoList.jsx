import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  function handleDeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-500 mb-6">
        To-Do <span className="text-blue-600 dark:text-blue-500">List</span>
      </h1>
      <div className="max-w-sm w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Adicionar Tarefa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-blue-500"
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

      <ul className="overflow-y-auto h-48 max-w-md w-full">
        {todos.map((todo, index) => (
          <li
            className="flex items-center justify-between py-2 border-b border-blue-400"
            key={index}
          >
            <div className="w-3/4">
              <span className="break-words text-blue-500">{todo}</span>
            </div>
            <div className="w-1/4 flex justify-end">
              <Link
                className="text-sky-600 hover:underline hover:text-sky-500 font-bold py-2 px-4 rounded-full"
                to={`/putList/${index}`}
              >
                Editar
              </Link>
              <button
                className="text-red-500 hover:underline hover:text-red-400 font-bold py-2 px-4 rounded-full"
                onClick={() => handleDeleteTodo(index)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
