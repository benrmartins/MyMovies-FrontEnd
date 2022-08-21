import React, { useState } from "react";
import AuthService from "../services/auth.service"
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(username, password).then(
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

  return (

    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSignup} style={{marginTop: '1em'}}>
        <InlineInputContainer>
          <Input 
            type="email"
            placeholder="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>
    </Container>



  );
};

export default Register
