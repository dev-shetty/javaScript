import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdd, toggleTodo } from "../features/todo";

function Todo() {
  const todoList = useSelector((state) => state.todo.value);
  const todoItems = useDispatch();
  const [todo, setTodo] = useState("");
  const handleTodoChange = (event) => {
    const value = event.target.value;
    setTodo(value);
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>Todo</p>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={handleTodoChange}
        />
        <button
          onClick={() =>
            todoItems(
              toggleTodo({
                id: 1,
              })
            )
          }
        >
          X
        </button>
      </div>
      <button
        onClick={() =>
          todoItems(
            todoAdd({
              id: 1,
              todoItem: todo,
              isCompleted: false,
            })
          )
        }
      >
        Add
      </button>

      <div>
        <div>{todoList}</div>
      </div>
    </div>
  );
}

export default Todo;
