import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    // Authorization: token(),
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const tokenValue = token();
    if (tokenValue) {
      config.headers.Authorization = tokenValue;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function token() {
  const storage = localStorage.getItem("user");
  if (storage) {
    const user = JSON.parse(storage);

    console.log("user", user);
    if (user?.data?.token) {
      return user?.data?.token;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
