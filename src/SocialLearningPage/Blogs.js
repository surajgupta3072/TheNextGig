import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './SocialLearningPage.css';

function Blogs(props) {
  return (
    <div>
       <Container >
       <br/><br/>
         <Row>
           <Col className="blog-box">
            <Row style={{marginTop:"2%",marginLeft:"2%",width:"270px",height:"130px",backgroundColor:"white"}}></Row>
            <Row style={{marginTop:"2%",marginLeft:"2%",fontSize:"14px"}}>Green bonds is taking a new turn<br/> with clean financiers going...</Row>
           </Col>
           <Col style={{marginLeft:"2%"}} className="blog-box">
            <Row style={{marginTop:"2%",marginLeft:"2%",width:"270px",height:"130px",backgroundColor:"white"}}></Row>
            <Row style={{marginTop:"2%",marginLeft:"2%",fontSize:"14px"}}>Green bonds is taking a new turn<br/> with clean financiers going...</Row>
           </Col>
           <Col style={{marginLeft:"2%"}} className="blog-box">
            <Row style={{marginTop:"2%",marginLeft:"2%",width:"270px",height:"130px",backgroundColor:"white"}}></Row>
            <Row style={{marginTop:"2%",marginLeft:"2%",fontSize:"14px"}}>Green bonds is taking a new turn<br/> with clean financiers going...</Row>
           </Col>
         </Row>
      </Container>
    </div>
  );
}

export default Blogs;
