import React from "react";

function AddTodo({ input, setInput, handleAddOrUpdateTodo, editId }) {
  return (
    <form onSubmit={handleAddOrUpdateTodo}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>{editId ? "Update Todo" : "Add Todo"}</button>
    </form>
  );
}

export default AddTodo;
