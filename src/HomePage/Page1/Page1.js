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
          <Col style={{marginTop:"5%", marginBottom:"12%"}} md={4}>
            <div>              
              <div class="heading">
                <div>
                  <p class="slide-down">
                    <span>LEARN.</span>
                  </p>
                </div>
                <div>
                  <p class="slide-down">
                    <span>UPSKILL.</span>
                  </p>
                </div>
                <div>
                  <p class="slide-down">
                    <span>GROW.</span>
                  </p>
                </div>
              </div>
              <h1 className="subheading slide-down">the right way.</h1>
            </div>
          </Col>
          <Col className="homeimage" md={8}></Col>
        </Row>
        
        <div className="button_div">
          <Link to="ummm" scroll={true}><button  className="button_slide slide_right">Ummm, how?<ArrowDown className="button_arrow"/></button></Link>
        </div>
      </Container>
    );
  }
  
export default Page1;