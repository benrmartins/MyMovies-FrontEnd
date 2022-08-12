import React, { useState, Fragment } from 'react'
import wantToWatchService from '../services/wanttowatch.service';
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import HorizontalLine from '../common/HorizontalLine';
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";


const WantToWatch = () => {
  const [title, setTitle] = useState("")
  const [wantToWatchData, setWantToWatchData] = useState([])

  const postWantToWatchTitle = async () => {
    try {
      await wantToWatchService.postWantToWatch(title)
      alert("Successfully posted movie to Want To Watch list")
    } catch (error) {
      alert("Title does not exists in Want To Watch List")

    }
  }

  const getWantToWatchTitle = async () => {
    const res = await wantToWatchService.getWantToWatch()
    setWantToWatchData(res.data)
    
  }


  const deleteWantToWatchTitle = async () => {
    try {
      let newId = 0
      wantToWatchData.map(wantToWatch => {
      if(wantToWatch.title === title) {
        newId = wantToWatch.id
      }
      })
    await wantToWatchService.deleteWantToWatch(newId)
    alert("Successfully deleted the title")
    }catch (error) {
      alert("Watched List does not contain the title") 
    }
   
  }


  const displayWantToWatch = () => {
    return wantToWatchData.map(wantToWatch => {
      return(
        <Container>
          <HorizontalLine></HorizontalLine>

          <img src={"https://image.tmdb.org/t/p/w500/"+wantToWatch.poster_path} alt = ""/>
          <p key={wantToWatch.id}>Movie Title: {wantToWatch.title}</p>          
          <p key={wantToWatch.id}>Movie Release Date: {wantToWatch.release_date}</p>          
          <p key={wantToWatch.id}>Movie Rating: {wantToWatch.vote_average}</p>   
          <p key={wantToWatch.id}>Movie Overview: {wantToWatch.overview}</p>

        </Container>
      )
    })
  }



  return (
    <Container>
      <Form>
        <h1>Save To Want To Watch</h1>
        <InlineInputContainer>
            <Input
              type="text"
              placeholder="Input title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InlineInputContainer>
      </Form>
      <Button onClick={postWantToWatchTitle}>Post To Want To Watch List</Button>

      <Button onClick={deleteWantToWatchTitle}>Delete Title From Want To Watch List</Button>

      <Button onClick={getWantToWatchTitle}>Get Your Want To Watch List</Button>

      {wantToWatchData.length == 0 ? null : (
        <Fragment>
          <h1>Movies</h1>
          {displayWantToWatch()}
        </Fragment>
      )}

    </Container>
  )
}

export default WantToWatch
