import React, { useState } from "react";
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
      <h1>Login</h1>
    <Form onSubmit={handleLogin} style={{marginTop: '1em'}}>
      <InlineInputContainer>
        <Input 
        type="text"
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
      <Button>Submit</Button>
    </Form>
    </Container>


  );
};

export default Login
