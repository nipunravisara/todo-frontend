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
