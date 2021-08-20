import './ProfilePage.css'
import React, { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import WorkEx from './WorkEx';
import Skills from './Skills';
import CvPitch from './CvPitch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProfilePage() {
  const [active, setActive] =  useState("Personal");
  // const [color, setColor] = useState("orange");
    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A", height:"90vh"}}>
              <Row>% Completion</Row>
              <Row>(Complete the profile to earn Reward points)</Row>
              <Row style={{marginTop:"15%",marginLeft:"25%", marginBottom:"15%"}}><img src="google_logo.jpg" style={{height:"150px",width:"150px",borderRadius:"50%"}}/></Row>
              <Row onClick={() => setActive("Personal")} style={{textAlign:"center"}}><p style={{fontSize:"24px"}}>Personal</p></Row>
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
                {active === "Personal" && <Personal/>}
                {active === "Education" && <Education />}
                {active === "WorkEx" && <WorkEx />}
                {active === "Skills" && <Skills />}
                {active === "CvPitch" && <CvPitch />}
            </Col> 
        </Row>
      </Container>
    );
  }
  
export default ProfilePage;