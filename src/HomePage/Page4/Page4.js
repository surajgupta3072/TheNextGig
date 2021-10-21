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
        <h4 className="page3_subtitle">Practice what you <span style={{ color: "grey"}} className="heading_1span"> preach</span> <text style={{color:"#F26C4F"}}>learn.</text></h4>
      </div>
      </div>
        <Container>
            <Row style={{marginTop: "5%"}}>
                <Col className="main_col1" md={8} >
                    <Row style={{marginTop: "15%"}} xs={12}>
                        <Row>
                            <h1 className="heading_1">Gigs, internships, live projects </h1>
                            <h1 className="heading_2" >..and job opportunities!</h1>
                        </Row>
                    </Row>                   
                </Col>
                <Col className="main_col1" md={4}>
                    <Row className="img-grid_row" xs={12}>
                        <Row className="row1">
                            <Col style={{width: "20"}}>
                                <div class="grid_imgs">
                                <img src="./captzack.png" alt="..." class="myimg" />
                                </div>
                            </Col>                       
                            <Col style={{width: "20"}}>
                                <div class="grid_imgs">
                                <img src="./superpro.png" alt="..." class="myimg" />
                                </div>
                            </Col> 
                            
                            <Col style={{width: "20"}}>
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
                <a href="/ExperientialLearning"><button  className="button_slide slide_right orange_button_page3">Start doing<ArrowRight className="button_arrow"/></button></a>
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
      <h4 className="page3_subtitle">Practice what you <span style={{ color: "grey"}} className="heading_1span"> preach</span> <text style={{color:"#F26C4F"}}>learn.</text></h4>
      </div>
      </div>
        
         <Container>
            <Row style={{marginTop: "5%"}}>
                    <div style={{marginTop: "15%"}}>
                        <div>
                        <h1 className="heading_1">Gigs, internships, live projects </h1>
                            <h1 className="heading_2" >..and job opportunities!</h1>
                        </div> 
                    </div>                   
                <Col xs={11} className="main_col1" md={4}>
                    <Row  className="img-grid_row" xs={12}>
                        <Row className="row1">
                            <Col></Col>                       
                            <Col >
                                <div  style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img  src="./captzack.png" alt="..." class="myimg" />
                                </div>
                            </Col> 
                            <Col >
                                <div  style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img  src="./superpro.png" alt="..." class="myimg" />
                                </div>
                            </Col> 
                            <Col >
                                <div  style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img  src="./orangewood.png" alt="..." class="myimg" />
                                </div>
                            </Col>
                        </Row >
                        <Row className="row2" >
                            <Col></Col>  
                            <Col></Col>                   
                            <Col >
                                <div style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img  src="./scalenut.png" alt="..." class="myimg" />
                                </div>
                            </Col>
                            <Col>
                                <div style={{width:"70px",height:"70px"}} class="grid_imgs">
                                <img src="./fish.png" alt="..." class="myimg" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="row3" >
                        <Col></Col> 
                        <Col></Col> 
                        <Col></Col> 
                            <Col>
                                <div style={{width:"70px",height:"70px"}}  class="grid_imgs">
                                <img src="./synapisca.png" alt="..." class="myimg" />
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <div className="button_div_page4">
                <a href="/ExperientialLearning"><button  className="button_slide slide_right orange_button_page3">Start doing<ArrowRight className="button_arrow"/></button></a>
            </div> 
        </Container> 
    </div>


</div>
    );
  }
  
export default Page4;