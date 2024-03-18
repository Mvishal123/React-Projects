import React, { useEffect, useState } from "react";
import { TodoProvider } from "./store";

const App = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo((prev) => [{ id: new Date.now(), ...newTodo }, ...prev]);
  };

  const updateTodo = (updatedTodo, id) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? updateTodo : prevTodo))
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
      <div className="">hey</div>
    </TodoProvider>
  );
};

export default App;
