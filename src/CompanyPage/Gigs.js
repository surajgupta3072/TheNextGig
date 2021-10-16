import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import Carousel from "react-elastic-carousel";
import './../ExpertPage/Page1/Page1.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1},
    { width: 750, itemsToShow: 2 },
    { width: 1080, itemsToShow: 3 }
];

function Gigs(props) {
    return (
        <div>
            <div className="Mastercards">
            <Carousel  breakPoints={breakPoints}>
            {props.gigData.map(Gig=>
                    <MDBCard onClick={()=>window.location.href="/ExperientialLearning/"+Gig.GigId} className="mbd_card card_mastercard" style={{borderRadius:"0px", margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312",height:"30rem",width:"370px"}}>
                        <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%",height:"22rem"}} src={Gig.GigImage} alt='...' /></div>
                        <MDBCardBody>
                        <div className="Course_name">{Gig.GigName}</div>
                        <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
                        <div className="post_episode" style={{display:"flex",justifyContent:"space-between"}}>
                            <div className="instructor_post">{Gig.GigFunction}</div>
                            <div className="episode_course">{Gig.GigDuration}</div>
                        </div>
                        <div className="like-text1" style={{display:"flex",justifyContent:"space-between",marginLeft:"0px",marginRight:"0px"}}>
                            {console.log(props)}
                        <div>{Gig.CompanyName}</div>
                        <div>&#8377; {Gig.GigStipend}</div>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                )}
                </Carousel>
            </div>
            <div className="slider_mobile">
        <Carousel breakPoints={breakPoints}>
            {props.gigData.map(Gig=>
             <MDBCard onClick={()=>window.location.href="/ExperientialLearning/"+Gig.GigId} className="mbd_card card_mastercard2" style={{margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", borderRadius:"12px",backgroundColor:"#020312"}}>
             <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%",height:"14rem"}} src="https://www.clipartkey.com/mpngs/m/153-1539728_cartoon-person-waving-cartoon-person-png.png" alt='...' /></div>
             <MDBCardBody>
               <div className="Course_name">{Gig.GigName}</div>
               <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
               <div className="post_episode">
                <div className="instructor_post">{Gig.GigFunction}</div>
                <div className="episode_course">{Gig.GigDuration}</div>
               </div>
             </MDBCardBody>
           </MDBCard>
            )} 
          </Carousel>
          </div>
        </div>
    )
}

export default Gigs;
