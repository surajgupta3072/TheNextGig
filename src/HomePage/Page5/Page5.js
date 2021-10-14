import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Page5.css';

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
        <h4 className="page3_subtitle text3">...instead of the <text style={{color:"#f26c4f"}}> mindless </text>  scrolling on other social media platforms?  to share</h4>
      </div>
      </div>

    <div>
      <div className="page2_laptop_view">
        <Container>
          <Row>
            <Card className="page2card" style={{ width: "29.9%", marginLeft:"2.5%",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"40px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/videohome.jpg"/>
                <Card.Body style={{marginTop:"40px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >VIDEOS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Upload a video? Get rewarded. Watch a video? Learn something new. <br/>It’s a win-win!  
                  </Card.Text>
                </Card.Body>
            </Card>
            
            <Card className="page2card"  style={{width: "29.9%", marginLeft:"3%", backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Body style={{marginTop:"40px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >BLOGS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Read some; write some!
                  The topic? Anything under the sun!
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginBottom:"30px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/bloghome.jpg"/>
            </Card>

            <Card className="page2card" style={{width: "29.9%", marginLeft:"3%",backgroundColor:"rgba(242, 108, 79, 0.07)",border:"2px solid rgba(242, 108, 79, 0.6)",borderRadius:"12px"}}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"40px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/communityhome.jpg"/>
                <Card.Body style={{marginTop:"40px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >COMMUNITY</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Talk to your fellow learners and experts. Build your network!
                  </Card.Text>
                </Card.Body >
            </Card>
          </Row>
        </Container>
      </div>


    <div className="page2_mobile_view" >
      <Container>
        <Col>
        <Card style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"15%" }}>
          <Card.Body>
            <div style={{display: "flex", flexDirection: "row"}}>
              <Col >
                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="/videohome.jpg"/>
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
        <Card style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%"}}>
          <Card.Body>
            <div style={{display: "flex", flexDirection: "row"}}>
              <Col>
                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="/bloghome.jpg"/>
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
        <Card style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%", marginBottom: "10%"}}>
          <Card.Body>
            <div style={{display: "flex", flexDirection: "row"}}>
              <Col>
                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="/communityhome.jpg"/>
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
          <a href="/SocialLearning"><button  className="button_slide slide_right">Let's go!<ArrowRight className="button_arrow"/></button></a>
        </div>
    </div>
    );
  }
  
export default Page5;