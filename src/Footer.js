import React  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, Linkedin, Twitter, Instagram } from 'react-bootstrap-icons';
import './Footer.css';

function Footer(){
    return(
        <div style={{backgroundColor:"black"}}>
        <Container style={{backgroundColor:"black",paddingTop:"5%"}}>
            <Row>
                <Col md={7} style={{marginBottom:"3%"}}>
                    <h2 style={{color:"white"}}>Subsribe to our</h2>
                    <h2 style={{color:"white", marginBottom:"3%"}}>newsletter</h2>
                    <input style={{width:'250px', height:'50px', backgroundColor:'#0A0C18',color:"white"}} name='email' type='email' placeholder='Email Address'/>
                    &nbsp;&nbsp;
                    <button style={{backgroundColor:"grey", height:"50px", width:"100px"}}>Subscribe</button>
                </Col>
                <Col>
                    <h3 style={{marginBottom:"7%"}}>The NextGig</h3>
                    <div className='footer-link'>
                        <a href="#" style={{display:"block", marginBottom:"5%"}}>Community</a>
                        <a href="#" style={{display:"block", marginBottom:"5%"}}>Our Vision</a>
                        <a href="#" style={{display:"block", marginBottom:"5%"}}>Login</a>
                    </div>
                </Col>
                <Col>
                    <h3 style={{marginBottom:"7%"}}>Legal</h3>
                    <div className='footer-link'>
                        <a href="#" style={{display:"block", marginBottom:"5%"}}>Terms</a>
                        <a href="#" style={{display:"block", marginBottom:"5%"}}>Privacy</a>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: "7%", border:"1px solid white", padding:"2%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"grey"}}>
                    2021 © The NextGig.All Rights Reserved
                </h6>
                </Col> 
                <Col md={2}>
                    <Facebook style={{color: "white"}}/>&nbsp;&nbsp;
                    <Linkedin style={{color: "white"}}/>&nbsp;&nbsp;
                    <Instagram style={{color: "white"}}/>&nbsp;&nbsp;
                    <Twitter style={{color: "white"}}/>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
export default Footer;