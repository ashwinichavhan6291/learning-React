import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos({ handleEdit }) {
  const todos = useSelector((state) => state.todo?.todos || []);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          <button onClick={() => handleEdit(todo.id)}>Edit</button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
