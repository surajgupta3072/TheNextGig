import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Linkedin } from "react-bootstrap-icons";

function Team(){
    return (
        <div >
           <div className="nolearner_laptop_view" style={{marginTop:"3%"}}>
                <div className="heading_box">
                    <div>
                        <p class="btn">
                            <span>
                                <span>
                                    <span className="border_box">THE TNG TEAM</span>
                                </span>
                            </span>
                        </p>
                    </div>
                    <div style={{ marginTop: "70px" }}>
                        <h4 className="nolearner_subtitle">Just a bunch of regular hustlers trying to change the world</h4>
                    </div>
                </div>
                <Container style={{marginTop:"7%"}}>
                    <Row>
                        <Card style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)" }}>
                        <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginTop: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./urmil.jpeg" />
                            <Card.Body style={{ marginTop: "10%" }}>
                            <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"22px"}}>Urmil Vakharia</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",color:"#F26C4F"}} >Founder</Card.Subtitle>
                                <Card.Text style={{ fontSize:"12px", textAlign: "center" }}>
                                Passionate about education and an avid guitarist. Spends his free time learning new instruments and doing yoga. Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                            </Card.Body>
                          </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(200, 150, 54, 0.07)", border: "2px solid rgba(200, 150, 54, 0.4)" }}>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginTop: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./rubix.jpeg" />
                            <Card.Body style={{ marginTop: "10%" }}>
                            <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"22px"}}>Dhairya Shah</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",color:"#F26C4F"}} >Founder</Card.Subtitle>
                                <Card.Text style={{ fontSize:"12px", textAlign: "center" }}>
                                Huge fan of conspiracy theories and sci-fi movies. Likes to explore time travel and related theories. Can spend his entire day playing Poker and Catan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                            </Card.Body>
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(86, 150, 112, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)" }}>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginTop: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="https://media-exp1.licdn.com/dms/image/C4E03AQEkZZD6xn4hJg/profile-displayphoto-shrink_800_800/0/1611408696050?e=1640822400&v=beta&t=nZ5uPQniKEvYqhaoV9Hxyj92J1CQP-CDU9Mdg0PM-OI" />
                            <Card.Body style={{ marginTop: "10%" }}>
                            <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"22px"}}>Nikhil Agarwal</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",color:"#F26C4F"}} >Head of Engineering</Card.Subtitle>
                                <Card.Text style={{ fontSize:"12px", textAlign: "center" }}>
                                Finds the need to develop products from scratch to be super fulfilling (and borderline compulsive lol!) <br/> But that’s not all - Nikhil loves dancing and photography🕺📷
                                </Card.Text>
                                <a href="https://www.linkedin.com/in/nikhil-agarwal-85a203189/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                            </Card.Body>
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(86, 150, 112, 0.6)" }}>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginTop: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./rubix.jpeg" />
                            <Card.Body style={{ marginTop: "10%" }}>
                            <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"22px"}}>Prathamesh Palan</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",color:"#F26C4F"}} >Founder</Card.Subtitle>
                                <Card.Text style={{ fontSize:"12px", textAlign: "center" }}>
                                Passionate about education and an avid guitarist. Spends his free time learning new instruments and doing yoga. Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                            </Card.Body>
                        </Card>
                     </Row>
                     <Row style={{marginTop:"2%"}}>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)" }}>
                        <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginTop: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="https://i.ibb.co/k954mM3/IMG-20210329-184036-modified-1.png" />
                            <Card.Body style={{ marginTop: "10%" }}>
                            <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"22px"}}>Anurag Vaibhav</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",color:"#F26C4F"}} >Intern</Card.Subtitle>
                                <Card.Text style={{ fontSize:"12px", textAlign: "center" }}>
                                Technophile and a wanderlust who Loves to read theories about mathematical equations like Riemann hypothesis and to know the science behind every phenomenon.
                                </Card.Text>
                                <a href="https://www.linkedin.com/in/av15
                                " target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                            </Card.Body>
                          </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(200, 150, 54, 0.07)", border: "2px solid rgba(200, 150, 54, 0.4)" }}>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginTop: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./rubix.jpeg" />
                            <Card.Body style={{ marginTop: "10%" }}>
                            <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"22px"}}>Urmil Vakharia</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",color:"#F26C4F"}} >Founder</Card.Subtitle>
                                <Card.Text style={{ fontSize:"12px", textAlign: "center" }}>
                                Passionate about education and an avid guitarist. Spends his free time learning new instruments and doing yoga. Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                            </Card.Body>
                        </Card>
                        <Card  style={{ width: "22%",height:"25%", marginLeft: "3%", backgroundColor: "rgba(86, 150, 112, 0.07)", border: " 2px solid rgba(86, 150, 112, 0.6)" }}>
                            <Card.Img style={{ margin: "auto", height: "140px", width: "140px", marginTop: "30px", background: "white", borderRadius: "50%", border: "0px" }} variant="top" src="./rubix.jpeg" />
                            <Card.Body style={{ marginTop: "10%" }}>
                            <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"22px"}}>Urmil Vakharia</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",color:"#F26C4F"}} >Founder</Card.Subtitle>
                                <Card.Text style={{ fontSize:"12px", textAlign: "center" }}>
                                Passionate about education and an avid guitarist. Spends his free time learning new instruments and doing yoga. Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                            </Card.Body>
                        </Card>
                     </Row>
                    </Container>
            </div>
            <span className="mobile_span" >
            <div classname="mobile_view_learner" style={{marginTop:"3%"}}>
            <div className="heading_box">
                    <div>
                        <p class="btn">
                            <span>
                                <span>
                                    <span className="border_box">THE TNG TEAM</span>
                                </span>
                            </span>
                        </p>
                    </div>
                    <div style={{ marginTop: "70px" }}>
                        <h4 className="nolearner_subtitle">Just a bunch of regular hustlers trying to change the world</h4>
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
                                <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"12px"}}>Urmil Vakharia</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",fontSize:"10px",color:"#F26C4F"}} >Founder</Card.Subtitle>
                                <Card.Text style={{fontSize:"8px",whiteSpace:"nowrap",marginLeft:"5px"}}>
                                Passionate about education and an<br/> avid guitarist. Spends his free time<br/> learning new instruments and doing yoga.<br/> Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%',backgroundColor: "rgba(200, 150, 54, 0.07)", border: "2px solid rgba(200, 150, 54, 0.4)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./rubix.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"12px"}}>Dhairya Shah</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",fontSize:"10px",color:"#C89636"}} >Founder</Card.Subtitle>
                                <Card.Text style={{fontSize:"8px",whiteSpace:"nowrap",marginLeft:"5px"}}>
                                Passionate about education and an<br/> avid guitarist. Spends his free time<br/> learning new instruments and doing yoga.<br/> Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: "rgba(86, 150, 112, 0.07)", border: " 2px solid rgba(86, 150, 112, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./rubix.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"12px"}}>Nikhil Agarwal</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",fontSize:"10px",color:"#569670"}}>Head of Engineering</Card.Subtitle>
                                <Card.Text style={{fontSize:"8px",whiteSpace:"nowrap",marginLeft:"5px"}}>
                                Passionate about education and an<br/> avid guitarist. Spends his free time<br/> learning new instruments and doing yoga.<br/> Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./rubix.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"12px"}}>Prathamesh Palan</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",fontSize:"10px",color:"#569670"}} >Head of Engineering</Card.Subtitle>
                                <Card.Text style={{fontSize:"8px",whiteSpace:"nowrap",marginLeft:"5px"}}>
                                Passionate about education and an<br/> avid guitarist. Spends his free time<br/> learning new instruments and doing yoga.<br/> Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./rubix.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"12px"}}>Dhairya Shah</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",fontSize:"10px",color:"#C89636"}} >Founder</Card.Subtitle>
                                <Card.Text style={{fontSize:"8px",whiteSpace:"nowrap",marginLeft:"5px"}}>
                                Passionate about education and an<br/> avid guitarist. Spends his free time<br/> learning new instruments and doing yoga.<br/> Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./rubix.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"12px"}}>Dhairya Shah</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",fontSize:"10px",color:"#C89636"}} >Founder</Card.Subtitle>
                                <Card.Text style={{fontSize:"8px",whiteSpace:"nowrap",marginLeft:"5px"}}>
                                Passionate about education and an<br/> avid guitarist. Spends his free time<br/> learning new instruments and doing yoga.<br/> Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', backgroundColor: "rgba(70, 83, 204, 0.07)", border: "2px solid rgba(70, 83, 204, 0.6)",marginTop:"10%" }}>
                            <Card.Body>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Col style={{marginTop:"8px"}}>
                                <Card.Img style={{margin: "auto", height:"70px", width:"70px",borderRadius:"10px"}} variant="top" src="./rubix.jpeg"/>
                                </Col>
                                <Col>
                                <Card.Title style={{textAlign:"center",fontWeight:"normal",fontSize:"12px"}}>Dhairya Shah</Card.Title>
                                <Card.Subtitle style={{textAlign:"center",marginBottom:"10px",fontSize:"10px",color:"#C89636"}} >Founder</Card.Subtitle>
                                <Card.Text style={{fontSize:"8px",whiteSpace:"nowrap",marginLeft:"5px"}}>
                                Passionate about education and an<br/> avid guitarist. Spends his free time<br/> learning new instruments and doing yoga.<br/> Will probably retire as a teacher in Bhutan.
                                </Card.Text>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><Linkedin style={{color: "white", cursor: "pointer",marginLeft:"45%"}} size={20}/></a>
                                </Col>
                            </div>
                            </Card.Body>
                        </Card>

                    </Col>
                </Container>
            </div>
        </span>
        </div>
    );
}

export default Team;