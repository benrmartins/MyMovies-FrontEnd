import React, { useState } from "react";
import axios, { Axios } from "axios";
import ProfileServices from "../services/profile.service"
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";


const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
 

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await ProfileServices.signup(firstName, lastName, age, email, favoriteGenre).then(
        (response) => {
          navigate("/");
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

  const getYourProfiles = async () => {
    try {
      await axios.get('http://localhost:8787/api/profile/', { headers: {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`}}).then((response) => {
        console.log(response.data)
        console.log(JSON.parse(localStorage.getItem("user")).username)
        for (let i = 0; i < response.data.length; i++) {
          if(response.data[i].user.username == JSON.parse(localStorage.getItem("user")).username) {
            console.log("hi")
            localStorage.setItem("profile", JSON.stringify(response.data[i]));
          }
        }
    });
    } catch(err) {
      console.log(err)
    }
  }


  return (
    
    <Container>
      <h1>Create Profile</h1>
      <Form onSubmit={handleSignup} style={{marginTop: '1em'}}>
        <InlineInputContainer>
          <Input 
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            type="text"
            placeholder="Favorite Movie Genre"
            value={favoriteGenre}
            onChange={(e) => setFavoriteGenre(e.target.value)}
          />
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>

      <Button onClick={getYourProfiles}>Sign into profile if already created one</Button>
    </Container>


  
  )
}

export default Profile
