import Auth from "@aws-amplify/auth";
import { useState } from "react";
import Container  from 'react-bootstrap/Container';
import {ArrowLeft} from 'react-bootstrap-icons'
import { FaGoogle } from 'react-icons/fa';
import docClient from './../GigsPage/GigsAWS';
import './AuthPage.css';
import MyVerticallyCenteredModal  from "./RegisterPageModal";
import Swal from 'sweetalert2';

function RegisterPage(props) {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showerr, setShowErr] = useState(false);
  const [showVerifyBox, setShowVerifiyBox] = useState(false);
  const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  async function RegisterUser() {
    const username = email;
    const signUpResponse = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        name,
      },
    }).catch((err)=>setShowErr(err.message));
    if(signUpResponse===undefined)
      return;
    setShowErr(false);
    setShowVerifiyBox(true);
    Swal.fire({
      title: "<h5 style='color:white'>" + "Please check your Email for OTP" + "</h5>",
      icon: 'success',
      showConfirmButton: false,
      timer: 4000,
      background: '#020312',
      color: 'white',
      iconColor: "#F26C4F"
    });
  }

  async function AuthenticateUser() {
    try {
      await Auth.confirmSignUp(email, otp);
      try {
        const userLogin = await Auth.signIn(email, password);
        var params = {
          TableName: "UsersTable",
          Item: {"UserID": userLogin.username, "FullName":name, "Email":email, "RewardP":0, "RewardE":0, "RewardW":0, "RewardS":0, "RewardC":0, "TotalRewards": 399, 
          "MasterclassesPurchased":[], "gigsApplications":[], "SocialLearningVideosUploaded":[], "SocialLearningBlogsUploaded":[], "SocialLearningVideosWatched": [], "SocialLearningBlogsRead": [], 
          "VideosSearchHistory": [], "BlogsSearchHistory": [], "SkillsPossessed": [], "SkillsWantToAcquire": [], "ReferralCode": email.split("@")[0], "ReferredBy": "",
          "SkillsAcquiredMastersessions": [], "SkillsAcquiredGigs": [], "SkillsAcquiredVideos": [], "SkillsAcquiredBlogs": [], "GigsSearchHistory": []}
        }
        docClient.put(params, function (err, data) {
          if (err) {
            setShowErr(err.message);
          }
        });
        props.auth.setUser(userLogin);
        props.auth.setAuthStatus(true);
        setShowErr(false);
        const body = JSON.stringify({
          feedback:"",
          feedback1: params.Item.FullName,
          feedback2:"",
          title:"You're in! Welcome to TNG 🥳",
          user:params.Item.Email
        });
        const requestOptions = {
          method: "POST",
          body,
        };
        fetch(endpoint, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error in fetch");
          } 
          else {
            Swal.fire({
              title: "<h5 style='color:white'>" + "Signed Up Successfully" + "</h5>",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000,
              background: '#020312',
              color: 'white',
              iconColor: "#F26C4F"
            }).then(()=>setModalShow(true));
          }
          // return response.json();
        })
        .catch((error) => {
          console.error("Failed to send feedback. Error: ", error);
        });
      } 
      catch (err) {
        setShowErr(err.message);
      }
    } 
    catch (err) {
      setShowErr(err.message);
    }
  }

  async function handleSubmit() {
    try {
      if(name!=="" && email!=="" && password!=="") {
        RegisterUser();
      }
      else {
        setShowErr("All fields are Mandatory");
      }
    }
    catch (err) {
      setShowErr(err.message);
    }
  }

  async function handleSignUp() {
    try {
      if(otp!=="") {
        AuthenticateUser();
      }
      else {
        setShowErr("Input OTP recived in your Email");
      }
    }
    catch (error) {
      setShowErr(error.message);
    }
  }

  return(
    <div className="register_container" style={{marginTop:"7%",backgroundColor:"#020312", border: "1px solid #f26c4f"}}>
      <div style={{paddingRight:"7%",paddingLeft:"7%",paddingTop:"7%",paddingBottom:"5%"}}>
        <Container onClick={()=>Auth.federatedSignIn({provider: 'Google'})} style={{cursor:"pointer",backgroundColor:"#f26c4f", height:"30px", display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
          <FaGoogle/>
          <b>Signup with Google</b>
        </Container>
        {showVerifyBox===false ?
          <div>
            <p style={{textAlign:"center",marginTop:"10px",fontWeight:"bold",color: "rgba(242, 108, 79, 1)"}}>OR</p>
            <p style={{fontSize:"18px"}}>Full Name <text style={{color:"#f26c4f"}}>*</text></p>
            <input value={name} onChange={e => setName(e.target.value)} style={{width:"100%"}}/>
            <p style={{fontSize:"18px",marginTop:"20px"}}>Email<text style={{color:"#f26c4f"}}>*</text></p>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}/>
            <p style={{fontSize:"18px",marginTop:"20px"}}>Password<text style={{color:"#f26c4f"}}>*</text></p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{width:"100%"}}/>
            <button type="submit" onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"32%"}}>Submit<ArrowLeft className='button_arrow'/></button>
            {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
            <p style={{marginTop:"5%",textAlign:"center",fontStyle:"italic"}}>Already a member? <a href="/login" style={{color:"#f26c4f"}}>Login</a></p>
          </div> 
          :
          <div>
            <p style={{fontSize:"18px",marginTop:"8%"}}>Verification Code <text style={{color:"#f26c4f"}}>*</text></p>
            <input value={otp} onChange={e => setOtp(e.target.value)} style={{width:"100%"}}/>
            <button type="submit" onClick={handleSignUp} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"32%"}}>Signup<ArrowLeft className='button_arrow'/></button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
            {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
          </div>
        }
      </div>
    </div>
  );
}

export default RegisterPage;
