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
            <Card className="page2card" onClick={()=>window.location.href="/masterclass"} style={{ width: "29.9%", marginLeft:"-2%",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"60px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/masterclasshome.jpg"/>
                <Card.Body style={{marginTop:"60px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >MASTERCLASSES</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Short. Expert-driven. Real-life cases. And a <i> whole lot of value </i>!  
                  </Card.Text>
                </Card.Body>
            </Card>
            
            <Card className="page2card" onClick={()=>window.location.href="/gigs"} style={{ width: "29.9%", marginLeft:"6.8%", backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Body style={{marginTop:"60px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >EXPERIENTIAL LEARNING</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  👈🏼 you’ve learnt there. Now practice here! 👇🏼
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginBottom:"30px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/experimentalhome.jpg"/>
            </Card>

            <Card className="page2card" onClick={()=>window.location.href="/sociallearn"} style={{ width: "29.9%", marginLeft:"6.8%",marginRight:"-2%",backgroundColor:"rgba(242, 108, 79, 0.07)",border:"2px solid rgba(242, 108, 79, 0.6)",borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"60px", background:"white", borderRadius:"50%",border:"0px"}} variant="top" src="/sociallearninghome.jpg"/>
                <Card.Body style={{marginTop:"60px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >SOCIAL LEARNING</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"16px",textAlign:"center"}}>
                  Learn from your peers - they’re smarter than you think!
                  </Card.Text>
                </Card.Body >
            </Card>
          </Row>
          <Row style={{width:"500px",height:"70px",border:"1px solid #534D4D", marginTop:"5%",  marginBottom:"5%", marginLeft:"59%", paddingTop:"10px"}}>
            <Col md={1}><img style={{borderRadius:"5px",marginTop:"3px"}} alt="..." src="https://media-exp1.licdn.com/dms/image/C4D03AQFn3cR03llVHA/profile-displayphoto-shrink_400_400/0/1611850401052?e=1636588800&v=beta&t=PAiR61Sw84Ba9s9hqdm16-TbvM6ohKd2K5O6MuXLQZo" height="40px" width="40px" /></Col>&nbsp;&nbsp;&nbsp;
            <Col md={1}><img style={{borderRadius:"5px",marginTop:"3px"}} alt="..." src="https://media-exp1.licdn.com/dms/image/C4E03AQE7ozU87tbOow/profile-displayphoto-shrink_400_400/0/1615921578753?e=1636588800&v=beta&t=mj5jbwnrV8vxBB7FAV3UZd2tQPShGQ5LBGl5NOTI0oU" height="40px" width="40px" /></Col>&nbsp;&nbsp;&nbsp;
            <Col md={1} ><img  style={{borderRadius:"5px",marginTop:"3px"}} alt="..." src="https://media-exp1.licdn.com/dms/image/C4E03AQEkZZD6xn4hJg/profile-displayphoto-shrink_400_400/0/1611408696050?e=1636588800&v=beta&t=-w8wRLMIBJXs-rV8qPtrslboo1waw-ObTyAHAHQPhKM" height="40px" width="40px" /></Col>&nbsp;&nbsp;&nbsp;
            <Col><p style={{fontSize:"20px", textAlign:"center", paddingTop: "10px"}}>3000+ Learners on TheNextGig</p></Col>
          </Row>
        </Container>
      </div>

      <div className="page2_mobile_view" >
        
      
      <p style={{fontSize:"23px", fontWeight:"600",marginTop:"20px",marginBottom:"3%",textAlign:"center"}}>
          Here’s everything you can do! 
      </p>
    <Container>
      <Col>
      <Card onClick={()=>window.location.href="/masterclass"} style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%" }}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col style={{marginTop:"8px"}}>
              <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="/masterclasshome.jpg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>MASTERCLASSES</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              Short. Expert-driven. <br /> Real-life cases.<br /> And a <i> whole lot of value </i>!  
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
      </Card>
      <Card onClick={()=>window.location.href="/gigs"} style={{ width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%"}}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col style={{marginTop:"8px"}}>
              <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="/experimentalhome.jpg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>EXPERIENTIAL LEARNING</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              👈🏼 you’ve learnt there. <br/>Now practice  here! 👇🏼
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
      </Card>
      <Card onClick={()=>window.location.href="/community"} style={{width: '100%',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%", marginBottom: "10%"}}>
        <Card.Body>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Col style={{marginTop:"8px"}}>
              <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="/sociallearninghome.jpg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px"}}>SOCIAL LEARNING</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
              Learn from your peers -<br/>they’re smarter than you think!
              </Card.Text>
            </Col>
          </div>
        </Card.Body>
      </Card>
      
      <div style={{width:"100%",height:"50px",border:"1px solid #534D4D", paddingTop:"5px", display: "flex", flexDirection: "row",margin:"auto"}}>
          <Col  md={1} ><img style={{borderRadius:"8px",marginRight:"8px",marginLeft:"8px"}} alt="..." src="https://media-exp1.licdn.com/dms/image/C4D03AQFn3cR03llVHA/profile-displayphoto-shrink_400_400/0/1611850401052?e=1636588800&v=beta&t=PAiR61Sw84Ba9s9hqdm16-TbvM6ohKd2K5O6MuXLQZo" height="40px" width="40px"  /></Col>
            <Col md={1}><img style={{borderRadius:"8px",marginRight:"8px"}} alt="..." src="https://media-exp1.licdn.com/dms/image/C4E03AQE7ozU87tbOow/profile-displayphoto-shrink_400_400/0/1615921578753?e=1636588800&v=beta&t=mj5jbwnrV8vxBB7FAV3UZd2tQPShGQ5LBGl5NOTI0oU" height="40px" width="40px" /></Col>
            <Col md={1}><img style={{borderRadius:"8px"}} alt="..." src="https://media-exp1.licdn.com/dms/image/C4E03AQEkZZD6xn4hJg/profile-displayphoto-shrink_400_400/0/1611408696050?e=1636588800&v=beta&t=-w8wRLMIBJXs-rV8qPtrslboo1waw-ObTyAHAHQPhKM" height="40px" width="40px" /></Col>
            <Col><p style={{fontSize:"11px", textAlign:"center", paddingTop: "4px"}}>3000+<br/>Learners on TheNextGig</p></Col>
          </div>
      </Col>
    </Container>
    </div>
    </div> 
    );
  }
  
export default Page2;