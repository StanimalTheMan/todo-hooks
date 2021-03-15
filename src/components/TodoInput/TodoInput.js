import React, { useState } from "react";

const TodoInput = (props) => {
  const [todoInput, setTodoInput] = useState("");

  const updateTodoInput = (event) => {
    setTodoInput(event.target.value);
  };

  const submitTodo = () => {
    props.addTodo(todoInput);
    setTodoInput("");
  };

  return (
    <React.Fragment>
      <input type="text" value={todoInput} onChange={updateTodoInput}></input>
      <button type="submit" onClick={submitTodo}>
        Submit
      </button>
    </React.Fragment>
  );
};

export default TodoInput;
