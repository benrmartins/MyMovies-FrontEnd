import axios from "axios";

const API_URL = "http://localhost:8787/api/review";

const postReviews = (movieTitle, body, rating) => {
  return axios
    .post(API_URL + `/${JSON.parse(localStorage.getItem("profile")).id}`,  {
        movieTitle,
        body,
        rating
    }, { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)

};

const getReviews = async() => {
    return await axios
      .get(API_URL + `/profile/${JSON.parse(localStorage.getItem("profile")).id}`,  
    { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} })
  };

  const getAllReviews = async() => {
    return await axios
      .get(API_URL + `/all`,
    { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} })
  };
  
  const deleteReviews = (watchedId) => {
    return axios
      .delete(API_URL + `/${watchedId}/`, 
      { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
  
  };



const reviewService = {
    postReviews,
    getReviews,
    getAllReviews,
    deleteReviews
  };

export default reviewService