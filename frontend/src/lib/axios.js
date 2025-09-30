import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api", // 👈 two slashes after http:
});

export default api;
