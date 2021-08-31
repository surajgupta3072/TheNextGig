import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Videos from './Videos';
import Blogs from './Blogs';
import {Linkedin} from "react-bootstrap-icons";

function SocialLearningPage(props) {
  const [active, setActive] =  useState("Videos");

    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A",height:"90vh"}}>
              <Row style={{marginTop:"30%",marginLeft:"25%"}}><img src="google_logo.jpg" style={{height:"150px",width:"150px",borderRadius:"50%"}}/></Row>
              <Row><p style={{fontSize:"18px", textAlign:"center"}}>{props.auth.user.attributes.name.split(" ")[0]}</p></Row>
              <Row><p style={{fontSize:"12px", textAlign:"center",color:"#F26C4F"}}>Reward Points:xxx</p></Row>
              <Row style={{marginBottom:"5%"}}><Linkedin size={30}/></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row style={{marginTop:"5%",}}><p>Explore:</p></Row>
              <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="All" name="group1"/></Row>
              <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="Data Science" name="group1"/></Row>
              <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="Data Science" name="group1"/></Row>
              <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="Data Science" name="group1"/></Row>
              <br/>
            </Col>
            <Col >
             <Row style={{marginTop:"5%"}}>
               <Col xs={9}>
                  <button onClick={()=>setActive("Videos")} style={{marginLeft:"2%",marginRight:"5%",backgroundColor:"#f26c4f",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold"}}>Videos</button>
                  <button onClick={()=>setActive("Blogs")} style={{backgroundColor:"#f26c4f",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold"}}>Blogs</button>
               </Col>
               <Col >
                 <p style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Impart knowledge + <br/>(Add video/blog)</p>
               </Col>
             </Row>
                {active === "Videos" && <Videos />}
                {active === "Blogs" && <Blogs />}
            </Col> 
        </Row>
      </Container>
    );
  }
  
export default SocialLearningPage;