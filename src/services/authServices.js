import API from "../services/api";

export async function registerUser(name, email, password) {
  try {
    const { data } = await API.post("api/auth/register", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    const { data } = error.response;
    return data;
  }
}

export async function loginUser(email, password) {
  try {
    const { data } = await API.post("api/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    const { data } = error.response;
    return data;
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
