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
        <p style={{fontSize:"32px", fontWeight:"600",marginLeft:"11%",marginTop:"20px",marginBottom:"3%"}}>
          Its 2021. Un-Chatur yourself. Become a <em style={{color:"#f26c4f"}}>Rancho.</em> 
        </p>
        <Container>
          <Row>
            <Card style={{ width: "27%", marginLeft:"5%",backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px"}} variant="top" src="holder.svg"/>
                <Card.Body>
                  <Card.Title style={{textAlign:"center",fontSize:"37px",fontWeight:"600"}} >SESSIONS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"23px",textAlign:"center"}}>
                    Some quirky text over here 
                  </Card.Text>
                </Card.Body>
                <ArrowRight className="card_arrow1"/>
            </Card>
            
            <Card style={{ width: "27%", marginLeft:"5%", backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px" }}>
                <Card.Body style={{marginTop:"50px"}}>
                  <Card.Title style={{textAlign:"center",fontSize:"37px",fontWeight:"600"}} >GIGS</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"23px",textAlign:"center"}}>
                    Some quirky text over here
                  </Card.Text>
                </Card.Body>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px"}} variant="top" src="holder.svg"/>
                <ArrowRight className="card_arrow1"/>
            </Card>

            <Card style={{ width: "27%", marginLeft:"5%",backgroundColor:"rgba(242, 108, 79, 0.07)",border:"2px solid rgba(242, 108, 79, 0.6)",borderRadius:"12px" }}>
                <Card.Img style={{margin: "auto", height:"140px", width:"140px"}} variant="top" src="holder.svg"/>
                <Card.Body>
                  <Card.Title style={{textAlign:"center",fontSize:"37px",fontWeight:"600"}} >PEER LEARNING</Card.Title>
                  <Card.Text class="opensans_text" style={{fontSize:"23px",textAlign:"center"}}>
                    Some quirky text over here 
                  </Card.Text>
                </Card.Body>
                <ArrowRight className="card_arrow1"/>
            </Card>
          </Row>
          <Row style={{width:"600px",height:"70px",border:"1px solid #534D4D", marginTop:"5%",marginLeft:"50%", paddingTop:"20px"}}>
            <Col lg={1}>O</Col>
            <Col lg={1}>O</Col>
            <Col lg={1}>O</Col>
            <Col><p style={{fontSize:"24px", textAlign:"center"}}>2000+ Learners on TheNextGig</p></Col>
          </Row>
        </Container>
      </div>

      <div className="page2_mobile_view">
        {/* Harsh your mobile view starts here */}
      </div>
      
    </div> 
    );
  }
  
export default Page2;