import Auth from "@aws-amplify/auth";
import { useState } from "react";
import Container  from 'react-bootstrap/Container';
import {ArrowLeft} from 'react-bootstrap-icons'

function RegisterPage(){
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  async function handleSubmit() {
    try {
      const username = email;
      const signUpResponse = await Auth.signUp({
        username,
        password,
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
  return(
    <div>
      <Container style={{marginTop:"7%",backgroundColor:"#020312", border: "1px solid #f26c4f",height:"40%",width:"30%"}}>
      <div style={{padding:"7%"}}>
            <Container style={{backgroundColor:"#f26c4f"}}>G Signup with Google</Container>
            <p style={{fontSize:"18px",marginTop:"30px"}}>Full Name <text style={{color:"#f26c4f"}}>*</text></p>
            <input value={name} onChange={e => setName(e.target.value)} style={{width:"100%"}}></input>
            <p style={{fontSize:"18px",marginTop:"30px"}}>Email / Mobile Number <text style={{color:"#f26c4f"}}>*</text></p>
            <input value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}></input>
            <p style={{marginTop:"10%",fontSize:"18px"}}>Password<text style={{color:"#f26c4f"}}>*</text></p>
            <input  value={password} onChange={e => setPassword(e.target.value)} style={{width:"100%"}}></input>
            <button onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Signup<ArrowLeft className='button_arrow'/></button>
            <p style={{marginTop:"5%",textAlign:"center",fontStyle:"italic"}}>Already a member? <a href="/login" style={{color:"#f26c4f"}}>Login</a></p>
          </div>
      </Container>
    </div>
  );
}

export default RegisterPage;
