import API from "../services/api";

export async function getTodos(headers) {
  try {
    const { data } = await API.get("api/todo", { headers });
    return data;
  } catch (error) {
    const { data } = error.response;
    return data;
  }
}

export async function changeTodoState(headers, id, status) {
  const todoData = { id, status };

  try {
    const { data } = await API.get("api/todo/change-status", todoData, {
      headers,
    });
    return data;
  } catch (error) {
    const { data } = error.response;
    return data;
  }
}
