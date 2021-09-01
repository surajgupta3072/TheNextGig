import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import './Page5.css'

function Page5() {
    return (
    <div className="page5_maindiv" >
        <div className="heading_box" style={{marginBottom: "10%"}}>
      <div>
        <p class="btn">
          <span>
            <span>
              <span className="border_box">JOIN THE FAMILY</span>
            </span>
          </span>
        </p>
      </div>
      <div style={{marginTop: "70px"}}>
        <h4 className="page3_subtitle text3">Keeping you <text style={{color:"#f26c4f"}}> up-to-date</text> - with things that help you grow.</h4>
      </div>
      </div>
        
        <div className="rectangle-box">
          <Row style={{height:"130%"}}>
            <Col style={{padding:"0px"}} md={4}>
              <img src="discord.jpg" className="discord_img"  alt="img1"/>
            </Col>
            <Col md={8}>
              <p className="text1">We’re on Discord!</p>
              <p className="text2">...most probably discussing global conspiracy theories...</p>
            </Col>
          </Row>  
        </div>
        <div className="button_div_page5">
          <a rel="noreferrer" target="_blank" href="https://discord.gg/EEVcU7ZzAQ"><button type="submit" className="button_slide slide_right">Gossip Here<ArrowRight className="button_arrow"/></button></a>
        </div>
    </div>
    );
  }
  
export default Page5;