import Container from "react-bootstrap/Container";
import master from "../Masterclass.json";
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import "./Page1.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];
function Page1() {
  return (
    <div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>ALL MASTERCLASSES</h1>
            <p className="subtitle_masterclass">
              Short, but meant to stay with you for a{" "}
              <span className="orange_text_masterclass">long time</span>.
            </p>
          </div>
        </Container>
      </div>
      <div className="Mastercards">
        {master.map((carder) => (
          <MDBCard
            onClick={() => (window.location.href = "/masterclass/" + carder.id)}
            style={{
              cursor: "pointer",
              borderRadius: "0px",
              marginTop: "2%",
              marginBottom: "4%",
              border: "2px solid rgba(242, 108, 79, 0.6)",
              backgroundColor: "#020312",
            }}
            className="cax card_mastercard"
          >
            <div className="image_card1">
              <MDBCardImage className="mbd_image"
                style={{ width: "100%", height: "22rem" }}
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
                <div className="time_course">{carder.course_timing}</div>
              </div>
              <div className="post_episode">
                <div className="instructor_post">
                  {carder.course_instructor_post}
                </div>
                <div className="episode_course">{carder.course_episode}</div>
              </div>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
      <div className="slider_mobile">
        <Carousel breakPoints={breakPoints}>
          {master.map((carder) => (
            <MDBCard
              onClick={() => (window.location.href = "/masterclass/" + carder.id)}
              className="mbd_card card_mastercard"
              style={{
                cursor: "pointer",
                borderRadius: "0px",
                margin: "4%",
                border: "2px solid rgba(242, 108, 79, 0.6)",
                backgroundColor: "#020312",
              }}
            >
              <div  className="image_card">
                <MDBCardImage className="mbd_image"
                  style={{
                    marginLeft: "1px",
                    width: "100%",
                    height: "14rem"
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
                  <div className="time_course">{carder.course_timing}</div>
                </div>
                <div className="post_episode">
                  <div className="instructor_post">
                    {carder.course_instructor_post}
                  </div>
                  <div className="episode_course">{carder.course_episode}</div>
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
