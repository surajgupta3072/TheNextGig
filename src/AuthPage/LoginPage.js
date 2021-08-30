import Auth from "@aws-amplify/auth";
import { useState } from "react";
import Container  from 'react-bootstrap/Container';
import {ArrowLeft} from 'react-bootstrap-icons';
import './AuthPage.css';

function LoginPage(props){
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
  return(
    <div style={{marginTop:"10%",backgroundColor:"#020312", border: "1px solid #f26c4f"}} className="login_container">
      <div style={{padding:"7%"}}>
            <Container style={{backgroundColor:"#f26c4f"}}>G Login with Google</Container>
            <p style={{fontSize:"18px",marginTop:"30px"}}>Email / Mobile Number <text style={{color:"#f26c4f"}}>*</text></p>
            <input value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}></input>
            <p style={{marginTop:"10%",fontSize:"18px"}}>Password<text style={{color:"#f26c4f"}}>*</text></p>
            <input  value={password} onChange={e => setPassword(e.target.value)} style={{width:"100%"}}></input>
            <button  onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Login<ArrowLeft className='button_arrow'/></button>
            <p style={{marginTop:"5%",textAlign:"center",fontStyle:"italic"}}>Not a member yet? <a href="/register" style={{color:"#f26c4f"}}>Sign Up</a></p>
          </div>
      </div>
  );
}

export default LoginPage;
