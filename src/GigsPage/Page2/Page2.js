import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ArrowRight,ArrowLeft,Linkedin,Whatsapp,Instagram} from 'react-bootstrap-icons';
import MyVerticallyPopUp  from './popup';
import './Page2.css'

function Page2() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
      <Container  className="top-container">
      <Row>
       <Col md={7}>
         <p className="mast_page2_p1">Want to learn before trying?</p>
         <p className="mast_page2_p2">Learn from the best<a href="/gigs"><ArrowRight className="button_arrow"/></a></p>
         <p style={{color:"rgba(242, 108, 79, 1)"}} className="mast_page2_p2">Check out sessions </p>
       </Col> 
       <Col style={{backgroundColor:"#1B1C2A",width:"740px"}} className="col-container">
         <Container>
            <Row className="mast_page2_row"><p className="mast_page2_p4">Meet our Partners!</p></Row>
            <Row style={{paddingLeft:"54%",marginBottom:"0%"}}><p style={{marginBottom:"0%"}} className="gig_page2_p5">Our partners in crime.</p></Row>
            <Row className="gig_page2_row1" ><p style={{color:"rgb(243, 123, 97)"}} className="gig_page2_p5"><a>Check them out.</a></p></Row>
         </Container>
         
       </Col>
      </Row>
      <Container className="rectangle-box2" style={{marginTop:"5%"}}>
        <Row >
          <Col style={{padding:"2%"}} md={8}>
            <p style={{marginBottom:"0%"}} className="mast_page2_p3">Need a gig in specific domain?</p>
            <p  className="mast_page2_p3">Want to work with a particular company?</p>
          </Col>
          <Col style={{paddingLeft:"12%"}} className="col-button">
            <button style={{marginLeft:"20%"}} className="button_slide slide_right" onClick={() => setModalShow(true)}>Recommend 
            <ArrowLeft className="button_arrow"/></button>
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
  