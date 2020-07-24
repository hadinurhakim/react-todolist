import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoLists = () => {
  const [todos, setTodos] = useState([
    {
      text: ""
    },
    {
      text: " "
    },
    {
      text: " "
    },
    {
      text: "  "
    },
    {
      text: "  "
    }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoLists;
