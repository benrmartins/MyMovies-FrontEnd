import axios from "axios";

const API_URL = "http://localhost:8787/api/wanttowatch";

const postWantToWatch = (title) => {
    return axios
      .post(API_URL + `/${JSON.parse(localStorage.getItem("profile")).id}/${title}`, {},
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

const getWantToWatch = () => {
    return axios
      .get(API_URL + `/profile/${JSON.parse(localStorage.getItem("profile")).id}`, 
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

const deleteWantToWatch = (favoritesId) => {
    return axios
      .delete(API_URL + `/${favoritesId}`, 
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

  const wantToWatchService = {
    postWantToWatch,
    getWantToWatch,
    deleteWantToWatch
  };

  export default wantToWatchService