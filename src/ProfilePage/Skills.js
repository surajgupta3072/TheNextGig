import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
    return (
      <div>
        <Container style={{marginTop:"5%"}}>
          <Row>
            <Col md={12}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills you possess</p></Col>
            <Col md={12}><input style={{width:"100%",height:"35px"}}></input></Col>
          </Row>
          <br/>
          <Row>
            <Col md={12}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills you want to acquire</p></Col>
            <Col md={12}><input style={{width:"100%",height:"35px"}}></input></Col>
          </Row>
          <br/>
          <Row>
            <Col md={12}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills acquired through the platform</p></Col>
            <Col md={12}><em><p style={{fontSize:"18px"}}>Through Mastersessions</p></em></Col>
            <Col md={12}><em><p style={{fontSize:"18px"}}>Through Gigs / Internship</p></em></Col>
            <Col md={12}><em><p style={{fontSize:"18px"}}>Through Social Learning - Videos</p></em></Col>
            <Col md={12}><em><p style={{fontSize:"18px"}}>Through Social Learning - Blogs</p></em></Col>
          </Row>
          <div className="button_div">
          <button style={{marginTop:"4%"}} className="button_slide">Save</button></div>
         </Container>
      </div>
    );
  }
  
export default Skills;
  