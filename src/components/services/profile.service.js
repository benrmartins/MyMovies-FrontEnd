import axios from "axios";

const API_URL = "http://localhost:8787/api";

const signup = (firstName, lastName, age, email, favoriteGenre) => {
  return axios
    .post(API_URL + "/profile/",  {
        firstName,
        lastName,
        age,
        email,
        favoriteGenre
    }, { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },
    ).then((response) => {
        localStorage.setItem("profile", JSON.stringify(response.data));
        return response.data;
      });
};

const deleteProfile = () => {
  return axios
    .delete(API_URL + `/profile/${JSON.parse(localStorage.getItem("profile")).id}`, 
    { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`} },)
}





const profileService = {
    signup,
    deleteProfile
  };

export default profileService