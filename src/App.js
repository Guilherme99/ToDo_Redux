import React from "react";

import Item from "./components/Item";

import { useSelector, useDispatch } from "react-redux";

import {
  getTodos,
  setTodo,
  setTodos,
  deleteTodo,
  setEditing,
  setTodosEditing
} from "./actions";

export default function App() {
  const dispatch = useDispatch();

  const { todo, todos, isEditing } = useSelector(state => state);

  React.useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    if (isEditing >= 0) {
      dispatch(setTodosEditing());
      dispatch(setEditing(-1));
    } else {
      dispatch(setTodos());
    }

    dispatch(setTodo(""));
  };

  const handleChange = event => dispatch(setTodo(event.target.value));
  const handleEdit = index => {
    dispatch(setTodo(todos[index]));
    dispatch(setEditing(index));
  };
  const handleDelete = index => dispatch(deleteTodo(index));

  return (
    <div className="App">
      <h1>ToDo</h1>

      <div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="todo" />
            <input type="text" value={todo} onChange={handleChange} />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>

      <ul className="todos">
        {todos.map((todo, index) => (
          <Item
            key={`${todo}-${index}`}
            todo={todo}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
