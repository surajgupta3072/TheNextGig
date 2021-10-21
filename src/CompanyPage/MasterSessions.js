// import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
// import Carousel from "react-elastic-carousel";
// import './../ExpertPage/Page1/Page1.css'

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 500, itemsToShow: 1},
//     { width: 750, itemsToShow: 2 },
//     { width: 1080, itemsToShow: 3 }
// ];

// function MasterSessions(props) {
//     return (
//         <div>
//             <div className="Mastercards">
//             <Carousel  breakPoints={breakPoints}>
//                 {props.masterData.map(Session=>
//                     <MDBCard onClick={() => (window.location.href = "/TNGoriginals/" + Session.id)} className="cax mbd_card card_mastercard" style={{margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312",height:"30rem",width:"370px"}}>
//                         <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%",height:"22rem"}} src={Session.course_image} alt='...' /></div>
//                         <MDBCardBody>
//                         <div className="Course_name">{Session.course_name}</div>
                        
//                         <div className="post_episode">
//                             <div className="instructor_post">{Session.course_instructor}</div>
//                         </div>
//                         <div className="like-text1" style={{display:"flex",justifyContent:"space-between",marginLeft:"0px",marginRight:"0px"}}>
//                         </div>
//                         <div style={{color:"grey"}}>{Session.course_instructor_post}</div>
//                         <div style={{display:"flex",justifyContent:"space-between"}}>
//                         <div className="episode_course">{Session.course_episode}</div>
//                         <div>&#8377; {Session.fees}</div>
//                         </div>
//                         </MDBCardBody>
//                     </MDBCard>
//                 )}  
//                 </Carousel>
//             </div>
//             <div className="slider_mobile">
//         <Carousel breakPoints={breakPoints}>
//             {props.masterData.map(Session=>
//              <MDBCard onClick={() => (window.location.href = "/TNGoriginals/" + Session.id)} className="mbd_card card_mastercard2" style={{margin:"4%", border:"2px solid rgba(242, 108, 79, 0.6)", backgroundColor:"#020312",borderRadius:"12px"}}>
//              <div className="image_card"><MDBCardImage className="mbd_image" style={{marginLeft:"1px",width:"100%",height:"14rem"}} src={Session.course_image} alt='...' /></div>
//              <div className="image_logo">
//                 <img alt="..." className="image_logo1" src="/TheNextGigLogo.png"/>
//                 <img alt="..." className="image_logo2" src="/TheNextGigLogo.png"/>
//              </div>
//              <MDBCardBody>
//                <div className="Course_name">{Session.course_name}</div>
               
//              </MDBCardBody>
//            </MDBCard>
//             )}
//           </Carousel>
//           </div>
//         </div>
//     )
// }

// export default MasterSessions
