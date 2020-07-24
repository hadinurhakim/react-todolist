import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "belajar React"
    },
    {
      text: "belajar React HOoks"
    },
    {
      text: "belajar React props"
    },
    {
      text: "belajar React dasd "
    },
    {
      text: "belajar React state tapi "
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
