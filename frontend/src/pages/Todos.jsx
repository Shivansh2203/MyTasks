import React, { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add new todo
  const handleAddTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  // Toggle complete
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cover bg-center relative">
      <div
        className="relative z-10 w-full max-w-md rounded-xl 
  bg-[#F5F5DC]/60 backdrop-blur-lg 
  p-8 shadow-xl border border-white/30"
      >
        <h2 className="mb-6 text-center text-2xl font-semibold bg-linear-to-r from-green-400 to-green-800 bg-clip-text text-transparent">
          My Todos
        </h2>

        {/* Input */}
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleAddTodo}
            className="rounded-md bg-linear-to-r from-green-400 to-green-700 px-4 py-2 text-white hover:from-green-500 hover:to-green-800"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2 max-h-80 overflow-y-auto">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-4 py-2 rounded-md border ${
                todo.completed
                  ? "line-through text-gray-500"
                  : "bg-white/30"
              }`}
            >
              <span>{todo.text}</span>
              <button
                onClick={() => toggleComplete(index)}
                className={`text-sm px-2 py-1 rounded-md ${
                  todo.completed
                    ? "bg-red-500 text-white"
                    : "bg-green-400 text-white"
                }`}
              >
                {todo.completed ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
