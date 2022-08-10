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
    await watchedService.postWatched(title)
  }

  const getWatchedTitle = async () => {
    const res = await watchedService.getWatched()
    setWatchedData(res.data)
    
  }

  const deleteWatchedTitle = async () => {
    let newId = 0
    watchedData.map(watched => {
      if(watched.title === title) {
        newId = watched.id
      }
    })
    await watchedService.deleteWatched(newId)
   
  }

  const displayWatched = () => {
    return watchedData.map(watched => {
      return(
        <Container>
          <HorizontalLine></HorizontalLine>

          <img src={"https://image.tmdb.org/t/p/w500/"+watched.poster_path} alt = ""/>
          <p key={watched.id}>Movie Title: {watched.title}</p>   
          <p key={watched.id}>Movie Release Date: {watched.release_date}</p>          
          <p key={watched.id}>Movie Rating: {watched.vote_average}</p>          
          <p key={watched.id}>Movie Overview: {watched.overview}</p>

        </Container>
      )
    })
  }



  return (
    <Container>
      <Form>
        <h1>Save To Watched</h1>
        <InlineInputContainer>
            <Input
              type="text"
              placeholder="Input title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InlineInputContainer>
      </Form>
      <Button onClick={postWatchedTitle}>Post To Watched List</Button>

      <Button onClick={deleteWatchedTitle}>Delete Title From Watch List</Button>

      <Button onClick={getWatchedTitle}>Get Your Watched List</Button>


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
