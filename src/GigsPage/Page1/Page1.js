import Container from "react-bootstrap/Container";
import Carousel from "react-elastic-carousel";
import { ArrowRight } from "react-bootstrap-icons";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import docClient from '../GigsAWS'
import React,{ useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip'
import MyVerticallyPopUp  from './../Page3/popup';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];

function Page1(props) {
  const [modalShow, setModalShow] = useState(false);
  const [gigs, setGigs]=useState([]);
  const [appliedgigs, setAppliedGigs] = useState([]);
  var agig = [];

  useEffect(() => {
    let paramss = {
      TableName: "GigsTable"
    };
    docClient.scan(paramss, function(err, data) {
    if (err) {
      console.log(err);
    } 
    else {
      setGigs(data.Items);
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
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>EXPERIENTIAL LEARNING</h1>
            <p className="subtitle_masterclass">
            Let’s make your learning 
              <span className="orange_text_masterclass"> experiential</span>.
            </p>
          </div>
        </Container>
      </div>
      <div className="Mastercards">
        {gigs.map((carder) => (
          <MDBCard
            key={carder.GigId}
            style={{
              borderRadius: "0px",
              marginTop: "2%",
              marginLeft: "4%",
              marginRight: "4%",
              marginBottom: "4%",
              border: "2px solid rgba(242, 108, 79, 0.6)",
              backgroundColor: "#020312",
            }}
            className="card_mastercard"
          >
            <div className="image_card">
              <MDBCardImage
                style={{
                  marginLeft: "0.5%",
                  width: "100%",
                  height: "14rem",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                src={carder.GigImage}
                alt="..."
              />
            </div>
            <MDBCardBody>
              <div className="Course_name">{carder.GigName}</div>
              <hr
                className="course_line"
                style={{ height: "0.13rem", color: "#f26c4f" }}
              />
              <div className="instruct_time">
                <div className="instructor_name" >
                  {carder.GigFunction} <sup data-tip data-for={carder.GigId}>&#9432;</sup>
                  <ReactTooltip id={carder.GigId} place="top" effect="solid">
                    {carder.GigDescription}
                  </ReactTooltip>
                </div>
                <div className="time_course">{carder.GigDuration}</div>
              </div>
              <div className="post_episode">
                <div className="instructor_post">
                  {carder.CompanyName} <sup data-tip data-for={carder.GigId}>&#9432;</sup>
                  <ReactTooltip id={carder.GigId} place="top" effect="solid">
                    {carder.CompanyDescription}
                  </ReactTooltip>
                </div>
                <div className="episode_course">{carder.GigStipend}</div>
              </div>
              <div className="button_class" style={{display:"flex",justifyContent:"space-between"}}>
              <div className="button_masterclass1">
                <a href={"/gigs/" + carder.GigId}>
                  <button
                    style={{ padding: "8px 14px" ,fontSize:"0.7rem"}}
                    className="button_slide_new slide_right_new" 
                  >
                    View details
                    <ArrowRight
                      style={{
                        width: "28px",
                        height: "28px",
                        marginTop: "-5px",
                        marginLeft:"1px"
                      }}
                      className="button_arrow_new"
                    />
                  </button>
                </a>
              </div>
              {!appliedgigs.includes(carder.GigId) ?
                <div className="button_masterclass1">
                  <button
                    style={{ padding: "8px 14px" ,fontSize:"0.7rem",marginLeft:"-110px"}}
                    className="button_slide_new slide_right_new"
                    onClick={() => setModalShow(true)}
                  >
                    Apply now
                    <ArrowRight
                      style={{
                        width: "28px",
                        height: "28px",
                        marginTop: "-5px",
                        marginLeft:"1px"
                      }}
                      className="button_arrow_new"
                    />
                  </button>
                  <MyVerticallyPopUp
                    gigid={carder.GigId}
                    userid={props.prop.username}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div> :
                <div className="button_masterclass1">
                  <button
                    style={{ padding: "8px 14px" ,fontSize:"0.7rem",marginLeft:"-110px"}}
                    className="button_slide_new slide_right_new"
                  >
                    Applied!
                  </button>
                </div>
              }
              </div>
              <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"10px"}}><em>Apply by {carder.GigApplyBy}</em></div>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
      <div className="slider_mobile">
        <Carousel breakPoints={breakPoints}>
          {gigs.map((carder) => (
            <MDBCard
              key={carder.GigId}
              className="mbd_card card_mastercard"
              style={{
                borderRadius: "0px",
                margin: "4%",
                border: "2px solid rgba(242, 108, 79, 0.6)",
                backgroundColor: "#020312",
              }}
            >
              <div className="image_card">
                <MDBCardImage
                  style={{
                    marginLeft: "1px",
                    width: "100%",
                    height: "14rem",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                  src={carder.GigName}
                  alt="..."
                />
              </div>
              <div className="image_logo">
                <img alt="..." className="image_logo1" src="/TheNextGigLogo.png" />
                <img alt="..." className="image_logo2" src="/TheNextGigLogo.png" />
              </div>
              <MDBCardBody>
                <div className="Course_name">{carder.GigFunction}</div>
                <hr
                  className="course_line"
                  style={{ height: "0.13rem", color: "#f26c4f" }}
                />
                <div className="instruct_time">
                  <div className="instructor_name">
                    {carder.GigStipend}
                  </div>
                  <div className="time_course">{carder.GigStartDate}</div>
                </div>
                <div className="post_episode">
                  <div className="instructor_post">
                    {carder.GigPOCname}
                  </div>
                  <div className="episode_course">{carder.GigPOCcontact}</div>
                </div>
                <div className="button_class" style={{display:"flex",justifyContent:"space-between"}}>
              <div className="button_masterclass1">
                <a href={"/gigs/" + carder.GigId}>
                  <button
                    style={{ padding: "8px 10px" ,fontSize:"0.5rem"}}
                    className="button_slide_new slide_right_new" 
                  >
                    View Details
                    <ArrowRight
                      style={{
                        width: "25px",
                        height: "25px",
                        marginTop: "-7px",
                        marginLeft:"1px"
                      }}
                      className="button_arrow_new"
                    />
                  </button>
                </a>
              </div>
              {!appliedgigs.includes(carder.GigId) ?
                <div className="button_masterclass1">
                  <button
                    style={{ padding: "8px 10px" ,fontSize:"0.5rem",marginLeft:"-80px"}}
                    className="button_slide_new slide_right_new"
                    onClick={() => setModalShow(true)}
                  >
                    Apply now
                    <ArrowRight
                      style={{
                        width: "25px",
                        height: "25px",
                        marginTop: "-7px",
                        marginLeft:"1px"
                      }}
                      className="button_arrow_new"
                    />
                  </button>
                  <MyVerticallyPopUp
                    gigname={carder.GigName}
                    gigid={carder.GigId}
                    userid={props.prop.username}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div> :
                <div className="button_masterclass1">
                  <button
                    style={{ padding: "8px 10px" ,fontSize:"0.5rem",marginLeft:"-80px"}}
                    className="button_slide_new slide_right_new"
                  >
                    Applied!
                  </button>
                </div>
              }
              </div>
              <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"10px"}}>Apply by </div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Page1;
