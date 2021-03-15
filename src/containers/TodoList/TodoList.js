import React, { useState } from "react";

import Todo from "../../components/Todo/Todo";
import TodoInput from "../../components/TodoInput/TodoInput";

function TodoList() {
  // Declare a new state variable, which we'll call "todos"
  const [todos, setTodos] = useState([
    { id: 1, todo: "eat" },
    { id: 2, todo: "sleep" },
    { id: 3, todo: "fart" },
  ]);

  const [currTodoId, setCurrTodoId] = useState(4);

  const addTodoHandler = (todo) => {
    setTodos((todos) => {
      return [...todos, { id: currTodoId, todo }];
    });
    setCurrTodoId((currTodoId) => currTodoId + 1);
  };

  const removeTodoHandler = (todoId) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo.todo}
            clicked={() => removeTodoHandler(todo.id)}
          />
        ))}
      </ul>
      <TodoInput addTodo={addTodoHandler} />
    </div>
  );
}

export default TodoList;
