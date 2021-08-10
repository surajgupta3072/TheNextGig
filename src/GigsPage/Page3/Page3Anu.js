import Container from "react-bootstrap/Container";
import { ArrowRight} from "react-bootstrap-icons";
import master from '../../MasterClassPage/Masterclass.json';
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import docClient from '../GigsAWS'
import { useEffect, useState } from "react";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 }
];

function Page3(props) {
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
        {props.id}
        <br/>
        Suraj first start this page3 
        <br/>
        <div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>RELATED SESSIONS</h1>
            <p className="subtitle_masterclass">
            Learn before you actually {" "}
              <span className="orange_text_masterclass">practise<span style={{marginLeft:"60%"}}><a style={{textDecoration:"none", color:"#f26c4f"}} href="/masterclass">Explore all sessions</a></span></span>
            </p>
          </div>
        </Container>
      </div>
      <div>
        <Carousel  breakPoints={breakPoints}>
            {master.map((carder) => (
             <MDBCard className="mbd_card card_mastercard" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
             <div className="image_card"><MDBCardImage style={{marginLeft:"1px",width:"100%",height:"14rem",paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px"}} src={carder.course_image} alt='...' /></div>
             <div className="image_logo">
             <img className="image_logo1" src="logo192.png"/>
             <img className="image_logo2" src="logo192.png"/>
             </div>
             <MDBCardBody>
               <div className="Course_name">{carder.course_name}</div>
               <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
               <div className="instruct_time">
                 <div className="instructor_name">{carder.course_instructor}</div>
                 <div className="time_course">{carder.course_timing}</div>
               </div>
               <div className="post_episode">
                 <div className="instructor_post">{carder.course_instructor_post}</div>
                 <div className="episode_course">{carder.course_episode}</div>
               </div>
               <div className="button_masterclass1">
               <a href={"/masterclass/"+carder.id}><button style={{padding:"8px 14px"}} type="submit" className="button_slide_new slide_right_new">Let's go<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
             </div>
             </MDBCardBody>
           </MDBCard>
            ))}
          </Carousel>
          </div>
   </div>
   <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>RELATED GIGS</h1>
            <p className="subtitle_masterclass">
            Try your hand on other {" "}
              <span className="orange_text_masterclass">gigs<span style={{marginLeft:"60%"}}><a style={{textDecoration:"none", color:"#f26c4f"}} href="/masterclass">Explore all gigs</a></span></span>
            </p>
          </div>
        </Container>
      </div>
      <div>
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
               <a href={"/masterclass/"+carder.id}><button style={{padding:"8px 14px"}} type="submit" className="button_slide_new slide_right_new">Let's go<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
             </div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </Carousel>
      </div>
      </div>
    );
  }
  
  export default Page3;
  