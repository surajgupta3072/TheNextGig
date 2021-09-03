import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ArrowRight,ArrowLeft,Linkedin,Whatsapp,Instagram} from 'react-bootstrap-icons';
import MyVerticallyPopUp  from './popup';
import './Page2.css';

function Page2() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
     <Container  className="top-container">
      <Row>
       <Col md={7}>
         <p className="mast_page2_p1">Already skilled enough?</p>
         <Row>
           <Col md={4} xs={5}>
           <p className="mast_page2_p2">Stop dreaming</p>
           <p style={{color:"rgba(242, 108, 79, 1)"}} className="mast_page2_p2">Start doing</p>
           </Col>
           <Col md={8} xs={7}>
              <div className="button_div_MC_Page2">
                <a href="/gigs"><button   className="button_slide_MC_Page2 slide_right">Gigs / projects / <br /> internships<ArrowRight className="button_arrow_MC_Page2"/></button></a>
              </div>
            </Col>
         </Row>
         
         
       </Col> 
       <Col style={{backgroundColor:"#1B1C2A",width:"740px"}} className="col-container">
         <Container>
            <Row className="mast_page2_row"><p className="mast_page2_p4">Meet the experts!</p></Row>
            <Row style={{paddingLeft:"45%",marginBottom:"0%"}}><p style={{marginBottom:"0%"}} className="mast_page2_p5">Superwomen. Supermen.</p></Row>
            <Row className="mast_page2_row1" ><p style={{color:"rgb(243, 123, 97)"}} className="mast_page2_p5"><a href="/expert" style={{textDecoration:"none", color:"#f26c4f"}}>Stalk them.</a></p></Row>
            <a href="/expert" ><ArrowRight className="button_arrow_MC_Page2_2"/></a>
         </Container>
         
       </Col>
      </Row>
      <Container className="rectangle-box2" style={{marginTop:"5%"}}>
        <Row >
          <Col style={{padding:"2%"}} md={7}>
            <p style={{marginBottom:"0%"}} className="mast_page2_p3">Want to learn something cool?</p>
            <p  className="mast_page2_p3">From a specific expert / company?</p>
          </Col>
          <Col style={{paddingLeft:"12%"}} className="col-button">
            <button style={{marginLeft:"20%"}} className="button_slide_MC_Page2_2 slide_right" onClick={() => setModalShow(true)}>Recommend <br /> a masterclass
            <ArrowLeft className="button_arrow_MC_Page2_Right"/></button>
              <MyVerticallyPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
               />
          </Col>
        </Row>
      </Container>
          <div >
            <Row style={{marginTop: "6%", border:"1px solid #534D4D", padding:"1.5%", background: "transparent", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"#FFFFFF99"}}>
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <Col md={2}>
                    <Linkedin style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Whatsapp style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                </Col>
            </Row>
            </div>
      </Container> 
    );
  }
  
export default Page2;