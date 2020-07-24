import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoLists = () => {
  const [todos, setTodos] = useState([
    {
      text: "belajar"
    },
    {
      text: "asd "
    },
    {
      text: "asdasdasd "
    },
    {
      text: "  asdasdasd"
    },
    {
      text: " asdasdas "
    }
  ]);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };
  return (
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoLists;
