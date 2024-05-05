import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use((request) => {
  console.log(request);
  return request;
});

axios.interceptors.response.use(
  (response) => {
    if (response.message === "Network Error") {
      console.log(response);
      return "Internal Server error";
    } else {
      return response;
    }
  },
  (error) => {
    Promise.reject(error);
  }
);
