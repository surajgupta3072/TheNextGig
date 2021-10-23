import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ArrowRight,ArrowLeft,Linkedin,Whatsapp,Instagram} from 'react-bootstrap-icons';
import MyVerticallyPopUp  from './popup';
import './Page2.css';
import { useState } from 'react';

function Page2() {
  const [modalShow, setModalShow] = useState(false);
    return (
      <div>
     <Container  className="top-container laptop_view_masterclass_page2">
      <Row>
       <Col md={7}>
         <p  className="mast_page2_p1">Already skilled enough?</p>
         <Row>
           <Col md={4} xs={5}>
           <p className="mast_page2_p2">Stop dreaming</p>
           <p style={{color:"rgba(242, 108, 79, 1)",marginTop:"-15px"}} className="mast_page2_p2">Start doing</p>
           </Col>
           <Col md={8} xs={7}>
              <div className="button_div_MC_Page2">
                <a href="/ExperientialLearning"><button   className="button_slide_MC_Page2 slide_right">Gigs / projects /<br />
internships / jobs<ArrowRight className="button_arrow_MC_Page2"/></button></a>
              </div>
            </Col>
         </Row>
       </Col> 
        <Col style={{backgroundColor:"#1B1C2A"}} className="col-container">
         <Container>
           <Row>
             <Col style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}} md={3} xs={1}>
               <img alt="..." style={{height:"50px",width:"50px",marginTop:"25%"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px",marginLeft:"75%",marginTop:"30%"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px",marginTop:"20%"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px",marginLeft:"140%"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
             </Col>
             <Col>
            <Row className="mast_page2_row"><p className="mast_page2_p4">Meet the experts!</p></Row>
            <Row style={{paddingLeft:"19%",marginBottom:"0%"}}><p style={{marginBottom:"0%"}} className="mast_page2_p5">Superwomen. Supermen.</p></Row>
            <Row className="mast_page2_row1" ><p style={{color:"rgb(243, 123, 97)"}} className="mast_page2_p5"><a href="/expert" style={{textDecoration:"none", color:"#f26c4f"}}>Stalk them.</a></p></Row>
            <a href="/expert" ><ArrowRight className="button_arrow_MC_Page2_2"/></a>
            </Col>
            </Row>
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
            <button style={{marginLeft:"20%"}} className="button_slide_MC_Page2_2 slide_right" onClick={() => setModalShow(true)}>Recommend <br /> a session
            <ArrowLeft style={{marginLeft:"1.5%"}} className="button_arrow_MC_Page2_Right"/></button>
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
                <h6 style={{fontSize:"15px",color:"#FFFFFF99"}} className="footer_page3_gigs">
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <Col md={2}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </Col>
            </Row>
            </div>
      </Container> 
      <Container  className="top-container mobile_view_masterclass_page2">
      <Row>
       <Col md={7}>
         <p  className="mast_page2_p1">Already skilled enough?</p>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
           <div >
           <p className="mast_page2_p2">Stop dreaming</p>
           <p style={{color:"rgba(242, 108, 79, 1)"}} className="mast_page2_p2">Start doing</p>
           </div>
           <div>
              <div className="button_div_MC_Page2">
                <a href="/ExperientialLearning"><button   className="button_slide_MC_Page2 slide_right">Gigs / projects / <br /> internships / jobs<ArrowRight className="button_arrow_MC_Page2"/></button></a>
              </div>
            </div>
         </div>
         <br/> 
       </Col> 
        <Col style={{backgroundColor:"#1B1C2A"}} className="col-container">
         <Container>
           <div style={{display:"flex",justifyContent:"space-between"}}>
             <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column"}} >
               <img alt="..." style={{height:"50px",width:"50px"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
               <img alt="..." style={{height:"50px",width:"50px"}} src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
             </div>
             <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
            <div>Meet the experts!</div>
            <div ><p className="mast_page2_p5">Superwomen. Supermen.</p></div>
            <div style={{color:"rgb(243, 123, 97)"}}><a href="/expert" style={{textDecoration:"none", color:"#f26c4f"}}>Stalk them.</a></div>
            <div>
            <a href="/expert" ><ArrowRight className="button_arrow_MC_Page2_2"/></a>
            </div>
            </div>
            </div>
         </Container>
       </Col> 
      </Row>
      <Container className="rectangle-box2" style={{marginTop:"5%"}}>
        <Row >
          <Col style={{padding:"2%"}} md={7}>
            <p style={{textAlign:"center"}} className="mast_page2_p3">Want to learn something cool?</p>
            <p  style={{textAlign:"center"}} className="mast_page2_p3">From a specific expert / company?</p>
          </Col>
          <Col style={{paddingLeft:"12%"}} className="col-button">
            <button style={{marginLeft:"20%"}} className="button_slide_MC_Page2_2 slide_right" onClick={() => setModalShow(true)}>Recommend <br /> a session
            <ArrowLeft style={{marginLeft:"5%"}} className="button_arrow_MC_Page2_Right"/></button>
              <MyVerticallyPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
               />
          </Col>
        </Row>
      </Container>
          <div >
            <Row style={{marginTop: "6%", border:"1px solid #534D4D", padding:"1.5%", background: "transparent", marginLeft:"9%", marginRight: "9%"}}>
                <Col  md={10}>
                <h6 style={{fontSize:"15px",color:"#FFFFFF99"}}className="footer_page3_gigs">
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <div style={{display:"flex",justifyContent:"center"}} md={2}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </div>
            </Row>
            </div>
      </Container> 
      </div>
    );
  }
  
export default Page2;