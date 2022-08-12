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
    try {
      await favoritesService.postFavorites(title)
      alert("Successfully posted movie to Watched List")
    } catch (error) {
      alert("Title does not exists in Watched List")

    }
  }

  const getFavoritesTitle = async () => {
    const res = await favoritesService.getFavorites()
    setFavoritesData(res.data)
    
  }

  const deleteFavoriteTitle = async () => {
    try {
      let newId = 0
      favoriteData.map(favorite => {
      if(favorite.title === title) {
        newId = favorite.id
      }
      })
      await favoritesService.deleteFavorites(newId)
      alert("Successfully deleted the title")
    } catch (error) {
      alert("Watched List does not contain the title")
    }
    
   
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

      <Button onClick={deleteFavoriteTitle}>Delete Title From Watched List</Button>


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
