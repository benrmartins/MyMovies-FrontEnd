import React from "react";
import {Routes, Route} from 'react-router-dom'
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import Favorites from "../Favorites/Favorites"
import Home from "../Home/Home"
import Review from "../Review/Review"
import Search from "../Search/Search"
import WantToWatch from "../WantToWatch/WantToWatch"
import Watched from "../Watched/Watch"
import Profile from "../Profile/Profile"
import Navbar from "../Navbar/Navbar"
import Container from "../common/Container"


const AppRouter = () => {

    return (
        <Container>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Search" element={<Search/>}/>
                <Route path="/Watched" element={<Watched/>}/>
                <Route path="/Favorites" element={<Favorites/>}/>
                <Route path="/WantToWatch" element={<WantToWatch/>}/>
                <Route path="/Review" element={<Review/>}/>
            </Routes>
        </Container>
    )
  }
  
  export default AppRouter;