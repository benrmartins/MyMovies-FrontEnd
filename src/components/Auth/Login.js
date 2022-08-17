import React, { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import Form from "../common/Form";
import Input from "../common/Input"
import Container from "../common/Container";
import InlineInputContainer from "../common/InlineInputContainer"
import Button from "../common/Button"



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password).then(
        () => {
          navigate("/Profile");
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
      <h1>Login</h1>
    <Form onSubmit={handleLogin} style={{marginTop: '1em'}}>
      <InlineInputContainer>
        <Input 
        type="email"
        placeholder="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      </InlineInputContainer>
      <InlineInputContainer>
        <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </InlineInputContainer>
      <Button onClick={getYourProfiles}>Submit</Button>
    </Form>
    </Container>


  );
};

export default Login
