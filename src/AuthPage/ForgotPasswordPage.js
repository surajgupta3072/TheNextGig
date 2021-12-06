import Auth from "@aws-amplify/auth";
import { useState } from "react";
import {ArrowLeft} from 'react-bootstrap-icons';
import docClient from './../GigsPage/GigsAWS';
import './AuthPage.css';

function ForgotPasswordPage(){
  const [email, setEmail] = useState();
  const [showerr, setShowErr] = useState(false);

  async function handleSubmit() {
    try {
      var params = {
        TableName: "UsersTable",
        ProjectionExpression: "Email, Gflag"
      };
      docClient.scan(params, async function (err, data) {
        if (err) {
          console.log(err);
        } 
        else {
          console.log(data.Items)
          for(var i=0; i<data.Items.length; i++) {
            if(data.Items[i].Email==email && data.Items[i].Gflag==false) {
              await Auth.forgotPassword(email);
              setTimeout(function() {
                window.location.href="/changepassword/" + email;
              }, 1500);              
              break;
            }
          }
          setTimeout(function() {
            setShowErr("Email does not exist.");
          }, 2000);
        }
      });
    } 
    catch (error) {
      setShowErr(error.message);
    }
  }

  return(
    <div style={{marginTop:"10%",backgroundColor:"#020312", border: "1px solid #f26c4f"}} className="login_container">
      <div style={{paddingRight:"7%",paddingLeft:"7%",paddingTop:"7%"}}>
        <p style={{fontSize:"18px"}}>Email<text style={{color:"#f26c4f"}}>*</text></p>
        <input value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}></input>
        {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
        {showerr==="Email does not exist." && <p style={{color:"red", textAlign:"center"}}>Please <a href="/register" style={{ color: "#f26c4f" }}>Sign Up</a> or try with an alternate Email</p>}
        </div>
        <button onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%", marginLeft:"33%", marginBottom:"10%"}}>Submit<ArrowLeft className='button_arrow'/></button>
    </div>
  );
}

export default ForgotPasswordPage;
