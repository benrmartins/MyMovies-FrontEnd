import React, { useState, Fragment } from 'react'
import watchedService from '../services/watched.service'
import HorizontalLine from '../common/HorizontalLine';
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";



const Watch = () => {
  
  const [title, setTitle] = useState("")
  const [watchedData, setWatchedData] = useState([])

  const postWatchedTitle = async () => {

    try {
      await watchedService.postWatched(title)
      alert("Successfully posted movie to Watched List")
    } catch (error) {
      alert("Title does not exists in Watched List")

    }
  }

  const getWatchedTitle = async () => {
    const res = await watchedService.getWatched()
    setWatchedData(res.data)
    
  }

  const deleteWatchedTitle = async () => {
    try {
      let newId = 0
      watchedData.map(watched => {
        if(watched.title === title) {
          newId = watched.id
        }
      })
      await watchedService.deleteWatched(newId)
      alert("Successfully deleted the title")
    } catch (error) {
      alert("Watched List does not contain the title")

    }
   
   
  }

  const displayWatched = () => {
    return watchedData.map(watched => {
      return(
        
        <div className="showSearch">
          <img src={"https://image.tmdb.org/t/p/w500/"+watched.poster_path} alt = ""/>
          <p key={watched.id}>Movie Title: {watched.title}</p>   
          <p key={watched.id}>Movie Release Date: {watched.release_date}</p>          
          <p key={watched.id}>Movie Rating: {watched.vote_average}</p>          
          <p key={watched.id}>Movie Overview: {watched.overview}</p>
        </div>

      )
    })
  }



  return (
    <Container>
      <Form>
        <h1>Save To Watched List</h1>
        <InlineInputContainer>
            <Input
              type="text"
              placeholder="Input title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InlineInputContainer>
      </Form>
      <Button onClick={postWatchedTitle}>Save Movie</Button>

      <Button onClick={deleteWatchedTitle}>Delete Movie Title </Button>

      <Button onClick={getWatchedTitle}>Display List</Button>


      {watchedData.length == 0 ? null : (
        <Fragment>
          <h1>Movies</h1>
          {displayWatched()}
        </Fragment>
      )}

    </Container>
  )
}

export default Watch
