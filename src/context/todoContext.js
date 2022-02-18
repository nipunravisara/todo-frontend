import React, { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { getTodos } from "../services/todoServices";
import { useSnackbar } from "./snackbarContext";

const TodoContext = createContext({});

const TodoProvider = (props) => {
  const [cookies] = useCookies(["access_token"]);
  const [todos, setTodos] = useState([]);
  const { setSnack } = useSnackbar();

  // get todos
  const getAllTodos = async () => {
    const headers = {
      Authorization: `Basic ${cookies.access_token}`,
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

  const todoContextValue = {
    todos,
    getAllTodos,
  };

  return <TodoContext.Provider value={todoContextValue} {...props} />;
};

const useTodo = () => React.useContext(TodoContext);

export { TodoProvider, useTodo };
