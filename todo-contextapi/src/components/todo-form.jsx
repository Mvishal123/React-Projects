import React, { useState } from "react";
import { useTodo } from "../store";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = () => {
    if (!todo) return;

    addTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex gap-1 w-[90%] sm:w-[40rem]">
      <input
        type="text"
        placeholder="Add todo..."
        className="border p-2 rounded w-full"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className="bg-teal-500 px-3 rounded" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
