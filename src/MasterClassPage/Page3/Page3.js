import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { ArrowLeft } from "react-bootstrap-icons";
import master from '../Masterclass.json';
import { useEffect, useState } from 'react';

function Page3(props) {
  const [session, setSession] = useState({});
  useEffect(() => {
    setSession(master[props.id-1]);
  });
    return (
    <div>
      <Container>
        <Row>
          <Col>
            <Row style={{marginTop:"15%"}}>
              <h1 style={{fontSize: "48px"}}>{session.course_name}</h1>
            </Row>
            <Row style={{marginTop:"5%"}}>
              <p style={{fontSize: "24px"}}>Some text will span across three lines<br /> AAAAAA <br /> BBBBBBB</p>
              <p>Lifetime access to {session.course_timing} of Learning experience</p>
            </Row>
            <Row>
            <Card style={{ width: '80%',backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", marginTop:"5%", marginLeft: "2%"}}>
              <Card.Body>
                <Card.Text style={{fontSize:"25px",whiteSpace:"nowrap"}}>
                Prepares you for roles in:
                </Card.Text>
                <Row>
                  <Col>
                    <Col >
                      <Card.Img style={{margin: "auto", height:"20px", width:"20px",paddingTop:"10%"}} variant="top" src="public\card.png"/>
                    </Col>
                    <Col>
                      <Card.Title style={{fontSize:"20px",textAlign:"center"}}>Role</Card.Title>
                    </Col>
                  </Col>
                  <Col>
                    <Col >
                      <Card.Img style={{margin: "auto", height:"20px", width:"20px",paddingTop:"10%"}} variant="top" src="card.png"/>
                    </Col>
                    <Col>
                      <Card.Title style={{fontSize:"20px",textAlign:"center"}}>Industry</Card.Title>
                    </Col>
                  </Col>
                </Row>
              </Card.Body>       
          </Card>
            </Row>
            <Row style={{marginTop: "5%"}}>
              <Col>
                <button type="submit" className="button_slide slide_right">
                Get to know<br /> your expert <ArrowLeft className="button_arrow_footer"/>
                </button>
              </Col>
              <Col>
                <button type="submit" className="button_slide slide_right">
                Invest xxx in <br /> your future <ArrowLeft className="button_arrow_footer"/>
                </button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Image src={session.course_image} style={{paddingTop:"10%"}}/>
            </Row>
          </Col>
          </Row>
      </Container>
      <Container style={{marginTop:"5%", marginBottom:"5%"}}>
        Suraj Start from here the Page4 is now this Component
      </Container>
    </div>
    );
  }
  
  export default Page3;
  