import Container from "react-bootstrap/Container";
import Carousel from "react-elastic-carousel";
import { ArrowRight } from "react-bootstrap-icons";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import docClient from '../GigsAWS'
import { useEffect, useState } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];
function Page1() {
  const [gigs, setGigs]=useState([]);
  useEffect(() => {
    let params = {
      TableName: "GigsTable"
    };
    docClient.scan(params, function(err, data) {
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
            <h1>ALL GIGS / LIVE PROJECTS</h1>
            <p className="subtitle_masterclass">
              Short, but meant to stay with you for a{" "}
              <span className="orange_text_masterclass">long time</span>.
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
                src={carder.GigName}
                alt="..."
              />
            </div>
            <div className="image_logo">
              <img className="image_logo1" src="logo192.png" />
              <img className="image_logo2" src="logo192.png" />
            </div>
            <MDBCardBody>
              <div className="Course_name">{carder.GigName}</div>
              <hr
                className="course_line"
                style={{ height: "0.13rem", color: "#f26c4f" }}
              />
              <div className="instruct_time">
                <div className="instructor_name">
                  {carder.CompanyName}
                </div>
                <div className="time_course">{carder.GigDuration}</div>
              </div>
              <div className="post_episode">
                <div className="instructor_post">
                  {carder.GigFunction}
                </div>
                <div className="episode_course">{carder.GigStipend}</div>
              </div>
              <div className="button_masterclass1">
                <a href={"/gigs/" + carder.GigId}>
                  <button
                    style={{ padding: "8px 14px" }}
                    type="submit"
                    className="button_slide_new slide_right_new"
                  >
                    Let's go
                    <ArrowRight
                      style={{
                        width: "30px",
                        height: "30px",
                        marginTop: "-3px",
                      }}
                      className="button_arrow_new"
                    />
                  </button>
                </a>
              </div>
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
                <img className="image_logo1" src="logo192.png" />
                <img className="image_logo2" src="logo192.png" />
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
                <div className="button_masterclass1">
                  <a href={"/gigs/" + carder.GigId}>
                    <button
                      style={{ padding: "8px 14px" }}
                      type="submit"
                      className="button_slide_new slide_right_new"
                    >
                      Let's go
                      <ArrowRight
                        style={{
                          width: "30px",
                          height: "30px",
                          marginTop: "-3px",
                        }}
                        className="button_arrow_new"
                      />
                    </button>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Page1;
