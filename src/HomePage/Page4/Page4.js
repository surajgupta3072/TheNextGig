import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Page4.css'
import { ArrowRight } from "react-bootstrap-icons";

function Page4() {
    return (
        <div>
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
      <div style={{marginTop: "70px"}}>
        <h4 className="page3_subtitle"><span class="h3_live" style={{color: "#F26C4F"}}>Live</span>. At your doorstep.</h4>
      </div>
      </div>
        <Container>
            <Row style={{marginTop: "5%"}}>
                <Col className="main_col1" md={8} >
                    <Row style={{marginTop: "15%"}} xs={12}>
                        <Row>
                            <h1 className="heading_1">Practice what you <span style={{ textDecorationLine: 'line-through', textDecorationColor: "#F26C4F"}} className="heading_1span">preach.</span></h1>
                        </Row>
                        <Row>
                            </Row>
                        <Row>
                            <h1 className="heading_2" style={{color: "#F26C4F"}} >learn.</h1>
                        </Row> 
                    </Row>                   
                </Col>
                <Col className="main_col1" md={4}>
                    <Row className="img-grid_row" xs={12}>
                        <Row className="row1">
                            <Col></Col>                       
                            <Col></Col> 
                            
                            <Col style={{width: "20"}}>
                                <div class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row >
                        <Row className="row2" >
                            <Col></Col>  
                                               
                            <Col>
                                <div class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row3" >
                        
                            <Col>
                                <div class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <div className="button_div_page4">
                <a href="/gigs"><button  className="button_slide slide_right orange_button_page3">Start doing<ArrowRight className="button_arrow"/></button></a>
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
      <div style={{marginTop: "70px"}}>
        <h4 className="page3_subtitle"><span class="h3_live" style={{color: "#F26C4F"}}>Live</span>. At your doorstep.</h4>
      </div>
      </div>
        
        <Container>
            <Row style={{marginTop: "5%"}}>
                <Col className="main_col1" md={8} >
                    <Row style={{marginTop: "15%"}} xs={12}>
                        <Row>
                            <h1 style={{textAlign:"center"}} className="heading_1">Practice what you <span style={{ textDecorationLine: 'line-through', textDecorationColor: "#F26C4F"}} className="heading_1span">preach.</span></h1>
                        </Row>
                        <Row>
                            <h1 className="heading_2" style={{color: "#F26C4F",textAlign:"center"}} >learn.</h1>
                        </Row> 
                    </Row>                   
                </Col>
                <Col xs={11} className="main_col1" md={4}>
                    <Row  className="img-grid_row" xs={12}>
                        <Row className="row1">
                            <Col></Col>                       
                            <Col></Col> 
                            <Col></Col> 
                            <Col >
                                <div  style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img  src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row >
                        <Row className="row2" >
                            <Col></Col>  
                            <Col></Col>                   
                            <Col >
                                <div style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img  src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row3" >
                        <Col></Col> 
                            <Col>
                                <div style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{width:"70px",height:"70px"}}  class="grid_imgs">
                                <img src="/google_logo.jpg" alt="..." class="myimg" />
                                    <div class="layer">
                                    <h3>Google</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <div className="button_div_page4">
                <a href="/gigs"><button  className="button_slide slide_right orange_button_page3">Start doing<ArrowRight className="button_arrow"/></button></a>
            </div>
        </Container>
    </div>


</div>
    );
  }
  
export default Page4;