import axios from "axios";

const API_URL = "http://localhost:8787/api/watched";

const postWatched = (title) => {
    return axios
      .post(API_URL + `/${JSON.parse(localStorage.getItem("profile")).id}/${title}`, {},
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

const getWatched = () => {
    return axios
      .get(API_URL + `/profile/${JSON.parse(localStorage.getItem("profile")).id}`, 
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

const deleteWatched = (watchedId) => {
    return axios
      .delete(API_URL + `/${watchedId}/`, 
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

  const watchedService = {
    postWatched,
    getWatched,
    deleteWatched
  };

  export default watchedService

