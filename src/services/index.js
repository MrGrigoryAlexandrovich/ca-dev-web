import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ca-dev-api.onrender.com/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
