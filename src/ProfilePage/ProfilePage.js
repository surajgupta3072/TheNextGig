import React, { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import WorkEx from './WorkEx';
import Skills from './Skills';
import CvPitch from './CvPitch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ProfilePage.css'

function ProfilePage() {
  const [active, setActive] =  useState("Personal");
  const [color, setColor] = useState("#F26C4F");
  const [percentage, setPercentage] = useState(0);
  const pp = {
    percentage: percentage,
    setPercentage:setPercentage
  };
    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}}>
              <ProgressBar style={{marginTop:"10%", backgroundColor:"#F26C4F", marginBottom:"1%"}} min={0} max={100} variant="warning" now={percentage} />
              <p style={{fontSize:"14px", textAlign:"center"}}>(Complete the profile to earn Reward points)</p>
              <Row style={{marginTop:"15%",marginLeft:"25%", marginBottom:"15%"}}><img src="google_logo.jpg" style={{height:"150px",width:"150px",borderRadius:"50%"}}/></Row>
              <Row onClick={() => setActive("Personal")} style={{backgroundColor:color, textAlign:"center"}}><p style={{fontSize:"24px"}}>Personal</p></Row>
              <hr style={{color:"#F26C4F"}}/>
              <Row onClick={() => setActive("Education")} style={{textAlign:"center"}}><p style={{fontSize:"24px"}}>Education</p></Row>
              <hr style={{color:"#F26C4F"}}/>
              <Row onClick={() => setActive("WorkEx")} style={{textAlign:"center"}}><p style={{fontSize:"24px"}}>Work Ex</p></Row>
              <hr style={{color:"#F26C4F"}}/>
              <Row onClick={() => setActive("Skills")} style={{textAlign:"center"}}><p style={{fontSize:"24px"}}>Skills</p></Row>
              <hr style={{color:"#F26C4F"}}/>
              <Row onClick={() => setActive("CvPitch")} style={{textAlign:"center"}}><p style={{fontSize:"24px"}}>CV & Pitch decks</p></Row>
            </Col>
            <Col >
                {active === "Personal" && <Personal p={pp}/>}
                {active === "Education" && <Education p={pp}/>}
                {active === "WorkEx" && <WorkEx  p={pp}/>}
                {active === "Skills" && <Skills  p={pp}/>}
                {active === "CvPitch" && <CvPitch  p={pp} />}
            </Col> 
        </Row>
      </Container>
    );
  }
  
export default ProfilePage;