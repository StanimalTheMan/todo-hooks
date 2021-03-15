import React from "react";

const Todo = (props) => {
  return <li onClick={props.clicked}>{props.todo}</li>;
};

export default Todo;
