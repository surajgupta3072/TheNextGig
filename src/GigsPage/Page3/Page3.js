import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { ArrowLeft,Linkedin,Whatsapp,Instagram } from "react-bootstrap-icons";
import master from "../../MasterClassPage/Masterclass.json";
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import docClient from "../GigsAWS";
import { useEffect, useState } from "react";
import MyVerticallyPopUp  from './popup';
import "./Page3.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];

function Page3(props) {
  const [modalShow, setModalShow] = useState(false);
  const [gigs, setGigs] = useState([]);
  const [appliedgigs, setAppliedGigs] = useState([]);
  var agig = [];
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

  useEffect(() => {
    let paramss = {
      TableName: "GigsTable",
      KeyConditionExpression: "#Gid = :GigId",
      ExpressionAttributeNames: {
        "#Gid": "GigId",
      },
      ExpressionAttributeValues: {
        ":GigId": props.id,
      },
    };
    docClient.query(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        setGigs(data.Items);
        // let finalResult = []
        // for (let i = 0; i < data.Items[0].RelatedGigs.length; i++) {
        //   let singleResult = await queryCall(data.Items[0].RelatedGigs[i]);
        //   finalResult.push(singleResult);
        // }
        // setDataRelatedGigs(finalResult);
      }
    });

    var params = {
      TableName: "UsersTable",
      Key: { "UserID":props.prop.username },
      ProjectionExpression: "gigsApplications",
    };
    docClient.get(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        if(data.Item.gigsApplications!==undefined) {
          for(var x=0; x<data.Item.gigsApplications.length; x++) {
            agig.push(data.Item.gigsApplications[x].GigId);
          }
          setAppliedGigs(agig)
        }
      }
    });
  }, []);

  return (
    <div>
      {gigs.length !== 0 && (
        <div>
          <div className="header_masterclass">
            <Container>
              <div className="top_masterclass">
                <h1>IT’S ALL IN THE DETAILS</h1>
                <p className="subtitle_masterclass">
                  What you are going to{" "}
                  <span className="orange_text_masterclass"> work on </span>
                </p>
              </div>
            </Container>
          </div>
          <Container
            style={{ maxWidth: "90%", marginTop: "1%" }}
            className="container2_page3"
          >
            <Row>
              <Col md={6}>
              <Container>
                <Row style={{ marginTop: "0%" }}>
                  <h2 className="page3_heading1">{gigs[0].CompanyName}</h2>
                </Row>
                </Container>
                <div className="appreciation">
                  <Container>
                    <div style={{fontSize:"20px"}}>
                      <br/>
                      <p className="img_text"><img alt="..." src="/tick.png"/>&nbsp;&nbsp;Domain: {gigs[0].GigDomain}</p>
                      <p className="img_text"><div style={{display:"flex",justifyContent:"flex-start"}}><div><img alt="..." src="/tick.png"/></div>&nbsp;&nbsp;<div>Industry: {gigs[0].CompanyIndustry}</div></div></p>
                      <p className="img_text"><div style={{display:"flex",justifyContent:"flex-start"}}><div><img alt="..." src="/tick.png"/></div>&nbsp;&nbsp;<div>Company Description: {gigs[0].CompanyDescription}</div></div></p>
                      <p className="img_text"><div style={{display:"flex",justifyContent:"flex-start"}}><div><img alt="..." src="/tick.png"/></div>&nbsp;&nbsp;<div>Duration: {gigs[0].GigDuration}</div></div></p>
                      <p className="img_text"><div style={{display:"flex",justifyContent:"flex-start"}}><div><img alt="..." src="/tick.png"/></div>&nbsp;&nbsp;<div>Stipend: {gigs[0].GigStipend}</div></div><br/></p>
                    </div>
                  </Container>
                </div>
                <Row className="laptop_view_btn_gig" style={{ marginTop: "0%", paddingBottom: "1%" }}>
                  {/* <Col>
                    <a href={"/company/" + gigs[0].GigId}>
                      <button
                        className="button_slide_page3 slide_right btn1_gigspage"
                      >
                        Get to know the
                        <br /> company{" "}
                        <ArrowLeft className="button_arrow1_footer_gigspage3" />
                      </button>
                    </a>
                  </Col> */}
                  { false ?
                    <button style={{marginLeft:"27%", width:"25%"}} className="button2_slide_page3 slide_right">
                      Closed
                    </button> :
                    !appliedgigs.includes(gigs[0].GigId) ?
                    <Col>
                      <button style={{marginLeft:"27%"}} className="button2_slide_page3 slide_right" onClick={() => setModalShow(true)}>
                        Apply now{" "}
                        <ArrowLeft className="button_arrow2_footer_gigspage3" />
                      </button>
                      <MyVerticallyPopUp
                        gigname={gigs[0].GigName}
                        gigid={gigs[0].GigId}
                        userid={props.prop.username}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </Col> :
                    <Col>
                    <button style={{marginLeft:"27%", width:"25%"}} className="button2_slide_page3 slide_right">
                      Applied
                    </button>
                  </Col>
                  }
                </Row>
                <div className="mobile_view_btn_gig" >
                  {/* <div>
                    <a href={"/company/" + gigs[0].GigId}>
                      <button
                        className="button_slide_page3 slide_right btn1_gigspage"
                      >
                        Get to know the
                        <br /> company{" "}
                        <ArrowLeft className="button_arrow1_footer_gigspage3" />
                      </button>
                    </a>
                  </div> */}
                  { false ?
                    <button style={{marginLeft:"5%", width:"25%"}} className="button2_slide_page3 slide_right">
                      Closed
                    </button> :
                    !appliedgigs.includes(gigs[0].GigId) ?
                    <div>
                      <button style={{marginLeft:"5%"}} className="button2_slide_page3 slide_right apply_now_button" onClick={() => setModalShow(true)}>
                        Apply now{" "}
                        <ArrowLeft className="button_arrow2_footer_gigspage3" />
                      </button>
                      <MyVerticallyPopUp
                        gigname={gigs[0].GigName}
                        gigid={gigs[0].GigId}
                        userid={props.prop.username}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div> :
                    <button style={{marginLeft:"5%"}} className="button2_slide_page3 slide_right">
                      Applied
                    </button>
                  }
                </div>
                <br/>
              </Col>
              <Col
                style={{
                  border: "2px solid #f26c4f",
                  borderRadius: "10px",
                  marginBottom: "2%",
                  height: "fit-content",
                  marginLeft: "",
                }}
                md={6}
                className="lastcol_page3_gigs"
              >
                <br/>
                <h4>Description:</h4>
                <pre style={{whiteSpace:"pre-wrap", fontFamily:"Open Sans",fontSize:"16px"}}>{gigs[0].GigDescription}</pre><br/><br/>
                <h4>Pre-requisites:</h4>
                <pre style={{whiteSpace:"pre-wrap", fontFamily:"Open Sans",fontSize:"16px"}}> {gigs[0].GigPreRequisites} 
                </pre><br/><br/>
                {gigs[0].GigsProjectFile ==="" ?  
                <h4>Related files (JD / case study / etc.):  <a><button style={{marginLeft:"2%"}}
                  className="button2_slideview_page3 slide_right">
                    None
                </button></a></h4>:
                <h4>Related files (JD / case study / etc.):  <a target="_blank" href={gigs[0].GigsProjectFile}><button style={{marginLeft:"2%"}}
                className="button2_slideview_page3 slide_right">
                   View
              </button></a></h4>
                }
                <br/>
                <p>
                  <span style={{color:"#F26C4F"}}> Apply by {gigs[0].GigApplyBy} </span>
                </p>
              </Col>
            </Row>
          </Container>
          <div>
            <div className="header_masterclass">
              <Container>
                <div className="top_masterclass">
                  <h1>RELATED TNG ORIGINALS</h1>
                  <p className="subtitle_masterclass">
                    Learn before you actually{" "}
                    <span className="orange_text_masterclass">
                      practice{" "}
                      <span className="explore_session" >
                        <a
                          style={{ textDecoration: "none", color: "#f26c4f" }}
                          href="/TNGoriginals"
                        >
                          Explore all sessions &#62;&#62;
                        </a>
                      </span>
                    </span>
                  </p>
                </div>
              </Container>
            </div>
            <div>
              <Carousel breakPoints={breakPoints}>
                {master.map((carder) => (
                  <MDBCard
                    onClick={() => {if(carder.course_timing!=="...Coming Soon") window.location.href = "/TNGoriginals/" + carder.id}}
                    className="cax card_mastercard"
                    style={{
                      borderRadius: "0px",
                      margin: "4%",
                      border: "2px solid rgba(242, 108, 79, 0.6)",
                      backgroundColor: "#020312",
                    }}
                  >
                    <MDBCardImage className="mbd_image"
                      style={{
                        marginLeft: "1px",
                        width: "100%"
                      }}
                      src={carder.course_image}
                      alt="..."
                    />
                    <MDBCardBody>
                    <div className="Course_name"><pre style={{whiteSpace:"pre-wrap",fontFamily:"Inter",fontWeight:"bolder"}}>{carder.course_name}</pre></div>
                 <div style={{color:"grey"}} className="instructor_name">{carder.course_instructor}
               </div>
                 <div style={{color:"grey"}} className="instructor_post">{carder.course_instructor_post}</div>
                 <div style={{color:"grey"}} className="instructor_post">{carder.instructor_creds}</div>
                 <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                 <div className="time_course">{carder.course_timing}</div>
                 <div className="episode_course">{carder.course_episode}</div>
                 </div>
                    </MDBCardBody>
                  </MDBCard>
                ))}
              </Carousel>
            </div>
          </div>
          <div >
            <Row style={{border:"1px solid #534D4D", padding:"1.5%", background: "transparent", marginLeft:"9%", marginRight: "9%"}}>
                <Col md={10}>
                <h6 style={{fontSize:"15px",color:"#FFFFFF99"}} className="footer_page3_gigs">
                © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
                </h6>
                </Col>
                <Col className="soci_master_lap" style={{display:"flex",justifyContent:"center"}}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </Col>
                <div className="soci_master" style={{display:"flex",justifyContent:"center"}}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin   style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                    <Instagram style={{color: "white", cursor: "pointer"}} size={34}/>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp  style={{color: "white", cursor: "pointer"}} size={34}/></a>&nbsp;&nbsp;
                </div>
            </Row>
            </div>
        </div>
      )}
    </div>
  );
}

export default Page3;
