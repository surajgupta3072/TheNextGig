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
      <div className="masterclass_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F",marginTop:"1.5%"}}>ALL TNG ORIGINALS</h1><p style={{fontFamily:"Open Sans"}}>Specially curated courses - they’re short, binge-able and based on real-life experiences.</p><p style={{fontStyle:"italic",fontSize:"14px",marginTop:"-10px"}}>PS: You get a certificate too!</p></Container></div>
      <div className="Mastercards">
        {master.map((carder) => (
          <MDBCard
            onClick={() => {if(carder.course_timing!=="...Coming Soon") window.location.href = "/TNGoriginals/" + carder.id}}
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
              <MDBCardImage className="mbd_image"
                style={{ width: "100%"}}
                src={carder.course_image}
                alt="..."
              />
            <MDBCardBody>
              <div className="Course_name"><pre style={{fontFamily:"Inter",fontWeight:"bolder"}}>{carder.course_name}</pre></div>
              <div className="instruct_time">
                <div style={{color:"grey"}} className="instructor_name">
                  {carder.course_instructor}
                </div>
              </div>
                <div style={{color:"grey"}} className="instructor_post">
                  {carder.course_instructor_post}
                  
                </div>
                <div style={{color:"grey"}} className="instructor_post">
                {carder.instructor_creds}
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                <div className="time_course">{carder.course_timing}</div>
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
              onClick={() => (window.location.href = "/TNGoriginals/" + carder.id)}
              className="mbd_card card_mastercard"
              style={{
                cursor: "pointer",
                borderRadius: "0px",
                margin: "4%",
                border: "2px solid rgba(242, 108, 79, 0.6)",
                backgroundColor: "#020312"
              }}
            >
              <div  className="image_card">
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
                <div className="Course_name"><pre style={{fontFamily:"Inter",fontWeight:"bolder"}}>{carder.course_name}</pre></div>
                <div className="instruct_time">
                  <div style={{color:"grey"}} className="instructor_name">
                    {carder.course_instructor}
                  </div>
                </div>
                  <div style={{color:"grey"}} className="instructor_post">
                    {carder.course_instructor_post}
                    <div style={{color:"grey"}} className="instructor_post">{carder.instructor_creds}</div>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                  <div style={{color:"white"}} className="time_course">{carder.course_timing}</div>
                  <div style={{color:"white"}} className="episode_course">{carder.course_episode}</div>
                  </div>
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
