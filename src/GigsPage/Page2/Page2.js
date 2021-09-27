import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ArrowRight,ArrowLeft,Linkedin,Whatsapp,Instagram} from 'react-bootstrap-icons';
import MyVerticallyPopUp  from './popup';
import './Page2.css'
import { useState } from 'react';

function Page2() {
  const [modalShow, setModalShow] = useState(false);
    return (
      <Container className="top-container">
      <Row>
       <Col md={7}>
         
         <p className="mast_page2_p2">Learn from the best.</p>
         <div>
           <Row>
             <div >
              <a style={{textDecoration:"none"}} href="/masterclass"><p style={{color:"rgba(242, 108, 79, 1)"}} className="mast_page2_p2">Check out our  <br /> masterclasses. </p> </a> 
             </div>
             <div className="zinger">
             <div> <a href="/masterclass"><ArrowRight className="button_arrow1"/></a></div>
             </div>
           </Row>
          
          
         </div>
         
       </Col> 
       <Col style={{backgroundColor:"#1B1C2A",width:"740px"}} className="col-container">
         <Container >
           <Row>
         <Col style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}} md={3} xs={1}>
               <img alt="..." style={{height:"50px",width:"50px",marginTop:"25%"}} src="/google_logo.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px",marginLeft:"75%",marginTop:"30%"}} src="/google_logo.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px",marginTop:"20%"}} src="/google_logo.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px",marginLeft:"140%"}} src="/google_logo.jpg"/>
             </Col>
             <Col>
            <Row className="mast_page2_row"><p className="mast_page2_p4">Meet our Partners!</p></Row>           
            <Row className="gig_page2_row1" ><a style={{textDecoration:"none"}} href="/expert"><p style={{color:"rgb(243, 123, 97)",marginLeft:"-18%"}} className="gig_page2_p5">Check them out.</p></a></Row>
            <a href="/expert" ><ArrowRight style={{marginLeft:"18%"}} className="button_arrow_MC_Page2_2"/></a>
            </Col>
            </Row>
         </Container>
       </Col>
      </Row>
      <Container className="rectangle-box2" style={{marginTop:"5%"}}>
        <Row >
          <Col style={{padding:"2%"}} md={8}>
            <p style={{marginBottom:"0%"}} className="mast_page2_p3">Looking for a gig in specific domain?</p>
            <p  className="mast_page2_p3">Want to work with a particular company?</p>
          </Col>
          <Col  className="col-button">
            <div className="btn_div"><div><button className="btn_recommend" onClick={() => setModalShow(true)}>Recommend 
            <ArrowLeft className="button_arrow"/></button>
              <MyVerticallyPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
               /></div></div>
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
                <div className="social_link" md={2}>
                    <Linkedin style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Whatsapp style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                </div>
            </Row>
            </div>
      </Container> 
    );
  }
  
  export default Page2;
  