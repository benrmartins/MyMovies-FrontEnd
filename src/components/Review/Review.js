import React, { Fragment, useState } from "react";
import ReviewService from "../services/review.service"
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import BorderCardAdv from "../common/BorderCardAdv";
import HorizontalLine from "../common/HorizontalLine";


const Review = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");

  const [reviews, setReviews] = useState([])


  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await ReviewService.postReviews(movieTitle, body, rating).then(
        (response) => {
          navigate("/Review");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  const reviewGet = async (e) => {
    setReviews([])
    try {
      const res = await ReviewService.getReviews();

      setReviews(res.data)

      
    } catch(err) {
      console.log(err)
    }
  }

  const displayReviews = () => {
    console.log("hi")
    return reviews.map(review => {
      return(
        <BorderCardAdv>
            <p key={review.id}>Movie Title: {review.movieTitle }</p>
            <p key={review.id}>Body: {review.body }</p>
            <p key={review.id}>Rate: {review.rating}</p>
        </BorderCardAdv>

      
      )
    })
  }
  



  return (

    <Container>
      <h1>Write Reviews</h1>
      <Form onSubmit={handleSignup} style={{marginTop: '1em'}}>
        <InlineInputContainer>
          <Input 
            type="text"
            placeholder="Movie Title"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            type="text"
            placeholder="Review"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <InlineInputContainer>
          <Input
            type="number"
            placeholder="rating out of 10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </InlineInputContainer>
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>

      <Button onClick={reviewGet}>Click to show all your reviews</Button>

      {reviews.length === 0 ? null : (
        <Fragment>
          <h1>All Your Reviews</h1>
          {displayReviews()}
        </Fragment>
      )}

    </Container>

  )
}

export default Review
