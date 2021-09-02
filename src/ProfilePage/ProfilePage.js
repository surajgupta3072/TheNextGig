import React, { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import WorkEx from './WorkEx';
import Skills from './Skills';
import CvPitch from './CvPitch';
import FeedBack  from './Feedback';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Linkedin} from "react-bootstrap-icons";
import './ProfilePage.css'

function ProfilePage(props) {
  const bg = {backgroundColor: "#F26C4F"};
  const [percentage, setPercentage] = useState(0);
  const [active, setActive] =  useState("Personal");
  const [color1, setColor1] = useState(bg);
  const [color2, setColor2] = useState({});
  const [color3, setColor3] = useState({});
  const [color4, setColor4] = useState({});
  const [color5, setColor5] = useState({});
  const [color6,setColor6]  = useState({});

  const pp = {
    subUserId: props.auth.user.username,
    percentage: percentage,
    setPercentage:setPercentage
  };

  function whichColor(word) {
    setActive(word)
    if(word==="Personal") {
      setColor1(bg); setColor2({}); setColor3({}); setColor4({}); setColor5({});setColor6({});
    }
    else if(word==="Education") {
      setColor2(bg); setColor1({}); setColor3({}); setColor4({}); setColor5({});setColor6({});
    }
    else if(word==="WorkEx") {
      setColor3(bg); setColor1({}); setColor2({}); setColor4({}); setColor5({});setColor6({});
    }
    else if(word==="Skills") {
      setColor4(bg); setColor1({}); setColor2({}); setColor3({}); setColor5({});setColor6({});
    }
    else if(word==="CvPitch") {
      setColor5(bg); setColor1({}); setColor2({}); setColor3({}); setColor4({});setColor6({});
    }
    else if(word==="FeedBack"){
      setColor5({}); setColor1({}); setColor2({}); setColor3({}); setColor4({});setColor6(bg);
    }
  }
    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}}>
              <ProgressBar style={{marginTop:"10%", backgroundColor:"white", marginBottom:"1%"}} min={0} max={100} variant="success" now={percentage} />
              <p style={{fontSize:"14px", textAlign:"center"}}>(Complete the profile to earn Reward points)</p>
              <Row style={{marginTop:"8%",marginLeft:"25%"}}><img alt="dp" src="google_logo.jpg" style={{height:"150px",width:"150px",borderRadius:"50%"}}/></Row>
              <Row><p style={{fontSize:"18px", textAlign:"center"}}>{props.auth.user.attributes.name.split(" ")[0]}</p></Row>
              <Row><p style={{fontSize:"12px", textAlign:"center",color:"#F26C4F"}}>Reward Points:xxx</p></Row>
              <Row style={{marginBottom:"2%"}}><Linkedin size={30}/></Row>
              <br/>
              <Row onClick={() => whichColor("Personal")} style={color1}><p style={{fontSize:"24px", textAlign:"center"}}>Personal</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Education")} style={color2}><p style={{fontSize:"24px", textAlign:"center"}}>Education</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("WorkEx")} style={color3}><p style={{fontSize:"24px", textAlign:"center"}}>Work Experience</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Skills")} style={color4}><p style={{fontSize:"24px", textAlign:"center"}}>Skills</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("CvPitch")} style={color5}><p style={{fontSize:"24px", textAlign:"center"}}>CV / Other Documents</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("FeedBack")} style={color6}><p style={{fontSize:"24px", textAlign:"center"}}>Feedback & Comments</p></Row>
            </Col>
            <Col >
                {active === "Personal" && <Personal p={pp}/>}
                {active === "Education" && <Education p={pp}/>}
                {active === "WorkEx" && <WorkEx  p={pp}/>}
                {active === "Skills" && <Skills  p={pp}/>}
                {active === "CvPitch" && <CvPitch  p={pp} />}
                {active === "FeedBack" && <FeedBack/>}
            </Col> 
        </Row>
      </Container>
    );
  }
  
export default ProfilePage;