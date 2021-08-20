import Auth from "@aws-amplify/auth";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button  from "react-bootstrap/Button";
import Container  from 'react-bootstrap/Container';

function LoginPage(props) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  async function handleSubmit() {
    try {
      const username = email;
      const userLogin = await Auth.signIn(username, password);
      props.auth.setUser(userLogin);
      props.auth.setAuthStatus(true);
      window.location.href = "/";
    } 
    catch (error) {
      console.log(error);
    }
  }
  
  return (
  <div>
   <Container>
    <Form>
    <Form.Group style={{marginTop:"1%"}}>
      <Form.Label style={{fontSize: "13px"}}>Email:</Form.Label>
      <Form.Control  value={email} onChange={e => setEmail(e.target.value)} style={ {color: "black", fontSize: "15px"}} />
    </Form.Group>
    <Form.Group style={{marginTop:"1%"}}>
      <Form.Label style={{fontSize: "13px"}}>Password:</Form.Label>
      <Form.Control  value={password} onChange={e => setPassword(e.target.value)} style={ {color: "black", fontSize: "15px"}} />
    </Form.Group>
    <Button style={{marginTop:"5%"}} onClick={handleSubmit}>Login</Button>
    <a style={{marginTop:"5%"}} href="/register">Register</a>
    </Form>
  </Container>
  </div>
  )
}

export default LoginPage;
