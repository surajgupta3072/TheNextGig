import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import Carousel from "react-elastic-carousel";
import expertData from '././Experts.json';
import masterData from './../MasterClassPage/Masterclass.json';
import './Page1/Page1.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1},
    { width: 750, itemsToShow: 2 },
    { width: 1080, itemsToShow: 3 }
];

function MasterSessions(props) {
    const expert = expertData[props.Eid-1];
    // console.log(expert)
    return (
        <div>
            <div className="Mastercards">
                <Carousel breakPoints={breakPoints}>
                {expert.ExpertMasterClass.map(CourseId=>
                    <MDBCard onClick={() => (window.location.href = "/TNGoriginals/" + CourseId)} className="mbd_card card_mastercard" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312",height:"30rem",width:"370px"}}>
                        <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%",height:"22rem"}} src={masterData[CourseId-1].course_image} alt='...' /></div>
                        <MDBCardBody>
                        <div className="Course_name">{masterData[CourseId-1].course_name}</div>
                        <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
                        <div className="post_episode">
                            <div className="instructor_post">{masterData[CourseId-1].course_instructor}</div>
                            <div className="episode_course">{masterData[CourseId-1].course_episode}</div>
                        </div>
                        <div className="like-text1" style={{display:"flex",justifyContent:"space-between",marginLeft:"0px",marginRight:"0px"}}>
                        <div>{masterData[CourseId-1].course_instructor_post}</div>
                        <div>INR {masterData[CourseId-1].fees}</div>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                )} 
                </Carousel>
            </div>
            <div className="slider_mobile">
        <Carousel breakPoints={breakPoints}>
            {expert.ExpertMasterClass.map(CourseId=> 
             <MDBCard onClick={() => (window.location.href = "/TNGoriginals/" + CourseId)} className="mbd_card card_mastercard2" style={{margin:"4%",borderRadius:"12px",border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
             <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%",height:"14rem"}} src={masterData[CourseId-1].course_image} alt='...' /></div>
             <MDBCardBody>
               <div className="Course_name">{masterData[CourseId-1].course_name}</div>
               <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
             </MDBCardBody>
           </MDBCard>
            )}
          </Carousel>
          </div>
        </div>
    )
}

export default MasterSessions
