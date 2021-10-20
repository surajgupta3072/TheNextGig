import Auth from "@aws-amplify/auth";
import { useState } from "react";
import {ArrowLeft} from 'react-bootstrap-icons';
import './AuthPage.css';

function ForgotPasswordPage(){
  const [email, setEmail] = useState();
  const [showerr, setShowErr] = useState(false);

  async function handleSubmit() {
    try {
        await Auth.forgotPassword(email);
        window.location.href="/changepassword";
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
        </div>
        <button onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%", marginLeft:"33%", marginBottom:"10%"}}>Submit<ArrowLeft className='button_arrow'/></button>
    </div>
  );
}

export default ForgotPasswordPage;
