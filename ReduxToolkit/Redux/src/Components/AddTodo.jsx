import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  let [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button>AddTodo</button>
      </form>
    </>
  );
}

export default AddTodo;
