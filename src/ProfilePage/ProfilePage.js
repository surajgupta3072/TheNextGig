import { useState, useEffect } from 'react';
import Personal from './Personal';
import Education from './Education';
import WorkEx from './WorkEx';
import Skills from './Skills';
import CvPitch from './CvPitch';
// import FeedBack  from './Feedback';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import docClient from '../GigsPage/GigsAWS';
import S3 from 'react-aws-s3';
import './ProfilePage.css';

const config = {bucketName: "usersdp", region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY};
const ReactS3Client = new S3(config);

function ProfilePage(props) {
  const bg = {backgroundColor: "#F26C4F"};
  const [percentage, setPercentage] = useState(0);
  const [active, setActive] =  useState("");
  const [color1, setColor1] = useState(bg);
  const [color2, setColor2] = useState({});
  const [color3, setColor3] = useState({});
  const [color4, setColor4] = useState({});
  const [color5, setColor5] = useState({});
  // const [color6,setColor6]  = useState({});
  const [color11,setColor11] =useState("#f26c4f");
  const [textColor1,setextColor1] =useState("white");
  const [color22,setColor22] =useState("white");
  const [textColor2,setextColor2] =useState("#f26c4f");
  const [color33,setColor33] =useState("white");
  const [textColor3,setextColor3] =useState("#f26c4f");
  const [color44,setColor44] =useState("white");
  const [textColor4,setextColor4] =useState("#f26c4f");
  const [color55,setColor55] =useState("white");
  const [textColor5,setextColor5] =useState("#f26c4f");
  // const [color66,setColor66] =useState("white");
  // const [textColor6,setextColor6] =useState("#f26c4f");
  const [wholedata, setWholedata] = useState([]);
  const [rew, setRew] = useState(0);
  const [dplink, setDplink]=useState("./dpavtar.png");

  useEffect(async() => {
    let paramss = {
      TableName: "UsersTable",
      KeyConditionExpression: "#Uid = :UserID",
      ExpressionAttributeNames: {
        "#Uid": "UserID",
      },
      ExpressionAttributeValues: {
        ":UserID": props.auth.user.username,
      },
    };
    try {
      const data1 = await docClient.query(paramss).promise();
      setWholedata(data1.Items[0]);
      setActive("Personal");
      const per = data1.Items[0].RewardP + data1.Items[0].RewardE + data1.Items[0].RewardW + data1.Items[0].RewardS + data1.Items[0].RewardC
      setPercentage(per);
      var params = {
        TableName: "UsersTable",
        Key: { "UserID": props.auth.user.username },
        ProjectionExpression: "TotalRewards",
      };
      docClient.get(params, function(err, data) {
        if (err) {
          console.log(err);
        } 
        else {
          setRew(data.Item.TotalRewards);
          if(data1.Items[0].DPlink!==undefined)
            setDplink(data1.Items[0].DPlink);
        }
      });
    }     
    catch (err) {
      return err
    }
  }, []);

  function onChangePicture(e) {
    const dpv = e.target.files[0];
    if (dpv!==undefined) {
      config.dirName = props.auth.user.username 
      ReactS3Client.uploadFile(dpv,dpv.name).then(data => {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID": props.auth.user.username },
          UpdateExpression: "set DPlink = :dp",
          ExpressionAttributeValues:{
            ":dp": data.location,
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          } 
          else {
            window.location.reload();
          }
        });
      });
    }
  };



  function buttonColor(word){
    setActive(word)
    if(word==="Personal"){
      setColor11("#f26c4f");setextColor1("white");setColor22("white");setextColor2("#f26c4f");setColor33("white");setextColor3("#f26c4f");
      setColor44("white");setextColor4("#f26c4f");
      setColor55("white");setextColor5("#f26c4f");
      // setColor66("white");setextColor6("#f26c4f");
    }
    if(word==="Education"){
     setColor11("white");setextColor1("#f26c4f");setColor22("#f26c4f");setextColor2("white");setColor33("white");setextColor3("#f26c4f");
     setColor44("white");setextColor4("#f26c4f");
     setColor55("white");setextColor5("#f26c4f");
    //  setColor66("white");setextColor6("#f26c4f");
   }
   if(word==="WorkEx"){
     setColor11("white");setextColor1("#f26c4f");setColor22("white");setextColor2("#f26c4f");setColor33("#f26c4f");setextColor3("white");
     setColor44("white");setextColor4("#f26c4f");
     setColor55("white");setextColor5("#f26c4f");
    //  setColor66("white");setextColor6("#f26c4f");
   }
   if(word==="Skills"){
    setColor11("white");setextColor1("#f26c4f");setColor22("white");setextColor2("#f26c4f");
    setColor33("white");setextColor3("#f26c4f");
    setColor55("white");setextColor5("#f26c4f");
    // setColor66("white");setextColor6("#f26c4f");
    setColor44("#f26c4f");setextColor4("white");
  }
  if(word==="CvPitch"){
    setColor11("white");setextColor1("#f26c4f");setColor22("white");setextColor2("#f26c4f");
    setColor33("white");setextColor3("#f26c4f");
    setColor44("white");setextColor4("#f26c4f");
    // setColor66("white");setextColor6("#f26c4f");
    setColor55("#f26c4f");setextColor5("white");
  }
  // if(word==="FeedBack"){
  //   setColor11("white");setextColor1("#f26c4f");setColor22("white");setextColor2("#f26c4f");
  //   setColor33("white");setextColor3("#f26c4f");
  //   setColor44("white");setextColor4("#f26c4f");
  //   setColor55("white");setextColor5("#f26c4f");
  //   setColor66("#f26c4f");setextColor6("white");
  // }
  }
  wholedata.TotalRewards = rew;
  const pp = {
    setWholedata: setWholedata,
    wholedata: wholedata,
    percentage: percentage,
    setPercentage:setPercentage
  };

  function whichColor(word) {
    setActive(word)
    if(word==="Personal") {
      setColor1(bg); setColor2({}); setColor3({}); setColor4({}); setColor5({});
    }
    else if(word==="Education") {
      setColor3(bg); setColor1({}); setColor2({}); setColor4({}); setColor5({});
    }
    else if(word==="WorkEx") {
      setColor4(bg); setColor1({}); setColor2({}); setColor3({}); setColor5({});
    }
    else if(word==="Skills") {
      setColor2(bg); setColor1({}); setColor4({}); setColor3({}); setColor5({});
    }
    else if(word==="CvPitch") {
      setColor5(bg); setColor1({}); setColor2({}); setColor3({}); setColor4({});
    }
    // else if(word==="FeedBack"){
    //   setColor5({}); setColor1({}); setColor2({}); setColor3({}); setColor4({});setColor6(bg);
    // }
  }
    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A", height:"90vh"}} className="Profile_list_laptop">
              <ProgressBar style={{marginTop:"10%", backgroundColor:"white", marginBottom:"1%"}} min={0} max={100} variant="success" now={percentage} label={`${percentage}%`}/>
              <p style={{fontSize:"14px", textAlign:"center"}}>(Complete the profile to earn TNG Coins)</p>
              <Row style={{marginTop:"7%",marginLeft:"22%"}}>
                <label> 
                  <input type="file" onChange={(e)=>onChangePicture(e)} style={{display:"none"}}/>
                  <img alt="dp" src={dplink} style={{height:"150px",width:"150px",borderRadius:"50%",cursor:"pointer"}}/>
                </label> 
              </Row>
              <br/>
              <Row><p style={{fontSize:"16px", textAlign:"center",color:"#F26C4F"}}>TNG Coins: <b>{rew}</b></p></Row>
              <Row style={{marginBottom:"1%", textAlign:"center"}}><p style={{margin:"0"}}>Your Referral Code:</p><p style={{color:"#F26C4F"}}><b>{wholedata.ReferralCode}</b></p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Personal")} style={color1}><p style={{fontSize:"20px", textAlign:"center", cursor: "pointer"}}>Personal</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Skills")} style={color2}><p style={{fontSize:"20px", textAlign:"center", cursor: "pointer"}}>Skills</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Education")} style={color3}><p style={{fontSize:"20px", textAlign:"center", cursor: "pointer"}}>Education</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("WorkEx")} style={color4}><p style={{fontSize:"20px", textAlign:"center", cursor: "pointer"}}>Work Experience</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("CvPitch")} style={color5}><p style={{fontSize:"20px", textAlign:"center", cursor: "pointer"}}>CV / Other Documents</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              {/* <hr style={{color:"#F26C4F", margin:"2px 0px"}}/> */}
              {/* <Row onClick={() => whichColor("FeedBack")} style={color6}><p style={{fontSize:"20px", textAlign:"center", cursor: "pointer"}}>Feedback & Comments</p></Row> */}
            </Col>
            <Col xs={12}  className="Profile_list_mobile">
              <ProgressBar style={{marginTop:"10%", backgroundColor:"white", marginBottom:"1%"}} min={0} max={100} variant="success" now={percentage} label={`${percentage}%`}/>
              <p style={{fontSize:"14px", textAlign:"center"}}>(Complete the profile to earn Reward points)</p>
              <div >
                <input type="file" onChange={(e)=>onChangePicture(e)} style={{display:"none"}}/>
                <div className="profile_logo_text_mobile"><div><img alt="dp" src={dplink} style={{height:"100px",width:"100px",borderRadius:"50%"}}/></div>
                <div>
                  <div><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>TNG Coins: <b>{rew}</b></p></div>
                  <div style={{marginBottom:"2%", textAlign:"center"}}><p style={{margin:"0"}}>Your Referral Code:</p><p style={{color:"#F26C4F"}}><b>{wholedata.ReferralCode}</b></p></div>
                </div>
                </div>
                <div className="mobile_nav_profile">
                <br/>
                  <div style={{display:"flex",justifyContent:"space-evenly"}}>
                  <div ><button onClick={() => buttonColor("Personal")} style={{backgroundColor:color11,color:textColor1,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Personal</button></div>
                  <div><button onClick={() => buttonColor("Skills")} style={{backgroundColor:color44,color:textColor4,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Skills</button></div>
                  <div><button onClick={() => buttonColor("Education")} style={{backgroundColor:color22,color:textColor2,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Education</button></div>
                  </div>
                  <br/>
                  <div style={{display:"flex",justifyContent:"space-evenly"}}> 
                  <div><button onClick={() => buttonColor("WorkEx")} style={{backgroundColor:color33,color:textColor3,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Work Ex</button></div>
                  <div><button onClick={() => buttonColor("CvPitch")} style={{backgroundColor:color55,color:textColor5,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>CV</button></div>
                  {/* <div><button onClick={() => buttonColor("FeedBack")} style={{backgroundColor:color66,color:textColor6,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Feedback</button></div> */}
                  </div>
                </div>
              </div>
              <br/>
              
            </Col>
            <Col >
                {active === "Personal" && <Personal p={pp}/>}
                {active === "Education" && <Education p={pp}/>}
                {active === "WorkEx" && <WorkEx  p={pp}/>}
                {active === "Skills" && <Skills  p={pp}/>}
                {active === "CvPitch" && <CvPitch  p={pp} />}
                {/* {active === "FeedBack" && <FeedBack/>} */}
            </Col> 
        </Row>
      </Container>
    );
  }
  
export default ProfilePage;