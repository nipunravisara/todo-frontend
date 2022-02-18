import React, { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { changeTodoState, getTodos } from "../services/todoServices";
import { useSnackbar } from "./snackbarContext";

const TodoContext = createContext({});

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const { setSnack } = useSnackbar();

  // get todos
  const getAllTodos = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    const response = await getTodos(headers);

    if (response.success) {
      setTodos(response.data);
    } else {
      setSnack({
        open: true,
        message: response.message,
        severity: "error",
      });
    }
  };

  // change state
  const changeTodoStatus = async (id, status) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    const response = await changeTodoState(headers, id, status);

    if (response.success) {
      setTodos(response.data);
    } else {
      setSnack({
        open: true,
        message: response.message,
        severity: "error",
      });
    }
  };

  const todoContextValue = {
    todos,
    getAllTodos,
    changeTodoStatus,
  };

  return <TodoContext.Provider value={todoContextValue} {...props} />;
};

const useTodo = () => React.useContext(TodoContext);

export { TodoProvider, useTodo };
