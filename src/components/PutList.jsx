import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PutList() {
  const { index } = useParams();
  const navigate = useNavigate();

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [editedTodo, setEditedTodo] = useState(todos[index]);

  function handleChange(event) {
    setEditedTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodos = [...todos];
    newTodos[index] = editedTodo;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    navigate("/");
  }

  return (
    <div className="flex-col h-screen flex items-center justify-center">
      <h1 className="pb-8 text-5xl text-gray-700">Editar Tarefa</h1>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Edite a Tarefa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={editedTodo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PutList;
