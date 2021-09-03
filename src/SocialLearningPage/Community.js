import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRight } from "react-bootstrap-icons";
import './SocialLearningPage.css'
function Community(){
    return(
        <div>
        <div className="rectangle">
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
          <a rel="noreferrer" target="_blank" href="https://discord.gg/EEVcU7ZzAQ"><button  className="button_slide slide_right">Gossip Here<ArrowRight className="button_arrow"/></button></a>
        </div>
        </div>
    )
}

export default Community;