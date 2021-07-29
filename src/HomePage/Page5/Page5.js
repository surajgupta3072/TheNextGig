import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import '../../App.css'
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
        <h4 className="page3_subtitle text3">Learn from your <text style={{color:"#f26c4f"}}>peers</text>.<br className="line_space"/> They're smarter than you think.</h4>
      </div>
      </div>
        
        <div className="rectangle-box">
          <Row style={{height:"130%"}}>
            <Col style={{padding:"0px"}} md={4}>
              <img src="discord.jpg" className="discord_img"  alt="img1"/>
            </Col>
            <Col md={8}>
              <p className="text1">We're on Slack.<br className="page5_linespace"/> Not Slacking.</p>
              <p className="text2">Most probably discussing conspiracy theories though.</p>
            </Col>
          </Row>  
        </div>
        <div className="button_div_page5">
          <button type="submit" className="button_slide slide_right">Gossip Here<ArrowRight className="button_arrow"/></button>
        </div>
    </div>
    );
  }
  
export default Page5;