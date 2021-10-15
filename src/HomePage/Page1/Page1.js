import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowDown } from "react-bootstrap-icons";
import './Page1.css';
import { Link } from 'react-scroll';
function Page1() {
    return (
      <Container className="Opening_container">
         <Row>
          <Col style={{marginTop:"5%", marginBottom:"10%"}} md={7}>
            <div>              
              <div className="heading">
                <div>
                  <p className="slide-down">
                    <span>LEARN.</span>
                  </p>
                </div>
                <div>
                  <p className="slide-down">
                    <span>UPSKILL.</span>
                  </p>
                </div>
                <div>
                  <p className="slide-down">
                    <span>GROW.</span>
                  </p>
                </div>
                <div>
                <p className="slide-down" style={{fontSize:"40px",color:"#F26C4F"}}>
                    <span>the right way.</span>
                  </p>
                  </div>
              </div>
            </div>
          </Col>
          <Col className="homeimage" md={5}></Col>
        </Row>
        <Row style={{textAlign:"center"}}>
          <Link to="ummm" scroll={true}><button  className="button_slide slide_right">Ummm, how?<ArrowDown className="button_arrow"/></button></Link>
        </Row>
      </Container>
    );
  }
  
export default Page1;