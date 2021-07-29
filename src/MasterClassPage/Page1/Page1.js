import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import master from './Masterclass.json';
import Carousel from "react-elastic-carousel";
import { ArrowRight } from "react-bootstrap-icons";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import '../../App.css';
import './Page1.css';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 }
];
function Page1() {
    return (
      <div>
        <div className="header_masterclass">
        <Container><div className="top_masterclass"><h1>ALL MASTERCLASSES</h1>
        <h4 className="subtitle_masterclass">Short,but meant to stay with you for a <span className="orange_text_masterclass">long time</span>.</h4>
        </div></Container>
        </div>
        <div className="Mastercards">
          {master.map(carder=>
          (
        <MDBCard  style={{borderRadius:"0px",marginTop:"2%", marginLeft:"4%",marginRight:"4%" ,marginBottom:"4%",border:"2px solid rgba(242, 108, 79, 0.6)" , backgroundColor:"#020312"}} className="card_mastercard">
          <div className="image_card">
      <MDBCardImage  style={{ marginLeft:"0.5%",width:"100%",height:"14rem",paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px"}} src={carder.course_image} alt='...' />
      </div>
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
        <a href="#"><button style={{padding:"8px 14px"}} type="submit" className="button_slide slide_right">Let's go<ArrowRight style={{width:"30px",height:"30px",marginTop:"-3px"}} className="button_arrow"/></button></a>
      </div>
      </MDBCardBody>
    </MDBCard>
          )
)}
        </div>
        <div className="slider_mobile">
        <Carousel  breakPoints={breakPoints}>
            {master.map((carder) => (
             <MDBCard className="mbd_card" style={{borderRadius:"0px", margin:"4%" ,border:"2px solid rgba(242, 108, 79, 0.6)" , backgroundColor:"#020312"}} className="card_mastercard">
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
               <a href="#"><button style={{padding:"8px 14px"}} type="submit" className="button_slide slide_right">Let's go<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow"/></button></a>
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