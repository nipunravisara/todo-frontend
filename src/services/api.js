import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ENDPOINT_URL,
  withCredentials: true,
});
