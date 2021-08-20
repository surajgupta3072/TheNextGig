import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education() {
    return (
      <div>
        <Container style={{marginTop:"5%"}}>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold"}}>Graduation</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col><input style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}}>Professional Degree</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col><input style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}}>Post Graduation</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col><input style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
        </Container>
      </div>
    );
  }
  
export default Education;
  