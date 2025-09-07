import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002", // backend
  withCredentials: true
});

export default instance;
