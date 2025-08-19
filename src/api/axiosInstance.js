import axios from "axios";
const ORIGIN = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: `${ORIGIN}`,
  headers: { "Content-Type": "application/json" },
});

export default api;
