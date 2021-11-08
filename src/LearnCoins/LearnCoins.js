import React from 'react'
import Container from "react-bootstrap/Container";
import './LearnCoins.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';
import Carousel from "react-elastic-carousel";
import Data from "../MasterClassPage/Masterclass.json"
import CardX from'../HomePage/Page3/Card';
import ReactTooltip from 'react-tooltip';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

function TNGCoins() {
    return (
        <div>
            <div className="tngcoins_top_image">
        <Container>
          <h1 style={{textShadow:"0px 4px 4px #F26C4F",marginTop:"1.5%"}}>TNG LEARN COINS</h1>
          <p style={{fontFamily:"Open Sans"}}>Specially curated courses - they’re short, binge-able and based on real-life experiences.</p>
          <p style={{fontStyle:"italic",fontSize:"14px",marginTop:"-10px"}}>PS: You get a certificate too!</p>
        </Container>
      </div>
      <div >
        <Container style={{marginBottom:"0"}}>
          <div className="top_masterclass"><h1>Earn Coins</h1>
            <p className="subtitle_masterclass">Earn while you share</p>
          </div>
        </Container>
      </div>
      <div>
      <div className="page2_laptop_view">
        <Container>
          <Row style={{display: "flex", flexDirection: "row"}}>
            <Card onClick={()=>window.location.href="/SocialLearning"}  className="page2card" style={{ width: "29.9%", marginLeft:"2.5%",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px", cursor: 'pointer' }}>
                <Card.Img style={{margin: "auto", height:"170px", width:"170px", marginTop:"40px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/videohome.jpg"/>
                <Card.Body style={{marginTop:"30px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >UPLOAD VIDEOS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Upload bite-sized videos teaching something that you have learnt through your real life experience
                  </Card.Text>
                </Card.Body>
            </Card>
            
            <Card onClick={()=>window.location.href="/SocialLearning"} className="page2card2"  style={{width: "29.9%", marginLeft:"3%", backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgb(200, 150, 54,0.4)", borderRadius:"12px", cursor: 'pointer' }}>
                <Card.Body style={{marginTop:"30px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >UPLOAD BLOGS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Write about something you that you have learnt from your real life experience – and that excites you
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{margin: "auto", height:"170px", width:"170px", marginBottom:"30px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/bloghome.jpg"/>
            </Card>

            <Card onClick={()=>window.location.href="/profile"} className="page2card3" style={{width: "29.9%", marginLeft:"3%",backgroundColor:"rgba(242, 108, 79, 0.07)",border:"2px solid rgb(86, 150, 112,0.6)",borderRadius:"12px", cursor: 'pointer'}}>
                <Card.Img style={{margin: "auto", height:"170px", width:"170px", marginTop:"40px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/TNG Learn Coins - Profile picture card.png"/>
                <Card.Body style={{marginTop:"30px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >COMPLETE YOUR PROFILE</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Basic information on what you have learnt in the past
                  </Card.Text>
                </Card.Body >
            </Card>
          </Row>
        </Container>
      </div>


    <div className="page2_mobile_view" >
      <Container>
        <Col>
        <Card onClick={()=>window.location.href="/SocialLearning"} style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"15%", cursor: 'pointer' }}>
          <Card.Body>
            <div style={{display: "flex", flexDirection: "row"}}>
              <Col >
                <Card.Img style={{margin: "auto", height:"80px", width:"80px",borderRadius:"50%"}} variant="top" src="/videohome.jpg"/>
              </Col>
              <Col style={{marginLeft:"-20%"}}>
                <Card.Title style={{fontSize:"20px"}}>UPLOAD VIDEOS</Card.Title>
                <Card.Text style={{fontSize:"12px",whiteSpace:"normal",width:"100%"}}>
                Upload bite-sized videos teaching something that you have learnt through your real life experience   
                </Card.Text>
              </Col>
            </div>
          </Card.Body>
          
        </Card>
        <Card onClick={()=>window.location.href="/SocialLearning"} style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgb(200, 150, 54,0.4)",marginTop:"10%", cursor: 'pointer'}}>
          <Card.Body>
            <div style={{display: "flex", flexDirection: "row"}}>
              <Col>
                <Card.Img style={{margin: "auto", height:"80px", width:"80px",borderRadius:"50%"}} variant="top" src="/bloghome.jpg"/>
              </Col>
              <Col style={{marginLeft:"-20%"}}>
                <Card.Title style={{fontSize:"20px"}}>UPLOAD BLOGS</Card.Title>
                <Card.Text style={{fontSize:"12px",whiteSpace:"normal",width:"100%"}}>
                Write about something you that you have learnt from your real life experience – and that excites you
                </Card.Text>
              </Col>
            </div>
          </Card.Body>
          
        </Card>
        <Card onClick={()=>window.location.href="/profile"} style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgb(86, 150, 112,0.6)",marginTop:"10%", marginBottom: "10%", cursor: 'pointer'}}>
          <Card.Body>
            <div style={{display: "flex", flexDirection: "row"}}>
              <Col>
                <Card.Img style={{margin: "auto", height:"80px", width:"80px",borderRadius:"50%"}} variant="top" src="/Redeem coins.jpg"/>
              </Col>
              <Col style={{marginLeft:"-20%"}}>
                <Card.Title style={{fontSize:"20px"}}>COMPLETE YOUR PROFILE</Card.Title>
                <Card.Text style={{fontSize:"12px",whiteSpace:"normal",width:"100%"}}>
                Basic information on what you have learnt in the past
                </Card.Text>
              </Col>
            </div>
          </Card.Body>
        </Card>
        </Col>
      </Container>
    </div>
    </div>
    <div >
        <Container style={{marginBottom:"0"}}>
          <div className="top_masterclass"><h1>Redeem Coins</h1>
            <p className="subtitle_masterclass">Binge short curated sessions</p>
          </div>
        </Container>
      </div>
      <div>
        <div className="carousel-wrapper" style={{width: "90%", justifyContent: "center", alignItems: "center", marginLeft: "6%"}}>
          <Carousel breakPoints={breakPoints}>
            {Data.map(detail => (
              <div className="Item_component">
                <CardX 
                  text1={detail.course_instructor_post}
                  text2={detail.course_name}
                  text3={detail.instructor_creds}
                  card={detail.course_image}
                  name={detail.course_instructor}
                  time={detail.course_timing}
                  fees={detail.fees}
                  key={detail.id}
                  carl={detail.id}
                />
              </div>  
            ))}
          </Carousel>
        </div>
        
      </div>
        </div>
    )
}

export default TNGCoins
