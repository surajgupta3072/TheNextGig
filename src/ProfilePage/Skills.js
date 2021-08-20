import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
    return (
      <div>
        <Container style={{marginTop:"5%"}}>
          <Row>
            <Col md={3}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills you possess</p></Col>
            <Col><input style={{width:"100%",height:"35px"}}></input></Col>
          </Row>
          <Row>
            <Col md={4}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills you want to acquire</p></Col>
            <Col><input style={{width:"100%",height:"35px"}}></input></Col>
          </Row>
         </Container>
      </div>
    );
  }
  
export default Skills;
  