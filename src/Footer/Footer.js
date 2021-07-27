import React  from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Linkedin, Instagram, Whatsapp } from 'react-bootstrap-icons';
import './Footer.css';
import MyVerticallyCenteredModal from './Modal.js'
import { ArrowLeft } from "react-bootstrap-icons";

function Footer(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div style={{background: "rgba(255, 255, 255, 0.1)", paddingTop:"3%"}}>
        
            <Row style={{marginLeft: "9%", marginRight: "9%", paddingTop:"2%"}}>
                <Col md={7} style={{marginBottom:"3%"}}>
                    <h2 className="footer_heading1">We're here</h2>
                    <h2 className="footer_heading2">Let's talk</h2>
                    <button style={{ marginLeft: "0%"}} type="submit" className="button_slide slide_right" onClick={() => setModalShow(true)}>
                        Get in Touch <ArrowLeft className="button_arrow_footer"/></button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                </Col>
                <Col>
                    <h3 style={{marginBottom:"7%", fontSize:"20px"}}>About Us</h3>
                    <div className='footer-link'>
                        <a href="#" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Team</a>
                        <a href="#" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Vision</a>
                    </div>
                </Col>
                <Col>
                    <h3 style={{marginBottom:"7%", fontSize:"20px"}}>Legal</h3>
                    <div className='footer-link'>
                        <a href="#" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>T&C</a>
                        <a href="#" style={{display:"block", marginBottom:"5%", fontSize:"18px"}}>Privacy</a>
                    </div>
                </Col>
            </Row>
            
            <div className="footer_div2">
            <Row style={{marginTop: "6%", border:"1px solid white", padding:"1.5%", background: "#000", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"grey"}}>
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
            
        
    </div>
    );
}
export default Footer;