import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL
const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: process.env.BACKEND_URL,
              
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
