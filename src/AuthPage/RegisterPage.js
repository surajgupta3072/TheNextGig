import Auth from "@aws-amplify/auth";
import { useState } from "react";
import Container  from 'react-bootstrap/Container';
import {ArrowLeft} from 'react-bootstrap-icons'
import './AuthPage.css';
import { FaGoogle } from 'react-icons/fa';
import docClient from './../GigsPage/GigsAWS';

function RegisterPage(){
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [showerr, setShowErr] = useState(false);

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
      setShowErr(false);
      var params = {
        TableName: "UsersTable",
        Item: {"UserID":signUpResponse.userSub, "FullName":name, "Email":email, "RewardP":0, "RewardE":0, "RewardW":0, "RewardS":0, "RewardC":0, "TotalRewards":0, "MasterclassesPurchased":[], "gigsApplications":[]}
      }
      docClient.put(params, function (err, data) {
          if (err) {
            console.log('Error', err)
          } else {
            window.location.href = "/login";
          }
      })
    } 
    catch (error) {
      setShowErr(error.message);
    }
  }
  return(
    <div className="register_container" style={{marginTop:"7%",backgroundColor:"#020312", border: "1px solid #f26c4f"}}>
      <div style={{paddingRight:"7%",paddingLeft:"7%",paddingTop:"7%",paddingBottom:"0%"}}>
        <Container style={{backgroundColor:"#f26c4f", height:"30px", display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
          <FaGoogle/>
          <b>Signup with Google</b>
        </Container>
        <p style={{textAlign:"center",marginTop:"10px",fontWeight:"bold",color: "rgba(242, 108, 79, 1)"}}>OR</p>
        <p style={{fontSize:"18px"}}>Full Name <text style={{color:"#f26c4f"}}>*</text></p>
        <input value={name} onChange={e => setName(e.target.value)} style={{width:"100%"}}></input>
        <p style={{fontSize:"18px",marginTop:"30px"}}>Email<text style={{color:"#f26c4f"}}>*</text></p>
        <input value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}></input>
        <p style={{marginTop:"10%",fontSize:"18px"}}>Password<text style={{color:"#f26c4f"}}>*</text></p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{width:"100%"}}></input>
        <button onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"32%"}}>Signup<ArrowLeft className='button_arrow'/></button>
        {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
        <p style={{marginTop:"5%",textAlign:"center",fontStyle:"italic"}}>Already a member? <a href="/login" style={{color:"#f26c4f"}}>Login</a></p>
      </div>
    </div>
  );
}

export default RegisterPage;
