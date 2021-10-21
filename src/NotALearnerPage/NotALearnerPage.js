import './NotALearnerPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import {ArrowLeft,Linkedin,Whatsapp,Instagram} from 'react-bootstrap-icons';
import NotALearnerModal from './NotALearnerPageModal';
import {useState} from 'react';

function NotALearnerPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div >
           <div className="nolearner_laptop_view" style={{marginTop:"3%"}}>
                <div className="heading_box">
                    <div>
                        <p class="btn">
                            <span>
                                <span>
                                    <span className="border_box">IF YOU’RE NOT A LEARNER</span>
                                </span>
                            </span>
                        </p>
                    </div>
                    <div style={{ marginTop: "70px" }}>
                        <h4 className="nolearner_subtitle">You’re an organisation, industry expert or just a curious person and.....</h4>
                    </div>
                </div>
                <Container style={{marginTop:"7%"}}>
                    <Row>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...want to <text style={{ color: "#f26c4f" }} >understand the platform better</text> and how it can help you
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./rubix.jpeg" />
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(200, 150, 54, 0.07)", border: "2px solid rgba(200, 150, 54, 0.4)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...are looking to <text style={{color:"#b69045"}}>acquire talent</text> for gigs / projects / internships or jobs
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./maarten.jpeg" />
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(86, 150, 112, 0.07)", border: " 2px solid rgba(86, 150, 112, 0.6)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...would like to <text style={{color:"#659473"}}>teach</text>  a specific skill by curating a session with us
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./william.jpeg" />
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...are looking to <text style={{color:"#434bb4"}}>collaborate</text> in any other manner
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ marginTop: "12%", marginLeft:"23%",height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./toa-heftiba.jpeg" />
                        </Card>
                     </Row>
                    </Container>
                    <div style={{textAlign:"center",marginTop:"2%"}}>
                        <button  className="button_slide slide_right" onClick={() => setModalShow(true)}>Reach out here<ArrowLeft className="button_arrow"  /></button>
                        <NotALearnerModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                    </div>
            </div>
            <span className="mobile_span" >
            <div classname="mobile_view_learner" style={{marginTop:"3%"}}>
            <div className="heading_box">
                    <div>
                        <p class="btn">
                            <span>
                                <span>
                                    <span className="border_box">IF YOU’RE NOT A LEARNER</span>
                                </span>
                            </span>
                        </p>
                    </div>
                    <div style={{ marginTop: "70px" }}>
                        <h4 className="nolearner_subtitle">You’re an organisation, industry expert or just a curious person and.....</h4>
                    </div>
                </div>
                <Container style={{marginTop:"20px"}}>
                    <Col>
                        <Card style={{ width: '100%',backgroundColor:"rgba(242, 108, 79, 0.07)", border:"2px solid rgba(242, 108, 79, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./rubix.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
                                ...want to <text style={{ color: "#f26c4f" }} >understand<br/> the platform better</text><br/> and how it can help you
                                </Card.Text>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%',backgroundColor: "rgba(200, 150, 54, 0.07)", border: "2px solid rgba(200, 150, 54, 0.4)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./maarten.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
                                ...are looking to<br/> <text style={{color:"#b69045"}}>acquire talent</text> for gigs<br/> / projects / internships or jobs
                                </Card.Text>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: "rgba(86, 150, 112, 0.07)", border: " 2px solid rgba(86, 150, 112, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./william.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
                                ...would like to<br/> <text style={{color:"#659473"}}>teach</text>  a specific skill<br/> by curating a session with us  
                                </Card.Text>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./toa-heftiba.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Text style={{fontSize:"12px",whiteSpace:"nowrap"}}>
                                ...are looking to<br/> <text style={{color:"#434bb4"}}>collaborate</text> in<br/> any other manner
                                </Card.Text>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
                <div style={{textAlign:"center",marginTop:"4%",marginLeft:"30%"}}>
                        <button  className="button_slide slide_right" onClick={() => setModalShow(true)}>Reach out here<ArrowLeft className="button_arrow"  /></button>
                        <NotALearnerModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                </div>
            </div>
        </span>
        <div >
            <Row style={{marginTop: "6%", border:"1px solid #534D4D", padding:"1.5%", background: "transparent", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"#FFFFFF99"}}>
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <Col md={2}>
                    <Linkedin onClick={()=>window.location.href="https://www.linkedin.com/company/thenextgig/"} style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </Col>
            </Row>
            </div>
        </div>
    );
}

export default NotALearnerPage;