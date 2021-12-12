import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Page2.css';

function Page2() {
  return (
    <div id="ummm">
      <br /><br />
      <div className="page2_laptop_view">
        <Container>
          <p style={{ fontSize: "32px", fontWeight: "600", marginLeft: "1.5%", marginTop: "20px", marginBottom: "3%" }}>
            Here is everything you can do on the platform:
          </p>
          <Row>
            <Card id="TNG_original_card_homepage" className="page2card" onClick={() => window.location.href = "/TNGoriginals"} style={{ width: "29.9%", marginLeft: "2%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(242, 108, 79,0.6)", borderRadius: "12px", cursor: "pointer" }}>

              <Card.Body style={{ marginTop: "30px" }}>
                <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >TNG <br /> ORIGINALS</Card.Title>
                <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                  Short expert-driven sessions, real-life cases, And a  <em> whole lot of value </em>!
                </Card.Text>
              </Card.Body>
              <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "none" }} variant="to1p" src="/tng_originals.png" />
            </Card>

            <Card id="Social_learning_card_homepage" className="page2card3" onClick={() => window.location.href = "/SocialLearning"} style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", borderRadius: "12px", cursor: "pointer" }}>

              <Card.Body style={{ marginTop: "30px" }}>
                <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >SOCIAL <br /> LEARNING</Card.Title>
                <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                  Learn <em> and teach </em> through bite-sized video content. Practical knowledge and experiences trump everything else!<br />
                </Card.Text>
              </Card.Body >
              <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "none" }} variant="to1p" src="/soci.png" />
            </Card>

            <Card id="Experiential_learning_card_homepage" className="page2card2" onClick={() => window.location.href = "/ExperientialLearning"} style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", borderRadius: "12px", cursor: "pointer" }}>
              <Card.Body style={{ marginTop: "20px" }}>
                <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >EXPERIENTIAL LEARNING</Card.Title>
                <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                  Gigs, internships, live projects and <br /> job opportunities!
                </Card.Text>
              </Card.Body>
              <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "none" }} variant="to1p" src="/exp_learn.png" />
            </Card>
          </Row>
        </Container>
      </div>

      <div className="page2_mobile_view" >
        <p style={{ fontSize: "23px", fontWeight: "600", marginTop: "20px", marginBottom: "3%", textAlign: "center" }}>
          Here’s everything you can do!
        </p>
        <Container>
          <Col>
            <Card onClick={() => window.location.href = "/TNGoriginals"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", marginTop: "10%" }}>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Col style={{ marginTop: "8px" }}>
                    <Card.Img style={{ margin: "auto", height: "100px", width: "100px", borderRadius: "10px" }} variant="top" src="/tng_originals.png" />
                  </Col>
                  <Col style={{ marginLeft: "-20%" }}>
                    <Card.Title style={{ fontSize: "20px", textAlign: "left" }}>TNG <br /> ORIGINALS</Card.Title>
                    <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", opacity: "0.7", width: "100%" }}>
                      Short expert-driven sessions,real-life cases, And a   <em> whole  lot  of value </em>!
                    </Card.Text>
                  </Col>
                </div>
              </Card.Body>
            </Card>
            <Card onClick={() => window.location.href = "/SocialLearning"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", marginTop: "10%" }}>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Col style={{ marginTop: "8px" }}>
                    <Card.Img style={{ margin: "auto", height: "100px", width: "100px", borderRadius: "10px" }} variant="top" src="/soci.png" />
                  </Col>
                  <Col style={{ marginLeft: "-20%" }}>
                    <Card.Title style={{ fontSize: "20px", textAlign: "left" }}>SOCIAL<br /> LEARNING</Card.Title>
                    <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", opacity: "0.7", width: "100%" }}>
                      Learn <em> and teach </em>through bite-sized video content. Practical knowledge and experiences trump everything else!
                    </Card.Text>
                  </Col>
                </div>
              </Card.Body>
            </Card>
            <Card onClick={() => window.location.href = "/ExperientialLearning"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", marginTop: "10%", marginBottom: "10%" }}>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Col style={{ marginTop: "8px" }}>
                    <Card.Img style={{ margin: "auto", height: "100px", width: "100px", borderRadius: "10px" }} variant="top" src="/exp_learn.png" />
                  </Col>
                  <Col style={{ marginLeft: "-20%" }}>
                    <Card.Title style={{ fontSize: "20px", textAlign: "left" }}>EXPERIENTIAL<br /> LEARNING</Card.Title>
                    <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", opacity: "0.7", width: "100%" }}>
                      Gigs, internships, live projects and job opportunities!
                    </Card.Text>
                  </Col>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default Page2;