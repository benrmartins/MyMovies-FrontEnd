import React from 'react'
import Container from '../common/Container';
import Splash from '../common/Splash';
import homesplash from '../../assets/homesplash.jpg'


const Home = () => {


  return (
    <Container>
      <Splash image={homesplash} style={{color: "#010101"}}>
        <h1 style={{fontSize: '46px', textShadow: '1px 1px white'}}>Welcome to MyMovies!</h1>
      </Splash>

    </Container>
  )
}

export default Home
