import React, { useState } from "react";
import { useTodo } from "../store";

const RenderTodo = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [checked, setChecked] = useState(todo.completed);
  const [isEditable, setEditable] = useState(false);

  const { deleteTodo, toggleComplete, updateTodo } = useTodo();

  const toggleCompleted = () => {
    toggleComplete(todo.id);
    setChecked((prev) => !prev);
  };
  const deletehandler = () => {
    deleteTodo(todo.id);
  };

  const updateHandler = () => {
    updateTodo(todoMsg, todo.id);
    setEditable(false);
  };

  return (
    <div
      className={`w-[25em] sm:w-[40rem] border py-4 px-2 rounded flex items-center justify-between gap-4  ${
        checked && "border-green-500/50 bg-green-100/25"
      }`}
    >
      <input
        type="checkbox"
        name="cheked"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        value={todoMsg}
        className={`${isEditable ? "border" : ""} w-full truncate py-2 rounded`}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <div className="flex items-center gap-2">
        <button
          className={`border p-1 rounded ${checked && "cursor-not-allowed"}`}
          onClick={() => {
            if (todo.completed) return;
            if (isEditable) {
              updateHandler();
            } else {
              setEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {isEditable ? "✅" : "✏️"}
        </button>
        <button
          className={`border p-1 rounded border-red-400 bg-red-200/50 `}
          onClick={deletehandler}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default RenderTodo;
