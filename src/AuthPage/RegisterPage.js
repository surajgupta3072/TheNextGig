import Auth from "@aws-amplify/auth";
import { useState } from "react";
import Container  from 'react-bootstrap/Container';
import {ArrowLeft} from 'react-bootstrap-icons'
import { FaGoogle } from 'react-icons/fa';
import docClient from './../GigsPage/GigsAWS';
import './AuthPage.css';

function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [refcode, setRefCode] = useState("");
  const [showerr, setShowErr] = useState(false);

  async function RegisterUser(totrew) {
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
      Item: {"UserID":signUpResponse.userSub, "FullName":name, "Email":email, "RewardP":0, "RewardE":0, "RewardW":0, "RewardS":0, "RewardC":0, "TotalRewards": totrew, "MasterclassesPurchased":[], "gigsApplications":[], "SocialLearningVideosUploaded":[], "SocialLearningBlogsUploaded":[], "SocialLearningVideosWatched": [], "SocialLearningBlogsRead": [], "VideosSearchHistory": [], "BlogsSearchHistory": [], "SkillsPossessed": [], "SkillsWantToAcquire": [], "ReferralCode": email.split("@")[0]}
    }
    docClient.put(params, function (err, data) {
      if (err) {
        console.log('Error', err)
      } 
      else {
        window.location.href = "/login";
      }
    });
  }

  async function handleSubmit() {
    try {
      if(refcode!=="" && name!=="" && email!=="" && password!=="") {
        var params = {
          TableName: "UsersTable"
        };
        docClient.scan(params, function (err, data) {
          if (err) {
            console.log(err);
          } 
          else {
            var refstatus = false;
            for (var e of data.Items) {
              if(e.ReferralCode===refcode) {
                var refstatus = true;
                var params = {
                  TableName: "UsersTable",
                  Key: { "UserID": e.UserID },
                  ProjectionExpression: "TotalRewards",
                };
                docClient.get(params, function(err, data) {
                  if (err) {
                    console.log(err);
                  } 
                  else {
                    var paramss = {
                      TableName: "UsersTable",
                      Key: { "UserID": e.UserID },
                      UpdateExpression: "set TotalRewards = :tr",
                      ExpressionAttributeValues:{
                        ":tr": data.Item.TotalRewards + 50,
                      },
                      ReturnValues:"UPDATED_NEW"
                    }
                    docClient.update(paramss, function (err, data) {
                      if (err) {
                        console.log(err);
                      } 
                      else {
                        RegisterUser(50);
                      }
                    });
                  }
                });
                break;
              }
            }
            if(refstatus===false) {
              setShowErr("Referral Code is Invalid");
              setRefCode("");
            }
          }
        });
      }
      else {
        if(name!=="" && email!=="" && password!=="") {
          RegisterUser(0);
        }
        else {
          setShowErr("Name, Email and Password is Mandatory");
        }
      }
    }
    catch (error) {
      setShowErr(error.message);
    }
  }

  return(
    <div className="register_container" style={{marginTop:"7%",backgroundColor:"#020312", border: "1px solid #f26c4f"}}>
      <div style={{paddingRight:"7%",paddingLeft:"7%",paddingTop:"7%",paddingBottom:"0%"}}>
        <Container onClick={()=>Auth.federatedSignIn({provider: 'Google'})} style={{cursor:"pointer",backgroundColor:"#f26c4f", height:"30px", display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
          <FaGoogle/>
          <b>Signup with Google</b>
        </Container>
        <p style={{textAlign:"center",marginTop:"10px",fontWeight:"bold",color: "rgba(242, 108, 79, 1)"}}>OR</p>
        <p style={{fontSize:"18px"}}>Full Name <text style={{color:"#f26c4f"}}>*</text></p>
        <input value={name} onChange={e => setName(e.target.value)} style={{width:"100%"}}/>
        <p style={{fontSize:"18px",marginTop:"20px"}}>Email<text style={{color:"#f26c4f"}}>*</text></p>
        <input value={email} onChange={e => setEmail(e.target.value)} style={{width:"100%"}}/>
        <p style={{fontSize:"18px",marginTop:"20px"}}>Password<text style={{color:"#f26c4f"}}>*</text></p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{width:"100%"}}/>
        <p style={{fontSize:"18px",marginTop:"20px"}}>Referral Code</p>
        <input value={refcode} onChange={e => setRefCode(e.target.value)} style={{width:"100%"}}/>
        <button onClick={handleSubmit} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"32%"}}>Signup<ArrowLeft className='button_arrow'/></button>
        {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
        <p style={{marginTop:"5%",textAlign:"center",fontStyle:"italic"}}>Already a member? <a href="/login" style={{color:"#f26c4f"}}>Login</a></p>
      </div>
    </div>
  );
}

export default RegisterPage;
