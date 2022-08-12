import axios, { Axios } from "axios";

const API_URL = "http://localhost:8787/api/auth";



const signup = (username, password) => {
  return axios
    .post(API_URL + "/signup", {
        username,
        password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }).catch((err) => {
      alert("Incorrect Login Information")
    })
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("profile");

};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;