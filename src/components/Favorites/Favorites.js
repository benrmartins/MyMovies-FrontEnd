import React, { useState, Fragment } from 'react'
import favoritesService from "../services/favorites.service"
import HorizontalLine from '../common/HorizontalLine';
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";


const Favorites = () => {
  const [title, setTitle] = useState("")
  const [favoriteData, setFavoritesData] = useState([])

  const postFavoritesTitle = async () => {
    await favoritesService.postFavorites(title)
  }

  const getFavoritesTitle = async () => {
    const res = await favoritesService.getFavorites()
    setFavoritesData(res.data)
    
  }

  const displayFavorites= () => {
    return favoriteData.map(favorite => {
      return(
        <Container>
          <HorizontalLine></HorizontalLine>

          <img src={"https://image.tmdb.org/t/p/w500/"+favorite.poster_path} alt = ""/>
          <p key={favorite.id}>Movie Title: {favorite.title}</p>
          <p key={favorite.id}>Movie Release Date: {favorite.release_date}</p>          
          <p key={favorite.id}>Movie Rating: {favorite.vote_average}</p>   
          <p key={favorite.id}>Movie Overview: {favorite.overview}</p>
        </Container>
      )
    })
  }



  return (
    <Container>
      <Form>
        <h1>Save To Favorites</h1>
        <InlineInputContainer>
            <Input
              type="text"
              placeholder="Input title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InlineInputContainer>
      </Form>
      <Button onClick={postFavoritesTitle}>Post To Favorites List</Button>

      <Button onClick={getFavoritesTitle}>Get Your Favorites List</Button>

      {favoriteData.length == 0 ? null : (
        <Fragment>
          <h1>Movies</h1>
          {displayFavorites()}
        </Fragment>
      )}

    </Container>
  )
}

export default Favorites
