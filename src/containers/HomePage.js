import React, { useEffect } from "react";
import { useTodo } from "../context/todoContext";
import Container from "@mui/material/Container";
import TodoItem from "../components/TodoItem";

export default function HomePage() {
  const { todos, getAllTodos, changeTodoStatus } = useTodo();

  useEffect(() => {
    getAllTodos();
  }, []);

  console.log(todos);
  if (todos.length > 0) {
    return (
      <div>
        <Container maxWidth="sm">
          {todos.map((todo, idx) => (
            <TodoItem
              key={`${todo.title}${idx}`}
              id={todo._id}
              title={todo.title}
              status={todo.status}
              changeTodoStatus={changeTodoStatus}
            />
          ))}
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container maxWidth="sm">No todos yet.</Container>
      </div>
    );
  }
}
