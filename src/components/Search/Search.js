import React, { Fragment, useState } from "react";
import searchService from '../services/search.service'
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";


const Search = () => {
  
  const [search, setSearch] = useState("")
  const [searchdata, setSearchData] = useState([])

  const changeSearch = (search) => {
    setSearch(search)
  }


  const getSearchData = async () => {
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
    }
  }

  const displaySearch = () => {
    console.log(searchdata)
    return searchdata.map(search => {
      return(
        <p key={search.id}>Movie Title: {search.title}</p>
      )
    })
  }

  

  return (
    <Container>
      <Form>
      <h1>Search</h1>
      <select 
        onChange={(e) => changeSearch(e.target.value)}
        value={search}>
          <option value="">Select</option>
          <option value="upComming">Up Comming Movies</option>
          <option value="topRated">Top Rated Movies</option>
          <option value="popular">Popular Movies</option>
          <option value="nowPlaying">Now PLaying Movies in Theaters</option>
      </select>
      
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
