import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { ArrowLeft } from "react-bootstrap-icons";
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
                <Row style={{ marginTop: "0%" }}>
                  <h2 className="page3_heading1">{gigs[0].CompanyName}</h2>
                </Row>
                <Row style={{ marginTop: "2%" }}>
                  <p className="page3_3linetext">
                    Domain: {gigs[0].GigFunction}
                    <br /> Industry: {gigs[0].CompanyIndustry}<br />
                    Co Description: {gigs[0].CompanyDescription}
                  </p>
                </Row>
                <Row
                  className="card1_page3"
                  style={{ marginLeft: "0", marginTop: "2%" }}
                >
                  <div>
                    <p className="page3_cardtext">Project Details:</p>
                    <Row>
                      <Col>
                        <div style={{display:"flex",justifyContent:"space-evenly"}} className="proj_det_laptop">
                          <div className="img_col">
                            <img
                              alt="..."
                              className="img_page3_card"
                              variant="top"
                              src="/imagetime.png"
                            />
                          </div>
                          <div className="text_col">
                            <h1 className="text_page3_card_gigs">{gigs[0].GigDuration}</h1>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="proj_det_mobile d1">
                          <div className="img_col">
                            <img
                              alt="..."
                              className="img_page3_card"
                              variant="top"
                              src="/imagetime.png"
                            />
                          </div>
                          <div className="text_col">
                            <h1 className="text_page3_card_gigs">{gigs[0].GigDuration}</h1>
                          </div>
                        </div>
                      </Col>
 
                      <Col>
                        <Row className="proj_det_laptop d2">
                          <Col className="img_col" md={4}>
                            <img
                              className="img_page3_card"
                              variant="top"
                              src="/imagestip.png"
                              alt="..."
                            />
                          </Col>
                          <Col className="text_col" md={8}>
                            <h1 className="text_page3_card_gigs">
                            {gigs[0].GigStipend}
                            </h1>
                          </Col>
                        </Row>
                        <div className="proj_det_mobile d3">
                          <div className="img_col">
                            <img
                              className="img_page3_card"
                              variant="top"
                              src="/imagestip.png"
                              alt="..."
                            />
                          </div>
                          <div className="text_col" md={8}>
                            <h1 className="text_page3_card_gigs">
                            {gigs[0].GigStipend}
                            </h1>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Row>
                <Row className="laptop_view_btn_gig" style={{ marginTop: "0%", paddingBottom: "1%" }}>
                  <Col>
                    <a href={"/company/" + gigs[0].GigId}>
                      <button
                        className="button_slide_page3 slide_right btn1_gigspage"
                      >
                        Get to know the
                        <br /> company{" "}
                        <ArrowLeft className="button_arrow1_footer_gigspage3" />
                      </button>
                    </a>
                  </Col>
                  { !appliedgigs.includes(gigs[0].GigId) ?
                    <Col>
                      <button style={{marginLeft:"5%"}}
                        className="button2_slide_page3 slide_right btn2_gigspage"
                        onClick={() => setModalShow(true)}
                      >
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
                    <button style={{marginLeft:"12%"}}
                    className="button2_slide_page3 slide_right btn2_gigspage">
                      Applied!
                    </button>
                  </Col>
                  }
                </Row>
                <div className="mobile_view_btn_gig" >
                  <div>
                    <a href={"/company/" + gigs[0].GigId}>
                      <button
                        className="button_slide_page3 slide_right btn1_gigspage"
                      >
                        Get to know the
                        <br /> company{" "}
                        <ArrowLeft className="button_arrow1_footer_gigspage3" />
                      </button>
                    </a>
                  </div>
                  { !appliedgigs.includes(gigs[0].GigId) ?
                    <div>
                      <button style={{marginLeft:"5%"}}
                        className="button2_slide_page3 slide_right btn2_gigspage apply_now_button"
                        onClick={() => setModalShow(true)}
                      >
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
                    <div>
                    <button style={{marginLeft:"12%"}}
                    className="button2_slide_page3 slide_right btn2_gigspage">
                      Applied!
                    </button>
                  </div>
                  }
                </div>
                <div>
                  <p
                    className="text_page3_card applyby_text"
                    style={{ marginTop: "0%" }}
                  >
                    <i> Apply by {gigs[0].GigApplyBy} </i>
                  </p>
                </div>
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
                <h4>Gig Description:</h4>
                {gigs[0].GigDescription}<br/><br/><br/>
                <h4>Pre-requisites:</h4>
                {gigs[0].GigPreRequisites}<br/><br/><br/>
                <h4>Pre-selection tasks (if any):</h4>
                {gigs[0].GigPreSelectionTask}
              </Col>
            </Row>
          </Container>
          <div>
            <div className="header_masterclass">
              <Container>
                <div className="top_masterclass">
                  <h1>RELATED SESSIONS</h1>
                  <p className="subtitle_masterclass">
                    Learn before you actually{" "}
                    <span className="orange_text_masterclass">
                      practise
                      <span className="explore_session" style={{ marginLeft: "58%" }}>
                        <a
                          style={{ textDecoration: "none", color: "#f26c4f" }}
                          href="/masterclass"
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
                    onClick={() =>
                      (window.location.href = "/masterclass/" + carder.id)
                    }
                    className="cax card_mastercard"
                    style={{
                      borderRadius: "0px",
                      margin: "4%",
                      border: "2px solid rgba(242, 108, 79, 0.6)",
                      backgroundColor: "#020312",
                    }}
                  >
                    <div className="image_card">
                      <MDBCardImage className="mbd_image"
                        style={{
                          marginLeft: "1px",
                          width: "100%"
                        }}
                        src={carder.course_image}
                        alt="..."
                      />
                    </div>
                    <MDBCardBody>
                      <div className="Course_name">{carder.course_name}</div>
                      <hr
                        className="course_line"
                        style={{ height: "0.13rem", color: "#f26c4f" }}
                      />
                      <div className="instruct_time">
                        <div className="instructor_name">
                          {carder.course_instructor}
                        </div>
                        <div className="time_course">
                          {carder.course_timing}
                        </div>
                      </div>
                      <div className="post_episode">
                        <div className="instructor_post">
                          {carder.course_instructor_post}
                        </div>
                        <div className="episode_course">
                          {carder.course_episode}
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page3;
