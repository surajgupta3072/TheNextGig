import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../App.css'
import './Page4.css'
import { ArrowRight } from "react-bootstrap-icons";

function Page4() {
    return (
    <div style={{marginTop:"5%"}}>
        <div className="getin" >
            <svg id='rectangle' style={{marginBottom: "-60px"}}>
                <rect id='stroke' rx='3' ry='3' height="50"/>
                <text fontSize="40px" fill="white" x="25%" y="25%" dominant-baseline="middle" text-anchor="middle">GIGS</text>
            </svg>
            <h4><span class="h3_live" style={{color: "#F26C4F"}}>Live</span>. At your doorstep</h4>
        </div>
        
        <Container>
            <Row>
                <Col className="main_col1" md={7}>
                    <Row style={{marginTop: "15%"}}>
                        <Row>
                            <h1 className="heading_1">Practice what you <span style={{ textDecorationLine: 'line-through', textDecorationColor: "#F26C4F"}} className="heading_1span">preach.</span></h1>
                        </Row>
                        <Row>
                            <h1 className="heading_2" style={{color: "#F26C4F"}} >learn.</h1>
                        </Row> 
                    </Row>                   
                </Col>
                <Col className="main_col1" md={5}>
                    <Row className="img-grid_row">
                        <Row className="row1">
                            <Col></Col>                       
                            <Col></Col> 
                            <Col></Col>
                            <Col style={{width: "20"}}>
                                <div class="grid_imgs">
                                <img src="google_logo.jpg" alt="" class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row >
                        <Row className="row2" >
                            <Col></Col>  
                            <Col></Col>                    
                            <Col>
                                <div class="grid_imgs">
                                <img src="google_logo.jpg" alt="" class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="grid_imgs">
                                <img src="google_logo.jpg" alt="" class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row3" >
                        <Col></Col>
                            <Col>
                                <div class="grid_imgs">
                                <img src="google_logo.jpg" alt="" class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="grid_imgs">
                                <img src="google_logo.jpg" alt="" class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="grid_imgs">
                                <img src="google_logo.jpg" alt="" class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <button style={{marginTop:"4%", marginLeft: "42%"}} type="submit" className="button_slide slide_right">Start Doing <ArrowRight className="button_arrow"/></button>
        </Container>
    </div>
    );
  }
  
export default Page4;