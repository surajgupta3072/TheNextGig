import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import '../../App.css'
import './Page5.css'

function Page5() {
    return (
    <div style={{marginTop:"8%"}}>
        <div className="getin">
          <svg id='rectangle'>
            <rect id='stroke' rx='3' ry='3' height="50"/>
            <text fontSize="40px" fill="white" x="50%" y="25%" dominant-baseline="middle" text-anchor="middle">COMMUNITY</text>
          </svg>
        </div>
        <p style={{marginLeft:"10%", marginTop:"-4%"}} className="text3">Learn from your <text style={{color:"#f26c4f"}}>peers</text> they are smarter than you think.</p>
        <div className="rectangle-box">
          <Row>
            <Col  style={{padding:"0px"}} md={4}>
              <img src="discord.jpg" className="discord_img"  alt="img1"/>
            </Col>
            <Col md={8}>
              <p className="text1">We're on Slack.Not Slacking.</p>
              <p className="text2">Most Probably Discussing conspirancy theories though.</p>
            </Col>
          </Row>  
        </div>
        <button style={{marginTop:"5%", marginLeft: "43%"}} type="submit" className="button_slide slide_right">Gossip Here<ArrowRight className="button_arrow"/></button>
    </div>
    );
  }
  
export default Page5;