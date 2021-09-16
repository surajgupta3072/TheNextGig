import Container from "react-bootstrap/Container";
import Carousel from "react-elastic-carousel";
import { ArrowRight } from "react-bootstrap-icons";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import docClient from '../GigsAWS'
import React,{ useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];

function Page1(props) {
  const [gigs, setGigs] = useState([]);
  const [redirectlogin, setRedirectLogin] = useState(false);

  useEffect(() => {
    props.prop===null && setRedirectLogin(true)
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
            onClick={() => {if(!redirectlogin) window.location.href="/gigs/"+carder.GigId;  else window.location.href="/login";}}
            key={carder.GigId}
            style={{
              cursor:"pointer",
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
                  {carder.GigFunction} <sup data-tip data-for={carder.GigId+"g"}>&#9432;</sup>
                  <ReactTooltip id={carder.GigId+"g"} place="top" effect="solid">
                    {carder.GigDescription.substring(0, 150)}...
                  </ReactTooltip>
                </div>
                <div className="time_course">{carder.GigDuration}</div>
              </div>
              <div className="post_episode">
                <div className="instructor_post">
                  {carder.CompanyName} <sup data-tip data-for={carder.GigId+"d"}>&#9432;</sup>
                  <ReactTooltip id={carder.GigId+"d"} place="top" effect="solid">
                    {carder.CompanyDescription.substring(0, 150)}...
                  </ReactTooltip>
                </div>
                <div className="episode_course">{carder.GigStipend}</div>
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
            onClick={() => {if(!redirectlogin) window.location.href="/gigs/"+carder.GigId;  else window.location.href="/login";}}
              key={carder.GigId}
              className="mbd_card card_mastercard"
              style={{
                cursor:"pointer",
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
