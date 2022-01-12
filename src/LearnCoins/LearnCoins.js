import React from 'react'
import Container from "react-bootstrap/Container";
import './LearnCoins.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Linkedin, Whatsapp, Instagram, Youtube } from "react-bootstrap-icons";

function TNGCoins() {
  return (
    <div>
      <div className="tngcoins_top_image">
        <Container>
          <h1 style={{ textShadow: "0px 4px 4px #F26C4F", marginTop: "1.5%", opacity: "1" }}>TNG MINUTES</h1>
          <p style={{ fontFamily: "Open Sans" }}>To help you learn and share knowledge</p>
        </Container>
      </div>
      <div >
        <Container style={{ marginBottom: "0" }}>
          <div className="top_masterclass">
            <div className="heading_box" style={{ marginBottom: "6%", marginLeft: "0%" }}>
              <div>
                <p className="btn">
                  <span>
                    <span>
                      <span className="border_box">Earn Minutes</span>
                    </span>
                  </span>
                </p>
              </div>
              <div style={{ marginTop: "70px" }}>
                <h4 className="page3_subtitle">Earn while you share</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <div className="page2_laptop_view">
          <Container>
            <Row style={{ display: "flex", flexDirection: "row" }}>
              <Card id="tng_learn_coin_signup_card" onClick={() => window.location.href = "/login"} className="page2card" style={{ width: "29.9%", marginLeft: "2.5%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", borderRadius: "12px", cursor: 'pointer' }}>
                <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginTop: "40px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/videohome.jpg" />
                <Card.Body style={{ marginTop: "30px" }}>
                  <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >LOGIN DAILY</Card.Title>
                  <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                    Login daily to earn 5 minutes of free content
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card id="tng_learn_coin_video_card" onClick={() => window.location.href = "/SocialLearning"} className="page2card2" style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", borderRadius: "12px", cursor: 'pointer' }}>
                <Card.Body style={{ marginTop: "30px" }}>
                  <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >UPLOAD BITE-SIZED VIDEOS</Card.Title>
                  <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                    Upload bite-sized videos sharing knowledge gained from your experience to earn 10 minutes of free content
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/bloghome.jpg" />
              </Card>

              <Card id="tng_learn_coin_profile_card" onClick={() => window.location.href = "/profile"} className="page2card3" style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", borderRadius: "12px", cursor: 'pointer' }}>
                <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginTop: "40px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/TNG+Learn+Coins+-+Profile+picture+card.png" />
                <Card.Body style={{ marginTop: "30px" }}>
                  <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >COMPLETE YOUR PROFILE</Card.Title>
                  <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                    Complete your profile to earn 20 minutes of free content
                  </Card.Text>
                </Card.Body >
              </Card>
            </Row>
          </Container>
        </div>


        <div className="page2_mobile_view" >
          <Container>
            <Col>
              <Card id="tng_learn_coin_signup_card" onClick={() => window.location.href = "/login"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", marginTop: "15%", cursor: 'pointer' }}>
                <Card.Body>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Col >
                      <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/videohome.jpg" />
                    </Col>
                    <Col style={{ marginLeft: "-20%" }}>
                      <Card.Title style={{ fontSize: "20px" }}>LOGIN DAILY</Card.Title>
                      <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                        Login daily to earn 5 minutes of free content
                      </Card.Text>
                    </Col>
                  </div>
                </Card.Body>

              </Card>
              <Card id="tng_learn_coin_video_card" onClick={() => window.location.href = "/SocialLearning"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", marginTop: "10%", cursor: 'pointer' }}>
                <Card.Body>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Col>
                      <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/bloghome.jpg" />
                    </Col>
                    <Col style={{ marginLeft: "-20%" }}>
                      <Card.Title style={{ fontSize: "20px" }}>UPLOAD BITE-SIZED VIDEOS</Card.Title>
                      <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                        Upload bite-sized videos sharing knowledge gained from your experience to earn 10 minutes of free content
                      </Card.Text>
                    </Col>
                  </div>
                </Card.Body>

              </Card>
              <Card id="tng_learn_coin_profile_card" onClick={() => window.location.href = "/profile"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", marginTop: "10%", marginBottom: "10%", cursor: 'pointer' }}>
                <Card.Body>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Col>
                      <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="/TNG Learn Coins - Profile picture card.png" />
                    </Col>
                    <Col style={{ marginLeft: "-20%" }}>
                      <Card.Title style={{ fontSize: "20px" }}>COMPLETE YOUR PROFILE</Card.Title>
                      <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                        Complete your profile to earn 20 minutes of free content
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
        <Container style={{ marginTop: "5%" }}>
          <div className="top_masterclass">
            <div className="heading_box" style={{ marginBottom: "2%", marginLeft: "0%" }}>
              <div>
                <p className="btn">
                  <span>
                    <span>
                      <span className="border_box">Redeem Minutes</span>
                    </span>
                  </span>
                </p>
              </div>
              <div style={{ marginTop: "70px" }}>
                <h4 className="page3_subtitle">Watch experts share their real-life experience</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <div className="page2_laptop_view">
          <br /><br /><br />
          <Container>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              <Card id="tng_learn_coin_signup_card" onClick={() => window.location.href = "/TNGOriginals"} className="page2card" style={{ width: "29.9%", marginLeft: "2.5%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", borderRadius: "12px", cursor: 'pointer' }}>
                <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginTop: "40px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/videohome.jpg" />
                <Card.Body style={{ marginTop: "30px" }}>
                  <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >TNG ORIGINALS</Card.Title>
                  <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                    Specially curated - they’re short, binge-able and based on real-life experiences.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card id="tng_learn_coin_video_card" onClick={() => window.location.href = "/SocialLearning"} className="page2card2" style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", borderRadius: "12px", cursor: 'pointer' }}>
                <Card.Body style={{ marginTop: "30px" }}>
                  <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >BITE-SIZED VIDEOS</Card.Title>
                  <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                    Acquire a skill in less than 10 minutes
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/bloghome.jpg" />
              </Card>
            </Row>
          </Container>
        </div>
        <div className="page2_mobile_view" >
          <Container>
            <Col>
              <Card id="tng_learn_coin_signup_card" onClick={() => window.location.href = "/TNGOriginals"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", marginTop: "15%", cursor: 'pointer' }}>
                <Card.Body>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Col >
                      <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/videohome.jpg" />
                    </Col>
                    <Col style={{ marginLeft: "-20%" }}>
                      <Card.Title style={{ fontSize: "20px" }}>TNG ORIGINALS</Card.Title>
                      <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                        Specially curated - they’re short, binge-able and based on real-life experiences.
                      </Card.Text>
                    </Col>
                  </div>
                </Card.Body>
              </Card>
              <Card id="tng_learn_coin_video_card" onClick={() => window.location.href = "/SocialLearning"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", marginTop: "10%", cursor: 'pointer' }}>
                <Card.Body>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Col>
                      <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="https://websitestaticimages.s3.ap-south-1.amazonaws.com/bloghome.jpg" />
                    </Col>
                    <Col style={{ marginLeft: "-20%" }}>
                      <Card.Title style={{ fontSize: "20px" }}>BITE-SIZED VIDEOS</Card.Title>
                      <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                        Acquire a skill in less than 10 minutes
                      </Card.Text>
                    </Col>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
      {/* <div style={{marginLeft: "11%",marginTop: "-1%", fontSize: "18px", color: "#fff"}} className="like-text1"><text style={{color:"#f26c4f"}}>*</text> Or redeem using <a  style={{color: "#f26c4f", textDecoration: "none"}}><i> TNG Learn Coins</i></a></div> */}
      <div className="laptop_view">
        <Row style={{ marginTop: "6%", border: "1px solid #534D4D", padding: "1.5%", background: "transparent", marginLeft: "9%", marginRight: "9%" }}>
          <Col md={9}>
            <h6 style={{ fontSize: "15px", color: "#FFFFFF99" }} className="footer_page3_gigs">
              © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
            </h6>
          </Col>
          <Col md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCls4liz2wuWH6FOrX_dARKw"><Youtube style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
          </Col>
        </Row>
      </div>
      <Container className="top-container mobile_view_masterclass_page2">
        <div >
          <Row style={{ marginTop: "6%", border: "1px solid #534D4D", padding: "1.5%", background: "transparent", marginLeft: "9%", marginRight: "9%" }}>
            <Col md={10}>
              <h6 style={{ fontSize: "15px", color: "#FFFFFF99" }} className="footer_page3_gigs">
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
              </h6>
            </Col>
            <div style={{ display: "flex", justifyContent: "center" }} md={2}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCls4liz2wuWH6FOrX_dARKw"><Youtube style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            </div>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default TNGCoins
