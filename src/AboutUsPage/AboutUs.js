import Team from './Team';
import Vision from './Vision';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Linkedin,Whatsapp,Instagram} from 'react-bootstrap-icons';

function AboutUs(){
    return(
      <div>  
       <Vision/> 
       <Team/>
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
        {/* <div >
          <Row style={{marginTop: "6%", border:"1px solid #534D4D", padding:"1.5%", background: "transparent", marginLeft:"9%", marginRight: "9%"}}>
              <Col  md={10}>
              <h6 style={{fontSize:"15px",color:"#FFFFFF99"}} className="footer_page3_gigs">
              © 2021 TheNextGig. All Rights Reserved
              </h6>
              </Col> 
              <div style={{display:"flex",justifyContent:"center"}} md={2}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                  <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                  <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
              </div>
          </Row>
          </div> */}
      </div>
    );
}

export default AboutUs;