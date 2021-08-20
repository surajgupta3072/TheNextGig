import Auth from "@aws-amplify/auth";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button  from "react-bootstrap/Button";
import Container  from 'react-bootstrap/Container';

function RegisterPage() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone_number, setPhoneNumber] = useState();

  async function handleSubmit() {
    try {
      const username = email;
      const signUpResponse = await Auth.signUp({
        username,
        password,
        phone_number,
        attributes: {
          email,
          name,
        },
      });
      window.location.href = "/login";
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
      <Form.Label style={{fontSize: "13px"}}>Name:</Form.Label>
      <Form.Control  value={name} onChange={e => setName(e.target.value)} style={ {color: "black", fontSize: "15px"}} />
    </Form.Group>
    <Form.Group style={{marginTop:"1%"}}>
      <Form.Label style={{fontSize: "13px"}}>Email:</Form.Label>
      <Form.Control  value={email} onChange={e => setEmail(e.target.value)} style={ {color: "black", fontSize: "15px"}} />
    </Form.Group>
    <Form.Group style={{marginTop:"1%"}}>
      <Form.Label style={{fontSize: "13px"}}>Password:</Form.Label>
      <Form.Control  value={password} onChange={e => setPassword(e.target.value)} style={ {color: "black", fontSize: "15px"}} />
    </Form.Group>
    <Form.Group style={{marginTop:"1%"}}>
      <Form.Label style={{fontSize: "13px"}}>Phone Number:</Form.Label>
      <Form.Control  value={phone_number} onChange={e => setPhoneNumber(e.target.value)} style={ {color: "black", fontSize: "15px"}} />
    </Form.Group>
    </Form>
    <Button style={{marginTop:"5%"}} onClick={handleSubmit}>Register</Button>
    <a style={{marginTop:"5%"}} href="/login">Login</a>
  </Container>
  </div>
  )
}

export default RegisterPage;
