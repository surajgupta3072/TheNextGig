import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { ArrowRight} from "react-bootstrap-icons";
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
                {expert.ExpertMasterClass.map(CourseId=>
                    <MDBCard className="mbd_card card_mastercard2" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
                        <div className="image_card"><MDBCardImage style={{marginLeft:"1px",width:"100%",height:"14rem",paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px"}} src={masterData[CourseId-1].course_image} alt='...' /></div>
                        <div className="image_logo">
                            <img alt="..." className="image_logo1" src="/TheNextGigLogo.png"/>
                            <img alt="..." className="image_logo2" src="/TheNextGigLogo.png"/>
                        </div>
                        <MDBCardBody>
                        <div className="Course_name">{masterData[CourseId-1].course_name}</div>
                        <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
                        <div className="button_masterclass1">
                        <a href={"/masterclass/"+CourseId}><button style={{padding:"8px 14px"}} className="button_slide_new slide_right_new">Let's go<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                )} 
            </div>
            <div className="slider_mobile">
        <Carousel breakPoints={breakPoints}>
            {expert.ExpertMasterClass.map(CourseId=> 
             <MDBCard className="mbd_card card_mastercard2" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312"}}>
             <div className="image_card"><MDBCardImage style={{marginLeft:"1px",width:"100%",height:"14rem",paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px"}} src={masterData[CourseId-1].course_image} alt='...' /></div>
             <div className="image_logo">
                <img alt="..." className="image_logo1" src="/TheNextGigLogo.png"/>
                <img alt="..." className="image_logo2" src="/TheNextGigLogo.png"/>
             </div>
             <MDBCardBody>
               <div className="Course_name">{masterData[CourseId-1].course_name}</div>
               <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
               <div className="button_masterclass1">
               <a href={"/masterclass/"+CourseId}><button style={{padding:"8px 14px"}} className="button_slide_new slide_right_new">Let's go<ArrowRight style={{width:"30px",height:"30px", marginTop:"-3px"}} className="button_arrow_new"/></button></a>
             </div>
             </MDBCardBody>
           </MDBCard>
            )}
          </Carousel>
          </div>
        </div>
    )
}

export default MasterSessions
