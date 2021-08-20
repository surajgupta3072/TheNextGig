import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Personal() {
    return (
      <div>
        <Container style={{marginTop:"5%"}}>
          <Row>
            <p><span style={{fontSize:"20px"}}>Full Name</span> <br/>(Shakespeare said ‘what’s in a name but we want to know how to address you)</p>
            <p><input style={{width:"100%",height:"35px"}}></input></p>
          </Row>
          <Row>
            <Col style={{marginTop:"2%"}}>
              <p><span style={{fontSize:"20px"}}>Date of birth</span><br/>(We will only wish you on your birthday)</p>
              <input type="date" style={{width:"50%",height:"35px"}}></input>
            </Col>
            <Col style={{marginTop:"2%",marginLeft:"10%"}}>
              <p style={{fontSize:"20px"}}>Gender</p>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <p>
                  <input type="radio" id="css" name="fav_language" value="CSS"></input>
                  <label for="html">Male</label><br></br>
                </p>
                <p>
                  <input type="radio" id="css" name="fav_language" value="CSS"></input>
                  <label for="html">Female</label><br></br>
                </p>
                <p> 
                  <input type="radio" id="css" name="fav_language" value="CSS"></input>
                  <label for="html">Trangender</label><br></br>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Personal;
  