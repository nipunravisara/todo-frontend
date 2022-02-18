import React, { useEffect } from "react";
import { useTodo } from "../context/todoContext";
import Container from "@mui/material/Container";
import TodoItem from "../components/TodoItem";

export default function HomePage() {
  const { todos, getAllTodos } = useTodo();

  useEffect(() => {
    getAllTodos();
  }, []);

  console.log(todos);
  return (
    <div>
      <Container maxWidth="sm">
        {todos.map((todo, idx) => (
          <TodoItem
            key={`${todo.title}${idx}`}
            title={todo.title}
            status={todo.status}
          />
        ))}
      </Container>
    </div>
  );
}
