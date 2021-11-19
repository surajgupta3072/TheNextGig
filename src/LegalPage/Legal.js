import Privacy from "./Privacy";
import TC from "./TC";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Linkedin, Instagram, Whatsapp, Discord } from 'react-bootstrap-icons';
function Legal(){
    return(
        <div>
            <TC/>
            <Privacy/>
            <div className="footer_div2_lap">
            <Row style={{border:"1px solid #534D4D", padding:"1.5%", background: "#000", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"grey"}} className="footer_page3_gigs">
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <Col md={2}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/EEVcU7ZzAQ"><Discord  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </Col>
            </Row>
            </div>
            <div className="footer_div2">
            <Row style={{border:"1px solid #534D4D", padding:"1.5%", background: "#000", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"grey"}} className="footer_page3_gigs">
                © 2021 TheNextGig. <br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <div style={{display:"flex",justifyContent:"center"}} md={2}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/EEVcU7ZzAQ"><Discord  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </div>
            </Row>
            </div>
        </div>

    );
}

export default Legal;