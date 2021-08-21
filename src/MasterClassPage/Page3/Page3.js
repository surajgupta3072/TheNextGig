import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ArrowRight,ArrowLeft,Linkedin,Whatsapp,Instagram } from "react-bootstrap-icons";
import master from '../Masterclass.json';
import './Page3.css';
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { useState } from 'react';
// import docClient from '../../GigsPage/GigsAWS';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 }
];

function Page3(props) {
  const session = master[props.id-1];
  const [des, setDes] = useState(session["episodes"][0]["description"]);
  const [epivid, setEpiVideo] = useState(session["episodes"][0]["epi_video"]);
  const showDescription = (epid) => {
    setDes(session["episodes"][epid-1]["description"]);
    setEpiVideo(session["episodes"][epid-1]["epi_video"]);
    // console.log(epivid);
  };
  // const [relatedgigs, setDataRelatedGigs] = useState([]);
  // async function queryCall(id) {
  //   let params = {
  //     TableName: "GigsTable",
  //     KeyConditionExpression: "#Gid = :GigId",
  //     ExpressionAttributeNames: {
  //       "#Gid": "GigId",
  //     },
  //     ExpressionAttributeValues: {
  //       ":GigId": id,
  //     },
  //   };
  //   try {
  //     const data1 = await docClient.query(params).promise()
  //     return data1.Items[0]
  //   } 
  //   catch (err) {
  //     return err
  //   }
  // };
  // let finalResult = []
  // for (let i = 0; i < session.gigs.length; i++) {
  //   let singleResult = await queryCall(session.gigs[i]);
  //   finalResult.push(singleResult);
  // }
  // setDataRelatedGigs(finalResult);
    return (
    <div>
      <Container style={{padding: "0%", maxWidth: "94%", marginBottom: "0%"}} className= "container1">
        <Row>
          <Col md={6} >
            <Row style={{marginTop:"12%"}}>
              <h1 className="page3_heading1">{session.course_name}</h1>
            </Row>
            <Row style={{marginTop:"5%"}}>
              <p className="page3_3linetext">Some text will span across three lines<br/> AAAAAA <br/> BBBBBBB</p>
              <p className="page3_3linetext2">Lifetime access to <span style={{color: "#f26c4f"}}>{session.course_timing}</span>  of Learning experience</p>
            </Row>
            <Row className="card1_page3"  style={{marginLeft: "0", marginTop: "6%"}}>
            <div >
              <p className="page3_cardtext">
              Prepares you for roles in:
              </p>
              <Row>
                <Col>
                  <Row>
                    <Col className="img_col">
                      <img  className="img_page3_card" variant="top" src={session.course_image}/>
                    </Col>
                    <Col className="text_col">
                      <h1  className="text_page3_card">Role</h1>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="img_col">
                      <img className="img_page3_card" variant="top" src={session.course_image}/>
                    </Col>
                    <Col className="text_col">
                      <h1 className="text_page3_card">Industry</h1>
                    </Col>
                  </Row>
                </Col>
              </Row>
          </div>
            </Row>
            <Row style={{marginTop: "5%", paddingBottom: "1%"}}>
              <Col>
                <a href={"/expert/"+session.ExpertId}><button type="submit" className="button_slide_page3 slide_right">
                Get to know<br /> your expert <ArrowLeft className="button_arrow_footer"/>
                </button></a>
              </Col>
              <Col>
                <button type="submit" className="button_slide_page3 slide_right">
                Invest {session.fees} in <br /> your future <ArrowLeft className="button_arrow_footer"/>
                </button>
              </Col>
            </Row>
          </Col>
          <Col style={{padding:"0px"}} md={6}> 
              {/* <video src={session["episodes"][0]["epi_video"]} className="anim_img" autoplay controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}/> */}
              <img src={session.course_image} className="anim_img"/>
          </Col>
          </Row>
      </Container>
      <Container className="container2_page3" style={{padding: "0%", maxWidth: "94.25%",  marginBottom: "0%"}}>
        <Row className="main_cardbody_row" style={{marginLeft: "2%"}}>
        <div className="main_card" >               
                <div className="main_cardbody"> 
                  <Row >
                    <Col md={7} className="col1_cardbody">
                      <video src={epivid} className="img_letsgo" autoplay controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}/>
                      {/* <img src={session["episodes"][0]["epi_video"]} className="img_letsgo"/> */}
                      <p className="twoline_desc">{des}</p>
                    </Col >
                    <Col md={5}>
                      <div className="menu_card">   
                        <h1 style={{marginTop: "2%", marginLeft: "2%"}}>Episodes</h1>   
                        <div className="vertical-menu">
                        {session["episodes"].map(topic=>(
                          <div className="menu_list" style={{cursor:"pointer"}} onClick={() => {showDescription(topic.id)}}>
                          <span >
                            <a style={{textDecoration: "none"}} >{topic.title}</a><br/>
                          </span>
                          </div>
                        ))}
                        </div>      
                      </div>
                    </Col>
                  </Row>                   
                </div>               
            </div>
        </Row>
      </Container>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass"><h1>RELATED GIGS / LIVE PROJECTS / INTERNSHIPS</h1>
            <p className="subtitle_masterclass">Learnt a skill - why not <span className="orange_text_masterclass">practice</span> it. </p>
          </div>
        </Container>
        </div>
        <div className="slider_mobile" style={{display:"block"}}>
          {session.gigs.length===0 ? <Container><h1 style={{marginTop:"15%"}}>We are constantly sourcing gigs / projects in this domain</h1>
              <h5 style={{color:"#F26C4F"}}>Until then...</h5><div className="button_masterclass1">
              <a style={{marginLeft:"%",marginBottom:"15%"}} href="../gigs"><button style={{padding:"8px 14px"}} type="submit" className="button_slide_new slide_right_new">Explore other gigs<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
             </div></Container> : 
            master.map(details => {
              if(details.gigs===undefined)
                return null;
              else
                return (<div><Carousel  breakPoints={breakPoints}>
                    {details.gigs.map(company=>{
                    return(
                      <MDBCard className="mbd_card card_mastercard" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
                        <div className="image_card"><MDBCardImage style={{marginLeft:"1px",width:"100%",height:"14rem",paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px"}} src={company.internship_image} alt='...' /></div>
                        <MDBCardBody>
                          <div className="Course_name">{company.project_name}</div>
                          <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
                          <div className="instruct_time">
                            <div className="instructor_name">{company.company_name}</div>
                            <div className="time_course">{company.duration}</div>
                          </div>
                          <div className="post_episode">
                            <div className="instructor_post">{company.industry}</div>
                            <div className="episode_course">{company.fees}/{company.stipend_range}</div>
                          </div>
                          <div className="button_masterclass1">
                          <a href={"/gigs/"+company.id}><button style={{padding:"8px 14px"}} type="submit" className="button_slide_new slide_right_new">Let's go<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
                        </div>
                        </MDBCardBody>
                      </MDBCard>
                    )
              })}
              </Carousel>
              </div>
              )
          })}
          </div>
          <div className="header_masterclass">
          <Container>
          <div className="top_masterclass"><h1>OTHER SESSIONS</h1>
            <p className="subtitle_masterclass">Want to learn <span className="orange_text_masterclass">something else?<span style={{marginLeft:"62.1%"}}><a style={{textDecoration:"none", color:"#f26c4f"}} href="/masterclass">Explore all sessions</a></span></span></p>
          </div>
          </Container>
          </div>
          <div className="slider_mobile" style={{display:"block"}}> 
           <div><Carousel  breakPoints={breakPoints}>
            {master.map((details,index) => {
              if(index===session.id-1)
              return null;
              else
            return (
               <MDBCard className="mbd_card card_mastercard" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
             <div className="image_card"><MDBCardImage style={{marginLeft:"1px",width:"100%",height:"14rem",paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px"}} src={details.course_image} alt='...' /></div>
             <div className="image_logo">
             <img className="image_logo1" src="/logo192.png"/>
             <img className="image_logo2" src="/logo192.png"/>
             </div>
             <MDBCardBody>
               <div className="Course_name">{details.course_name}</div>
               <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
               <div className="instruct_time">
                 <div className="instructor_name">{details.course_instructor}</div>
                 <div className="time_course">{details.course_timing}</div>
               </div>
               <div className="post_episode">
                 <div className="instructor_post">{details.course_instructor_post}</div>
                 <div className="episode_course">{details.course_episode}</div>
               </div>
               <div className="button_masterclass1">
               <a href={"/masterclass/"+details.id}><button style={{padding:"8px 14px"}} type="submit" className="button_slide_new slide_right_new">Let's go<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
             </div>
             </MDBCardBody>
           </MDBCard>
           )
          })}      
          </Carousel>
          </div>
          </div>
          <Container className="container2_page3">
          <Container className="rectangle-box3" style={{marginTop:"7%"}}>
            <Row >
              <Col style={{padding:"3%"}} md={8}>
                <p  className="mast_page2_p3">Want to provide feeback on the session!</p>
              </Col>
              <Col style={{paddingLeft:"12%",paddingTop:"3%"}} className="col-button">
                <button style={{marginLeft:"20%"}} className="button_slide slide_right">We're listening
                <ArrowLeft className="button_arrow"/></button>
              </Col>
            </Row>
          </Container>
          </Container>
          <div >
            <Row style={{marginTop: "6%", border:"1px solid #534D4D", padding:"1.5%", background: "transparent", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"#FFFFFF99"}}>
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <Col md={2}>
                    <Linkedin style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Whatsapp style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                </Col>
            </Row>
            </div>
    </div>
    );
  }
  
  export default Page3;
  