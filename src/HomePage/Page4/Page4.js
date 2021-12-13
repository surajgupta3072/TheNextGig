import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Page4.css'
import Card from 'react-bootstrap/Card';
import { ArrowRight } from "react-bootstrap-icons";

function Page4() {
  return (
    <div>
      <br/><br/>
      <div className="page4_maindiv laptop_view">
        <div className="heading_box">
          <div>
            <p class="btn">
              <span>
                <span>
                  <span className="border_box">EXPERIENTIAL LEARNING</span>
                </span>
              </span>
            </p>
          </div>
          <div style={{ marginTop: "70px" }}>
            <h4 className="page3_subtitle">Practice what you <span style={{ color: "grey" }} className="heading_1span"> preach</span> <text style={{ color: "#F26C4F" }}>learn.</text></h4>
          </div>
        </div>
        <Container>
          <Row style={{ marginTop: "5%" }}>
            <Col className="main_col1" md={8} >
              <Row style={{ marginTop: "15%" }} xs={12}>
                <Row>
                  <h1 className="heading_1">Gigs, internships, live projects </h1>
                  <h1 className="heading_2" >..and job opportunities!</h1>
                </Row>
              </Row>
            </Col>
            <Col className="main_col1" md={4}>
              <Row className="img-grid_row" xs={12}>
                <Row className="row1">
                  <Col style={{ width: "20" }}>
                    <div class="grid_imgs">
                      <img src="./captzack.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                  <Col style={{ width: "20" }}>
                    <div class="grid_imgs">
                      <img src="./superpro.png" alt="..." class="myimg" />
                    </div>
                  </Col>

                  <Col style={{ width: "20" }}>
                    <div class="grid_imgs">
                      <img src="./orangewood.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                </Row >
                <Row className="row2" >
                  <Col></Col>

                  <Col>
                    <div class="grid_imgs">
                      <img src="./scalenut.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                  <Col>
                    <div class="grid_imgs">
                      <img src="./fish.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                </Row>
                <Row className="row3" >

                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <div class="grid_imgs">
                      <img src="./synapisca.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
          <div className="button_div_page4">
            <a href="/ExperientialLearning"><button className="button_slide slide_right orange_button_page3">Start doing<ArrowRight className="button_arrow" /></button></a>
          </div>
        </Container>
      </div>


      {/*Mobile view*/}

      <div className="page4_maindiv mobile_view">

        <div className="heading_box">
          <div>
            <p class="btn">
              <span>
                <span>
                  <span className="border_box">EXPERIENTIAL LEARNING </span>
                </span>
              </span>
            </p>
          </div>
          <div style={{ marginTop: "70px" }}>
            <h4 className="page3_subtitle">Practice what you <span style={{ color: "grey" }} className="heading_1span"> preach</span> <text style={{ color: "#F26C4F" }}>learn.</text></h4>
          </div>
        </div>

        <Container>
          <Row style={{ marginTop: "5%" }}>
            <div style={{ marginTop: "15%" }}>
              <div>
                <h1 className="heading_1">Gigs, internships, live projects </h1>
                <h1 className="heading_2" >..and job opportunities!</h1>
              </div>
            </div>
            <Col xs={11} className="main_col1" md={4}>
              <Row className="img-grid_row" xs={12}>
                <Row className="row1">
                  <Col></Col>
                  <Col >
                    <div style={{ width: "70px", height: "70px" }} class="grid_imgs">
                      <img src="./captzack.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                  <Col >
                    <div style={{ width: "70px", height: "70px" }} class="grid_imgs">
                      <img src="./superpro.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                  <Col >
                    <div style={{ width: "70px", height: "70px" }} class="grid_imgs">
                      <img src="./orangewood.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                </Row >
                <Row className="row2" >
                  <Col></Col>
                  <Col></Col>
                  <Col >
                    <div style={{ width: "70px", height: "70px" }} class="grid_imgs">
                      <img src="./scalenut.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                  <Col>
                    <div style={{ width: "70px", height: "70px" }} class="grid_imgs">
                      <img src="./fish.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                </Row>
                <Row className="row3" >
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <div style={{ width: "70px", height: "70px" }} class="grid_imgs">
                      <img src="./synapisca.png" alt="..." class="myimg" />
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
          <div className="button_div_page4">
            <a href="/ExperientialLearning"><button id="start_doing_homepage" className="button_slide slide_right orange_button_page3">Start doing<ArrowRight className="button_arrow" /></button></a>
          </div>
        </Container>
      </div>

      {/*TNG Learn Coins Page*/}
      <br/><br/><br/>
      <div className="page5_maindiv" >
        <div className="heading_box" style={{ marginBottom: "6%" }}>
          <div>
            <p class="btn">
              <span>
                <span>
                  <span className="border_box">TNG LEARN COINS</span>
                </span>
              </span>
            </p>
          </div>
          <div style={{ marginTop: "70px" }}>
            <h4 className="page3_subtitle text3">Learn and share knowledge using our platform currency</h4>
          </div>
        </div>

        <div>
          <div className="page2_laptop_view">
            <Container>
              <Row style={{ display: "flex", flexDirection: "row" }}>
                <Card id="Tng_learn_Coin_Earn_Card" onClick={() => window.location.href = "/SocialLearning"} className="page2card" style={{ width: "29.9%", marginLeft: "2.5%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", borderRadius: "12px", cursor: 'pointer' }}>
                  <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginTop: "40px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="/earn.jpg" />
                  <Card.Body style={{ marginTop: "30px" }}>
                    <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >EARN</Card.Title>
                    <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                      Signup! Get 399 Coins <br /> Upload a video! Get 50 Coins
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card id="Tng_learn_Coin_Accumulate_Card" onClick={() => window.location.href = "/profile"} className="page2card2" style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", borderRadius: "12px", cursor: 'pointer' }}>
                  <Card.Body style={{ marginTop: "30px" }}>
                    <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >ACCUMULATE</Card.Title>
                    <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                      Check your coin balance under <br /> <i>Profile</i> section
                    </Card.Text>
                  </Card.Body>
                  <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="/accumulate.jpg" />
                </Card>

                <Card id="Tng_learn_Coin_Redeem_Card" onClick={() => window.location.href = "/TNGoriginals"} className="page2card3" style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", borderRadius: "12px", cursor: 'pointer' }}>
                  <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginTop: "40px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="/redeem.jpg" />
                  <Card.Body style={{ marginTop: "30px" }}>
                    <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >REDEEM</Card.Title>
                    <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                      Use coins to unlock TNG Originals <br />( 1 TNG Coin = ₹ 1 )
                    </Card.Text>
                  </Card.Body >
                </Card>
              </Row>
            </Container>
          </div>


          <div className="page2_mobile_view" >
            <Container>
              <Col>
                <Card id="Tng_learn_Coin_Earn_Card" onClick={() => window.location.href = "/SocialLearning"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", marginTop: "15%", cursor: 'pointer' }}>
                  <Card.Body>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Col >
                        <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="/earn.jpg" />
                      </Col>
                      <Col style={{ marginLeft: "-20%" }}>
                        <Card.Title style={{ fontSize: "20px" }}>EARN</Card.Title>
                        <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                          Signup! Get 399 Coins <br /> Upload a video! Get 50 Coins
                        </Card.Text>
                      </Col>
                    </div>
                  </Card.Body>

                </Card>
                <Card id="Tng_learn_Coin_Accumulate_Card" onClick={() => window.location.href = "/profile"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", marginTop: "10%", cursor: 'pointer' }}>
                  <Card.Body>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Col>
                        <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="/accumulate.jpg" />
                      </Col>
                      <Col style={{ marginLeft: "-20%" }}>
                        <Card.Title style={{ fontSize: "20px" }}>ACCUMULATE</Card.Title>
                        <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                          Check your coin balance under <br /> <i>Profile</i> section
                        </Card.Text>
                      </Col>
                    </div>
                  </Card.Body>

                </Card>
                <Card id="Tng_learn_Coin_Redeem_Card" onClick={() => window.location.href = "/TNGoriginals"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", marginTop: "10%", marginBottom: "10%", cursor: 'pointer' }}>
                  <Card.Body>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Col>
                        <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="/redeem.jpg" />
                      </Col>
                      <Col style={{ marginLeft: "-20%" }}>
                        <Card.Title style={{ fontSize: "20px" }}>REDEEM</Card.Title>
                        <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                          Use coins to unlock TNG Originals <br />( 1 TNG Coin = ₹ 1 )
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
          <a href="/LearnCoins"><button id="lets_go_tng_learn_coin_homepage" className="button_slide slide_right">Let's go!<ArrowRight className="button_arrow" /></button></a>
        </div>
      </div>

    </div>
  );
}

export default Page4;