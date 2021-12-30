import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ArrowRight, ArrowLeft, Linkedin, Whatsapp, Instagram, Discord } from "react-bootstrap-icons";
import master from '../Masterclass.json';
import './Page3.css';
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import docClient from '../../GigsPage/GigsAWS';
import MyVerticallyPopUp from './popup';
import Swal from "sweetalert2";
import Connectpopup from "../../HomePage/Page2/Contactinstructorpopup"
import Connect from "../../HomePage/Page2/Contactinstructorpopup"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 }
];

function Page3(props) {
  const session = master[props.id - 1];
  const [modalShow, setModalShow] = useState(false);
  const [des, setDes] = useState(session["episodes"][0]["description"]);
  const [masterid, setmasterid] = useState(session["VideoUploaderID"]);
  const [videotopic, setvideotopic] = useState(session["course_name"]);
  const [epivid, setEpiVideo] = useState(session["episodes"][0]["epi_video"]);
  const [paymentshow, setPaymentShow] = useState(false);
  const [coursePurchased, setCoursePurchased] = useState(false);
  const [redirectlogin, setRedirectLogin] = useState(false);
  const [relatedgigs, setDataRelatedGigs] = useState([]);
  const [reward, setReward] = useState("");
  const [id, setid] = useState("")
  const [modalShow2, setModalShow2] = useState({ data: { VideoTopic: session["course_name"], VideoUsername: session["course_instructor"] }, check: false });
  const [name, setname] = useState("")
  const [coursename, setcoursename] = useState("")
  const [email, setemail] = useState("")
  useEffect(() => {
    if (props.prop !== null) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID": props.prop.user.username },
        ProjectionExpression: "MasterclassesPurchased",
      };
      docClient.get(params, function (err, data) {
        if (err) {
          console.log(err);
        }
        else {
          if (data.Item.MasterclassesPurchased !== undefined)
            setCoursePurchased(data.Item.MasterclassesPurchased.includes(Number(session.id)));
        }
      });
      var paramss = {
        TableName: "UsersTable",
        Key: { UserID: props.prop.user.username },
        ProjectionExpression: "TotalRewards",
      };
      docClient.get(paramss, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          setReward(data.Item.TotalRewards);
        }
      });
    }
    else {
      setRedirectLogin(true);
    }
    docClient.scan({ TableName: "GigsTable" }, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        let gi = [];
        for (var e of data.Items)
          if (session.gigs.includes(e.GigId))
            gi.push(e);
        setDataRelatedGigs(gi);
      }
    });
  }, []);
  function paymentFlowCase(deduct) {
    var paramss = {
      TableName: "UsersTable",
      Key: { UserID: props.prop.user.username },
      ProjectionExpression: "MasterclassesPurchased",
    };
    docClient.get(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var flag = 0;
        data.Item.MasterclassesPurchased.forEach((ele) => {
          if (ele === session.id)
            flag = 1;
        })
        if (flag === 0) {
          var params = {
            TableName: "UsersTable",
            Key: { UserID: props.prop.user.username },
            UpdateExpression:
              "set MasterclassesPurchased[" +
              data.Item.MasterclassesPurchased.length.toString() +
              "] = :ms",
            ExpressionAttributeValues: {
              ":ms": session.id,
            },
            ReturnValues: "UPDATED_NEW",
          };
          docClient.update(params, function (err, data) {
            if (err) {
              console.log(err);
            } else {
              var params = {
                TableName: "UsersTable",
                Key: { UserID: props.prop.user.username },
                UpdateExpression: "set TotalRewards = :tr",
                ExpressionAttributeValues: {
                  ":tr": reward - deduct,
                },
                ReturnValues: "UPDATED_NEW",
              };
              docClient.update(params, function (err, data) {
                const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
                // We use JSON.stringify here so the data can be sent as a string via HTTP
                const body = JSON.stringify({
                  feedback: `Uid:${props.prop.user.username}`,
                  user: props.prop.user.attributes.email,
                  title: "Congratulations! You've purchased a TNG Original!",
                  feedback1: props.prop.user.attributes.name,
                  feedback2: session.course_name
                });

                const requestOptions = {
                  method: "POST",
                  body,
                };
                fetch(endpoint, requestOptions)
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Error in fetch");
                    } else {
                      Swal.fire({
                        title:
                          "<h5 style='color:white'>" +
                          "PAYMENT SUCCESSFUL!" +
                          "</h5>",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 3000,
                        background: "#020312",
                        color: "white",
                        iconColor: "#F26C4F",
                      }).then(() => {
                        var paramss = {
                          TableName: "UsersTable",
                          Key: { UserID: props.prop.user.username },
                          ProjectionExpression: "SkillsAcquiredMastersessions",
                        };
                        docClient.get(paramss, function (err, data) {
                          if (err) {
                            console.log(err);
                          } else {
                            var params = {
                              TableName: "UsersTable",
                              Key: { UserID: props.prop.user.username },
                              UpdateExpression:
                                "set SkillsAcquiredMastersessions[" +
                                data.Item.SkillsAcquiredMastersessions.length.toString() +
                                "] = :sam",
                              ExpressionAttributeValues: {
                                ":sam": session.course_role,
                              },
                              ReturnValues: "UPDATED_NEW",
                            };
                            docClient.update(params, function (err, data) {
                              if (err) {
                                console.log(err);
                              } else {
                                window.location.reload();
                              }
                            });
                          }
                        });
                      });
                    }
                  })
                  .catch((error) => {
                    console.error("Failed to send feedback. Error: ", error);
                  });
              });
            }
          });
        }
      }
    });
  }

  function handlePayment(x) {
    setname(props.prop.user.attributes.name)
    setid(props.prop.user.username)
    setemail(props.prop.user.attributes.email)
    setcoursename(session.course_name)
    if (reward >= parseInt(x)) {
      // console.log("REWARD EXCESS", reward);
      paymentFlowCase(parseInt(x));
    }
    else {
      setModalShow(true);
      // console.log("REWARD SHORTAGE");
    }
  }
  function getNotified() {
    const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
    { console.log(session.course_name) }
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      feedback: `Uid:${props.prop.user.username}`,
      user: props.prop.user.attributes.email,
      title: "Reach Out For Minutes",
      feedback1: props.prop.user.attributes.name,
      feedback2: session.course_name
    });
    const requestOptions = {
      method: "POST",
      body,
    };
    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in fetch");
        } else {
          Swal.fire({
            title:
              "<h5 style='color:white'>" +
              "NOTIFIED!" +
              "</h5>",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            background: "#020312",
            color: "white",
            iconColor: "#F26C4F",
          })
        }
      })
      .catch((error) => {
        console.error("Failed to send feedback. Error: ", error);
      });
  }

  const showDescription = (epid) => {
    if (coursePurchased === true || session["episodes"][epid - 1].id === 1) {
      setDes(session["episodes"][epid - 1]["description"]);
      setEpiVideo(session["episodes"][epid - 1]["epi_video"]);
      setPaymentShow(false);
    }
    else {
      setDes("");
      setPaymentShow(true);
    }
  };
  const follow = (createrid) => {
    if (!props.prop.isAuthenticated) {
      window.location.href = "../login";
    }
    if (createrid === "") {
      Swal.fire({
        title:
          "<h5 style='color:white'>" +
          "Sorry you can't follow this person as this session is posted by admin!" +
          "</h5>",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
        background: "#020312",
        color: "white",
        iconColor: "#F26C4F",
      })
    }
    else {
      var params = {
        TableName: "UsersTable",
        Key: { UserID: createrid },
        ProjectionExpression: "Follower",
      };
      docClient.get(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var flag = 0;
          data.Item.Follower.forEach(ele => {
            if (ele.id === props.prop.user.username)
              flag = 1
          });
          if (flag === 0) {
            var params = {
              TableName: "UsersTable",
              Key: { UserID: createrid },
              UpdateExpression:
                "set Follower[" +
                data.Item.Follower.length.toString() +
                "] = :ms",
              ExpressionAttributeValues: {
                ":ms": { "id": props.prop.user.username, "date": Date.now() },
              },
              ReturnValues: "UPDATED_NEW",
            };
            docClient.update(params, function (err, data) {
              if (err) {
                console.log(err);
              } else {
              }
            })
          }
        }
      })
      var paramss = {
        TableName: "UsersTable",
        Key: { UserID: props.prop.user.username },
        ProjectionExpression: "Following",
      };
      docClient.get(paramss, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var flag1 = 0;
          data.Item.Following.forEach(ele => {
            if (ele.id === createrid)
              flag1 = 1
          });
          if (flag1 === 1) {
            Swal.fire({
              title:
                "<h5 style='color:white'>" +
                "You Already follow him" +
                "</h5>",
              icon: "success",
              showConfirmButton: false,
              timer: 3000,
              background: "#020312",
              color: "white",
              iconColor: "#F26C4F",
            })
          }
          if (flag1 === 0) {
            var params = {
              TableName: "UsersTable",
              Key: { UserID: props.prop.user.username },
              UpdateExpression:
                "set Following[" +
                data.Item.Following.length.toString() +
                "] = :ms",
              ExpressionAttributeValues: {
                ":ms": { "id": createrid, "date": Date.now() },
              },
              ReturnValues: "UPDATED_NEW",
            };
            docClient.update(params, function (err, data) {
              if (err) {
                console.log(err);
              } else {
                Swal.fire({
                  title:
                    "<h5 style='color:white'>" +
                    "Creator want to say to thank you for following him" +
                    "</h5>",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#020312",
                  color: "white",
                  iconColor: "#F26C4F",
                })
              }
            })
          }
          else {
            Swal.fire({
              title:
                "<h5 style='color:white'>" +
                "You already follow this person" +
                "</h5>",
              icon: "success",
              showConfirmButton: false,
              timer: 3000,
              background: "#020312",
              color: "white",
              iconColor: "#F26C4F",
            })
          }
        }
      })
    }
  }
  return (
    <div>
      <div className="header_masterclass">
        <Container style={{ marginBottom: "0" }}>
          <div className="top_masterclass"><h1>{session.course_name}</h1>
            <p className="subtitle_masterclass">A <span className="orange_text_masterclass"> sneak peak </span> into the masterclass</p>
          </div>
        </Container>
      </div>
      <Container style={{ padding: "0%", maxWidth: "94%", marginBottom: "0%" }} className="container1">
        <Row>
          <Col md={6} >
            <div style={{ marginTop: "3%" }}>
              <p className="page3_3linetext">{session.course_description}</p>
            </div>
            <div className="appreciation">
              <div >
                <div className="card1_page3">
                  <h1 className="text_page3_card">What you’ll learn:</h1>
                </div>
                <br />
                <p className="img_text"><img alt="..." src="/tick.png" />&nbsp;{session.WhatYouLearn[0]}</p>
                <p className="img_text"><img alt="..." src="/tick.png" />&nbsp;{session.WhatYouLearn[1]}</p>
                <p className="img_text"><img alt="..." src="/tick.png" />&nbsp;{session.WhatYouLearn[2]}</p>
                <p className="img_text"><img alt="..." src="/tick.png" />&nbsp;{session.WhatYouLearn[3]}</p>
              </div>
              <div>
                <div>
                  <div className="card1_page3">
                    <h1 className="text_page3_card">Prepares you for:</h1>
                  </div>
                </div>
                <br />
                <p className="img_text"><img alt="..." src="/tick.png" />&nbsp;{session.PreparesYouFor[0]}</p>
                <p className="img_text"><img alt="..." src="/tick.png" />&nbsp;{session.PreparesYouFor[1]}</p>
                <p className="img_text"><img alt="..." src="/tick.png" />&nbsp;{session.PreparesYouFor[2]}</p>
              </div>
            </div>
            <Row className="laptop_view_video_master">
              {/* <Col>
                <a href={"/expert/" + session.ExpertId}>
                  <button className="button_slide_page3 slide_right">
                    Get to know<br /> your expert <ArrowLeft className="button_arrow_Letsgo_Page3" />
                  </button>
                </a>
              </Col> */}
              {props.prop !== null ?
                coursePurchased === false &&
                <Col style={{ textAlign: "center" }}>
                  <button className="button_slide_page3 slide_right" onClick={() => handlePayment(session.course_duration)}>
                    Redeem {session.course_duration} free minutes<ArrowLeft className="button_arrow_Letsgo_Page3" />
                  </button>
                  <p>Don't have enough minutes? <em onClick={() => getNotified()} style={{ color: "#f26c4f", cursor: "pointer" }}>Reach out to us!</em></p>
                </Col> :
                <Col style={{ display: "flex", justifyContent: "space-between", marginLeft: "20%" }}>
                  <button className="button_slide_page3 slide_right" onClick={() => window.location.href = "/login"}>
                    Redeem {session.course_duration} free minutes<ArrowLeft className="button_arrow_Letsgo_Page3" />
                  </button>
                </Col>
              }
            </Row>
            <MyVerticallyPopUp
              show={modalShow}
              name={name}
              id={id}
              email={email}
              course_name={coursename}
              onHide={() => setModalShow(false)}
            />
            <Connect
              data={modalShow2.data}
              show={modalShow2.check}
              onHide={() => { setModalShow2(false) }}
            />
            <div className="mobile_view_video_master">
              {/* <div>
                <a href={"/expert/" + session.ExpertId}><button className="button_slide_page3 slide_right">
                  Get to know<br /> your expert
                </button></a>
              </div> */}
              {props.prop !== null ?
                coursePurchased === false &&
                <div style={{ textAlign: "center" }}>
                  <button className="button_slide_page3 slide_right" onClick={() => handlePayment(session.course_duration)}>
                    Redeem<br />{session.course_duration} free minutes
                  </button>
                  <p>Don't have enough minutes? <em onClick={() => getNotified()} style={{ color: "#f26c4f", cursor: "pointer" }}>Reach out to us!</em></p>
                </div> :
                <div>
                  <button className="button_slide_page3 slide_right" onClick={() => window.location.href = "/login"}>
                    Redeem<br />{session.course_duration} free minutes
                  </button>
                </div>
              }
            </div>
          </Col>
          <Col style={{ padding: "1px" }} md={6}>
            <video className="anim_img" src={session.trailer_video} playsInline autoPlay controls loop controlsList="nodownload" onContextMenu={e => e.preventDefault()} />
          </Col>
        </Row>
      </Container>
      <Container className="container2_page3 masterclass_video_laptop" style={{ padding: "0%", maxWidth: "94.25%", marginBottom: "0%" }}>
        <br /><br /><br /><br />
        <Row className="main_cardbody_row" style={{ margin: "auto" }}>
          <div className="main_card" >
            <div className="main_cardbody">
              <Row >
                <Col md={8} className="col1_cardbody">
                  {paymentshow === false &&
                    <video src={epivid} className="img_letsgo" controls controlsList="nodownload" onContextMenu={e => e.preventDefault()} />
                  }
                  {paymentshow === false &&
                    <p className="twoline_desc">{des}</p>
                  }
                  {paymentshow === true && (
                    props.prop !== null ? (
                      <div style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}>
                        <button className="button_slide_page3 slide_right" onClick={() => handlePayment(session.course_duration)}>
                          Redeem {session.course_duration} free minutes<ArrowLeft className="button_arrow_Letsgo_Page3" />
                        </button>
                      </div>) :
                      <div style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}>
                        <button className="button_slide_page3 slide_right" onClick={() => window.location.href = "/login"}>
                          Redeem {session.course_duration} free minutes<ArrowLeft className="button_arrow_Letsgo_Page3" />
                        </button>
                      </div>
                  )
                  }
                </Col >
                <Col className='col_epi' md={4}>
                  <div className="menu_card">
                    <h1 className="epi" style={{ marginTop: "2%", marginLeft: "2%" }}>Episodes</h1>
                    <div className="vertical-menu">
                      {session["episodes"].map((topic, i) => (
                        <div className="menu_list" style={{ cursor: "pointer" }} onClick={() => { showDescription(topic.id) }}>
                          <span >
                            <div style={{ display: "flex", justifyContent: "flex-start", fontSize: "18px" }}><div>&nbsp;&nbsp;</div><div style={{ marginTop: "4%", marginBottom: "-2%" }}> {topic.title}</div></div><br />
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
      <Container className="masterclass_video_mobile">
        <div className="main_cardbody_row" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="main_card" >
            <div className="main_cardbody">
              <div >
                <div className="col1_cardbody">
                  {paymentshow === false &&
                    <video src={epivid} className="img_letsgo" controls controlsList="nodownload" onContextMenu={e => e.preventDefault()} />
                  }
                  {paymentshow === false &&
                    <p className="twoline_desc">{des}</p>
                  }
                  {paymentshow === true && (
                    props.prop !== null ? (
                      <div style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}>
                        <button className="button_slide_page3 slide_right" onClick={() => handlePayment(session.course_duration)}>
                          Redeem {session.course_duration} free minutes<ArrowLeft className="button_arrow_Letsgo_Page3" />
                        </button>
                      </div>) :
                      <div style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}>
                        <button className="button_slide_page3 slide_right" onClick={() => window.location.href = "/login"}>
                          Redeem {session.course_duration} free minutes<ArrowLeft className="button_arrow_Letsgo_Page3" />
                        </button>
                      </div>
                  )
                  }
                </div>
                <div md={4}>
                  <div className="menu_card">
                    <h1 className="epi" style={{ marginTop: "2%", marginLeft: "2%" }}>Episodes</h1>
                    <div className="vertical-menu">
                      {session["episodes"].map(topic => (
                        <div className="menu_list" style={{ cursor: "pointer" }} onClick={() => { showDescription(topic.id) }}>
                          <span >
                            <div style={{ display: "flex", justifyContent: "flex-start", fontSize: "18px" }}><div>&nbsp;&nbsp;</div><div style={{ marginTop: "4%", marginBottom: "-2%" }}> {topic.title}</div></div><br />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="btn_div_homepage_new" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div><button onClick={() => setModalShow2({ data: { VideoTopic: session["course_name"], VideoUsername: session["course_instructor"] }, check: true })} style={{ marginTop: "0px", marginLeft: "0px", width: "240px", marginBottom: "8%" }} id="start_doing_homepage" className="button_slide slide_right orange_button_page3">Connect<ArrowRight className="button_arrow" style={{ marginLeft: "62px" }} /></button></div>
        <div><button onClick={() => follow(masterid)} id="start_doing_homepage" style={{ marginTop: "0px", marginLeft: "0px", width: "240px", marginBottom: "8%" }} className="button_slide slide_right orange_button_page3">Follow Expert<ArrowRight className="button_arrow" style={{ marginLeft: "40px" }} /></button></div>
      </div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass"><h1>WHAT’S IN IT FOR YOU?</h1>
            <p className="subtitle_masterclass">Is it worth <span className="orange_text_masterclass"> the penny </span> ? </p>
          </div>
        </Container>
      </div>
      <br />
      <Container className="info">
        <Row>
          <Col style={{ textAlign: "center" }}>
            <div style={{ height: "2px", width: "60%", backgroundColor: "#F26C4F", marginTop: "30px" }}></div>
            <div style={{ height: "100px", width: "80px", backgroundColor: "rgba(242, 108, 79, 0.3)", border: "1px solid #F26C4F", paddingTop: "38px" }}>1</div>
            <h3 style={{ marginTop: "-70px", marginLeft: "8%", fontSize: "20px", textAlign: "left" }}>{session.WhatsInForYou[0]}<br /><span style={{ color: "#F26C4F" }}>{session.WhatsInForYou[1]}</span></h3>
          </Col>
          {/* <div className="night">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div> */}
        </Row>
        <br /><br />
        <Row>
          <Col style={{ textAlign: "center", marginLeft: "20%" }}>
            <div style={{ height: "2px", width: "70%", backgroundColor: "#C89636" }}></div>
            <div style={{ height: "100px", width: "80px", backgroundColor: "rgba(200, 150, 54, 0.3)", border: "1px solid #C89636", paddingTop: "38px" }}>2</div>
            <h3 style={{ marginTop: "-70px", marginLeft: "10%", fontSize: "20px", textAlign: "left" }}>{session.WhatsInForYou[2]}<br /><span style={{ color: "#C89636" }}>{session.WhatsInForYou[3]}</span></h3>
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col style={{ textAlign: "center", marginLeft: "40%" }}>
            <div style={{ height: "2px", width: "95%", backgroundColor: "#569670" }}></div>
            <div style={{ height: "100px", width: "80px", backgroundColor: "rgba(86, 150, 112, 0.3)", border: "1px solid #569670", paddingTop: "38px" }}>3</div>
            <h3 style={{ marginTop: "-70px", marginLeft: "13%", fontSize: "20px", textAlign: "left" }}>{session.WhatsInForYou[4]}<br /><span style={{ color: "#569670" }}>{session.WhatsInForYou[5]}</span></h3>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <div className="Whats_inforyou_mobile_view">
        <Container style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: "-60px" }}>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <div style={{ height: "2px", width: "100%", backgroundColor: "#F26C4F" }}></div>
              <div style={{ height: "100px", width: "80px", backgroundColor: "rgba(242, 108, 79, 0.3)", border: "1px solid #F26C4F", paddingTop: "38px" }}>1</div>
              <h3 style={{ marginTop: "-70px", marginLeft: "75px", fontSize: "15px" }}>{session.WhatsInForYou[0]}<span style={{ color: "#F26C4F" }}> {session.WhatsInForYou[1]}</span></h3>
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col style={{ textAlign: "center" }}>
              <div style={{ height: "2px", width: "100%", backgroundColor: "#C89636" }}></div>
              <div style={{ height: "100px", width: "80px", backgroundColor: "rgba(200, 150, 54, 0.3)", border: "1px solid #C89636", paddingTop: "38px" }}>2</div>
              <h3 style={{ marginTop: "-70px", marginLeft: "80px", fontSize: "15px" }}>{session.WhatsInForYou[2]}<span style={{ color: "#C89636" }}> {session.WhatsInForYou[3]}</span></h3>
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col style={{ textAlign: "center" }}>
              <div style={{ height: "2px", width: "100%", backgroundColor: "#569670" }}></div>
              <div style={{ height: "100px", width: "80px", backgroundColor: "rgba(86, 150, 112, 0.3)", border: "1px solid #569670", paddingTop: "38px" }}>3</div>
              <h3 style={{ marginTop: "-70px", marginLeft: "80px", fontSize: "15px" }}>{session.WhatsInForYou[4]}<span style={{ color: "#569670" }}> {session.WhatsInForYou[5]}</span></h3>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass"><h1>RELATED OPPORTUNITIES</h1>
            <p className="subtitle_masterclass">Let’s <span className="orange_text_masterclass"> apply </span> what we’ve learnt <span className="explore_sessions" ><a style={{ textDecoration: "none", color: "#f26c4f" }} href="/ExperientialLearning">Explore all &#62; &#62;</a></span> </p>
          </div>
        </Container>
      </div>
      <div style={{ display: "block" }}>
        {session.gigs.length === 0 ?
          <Container>
            <h1 style={{ marginTop: "10%", textAlign: "center" }}>We are constantly sourcing gigs / projects in this domain</h1>
            <h5 style={{ color: "#F26C4F", textAlign: "center" }}>Until then...</h5>
            <div className="button_masterclass1">
              <a style={{ marginLeft: "%", marginBottom: "10%" }} href="/ExperientialLearning">
                <button style={{ padding: "8px 14px" }} className="button_slide_new slide_right_new">Explore other gigs<ArrowRight style={{ width: "30px", height: "30px", marginTop: "-3px" }} className="button_arrow_new" /></button>
              </a>
            </div>
          </Container> :
          <div>
            <Carousel breakPoints={breakPoints}>
              {relatedgigs.map(carder => {
                return (
                  <MDBCard
                    onClick={() => { if (!redirectlogin) window.location.href = "/ExperientialLearning/" + carder.GigId; else window.location.href = "/login"; }}
                    key={carder.GigId}
                    style={{
                      cursor: "pointer",
                      borderRadius: "0px",
                      marginTop: "2%",
                      height: "fit-content",
                      minHeight: "410px",
                      marginBottom: "4%",
                      border: "2px solid rgba(242, 108, 79, 0.6)",
                      backgroundColor: "#020312",
                    }}
                    className="cax card_mastercard mbd_card"
                  >
                    <div className="image_card">
                      <MDBCardImage className="mbd_image"
                        style={{
                          marginLeft: "0.5%",
                          width: "100%",
                        }}
                        src={carder.GigImage}
                        alt="..."
                      />
                    </div>
                    <MDBCardBody>
                      <div className="Course_name" style={{ display: "flex", flexDirection: "row" }}>{carder.GigName}</div>
                      <div style={{ color: "grey", marginTop: "5px" }} className="instructor_name" >
                        {carder.GigDomain} <sup data-tip data-for={carder.GigId + "g"}>&#9432;</sup>
                        <ReactTooltip id={carder.GigId + "g"} place="top" effect="solid">
                          {carder.GigDescription.substring(0, 150)}...
                        </ReactTooltip>
                      </div>
                      <div style={{ color: "grey", fontSize: "0.9rem" }}>
                        <div className="instructor_post">
                          {carder.CompanyName} <sup data-tip data-for={carder.GigId + "d"}>&#9432;</sup>
                          <ReactTooltip id={carder.GigId + "d"} place="top" effect="solid">
                            {carder.CompanyDescription.substring(0, 150)}...
                          </ReactTooltip>
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", marginTop: "10px" }}>
                        <div>{carder.GigDuration}</div>
                        <div>&#8377; {carder.GigStipend}</div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "20px" }}>Apply by {carder.GigApplyBy}</div>
                    </MDBCardBody>
                  </MDBCard>
                )
              })}
            </Carousel>
          </div>
        }
      </div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass"><h1>OTHER SESSIONS</h1>
            <p className="subtitle_masterclass">Don’t stop learning!<span className="explore_sessions" ><a style={{ textDecoration: "none", color: "#f26c4f" }} href="/TNGoriginals">Explore all sessions &#62; &#62;</a></span></p>
          </div>
        </Container>
      </div>
      <div>
        <div><Carousel breakPoints={breakPoints}>
          {master.map((details, index) => {
            if (index === session.id - 1)
              return null;
            else
              return (
                <MDBCard onClick={() => { if (details.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + details.id }} className="cax card_mastercard" style={{ height: "fit-content", borderRadius: "0px", margin: "4%", border: "2px solid rgba(242, 108, 79, 0.6)", backgroundColor: "#020312" }}>
                  <div className="image_card"><MDBCardImage className="mbd_image" style={{ marginLeft: "1px", width: "100%" }} src={details.course_image} alt='...' /></div>
                  <MDBCardBody >
                    <div className="Course_name">{details.course_name}</div><br />
                    <div style={{ color: "grey" }} className="instructor_name">{details.course_instructor}
                    </div>
                    <div style={{ color: "grey" }} className="instructor_post">{details.course_instructor_post}</div>
                    <div style={{ color: "grey" }} className="instructor_post">{details.instructor_creds}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                      <div className="time_course">{details.course_timing}</div>
                      <div className="episode_course">{details.course_episode}</div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              )
          })}
        </Carousel>
        </div>
      </div>
      <div >
        <Row style={{ marginTop: "6%", border: "1px solid #534D4D", padding: "1.5%", background: "transparent", marginLeft: "9%", marginRight: "9%" }}>
          <Col md={10}>
            <h6 style={{ fontSize: "15px", color: "#FFFFFF99" }} className="footer_page3_gigs">
              © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
            </h6>
          </Col>
          <Col className="soci_master_lap" style={{ display: "flex", justifyContent: "center" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/EEVcU7ZzAQ"><Discord style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
          </Col>
          <div className="soci_master" style={{ display: "flex", justifyContent: "center" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/EEVcU7ZzAQ"><Discord style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Page3;
