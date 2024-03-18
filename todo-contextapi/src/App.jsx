import React, { useEffect, useState } from "react";
import { TodoProvider } from "./store";
import TodoForm from "./components/todo-form";
import RenderTodo from "./components/render-todo";

const App = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo((prev) => [
      { id: Date.now(), completed: false, todo: newTodo },
      ...prev,
    ]);
  };

  const updateTodo = (updatedTodo, id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: updatedTodo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => todo.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider
      value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex flex-col items-center mt-12">
        <TodoForm />
        <div className="mt-12">
          {todo.map((t) => (
            <div key={t.id} className="mt-2">
              <RenderTodo todo={t} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
