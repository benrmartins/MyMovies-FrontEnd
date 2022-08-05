import React, { useState, Fragment } from 'react'
import watchedService from '../services/watched.service'
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

  const displayWatched = () => {
    return watchedData.map(watched => {
      return(
        <p key={watched.id}>Movie Title: {watched.title}</p>
      )
    })
  }



  return (
    <Container>
      <Form>
        <h3>Save To Watched</h3>
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
