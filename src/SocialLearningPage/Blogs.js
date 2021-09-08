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
           <Col>
            <Row>
              <img src="https://bondevalue.com/wp-content/uploads/2019/07/Green-bonds-1.jpg" style={{height:"250px", width:"350px"}}/>
            </Row>
            <Row style={{marginTop:"2%",marginLeft:"2%",fontSize:"14px"}}>Green bonds is taking a new turn<br/> with clean financiers going...</Row>
           </Col>
           <Col style={{marginLeft:"2%"}}>
            <Row>
              <img src="https://bondevalue.com/wp-content/uploads/2019/07/Green-bonds-1.jpg" style={{height:"250px", width:"350px"}}/>
            </Row>
            <Row style={{marginTop:"2%",marginLeft:"2%",fontSize:"14px"}}>Green bonds is taking a new turn<br/> with clean financiers going...</Row>
           </Col>
         </Row>
      </Container>
    </div>
  );
}

export default Blogs;
