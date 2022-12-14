import React, { Fragment, useState } from "react";
import searchService from '../services/search.service'
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import HorizontalLine from "../common/HorizontalLine";


const Search = () => {
  
  const [search, setSearch] = useState("")
  const [searchdata, setSearchData] = useState([])
  const [title, setTitle] = useState("")

  const changeSearch = (search) => {
    setSearch(search)
  }


  const getSearchData = async () => {
    setSearchData([])
    if(search === "upComming") {
      const res = await searchService.getUpComming();
      setSearchData(res.data.results)
    } else if(search === "topRated") {
      const res = await searchService.getTopRated();
      setSearchData(res.data.results)
    } else if(search === "popular") {
      const res = await searchService.getPopular();
      setSearchData(res.data.results)
    } else if(search === "nowPlaying") {
      const res = await searchService.getNowPlaying();
      setSearchData(res.data.results)
    } else {
      getSeachTitle()
    }
  }

  const displaySearch = () => {
    console.log(searchdata)
    return searchdata.map(search => {
      return(

          <div className="showSearch">
            <img src={"https://image.tmdb.org/t/p/w500/"+search.poster_path} alt = ""/>
            <div key={search.id}><b>Movie Title:</b> {search.title}</div>
            <div key={search.id}><b>Movie Release Date:</b> {search.release_date}</div>          
            <div key={search.id}><b>Movie Rating:</b> {search.vote_average}</div>          
            <div key={search.id}><b>Movie Overview:</b> {search.overview}</div>
          </div>

      )
    })
  }

  const getSeachTitle = async () => {

    try {
      const res = await searchService.getSearchByTitle(title)
      setSearchData(res.data.results)
    } catch (error) {
      alert("There is no movie by that title")
    }
    
  }

  

  return (
    <Container>
      <Form>
      <h1>Search</h1>
    
      <select 
        onChange={(e) => changeSearch(e.target.value)}
        value={search} className="selectMovie">
          <option value="">Search Movie By Title</option>
          <option value="upComming">Up Comming Movies</option>
          <option value="topRated">Top Rated Movies</option>
          <option value="popular">Popular Movies</option>
          <option value="nowPlaying">Now Playing Theaters</option>
      </select>
      
      <h3>Search By Title</h3>
      <InlineInputContainer>
          <Input
            type="text"
            placeholder="Input title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InlineInputContainer>


      </Form>
      <Button onClick={getSearchData}>Search</Button>

      {searchdata.length === 0 ? null : (
        <Fragment>
          <h1>Movies</h1>
          {displaySearch()}
        </Fragment>
      )}
    </Container>
  )

}

export default Search
