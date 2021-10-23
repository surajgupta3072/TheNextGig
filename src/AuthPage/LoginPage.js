import Auth from "@aws-amplify/auth";
import { useState } from "react";
import Container  from 'react-bootstrap/Container';
import {ArrowLeft} from 'react-bootstrap-icons';
import './AuthPage.css';
import { FaGoogle } from 'react-icons/fa';
import MyVerticallyCenteredModal  from "./RegisterPageModal";
import docClient from '../GigsPage/GigsAWS';

function LoginPage(props){
  const [modalShow, setModalShow] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [showerr, setShowErr] = useState(false);

  async function handleSubmit() {
    try {
      const username = email;
      const userLogin = await Auth.signIn(username, password);
      props.auth.setUser(userLogin);
      props.auth.setAuthStatus(true);
      setShowErr(false);
      let paramss = {
        TableName: "UsersTable",
        KeyConditionExpression: "#Uid = :UserID",
        ExpressionAttributeNames: {
          "#Uid": "UserID",
        },
        ExpressionAttributeValues: {
          ":UserID": userLogin.username,
        },
      };
      try {
        const data1 = await docClient.query(paramss).promise();
        const per = data1.Items[0].RewardP + data1.Items[0].RewardE + data1.Items[0].RewardW + data1.Items[0].RewardS + data1.Items[0].RewardC;
        if(per==100) {
          window.location.href = localStorage.getItem("lastURL");
        }
        else {
          setModalShow(true);
        }
      }
      catch (err) {
        console.log(err);
      }
    } 
    catch (error) {
      setShowErr(error.message);
    }
  }

  return(
    <div style={{marginTop:"10%",backgroundColor:"#020312", border: "1px solid #f26c4f"}} className="login_container">
      <div style={{paddingRight:"7%",paddingLeft:"7%",paddingTop:"7%",paddingBottom:"2%"}}>
        <Container onClick={()=>Auth.federatedSignIn({provider: 'Google'})} style={{cursor:"pointer",backgroundColor:"#f26c4f", height:"30px", display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
          <FaGoogle/>
          <b>Login with Google</b>
        </Container>
        <p style={{textAlign:"center",marginTop:"10px",fontWeight:"bold", color:"rgba(242, 108, 79, 1)"}}>OR</p>
        <p style={{fontSize:"18px"}}>Email<text style={{color:"#f26c4f"}}>*</text></p>
        <input value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}></input>
        <p style={{fontSize:"18px", marginTop:"20px"}}>Password<text style={{color:"#f26c4f"}}>*</text></p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{width:"100%"}}></input>
        <button onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"33%"}}>Login<ArrowLeft className='button_arrow'/></button>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        {showerr!==false &&
          <div>
            <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>
            <p onClick={()=>window.location.href="/forgotpassword"} style={{color:"#f26c4f", textAlign:"center", cursor:"pointer"}}>Forgot Password?</p>
          </div>
        }
        <p style={{marginTop:"5%",textAlign:"center",fontStyle:"italic"}}>Not a member yet? <a href="/register" style={{color:"#f26c4f"}}>Sign Up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
