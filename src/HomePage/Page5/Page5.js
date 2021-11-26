import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Page5.css';
function Page5() {
  return (
    <>
      <div className="page5_maindiv" >
        <div className="heading_box" style={{ marginBottom: "6%" }}>
          <div>
            <p class="btn">
              <span>
                <span>
                  <span className="border_box">SOCIAL LEARNING</span>
                </span>
              </span>
            </p>
          </div>
          <div style={{ marginTop: "70px" }}>
            <h4 className="page3_subtitle text3">...a social media platform for <text style={{ color: "#F26C4F" }}>practical learning!</text></h4>
          </div>
        </div>

        <div className="page2_laptop_view">
          <Container style={{ padding: "0%", maxWidth: "94%", marginBottom: "0%" }} className="container1">
            <Row style={{ width: "93%" }}>
              <Col md={5} >
                <Container>
                  <Col style={{ width: "95%" }}>
                    <Card style={{ width: '100%', borderRadius: "12px", backgroundColor: "#020312", marginTop: "4%" }}>
                      <Card.Body>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <Col >
                            <Card.Img style={{ margin: "auto", height: "130px", width: "130px", borderRadius: "50%" }} variant="top" src="/Social Learning - Learn.png" />
                          </Col>
                          <Col style={{ marginLeft: "0%" }}>
                            <Card.Title style={{ fontSize: "40px" }}>LEARN...</Card.Title>
                            <Card.Text style={{ fontSize: "18px", whiteSpace: "normal", width: "100%" }}>
                              ..something new in {"<"} 10 mins through experiences shared by others
                            </Card.Text>
                          </Col>
                        </div>
                      </Card.Body>

                    </Card>
                    <Card style={{ width: '100%', borderRadius: "12px", backgroundColor: "#020312", marginTop: "5%" }}>
                      <Card.Body>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <Col>
                            <Card.Img style={{ margin: "auto", height: "130px", width: "130px", borderRadius: "50%" }} variant="top" src="/Social Learning - Share.png" />
                          </Col>
                          <Col style={{ marginLeft: "0%" }}>
                            <Card.Title style={{ fontSize: "40px" }}>SHARE...</Card.Title>
                            <Card.Text style={{ fontSize: "18px", whiteSpace: "normal", width: "100%" }}>
                              ..knowledge acquired through your real-life experiences
                            </Card.Text>
                          </Col>
                        </div>
                      </Card.Body>

                    </Card>
                  </Col>
                </Container>
              </Col>
              <Col md={7}>
                <div style={{ padding: "0", margin: "0" }}>
                  <video className="anim_img" src="https://socialvideoslearn.s3.ap-south-1.amazonaws.com/Social+Learning+Home+Page.mp4" playsInline controls loop controlsList="nodownload" onContextMenu={e => e.preventDefault()} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="page2_mobile_view">
          <Container>
            <Col>
              <Card style={{ width: '100%', borderRadius: "12px", backgroundColor: "#020312", marginTop: "15%" }}>
                <Card.Body>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Col >
                      <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="/Social Learning - Learn.png" />
                    </Col>
                    <Col style={{ marginLeft: "-20%" }}>
                      <Card.Title style={{ fontSize: "20px" }}>LEARN...</Card.Title>
                      <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                        ..something new in {"<"} 10 mins through experiences shared by others
                      </Card.Text>
                    </Col>
                  </div>
                </Card.Body>

              </Card>
              <Card style={{ width: '100%', borderRadius: "12px", backgroundColor: "#020312", marginTop: "1%" }}>
                <Card.Body>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Col>
                      <Card.Img style={{ margin: "auto", height: "80px", width: "80px", borderRadius: "50%" }} variant="top" src="/Social Learning - Share.png" />
                    </Col>
                    <Col style={{ marginLeft: "-20%" }}>
                      <Card.Title style={{ fontSize: "20px" }}>SHARE...</Card.Title>
                      <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", width: "100%" }}>
                        ..knowledge acquired through your real-life experiences
                      </Card.Text>
                    </Col>
                  </div>
                </Card.Body>

              </Card>
            </Col>
            <Col >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "2%" }}>
                <video style={{ padding: "0", margin: "0" }} width="320" height="182" src="https://socialvideoslearn.s3.ap-south-1.amazonaws.com/Social+Learning+Home+Page.mp4" playsInline controls loop controlsList="nodownload" onContextMenu={e => e.preventDefault()} />
              </div>
            </Col>
          </Container>
        </div>

        <div style={{ marginTop: "20px" }} className="button_div_page5">
          <a href="/SocialLearning"><button id="lets_socialize_social_learning_homepage" className="button_slide slide_right">Let’s socialize!<ArrowRight className="button_arrow" /></button></a>
        </div>
      </div>


    </>
  );
}

export default Page5;
