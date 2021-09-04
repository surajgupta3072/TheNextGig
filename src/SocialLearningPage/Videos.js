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
            <Row style={{width:"270px",height:"180px",backgroundColor:"white"}}></Row>
            <Row>ABC Topic name</Row>
            <Row>#dataScience #ml</Row>
           </Col>
           <Col>
            <Row style={{width:"270px",height:"180px",backgroundColor:"white"}}></Row>
            <Row>ABC Topic name</Row>
            <Row>#dataScience #ml</Row>
           </Col>
           <Col>
            <Row style={{width:"270px",height:"180px",backgroundColor:"white"}}></Row>
            <Row>ABC Topic name</Row>
            <Row>#dataScience #ml</Row>
           </Col>
         </Row>
      </Container>
    </div>
  );
}

export default Videos;
