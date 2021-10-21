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
     {/*  <Row>
       <Col className="gig_text_laptop_view" md={7}>
         
         <p className="mast_page2_p2_gigs">Learn from the best.</p>
         <div>
           <Row className="check_masterclass">
             <div >
             <div className="btn_div1"><button className="btn_recommendx"><a style={{textDecoration:"none"}} href="/TNGoriginals"><p style={{color:"white"}} className="mast_page2_p2_gigs">Check out the
 <br/>TNG Originals</p></a> </button></div>
             </div>
             <div className="zingerx">
             <div> <a href="/TNGoriginals"><ArrowRight className="button_arrow_gigx"/></a></div>
             </div>
           </Row> 
         </div>
       </Col> 
       <Col className="gigs_page_text_mobile" md={7}>
         <p className="mast_page2_p2_gigs">Learn from the best.</p>
         <div>
             <div >
             <div className="btn_div"><div><button className="btn_recommendx"><a style={{textDecoration:"none"}} href="/TNGoriginals"><p style={{color:"white"}} className="mast_page2_p2_gigs">Check out our  <br /> masterclasses. </p> </a> </button></div></div>
             </div>
             <div className="zingerx">
             <div> <a href="/TNGoriginals"><ArrowRight className="button_arrow_gig"/></a></div>
             </div>
         </div>
         
       </Col> 
       <Col className="mobile_view_of_icons col-container" style={{backgroundColor:"#1B1C2A"}} >
         <Container >
           <div style={{display:"flex",justifyContent:"space-between"}}>
         <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}} >
               <img alt="..." style={{height:"50px",width:"50px"}} src="/google_logo.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px"}} src="/google_logo.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px"}} src="/google_logo.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px"}} src="/google_logo.jpg"/>
             </div>
             <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
            <div>Meet our Partners!</div>           
            <div className="gig_page2_row1" ><a style={{textDecoration:"none"}} href="/expert"><p style={{color:"rgb(243, 123, 97)"}}>Check them out.</p></a></div>
            <a href="/expert" ><ArrowRight className="button_arrow_MC_Page2_2"/></a>
            </div>
            </div>
         </Container>
       </Col>
       <Col style={{backgroundColor:"#1B1C2A",width:"740px"}} className="col-container laptop_view_of_icons">
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
      </Row> */}
      <Container className="rectangle-box2" style={{marginTop:"5%"}}>
        <Row >
          <Col style={{padding:"2%"}} md={8}>
            <p style={{marginBottom:"0%"}} className="mast_page2_p3">Looking for a gig in a specific domain?</p>
            <p  className="mast_page2_p3">Want to work with a particular company?</p>
          </Col>
          <Col  className="col-button">
            <div  className="btn_div"><div><button className="btn_recommend" onClick={() => setModalShow(true)}>Recommend 
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
                <Col className="social_link" md={2}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </Col>
            </Row>
            </div>
      </Container> 
    );
  }
  
  export default Page2;
  