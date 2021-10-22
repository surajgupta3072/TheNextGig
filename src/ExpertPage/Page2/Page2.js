import expertData from './../Experts.json';
import Container from 'react-bootstrap/Container';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import Carousel from "react-elastic-carousel";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ArrowLeft,Linkedin,Whatsapp,Instagram} from 'react-bootstrap-icons';
import MyVerticallyPopUp  from './popup';
import {useState} from 'react'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1},
    { width: 750, itemsToShow: 2 },
    { width: 1080, itemsToShow: 3 }
  ];

function Page2(props) {
  const [modalShow, setModalShow] = useState(false);
    return (
      <div>
        <div className="header_masterclass">
          <Container>
              <div className="top_masterclass">
                <h1>OUR EXPERTS</h1>
                <p className="subtitle_masterclass">
                Experienced, smart and witty
                </p>
              </div>
            </Container>
        </div>
        <div className="Mastercards">
          {expertData.map(expertDetails=>(
               <MDBCard onClick={()=>window.location.href='/expert/'+expertDetails.ExpertId}  className="mbd_card card_mastercard" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312",height:"30rem",width:""}}>
                    <div className="image_card"><MDBCardImage style={{marginLeft:"1px",width:"100%",height:"22rem",borderRadius:"15px"}} src="https://www.clipartkey.com/mpngs/m/153-1539728_cartoon-person-waving-cartoon-person-png.png" alt='...' /></div>
                    <MDBCardBody>
                    <div className="Course_name">{expertDetails.ExpertName}</div>
                    <p style={{fontSize: "18px", color: "#F26C4F", display: "flex", justifyContent: "center"}}>
                    {expertDetails.ExpertDesignation}
                    </p>
                    <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
                    <div className="img_arr" style={{marginLeft: "35px", display: "flex", justifyContent: "center"}}>
                    {expertDetails.ExpertCompaniesLogo.map((
                      companyLogo, index)=>{ 
                      if(index<3){
                        return(
                          <img alt="..." className="img_company" src={companyLogo}/>
                        )
                      }
                      else
                        return null;
                    }
                    )}
                    </div>
                    </MDBCardBody>
                </MDBCard>
            ))}
            </div>
            <div className="slider_mobile">
            <Carousel breakPoints={breakPoints}>
          {expertData.map(expertDetails=>(
               <MDBCard onClick={()=>window.location.href='/expert/'+expertDetails.ExpertId} className="mbd_card card_mastercard" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
                    <div className="image_card"><MDBCardImage style={{width:"100%",height:"14rem",borderRadius:"14px"}} src="https://www.clipartkey.com/mpngs/m/153-1539728_cartoon-person-waving-cartoon-person-png.png" alt='...' /></div>
                    <MDBCardBody>
                    <div className="Course_name">{expertDetails.ExpertName}</div>
                    <p style={{fontSize: "18px", color: "#F26C4F", display: "flex", justifyContent: "center"}}>
                    {expertDetails.ExpertDesignation}
                    </p>
                    <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
                    <div className="img_arr" style={{marginLeft: "35px"}}>
                    {expertDetails.ExpertCompaniesLogo.map((
                      companyLogo, index)=>{ 
                      if(index<3){
                        return(
                          <img alt="..." className="img_company" src={companyLogo}/>
                        )
                      }
                      else
                        return null;
                    }
                    )}
                    </div>
                    </MDBCardBody>
                </MDBCard>
            ))}
            </Carousel>
            </div>
            <Container className="rectangle-box2" style={{marginTop:"5%"}}>
        <Row >
          <Col style={{paddingLeft:"2%",paddingTop:"0.5%"}} md={8}>
            <p style={{marginBottom:"0%"}} className="mast_page2_p3">Want to learn from a specific expert?</p>
            <p  className="mast_page2_p3">Want to provide feedback about an expert?</p>
          </Col>
          <Col style={{paddingLeft:"12%"}} className="col-button">
            <button style={{marginLeft:"20%"}} className="button_slide slide_right" onClick={() => setModalShow(true)}>Talk to us
            <ArrowLeft className="button_arrow"/></button>
            <MyVerticallyPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
               />
              
          </Col>
        </Row>
      </Container>
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
  
  export default Page2;
  