import Auth from "@aws-amplify/auth";
import { useState } from "react";
import {ArrowLeft} from 'react-bootstrap-icons';
import './AuthPage.css';

function ChangePasswordPage(){
  const [otp, setOTP] = useState();
  const [newpassword, setNewPassword] = useState();
  const [email, setEmail] = useState();
  const [showerr, setShowErr] = useState(false);

  async function handleSubmit() {
    try {
        await Auth.forgotPasswordSubmit(email, otp, newpassword);
        window.location.href="/login";
    } 
    catch (error) {
      setShowErr(error.message);
    }
  }

  return(
    <div style={{marginTop:"10%",backgroundColor:"#020312", border: "1px solid #f26c4f"}} className="login_container">
      <div style={{paddingRight:"7%",paddingLeft:"7%",paddingTop:"7%",paddingBottom:"0%"}}>
        <p style={{fontSize:"18px", marginTop:"20px"}}>Verification Code<text style={{color:"#f26c4f"}}>*</text></p>
        <input value={otp} onChange={e => setOTP(e.target.value)} style={{width:"100%"}}/>
        <p style={{fontSize:"18px",marginTop:"20px"}}>Email<text style={{color:"#f26c4f"}}>*</text></p>
        <input value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}/>
        <p style={{fontSize:"18px", marginTop:"20px"}}>New Password<text style={{color:"#f26c4f"}}>*</text></p>
        <input type="password" value={newpassword} onChange={e => setNewPassword(e.target.value)} style={{width:"100%"}}/>
        {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
        </div>
        <button onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%", marginLeft:"23%", marginBottom:"10%"}}>Change Password<ArrowLeft className='button_arrow'/></button>
    </div>
  );
}

export default ChangePasswordPage;
