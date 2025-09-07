import axios from "axios";

const instance = axios.create({
  baseURL: "https://zerodha-backend-o0vr.onrender.com", // backend
  withCredentials: true
});

export default instance;
