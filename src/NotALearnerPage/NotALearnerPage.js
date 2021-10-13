import './NotALearnerPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { ArrowLeft } from "react-bootstrap-icons";
import NotALearnerModal from './NotALearnerPageModal';
import {useState} from 'react';

function NotALearnerPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div style={{ marginTop: "3%" }}>
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
                    <h4 className="page3_subtitle">So you’re an organisation, industry expert or just a curious person and.....</h4>
                </div>
            </div>
            <div className="nolearner_laptop_view">
                <Container style={{marginTop:"7%"}}>
                    <Row>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...want to <text style={{ color: "#f26c4f" }} >understand the platform better</text> and how it can help you
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="/experimentalhome.jpg" />
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(200, 150, 54, 0.07)", border: "2px solid rgba(200, 150, 54, 0.4)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...are looking to <text style={{color:"#b69045"}}>acquire talent</text> for gigs / projects / internships or jobs
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="/experimentalhome.jpg" />
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(86, 150, 112, 0.07)", border: " 2px solid rgba(86, 150, 112, 0.6)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...would like to <text style={{color:"#659473"}}>teach</text>  a specific skill by curating a session with us
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="/experimentalhome.jpg" />
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)" }}>
                            <Card.Body style={{ marginTop: "10%" }}>
                                <Card.Text style={{ fontSize:"22px", textAlign: "center" }}>
                                ...are looking to <text style={{color:"#434bb4"}}>collaborate</text> in any other manner
                                </Card.Text>
                            </Card.Body>
                            <br/>
                            <Card.Img style={{ marginTop: "12%", marginLeft:"23%",height: "140px", width: "140px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="/experimentalhome.jpg" />
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
        </div>
    );
}

export default NotALearnerPage;