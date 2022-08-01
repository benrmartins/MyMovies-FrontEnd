import React from 'react'
import Container from '../common/Container';
import Splash from '../common/Splash';
import homesplash from '../../assets/homesplash.jpg'


const Home = () => {

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload(false); 
   };

  return (
    <Container>
      <Splash image={homesplash} style={{color: "#010101"}}>
        <h1 style={{textShadow: '1px 1px white'}}>Welcome to MyMovies!</h1>
      </Splash>
      <button onClick={logout}>Logout</button>

    </Container>
  )
}

export default Home
