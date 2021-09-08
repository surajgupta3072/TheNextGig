import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

function Videos(props) {
  return (
    <div>
      <Container >
        <br/>
         <Row>
           <Col >
            <Row>
              <video controls style={{height:"250px", width:"350px"}}>
                <source src="https://master-sessions.s3.ap-south-1.amazonaws.com/Sample_MasterSession2.mp4"/>
              </video>
            </Row>
            <Row><Col>Web Development</Col></Row>
            <Row><Col>#webd #react</Col></Row>
           </Col>
           <Col>
            <Row>
              <video controls style={{height:"250px", width:"350px"}}>
                <source src="https://master-sessions.s3.ap-south-1.amazonaws.com/Sample_MasterSession1.mp4"/>
              </video>
            </Row>
            <Row><Col>Machine Learning</Col></Row>
            <Row><Col>#dataScience #ml</Col></Row>
           </Col>
           <Col>
            <Row>
              <video controls style={{height:"250px", width:"350px"}}>
                <source src="https://master-sessions.s3.ap-south-1.amazonaws.com/Sample_MasterSession3.mp4"/>
              </video>
            </Row>
            <Row><Col>Marketing</Col></Row>
            <Row><Col>#marketing #product</Col></Row>
           </Col>
         </Row>
      </Container>
    </div>
  );
}

export default Videos;
