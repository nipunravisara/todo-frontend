import API from "../services/api";

export async function loginUser(email, password) {
  try {
    const { data } = await API.post("api/auth/login", {
      email,
      password,
    });
    console.log(111, data);
    return data;
  } catch (error) {
    console.log(222, error);
    // const { data } = error.response;
    return error.response;
  }
}

export async function refreshToken() {
  try {
    const { data } = await API.post("api/auth/refresh-token");

    return data;
  } catch (error) {
    const { data } = error.response;
    return data;
  }
}
