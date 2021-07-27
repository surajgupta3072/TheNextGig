import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRight } from "react-bootstrap-icons";
import '../../App.css'
import Card from 'react-bootstrap/Card'
import './Page2.css'

function Page2() {
    return (
    <div style={{marginTop:"5%"}}>
      <div className="page2_laptop_view">
        <p style={{fontSize:"32px", fontWeight:"600",marginLeft:"9.4%",marginTop:"20px",marginBottom:"3%"}}>
          Its 2021. Un-Chatur yourself. Become a <em style={{color:"#f26c4f"}}>Rancho.</em> 
        </p>
        <Container>
          <Row>
            <Card style={{ width: "27%", marginLeft:"1.5%",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"60px"}} variant="top" src="holder.svg"/>
                <Card.Body style={{marginTop:"90px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >MASTERCLASSES</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"23px",textAlign:"center"}}>
                    Some quirky text over here  
                  </Card.Text>
                </Card.Body>
                <a href="/masterclass"><ArrowRight className="card_arrow1" size="1x"/></a>
            </Card>
            
            <Card style={{ width: "27%", marginLeft:"7%", backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Body style={{marginTop:"90px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >GIGS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"23px",textAlign:"center"}}>
                  Some quirky text over here 
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginBottom:"30px"}} variant="top" src="holder.svg"/>
                <ArrowRight className="card_arrow1"/>
            </Card>

            <Card style={{ width: "27%", marginLeft:"7%",backgroundColor:"rgba(242, 108, 79, 0.07)",border:"2px solid rgba(242, 108, 79, 0.6)",borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px", marginTop:"60px"}} variant="top" src="holder.svg"/>
                <Card.Body style={{marginTop:"60px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"33px",fontWeight:"600"}} >PEER LEARNING</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"23px",textAlign:"center"}}>
                  Some quirky text over here 
                  </Card.Text>
                </Card.Body >
                <ArrowRight className="card_arrow1"/>
            </Card>
          </Row>
          <Row style={{width:"600px",height:"70px",border:"1px solid #534D4D", marginTop:"5%",marginLeft:"50%", paddingTop:"20px"}}>
            <Col md={1}>O</Col>
            <Col md={1}>O</Col>
            <Col md={1}>O</Col>
            <Col><p style={{fontSize:"24px", textAlign:"center"}}>2000+ Learners on TheNextGig</p></Col>
          </Row>
        </Container>
      </div>

      <div className="page2_mobile_view">
        
      
      <p style={{fontSize:"16px", fontWeight:"600",marginLeft:"4%",marginTop:"20px",marginBottom:"3%",textAlign:"left"}}>
          Its 2021.
          <p>Un-Chatur yourself. Become a <em style={{color:"#f26c4f"}}>Rancho.</em></p>
      </p>
    <Container>
      <Col>
      <Card style={{ width: '18rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%",marginLeft:"5%" }}>
        <Card.Body>
          <Row>
            <Col >
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>MASTERCLASSES</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
                Some quirky text over here.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <ArrowRight className="card_arrow1"/>
      </Card>
      <Card style={{ width: '18rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%",marginLeft:"5%" }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px",textAlign:"center"}}>GIGS</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
                Some quirky text over here.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <ArrowRight className="card_arrow1"/>
      </Card>
      <Card style={{ width: '18rem',borderRadius:"12px",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%", marginBottom: "20%", marginLeft:"5%" }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Img style={{margin: "auto", height:"50px", width:"50px",paddingTop:"10%"}} variant="top" src="holder.svg"/>
            </Col>
            <Col>
              <Card.Title style={{fontSize:"20px"}}>PEER LEARNING</Card.Title>
              <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
                Some quirky text over here.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <ArrowRight className="card_arrow1"/>
      </Card>
      <div style={{width:"300px",height:"50px",border:"1px solid #534D4D", marginTop:"2%",marginLeft:"5%", paddingTop:"20px"}}>
             
            <Col xs={12}><p style={{fontSize:"16px", justifyContent:"space-between"}}> 0  0  0  2000+ Learners on TheNextGig</p></Col>
      </div> 
      </Col>
    </Container>
    </div>
    </div> 
    );
  }
  
export default Page2;