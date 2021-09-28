import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ArrowRight,ArrowLeft,Linkedin,Whatsapp,Instagram } from "react-bootstrap-icons";
import master from '../Masterclass.json';
import './Page3.css';
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import docClient from '../../GigsPage/GigsAWS';
import MyVerticallyPopUp  from './popup';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 }
];

function Page3(props) {
  const session = master[props.id-1];
  const [modalShow, setModalShow] = useState(false);
  const [des, setDes] = useState(session["episodes"][0]["description"]);
  const [epivid, setEpiVideo] = useState(session["episodes"][0]["epi_video"]);
  const [paymentshow, setPaymentShow] = useState(false);
  const [coursePurchased, setCoursePurchased] = useState(false);

  useEffect(() => {
    if(props.prop!==null) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.prop.username },
        ProjectionExpression: "MasterclassesPurchased",
      };
      docClient.get(params, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          if(data.Item.MasterclassesPurchased!==undefined)
          setCoursePurchased(data.Item.MasterclassesPurchased.includes(Number(session.id)));
        }
      });
    }
  }, []);

  const showDescription = (epid) => {
    if(coursePurchased===true || session["episodes"][epid-1].id===1)
    {
      setDes(session["episodes"][epid-1]["description"]);
      setEpiVideo(session["episodes"][epid-1]["epi_video"]);
      setPaymentShow(false);
    }
    else {
      setDes("");
      setPaymentShow(true);
    }
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
      <div className="header_masterclass">
        <Container style={{marginBottom:"0"}}>
          <div className="top_masterclass"><h1>IT’S ALL IN THE DETAILS</h1>
            <p className="subtitle_masterclass">A <span className="orange_text_masterclass"> sneak peak </span> into the masterclass</p>
          </div>
        </Container>
      </div>
      <Container style={{padding: "0%", maxWidth: "94%", marginBottom: "0%"}} className= "container1">
        <Row>
          <Col md={6} >
             <Row className="masterclass_name_laptop" style={{marginTop:"2%"}}>
              <h1 className="page3_heading1">{session.course_name}</h1>
            </Row> 
            <div  className="masterclass_name_mobile" style={{marginTop:"2%"}}>
              <h1 className="page3_heading1">{session.course_name}</h1>
            </div>
            <div style={{marginTop:"0%"}}>
              <p className="page3_3linetext">{session.course_description}</p>
              <p className="page3_3linetext2">Lifetime access to <span style={{color: "#f26c4f"}}>{session.course_timing}</span>  of Learning experience</p>
            </div>
            <Row className="card1_page3" style={{marginTop: "3%"}}>
            <div className="diver">
              <p style={{marginTop:"12px"}}  className="page3_cardtext">
              Prepares you for roles in:
              </p>
              <Row>
                <Col>
                  <Row style={{marginBottom:"12px",marginLeft:"-4px"}}>
                    <Col className="img_col">
                      <img alt="..." className="img_page3_card" variant="top" src="/imageh.png"/>
                    </Col>
                    <Col className="text_col">
                      <h1 className="text_page3_card">{session.course_role}</h1>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="img_col">
                      <img alt="..." className="img_page3_card" variant="top" src="/imageh.png"/>
                    </Col>
                    <Col className="text_col">
                      <h1 className="text_page3_card">{session.course_industry}</h1>
                    </Col>
                  </Row>
                </Col>
              </Row>
          </div>
            </Row>
            <Row className="laptop_view_video_master">
              <Col>
                <a href={"/expert/"+session.ExpertId}><button  className="button_slide_page3 slide_right">
                Get to know<br /> your expert <ArrowLeft className="button_arrow_Letsgo_Page3"/>
                </button></a>
              </Col>
              { props.prop!==null ?
                coursePurchased===false &&
                <Col style={{display: "flex", justifyContent: "space-between"}}>
                  <button className="button_slide_page3 inr_button slide_right " onClick={() => setModalShow(true)}>
                  Learn @ INR {session.fees}<ArrowLeft className="button_arrow_Letsgo_Page3"/>
                  </button>
                  <MyVerticallyPopUp
                    uid={props.prop.username}
                    cid={session.id}
                    cname={session.course_name}
                    fees={session.fees}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col> :
                <Col style={{display: "flex", justifyContent: "space-between",marginLeft:"15%"}}>
                  <button  className="button_slide_page3 slide_right inr_button" onClick={() => window.location.href="/login"}>
                  Learn @ INR {session.fees}<ArrowLeft className="button_arrow_Letsgo_Page3"/>
                  </button>
                </Col>
              }
            </Row>
            <div className="mobile_view_video_master">
              <div>
                <a href={"/expert/"+session.ExpertId}><button  className="button_slide_page3 slide_right">
                Get to know<br /> your expert <ArrowLeft style={{width:"25px",height:"25px"}}className="button_arrow_Letsgo_Page3"/>
                </button></a>
              </div>
              { props.prop!==null ?
                coursePurchased===false &&
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <button className="button_slide_page3 inr_button slide_right " onClick={() => setModalShow(true)}>
                  Learn @ INR {session.fees}<ArrowLeft style={{width:"25px",height:"25px"}} className="button_arrow_Letsgo_Page3"/>
                  </button>
                  <MyVerticallyPopUp
                    uid={props.prop.username}
                    cid={session.id}
                    cname={session.course_name}
                    fees={session.fees}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div> :
                <div style={{display: "flex", justifyContent: "space-between",marginLeft:"15%"}}>
                  <button  className="button_slide_page3 slide_right inr_button" onClick={() => window.location.href="/login"}>
                  Learn @ INR {session.fees}<ArrowLeft style={{width:"25px",height:"25px"}}className="button_arrow_Letsgo_Page3"/>
                  </button>
                </div>
              }
            </div>
          </Col>
          <Col style={{padding:"0px",marginTop:"25px"}} md={6}> 
              {/* <video src={session["episodes"][0]["epi_video"]} className="anim_img" autoplay controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}/> */}
              
              <img alt="..." src={session.course_image} className="anim_img"/>
          </Col>
          </Row>
      </Container>
      <Container className="container2_page3" style={{padding: "0%", maxWidth: "94.25%",  marginBottom: "0%"}}>
        <Row className="main_cardbody_row" style={{marginLeft: "auto",marginRight:"auto"}}>
        <div className="main_card" >               
                <div className="main_cardbody"> 
                  <Row >
                    <Col  md={8} className="col1_cardbody">
                      {paymentshow===false &&
                        <video src={epivid} className="img_letsgo" controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}/>
                      }
                      {paymentshow===false &&
                        <p className="twoline_desc">{des}</p>
                      }
                      { paymentshow===true && (
                        props.prop!==null ? (
                        <div style={{display:"flex", justifyContent:"center", marginTop:"15%"}}>
                          <button className="button_slide_page3 slide_right" onClick={() => setModalShow(true)}>
                          Learn @ INR {session.fees}<ArrowLeft className="button_arrow_Letsgo_Page3"/>
                          </button>
                          <MyVerticallyPopUp
                            uid={props.prop.username}
                            cid={session.id}
                            cname={session.course_name}
                            fees={session.fees}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div> ) :
                        <div style={{display:"flex", justifyContent:"center", marginTop:"15%"}}>
                          <button className="button_slide_page3 slide_right" onClick={() => window.location.href="/login"}>
                          Learn @ INR {session.fees}<ArrowLeft className="button_arrow_Letsgo_Page3"/>
                          </button>
                        </div>
                        )
                      }
                    </Col >
                    <Col md={4}>
                      <div className="menu_card">   
                        <h1 className="epi" style={{marginTop: "2%", marginLeft: "2%"}}>Episodes</h1>   
                        <div className="vertical-menu">
                        {session["episodes"].map(topic=>(
                          <div className="menu_list" style={{cursor:"pointer"}} onClick={() => {showDescription(topic.id)}}>
                          <span >
                            <a style={{textDecoration: "none"}}>{topic.title}</a><br/>
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
          <div className="top_masterclass"><h1>WHAT’S IN IT FOR YOU?</h1>
            <p className="subtitle_masterclass">Is it worth <span className="orange_text_masterclass"> the penny </span> ? </p>
          </div>
        </Container>
      </div>
      <br/>
      <Container className="info">
        <Row>
          <Col style={{textAlign:"center"}}>
          <div style={{height:"2px",width:"70%",backgroundColor:"#F26C4F"}}></div>
            <div style={{height:"100px",width:"80px",backgroundColor:"rgba(242, 108, 79, 0.3)",border:"1px solid #F26C4F",paddingTop:"38px"}}>1</div>
            <h3 style={{marginTop:"-60px",marginLeft:"-320px"}}>HANDS-ON <span style={{color: "#F26C4F"}}>EXPERIENCE</span></h3>
          </Col>
          <div className="night">
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
    </div>
        </Row>
        <br/><br/>
        <Row>
          <Col style={{textAlign:"center",marginLeft:"20%"}}>
            <div style={{height:"2px",width:"80%",backgroundColor:"#C89636"}}></div>
            <div style={{height:"100px",width:"80px",backgroundColor:"rgba(200, 150, 54, 0.3)",border:"1px solid #C89636",paddingTop:"38px"}}>2</div>
            <h3 style={{marginTop:"-60px",marginLeft:"-100px"}}>HANDS-ON <span style={{color: "#C89636"}}>EXPERIENCE</span></h3>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col style={{textAlign:"center",marginLeft:"40%"}}>
          <div style={{height:"2px",width:"100%",backgroundColor:"#569670"}}></div>
            <div style={{height:"100px",width:"80px",backgroundColor:"rgba(86, 150, 112, 0.3)",border:"1px solid #569670",paddingTop:"38px"}}>3</div>
            <h3 style={{marginTop:"-60px",marginLeft:"90px"}}>HANDS-ON <span style={{color: "#569670"}}>EXPERIENCE</span></h3>
          </Col>
        </Row>
      </Container>
      <br/><br/>
      {/* <div className="Whats_inforyou_desktop_view">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "6%", marginBottom: "6%"}}>
          <div width="50%" height="50%" style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
            <img alt="..." src="/imageh.png" height="100px" width="160px"/>
            <h5>Preference for Marketing <span style={{color: "#f26c4f"}}>gigs / internships / jobs</span></h5>
          </div>
          <div width="50%" height="50%" style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
            <img alt="..." src="/imageh.png" height="100px" width="160px"/>
            <h5>Re-learn the Marketing Fundamentals from the <span style={{color: "#f26c4f"}}>Best</span></h5>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "6%", marginBottom: "6%"}}>
          <div width="50%" height="50%" style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
            <img alt="..." src="/imageh.png" height="100px" width="160px"/>
            <h5>Certificate from TheNextGig in association with <span style={{color: "#f26c4f"}}>Anil Nair</span></h5>
          </div>
          <div width="50%" height="50%" style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
            <img alt="..." src="/imageh.png" height="100px" width="160px"/>
            <h5>Sneak peek into real-life <span style={{color: "#f26c4f"}}>marketing</span></h5>
          </div>
        </div>
      </div> */}
      <div className="Whats_inforyou_mobile_view">
        <Container style={{display: "flex", flexDirection: "column", justifyContent: "space-around",marginTop:"-60px"}}>
        <Row>
          <Col style={{textAlign:"center"}}>
          <div style={{height:"2px",width:"100%",backgroundColor:"#F26C4F"}}></div>
            <div style={{height:"100px",width:"80px",backgroundColor:"rgba(242, 108, 79, 0.3)",border:"1px solid #F26C4F",paddingTop:"38px"}}>1</div>
            <h3 style={{marginTop:"-60px",marginLeft:"70px"}}>HANDS-ON <span style={{color: "#F26C4F"}}>EXPERIENCE</span></h3>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col style={{textAlign:"center"}}>
            <div style={{height:"2px",width:"100%",backgroundColor:"#C89636"}}></div>
            <div style={{height:"100px",width:"80px",backgroundColor:"rgba(200, 150, 54, 0.3)",border:"1px solid #C89636",paddingTop:"38px"}}>2</div>
            <h3 style={{marginTop:"-60px",marginLeft:"70px"}}>HANDS-ON <span style={{color: "#C89636"}}>EXPERIENCE</span></h3>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col style={{textAlign:"center"}}>
          <div style={{height:"2px",width:"100%",backgroundColor:"#569670"}}></div>
            <div style={{height:"100px",width:"80px",backgroundColor:"rgba(86, 150, 112, 0.3)",border:"1px solid #569670",paddingTop:"38px"}}>3</div>
            <h3 style={{marginTop:"-60px",marginLeft:"70px"}}>HANDS-ON <span style={{color: "#569670"}}>EXPERIENCE</span></h3>
          </Col>
        </Row>
        <br/>
        <br/>
        </Container>
      </div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass"><h1>RELATED GIGS / LIVE PROJECTS </h1>
            <p className="subtitle_masterclass">Let’s <span className="orange_text_masterclass"> practice </span> what we’ve learnt practice it. </p>
          </div>
        </Container>
        </div>
        <div className="slider_mobile" style={{display:"block"}}>
          {session.gigs.length===0 ? <Container><h1 style={{marginTop:"15%"}}>We are constantly sourcing gigs / projects in this domain</h1>
              <h5 style={{color:"#F26C4F"}}>Until then...</h5><div className="button_masterclass1">
              <a style={{marginLeft:"%",marginBottom:"15%"}} href="../gigs"><button style={{padding:"8px 14px"}} className="button_slide_new slide_right_new">Explore other gigs<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
             </div></Container> : 
            master.map(details => {
              if(details.gigs===undefined)
                return null;
              else
                return (<div><Carousel  breakPoints={breakPoints}>
                    {details.gigs.map(company=>{
                    return(
                      <MDBCard onClick={()=>window.location.href="/gigs/"+company.id} className="cax  card_mastercard" style={{borderRadius:"0px", margin:"4%",border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312",height:"fit-content"}}>
                        <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%"}} src={company.internship_image} alt='...' /></div>
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
          <div className="top_masterclass"><h1>OTHER MASTERCLASSES</h1>
            <p className="subtitle_masterclass">Don’t stop learning!<span className="explore_sessions" ><a style={{textDecoration:"none", color:"#f26c4f"}} href="/masterclass">Explore all sessions &#62; &#62;</a></span></p>
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
               <MDBCard  onClick={()=>window.location.href="/masterclass/"+details.id} className="cax card_mastercard" style={{height:"fit-content",borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
             <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%"}} src={details.course_image} alt='...' /></div>
             <MDBCardBody > 
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
             </MDBCardBody>
           </MDBCard>
           )
          })}      
          </Carousel>
          </div>
          </div>
          {/* {<div className="container2_page3" style={{paddingLeft: "0", marginLeft: "0"}}>
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
          </div>} */}
          <div >
            <Row style={{marginTop: "6%", border:"1px solid #534D4D", padding:"1.5%", background: "transparent", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"#FFFFFF99"}}>
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col> 
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Linkedin style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <Whatsapp style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                </div>
            </Row>
            </div>
    </div>
    );
  }
  
  export default Page3;
  