import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "./features/todo/todoSlice";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo?.todos || []);

  const handleAddOrUpdateTodo = (e) => {
    e.preventDefault();

    if (editId) {
      dispatch(updateTodo({ id: editId, text: input }));
      setEditId(null);
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInput(todoToEdit.text);
      setEditId(id);
    }
  };

  return (
    <div>
      <AddTodo
        input={input}
        setInput={setInput}
        handleAddOrUpdateTodo={handleAddOrUpdateTodo}
        editId={editId}
      />
      <Todos handleEdit={handleEdit} />
    </div>
  );
}

export default App;
