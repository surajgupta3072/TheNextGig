import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CvPitch() {
  return (
    <div>
      <Container style={{marginTop:"5%"}}>
       <Row>
         <Col md={8}><p style={{fontSize:"25px",fontWeight:"bold"}}>CV</p></Col>
         <Col><input type="file" style={{width:"100%",height:"35px"}}></input></Col>
       </Row>
       <p style={{fontSize:"25px",fontWeight:"bold"}}>Other Documents</p>
       <Row>
         <Col md={8}><p style={{fontSize:"25px"}}>Project Name</p></Col>
         <Col><input  style={{width:"100%",height:"35px"}}></input></Col>
       </Row>
      </Container>
    </div>
  );
}

export default CvPitch;
