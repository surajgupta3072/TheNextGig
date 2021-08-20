import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WorkEx() {
    return (
      <div>
        <Container style={{marginTop:"5%"}}>
          <Row><p style={{fontSize:"25px",fontWeight:"bold"}}>Work Ex 1</p></Row>
          <Row>
            <Col style={{display:"flex",flexDirection:"row"}}>
            <p style={{fontSize:"18px",marginRight:"10%"}}>Company</p>
            <input style={{width:"100%",height:"35px"}}></input>
            </Col>
            <Col style={{display:"flex",flexDirection:"row"}}>  
            <p style={{fontSize:"18px",marginRight:"10%"}}>No of Months</p>
            <input style={{width:"100%",height:"35px"}}></input>
            </Col>

          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col md={2}><p style={{fontSize:"18px"}}>Description</p></Col>
            <Col><input style={{width:"100%",height:"90px"}}></input></Col>
          </Row>
        </Container>
      </div>
    );
  }
  
export default WorkEx;
  