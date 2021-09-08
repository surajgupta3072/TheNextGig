import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRight } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';
import './Page2.css';

function Page2() {
    return (
    <div id="ummm" style={{marginTop:"5%"}}>
      <div className="page2_laptop_view">
        <Container>
        <p style={{fontSize:"32px", fontWeight:"600",marginLeft:"1.5%",marginTop:"20px",marginBottom:"3%"}}>
        Here’s everything you can do! 
        </p>
          <Row>
            <Card style={{ width: "27%", marginLeft:"1.5%",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"60px", background:"white", borderRadius:"30%"}} variant="top" src="/image7.png"/>
                <Card.Body style={{marginTop:"60px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >MASTERCLASSES</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Short. Expert-driven. Real-life cases. And a <i> whole lot of value </i>!  
                  </Card.Text>
                </Card.Body>
                <a href="/masterclass"><ArrowRight className="card_arrow1"/></a>
            </Card>
            
            <Card style={{ width: "27%", marginLeft:"7%", backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Body style={{marginTop:"90px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >GIGS & PROJECTS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  👈🏼 you’ve learnt there. Now practice here! 👇🏼
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginBottom:"30px", background:"white", borderRadius:"30%"}} variant="top" src="/image3.png"/>
                <a href="/gigs"><ArrowRight className="card_arrow1"/></a>
            </Card>

            <Card style={{ width: "27%", marginLeft:"7%",backgroundColor:"rgba(242, 108, 79, 0.07)",border:"2px solid rgba(242, 108, 79, 0.6)",borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"60px", background:"white", borderRadius:"30%"}} variant="top" src="/image2.png"/>
                <Card.Body style={{marginTop:"60px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >SOCIAL LEARNING</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Learn from your peers - they’re smarter than you think!
                  </Card.Text>
                </Card.Body >
                <a href="/sociallearn"><ArrowRight className="card_arrow1"/></a>
            </Card>
          </Row>
          <Row style={{width:"500px",height:"70px",border:"1px solid #534D4D", marginTop:"5%",  marginBottom:"5%", marginLeft:"59%", paddingTop:"10px"}}>
            <Col md={1}><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFn3cR03llVHA/profile-displayphoto-shrink_400_400/0/1611850401052?e=1636588800&v=beta&t=PAiR61Sw84Ba9s9hqdm16-TbvM6ohKd2K5O6MuXLQZo" height="50px" width="50px" /></Col>
            <Col md={1}><img src="https://media-exp1.licdn.com/dms/image/C4E03AQE7ozU87tbOow/profile-displayphoto-shrink_400_400/0/1615921578753?e=1636588800&v=beta&t=mj5jbwnrV8vxBB7FAV3UZd2tQPShGQ5LBGl5NOTI0oU" height="50px" width="50px" /></Col>
            <Col md={1} ><img src="https://media-exp1.licdn.com/dms/image/C4E03AQEkZZD6xn4hJg/profile-displayphoto-shrink_400_400/0/1611408696050?e=1636588800&v=beta&t=-w8wRLMIBJXs-rV8qPtrslboo1waw-ObTyAHAHQPhKM" height="50px" width="50px" /></Col>
            <Col><p style={{fontSize:"20px", textAlign:"center", paddingTop: "10px"}}>3000+ Learners on TheNextGig</p></Col>
          </Row>
        </Container>
      </div>

      <div className="page2_mobile_view" style={{marginLeft: "4%"}}>
        
      
      <p style={{fontSize:"23px", fontWeight:"600",marginLeft:"4%",marginTop:"20px",marginBottom:"3%",textAlign:"left"}}>
          Here’s everything you can do! 
      </p>
    <Container>
      <Col>
      <Card style={{ width: '20rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%" }}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col >
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>MASTERCLASSES</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              Short. Expert-driven. <br /> Real-life cases.<br /> And a <i> whole lot of value </i>!  
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
        <a href="/masterclass"><ArrowRight className="card_arrow1"/></a>
      </Card>
      <Card style={{ width: '20rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%"}}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col>
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>GIGS & PROJECTS</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              👈🏼 you’ve learnt there. <br/>Now practice  here! 👇🏼
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
        <a href="/gigs"><ArrowRight className="card_arrow1"/></a>
      </Card>
      <Card style={{ width: '20rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%", marginBottom: "10%"}}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col>
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px"}}>SOCIAL LEARNING</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              Learn from your peers -<br/>they’re smarter than you think!
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
        <a href="/community"><ArrowRight className="card_arrow1"/></a>
      </Card>
      
      <div style={{width:"300px",height:"50px",border:"1px solid #534D4D", marginLeft:"5%", paddingTop:"5px", display: "flex", flexDirection: "row"}}>
          <Col md={1} ><img src="https://demo.softhopper.studio/selfer/wp-content/uploads/sites/20/2018/10/bg-hero.jpg" height="40px" width="40px" /></Col>
            <Col md={1}><img src="https://demo.softhopper.studio/selfer/wp-content/uploads/sites/20/2018/10/bg-hero.jpg" height="40px" width="40px" /></Col>
            <Col md={1}><img src="https://demo.softhopper.studio/selfer/wp-content/uploads/sites/20/2018/10/bg-hero.jpg" height="40px" width="40px" /></Col>
            <Col><p style={{fontSize:"11px", textAlign:"center", paddingTop: "10px"}}>3000+ Learners on TheNextGig</p></Col>
          </div>
      </Col>
    </Container>
    </div>
    </div> 
    );
  }
  
export default Page2;