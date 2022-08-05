import axios from "axios";

const API_URL = "http://localhost:8787/api/search";

const getUpComming = async() => {
    return await axios
    .get(API_URL + "/upcomming", { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} })
};

const getTopRated = async() => {
    return await axios
    .get(API_URL + "/toprated", { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} })
};

const getPopular = async() => {
    return await axios
    .get(API_URL + "/popular", { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} })
};

const getNowPlaying = async() => {
    return await axios
    .get(API_URL + "/nowplaying", { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} })
};

const searchService = {
    getUpComming,
    getTopRated,
    getPopular,
    getNowPlaying
  };

  export default searchService