import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videos from './Videos';
import Blogs from './Blogs';
import {Linkedin} from "react-bootstrap-icons";

function SocialLearningPage(props) {
  const bg = {backgroundColor: "#F26C4F"};
  const [percentage, setPercentage] = useState(0);
  const [active, setActive] =  useState("Videos");

  const pp = {
    percentage: percentage,
    setPercentage:setPercentage
  };

    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}}>
              <Row style={{marginTop:"8%",marginLeft:"25%"}}><img src="google_logo.jpg" style={{height:"150px",width:"150px",borderRadius:"50%"}}/></Row>
              <Row><p style={{fontSize:"18px", textAlign:"center"}}>{props.auth.user.attributes.name.split(" ")[0]}</p></Row>
              <Row><p style={{fontSize:"12px", textAlign:"center",color:"#F26C4F"}}>Reward Points:xxx</p></Row>
              <Row style={{marginBottom:"2%"}}><Linkedin size={30}/></Row>
              <br/>
            </Col>
            <Col >
                {active === "Personal" && <Videos p={pp}/>}
                {active === "Education" && <Blogs p={pp}/>}
            </Col> 
        </Row>
      </Container>
    );
  }
  
export default SocialLearningPage;