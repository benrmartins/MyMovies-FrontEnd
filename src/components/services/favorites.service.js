import axios from "axios";

const API_URL = "http://localhost:8787/api/favorites";

const postFavorites = (title) => {
    return axios
      .post(API_URL + `/${JSON.parse(localStorage.getItem("profile")).id}/${title}`, {} ,
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

const getFavorites = () => {
    return axios
      .get(API_URL + `/profile/${JSON.parse(localStorage.getItem("profile")).id}`, 
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

const deleteFavorites = (favoritesId) => {
    return axios
      .delete(API_URL + `/${favoritesId}`, 
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };

  const favoritesService = {
    postFavorites,
    getFavorites,
    deleteFavorites,

  };

  export default favoritesService

