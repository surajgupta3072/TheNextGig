import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ArrowLeft } from "react-bootstrap-icons";
import master from '../Masterclass.json';
import { useEffect, useState } from 'react';
import './Page3.css'

function Page3(props) {
  const [session, setSession] = useState({});
  useEffect(() => {
    setSession(master[props.id-1]);
  });
    return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Row style={{marginTop:"15%"}}>
              <h1  className="page3_heading1">{session.course_name}</h1>
            </Row>
            <Row style={{marginTop:"5%"}}>
              <p className="page3_3linetext">Some text will span across three lines<br /> AAAAAA <br /> BBBBBBB</p>
              <p className="page3_3linetext2">Lifetime access to {session.course_timing} of Learning experience</p>
            </Row>
            <Row className="card1_page3"  style={{marginLeft: "0", marginTop: "6%"}}>
            <div >
              
                <p className="page3_cardtext">
                Prepares you for roles in:
                </p>
                <Row>
                  <Col>
                    <Row>
                      <Col className="img_col">
                        <img  className="img_page3_card" variant="top" src={session.course_image}/>
                      </Col>
                      <Col className="text_col">
                        <h1  className="text_page3_card">Role</h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col className="img_col">
                        <img className="img_page3_card" variant="top" src={session.course_image}/>
                      </Col>
                      <Col className="text_col">
                        <h1 className="text_page3_card">Industry</h1>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                     
          </div>
            </Row>
            <Row style={{marginTop: "5%", paddingBottom: "1%"}}>
              <Col>
                <button type="submit" className="button_slide_page3 slide_right">
                Get to know<br /> your expert <ArrowLeft className="button_arrow_footer"/>
                </button>
              </Col>
              <Col>
                <button type="submit" className="button_slide_page3 slide_right">
                Invest xxx in <br /> your future <ArrowLeft className="button_arrow_footer"/>
                </button>
              </Col>
            </Row>
          </Col>
          <Col class="col_img" style={{padding:"0px"}} md={6}>            
              <img src={session.course_image} className="anim_img"/>        
          </Col>
          </Row>
      </Container>
      <Container className="container2_page3">
        <Row>
        <div className="main_card" >               
                <div className="main_cardbody"> 
                  <Row>
                    <Col md={6} className="col1_cardbody">
                    <img src={session.course_image} className="img_letsgo"/>
                      <p className="twoline_desc">Two line description of the episode that is clicked under episodes tab</p>
                    </Col >
                    <Col md={6}>
                    <div className="menu_card" >               
                        
                          <h1 style={{marginTop: "2%", marginLeft: "2%"}}>Episodes</h1>   
                          <div className="vertical-menu">
                            <a href="#" className="active">1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a><br />
                            <a href="#" >1. What is due diligence?</a>
                          </div>                
                                     
                    </div>
                    </Col>
                  </Row>                   
                </div>               
            </div>
        </Row>
      </Container>
    </div>
    );
  }
  
  export default Page3;
  