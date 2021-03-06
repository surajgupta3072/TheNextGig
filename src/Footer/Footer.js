import { useState }  from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Linkedin, Instagram, Whatsapp, Youtube } from 'react-bootstrap-icons';
import './Footer.css';
import MyVerticallyCenteredModal from './Modal.js'
import { ArrowLeft } from "react-bootstrap-icons";

function Footer(){
    const [modalShow, setModalShow] = useState(false);

    return(
        <div>
        <div className="footer_laptop" style={{background: "rgba(255, 255, 255, 0.1)", paddingTop:"4.5%"}}>
         <div >
            <Row style={{marginLeft: "9%", marginRight: "9%"}}>
                <Col md={7} style={{marginBottom:"3%"}}>
                    <h2 style={{marginTop:"-20px"}} className="footer_heading1">We're here</h2>
                    <h2 className="footer_heading2">Let's talk</h2>
                    <button style={{ marginLeft: "0%"}} className="button_slide slide_right" onClick={() => setModalShow(true)}>
                        Get in Touch <ArrowLeft className="button_arrow_footer_footer"/></button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                </Col>
                <Col>
                    <h3 style={{marginBottom:"7%", fontSize:"20px", display: "flex", justifyContent: "left"}}>About Us</h3>
                    <div className='footer-link'>
                        <a href="/AboutUs" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Team</a>
                        <a href="/AboutUs" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Vision</a>
                        <a href="/AboutUs" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Contact Us</a>
                    </div>
                </Col>
                <Col>
                    <h3 style={{marginBottom:"7%", fontSize:"20px", display: "flex", justifyContent: "left"}}>Legal</h3>
                    <div className='footer-link'>
                        <a href="/terms" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>T&C</a>
                        <a href="/Privacy" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Privacy</a>
                    </div>
                </Col>
            </Row>
            </div>
            
            </div>
            <div className="footer_div2_lap">
            <Row style={{border:"1px solid #534D4D", padding:"1.5%", background: "#000", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"grey"}} >
                ?? 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <Col md={2}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCls4liz2wuWH6FOrX_dARKw"><Youtube  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </Col>
            </Row>
            </div>
            <div className="x_mob" style={{background: "rgba(255, 255, 255, 0.1)", paddingTop:"4.5%"}}>
            <div style={{marginTop:"-10%"}} className="mobile_footer">
            <Row style={{marginLeft: "9%", marginRight: "9%"}}>
                <Col md={7} style={{marginBottom:"3%"}}>
                    <h2 style={{textAlign:"center"}} className="footer_heading1">We're here</h2>
                    <h2 style={{textAlign:"center"}} className="footer_heading2">Let's talk</h2>
                    <div style={{display:"flex",justifyContent:"center"}}> <button style={{margin:"auto",marginTop:"-40px"}} className="button_slide slide_right" onClick={() => setModalShow(true)}>
                        Get in Touch <ArrowLeft className="button_arrow_footer_footer"/></button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        /></div>
                </Col>
                <div style={{marginTop:"20px",display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
                    <div>
                <Col>
                    <h3 style={{marginBottom:"7%", fontSize:"20px", display: "flex"}}>About Us</h3>
                    <div className='footer-link'>
                        <a href="/AboutUs" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Team</a>
                        <a href="/AboutUs" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Vision</a>
                        <a href="/AboutUs" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Contact Us</a>
                    </div>
                </Col>
                </div>
                <div>
                <Col>
                    <h3 style={{marginBottom:"7%", fontSize:"20px", display: "flex"}}>Legal</h3>
                    <div className='footer-link'>
                        <a href="/terms" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>T&C</a>
                        <a href="/Privacy" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Privacy</a>
                    </div>
                </Col>
                </div>
                </div>
            </Row>
            </div>
            <div className="footer_div2">
            <Row style={{border:"1px solid #534D4D", padding:"1.5%", background: "#000", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"grey"}} className="footer_page3_gigs">
                ?? 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <div style={{display:"flex",justifyContent:"center"}} md={2}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCls4liz2wuWH6FOrX_dARKw"><Youtube  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </div>
            </Row>
            </div>
            </div>
    </div>
    );
}
export default Footer;