import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import './Page5.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Page5() {
    return (
    <div className="page5_maindiv" >
        <div className="heading_box" style={{marginBottom: "6%"}}>
      <div>
        <p class="btn">
          <span>
            <span>
              <span className="border_box">SOCIAL LEARNING</span>
            </span>
          </span>
        </p>
      </div>
      <div style={{marginTop: "70px"}}>
        <h4 className="page3_subtitle text3">Peers, colleagues, people like you and me - but with knowledge <text style={{color:"#f26c4f"}}> to share</text> .</h4>
      </div>
      </div>
        
        {/* {<div className="rectangle-box">
          <Row style={{height:"130%"}}>
            <Col style={{padding:"0px"}} md={4}>
              <img src="discord.jpg" className="discord_img"  alt="img1"/>
            </Col>
            <Col md={8}>
              <p className="text1">We’re on Discord!</p>
              <p className="text2">...most probably discussing global conspiracy theories...</p>
            </Col>
          </Row>  
        </div>} */}

<div id="ummm" >
      <div className="page2_laptop_view">
        <Container>
          <Row>
            <Card style={{ width: "27%", marginLeft:"1.5%",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"10px"}} variant="top" src="holder.svg"/>
                <Card.Body style={{marginTop:"10px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >VIDEOS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Upload a video? Get rewarded. Watch a video? Learn something new. <br /><br />It’s a win-win!  
                  </Card.Text>
                </Card.Body>
                
            </Card>
            
            <Card style={{ width: "27%", marginLeft:"7%", backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Body style={{marginTop:"90px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >BLOGS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Read some; write some!
The topic? Anything under the sun!
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginBottom:"30px"}} variant="top" src="holder.svg"/>
                
            </Card>

            <Card style={{ width: "27%", marginLeft:"7%",backgroundColor:"rgba(242, 108, 79, 0.07)",border:"2px solid rgba(242, 108, 79, 0.6)",borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"10px"}} variant="top" src="holder.svg"/>
                <Card.Body style={{marginTop:"10px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >COMMUNITY</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Talk to your fellow learners and experts. Build your network!
                  </Card.Text>
                </Card.Body >
                
            </Card>
          </Row>
        </Container>
      </div>

      <div className="page2_mobile_view" style={{marginLeft: "4%"}}>
    <Container>
      <Col>
      <Card style={{ width: '20rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"15%" }}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col >
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>VIDEOS</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              Upload a video? Get rewarded.<br /> Watch a video? Learn something new. <br />It’s a win-win!  
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
        
      </Card>
      <Card style={{ width: '20rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%"}}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col>
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>BLOGS</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              Read some; write some! <br/>
The topic? Anything under the sun!
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
        
      </Card>
      <Card style={{ width: '20rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%", marginBottom: "10%"}}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col>
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px"}}>COMMUNITY</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              Talk to your fellow learners <br/> and experts. Build your network!
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
        
      </Card>
      
      
      </Col>
    </Container>
    </div>
    </div> 

        <div className="button_div_page5">
          <a target="_blank" href="https://discord.gg/EEVcU7ZzAQ"><button type="submit" className="button_slide slide_right">Let's go!<ArrowRight className="button_arrow"/></button></a>
        </div>
    </div>
    );
  }
  
export default Page5;