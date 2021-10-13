import Container from "react-bootstrap/Container";
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import docClient from '../GigsAWS'
import { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Page1.css"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];

function Page1(props) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const [active, setActive] =  useState("Videos");
  const [color1,setColor1] =useState("#f26c4f");
  const [textColor1,setextColor1] =useState("white");
  const [color2,setColor2] =useState("white");
  const [textColor2,setextColor2] =useState("#f26c4f");
  const [color3,setColor3] =useState("white");
  const [textColor3,setextColor3] =useState("#f26c4f");
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
  function buttonColor(word){
    setActive(word)
    if(word==="Jobs"){
      setColor1("#f26c4f");setextColor1("white");setColor2("white");setextColor2("#f26c4f");setColor3("white");setextColor3("#f26c4f");
    }
    if(word==="Gigs/Projects"){
     setColor1("white");setextColor1("#f26c4f");setColor2("#f26c4f");setextColor2("white");setColor3("white");setextColor3("#f26c4f");
   }
   if(word==="Internships"){
     setColor1("white");setextColor1("#f26c4f");setColor2("white");setextColor2("#f26c4f");setColor3("#f26c4f");setextColor3("white");
   }
  }
  return (
    <div>
      <div className="gigs_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F"}}>ALL OPPORTUNITIES</h1><p style={{fontFamily:"Open Sans"}}>We believe the best way to learn something is by experiencing it yourself - pick out of gigs, internships or even a job </p><p style={{fontStyle:"Open Sans",marginTop:"-10px"}}>to make your learning complete.</p></Container></div>
      <br/>
      <Container>
      <input className="search" style={{ borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}}  value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search for companies / domains / profiles / etc." type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button" /* onClick={searchFilter} */ style={{backgroundColor:"rgb(242, 108, 79)",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0"}}>Search</button>
      <br/>
      <br/>
        <Row>
          <Col xs={9} className="SocialLearn_laptop">
            <button onClick={()=>buttonColor("Jobs")} style={{marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Jobs</button>
            <button onClick={()=>buttonColor("Gigs/Projects")} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Gigs/Projects</button>
            <button onClick={()=>{buttonColor("Internships")}} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Internships</button>
          </Col>
        </Row>
      </Container>
      <div style={{display:"flex",justifyContent:"space-evenly"}} className="Mastercards">
        {gigs.map((carder) => (
          <MDBCard
            onClick={() => {if(!redirectlogin) window.location.href="/ExperientialLearning/"+carder.GigId;  else window.location.href="/login";}}
            key={carder.GigId}
            style={{
              cursor:"pointer",
              borderRadius: "0px",
              marginTop: "2%",
              height:"30rem",
              marginBottom: "4%",
              border: "2px solid rgba(242, 108, 79, 0.6)",
              backgroundColor: "#020312",
            }}
            className="cax card_mastercard mbd_card"
          >
            <div className="image_card">
              <MDBCardImage className="mbd_image"
                style={{
                  marginLeft: "0.5%",
                  width: "100%",
                  height: "22rem"
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
            onClick={() => {if(!redirectlogin) window.location.href="/ExperientialLearning/"+carder.GigId;  else window.location.href="/login";}}
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
                <MDBCardImage className="mbd_image"
                  style={{
                    marginLeft: "1px",
                    width: "100%",
                    height: "14rem"
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
                  <div className="instructor_name">
                    {carder.GigFunction}
                  </div>
                  <div className="time_course">{carder.GigDuration}</div>
                </div>
                <div className="post_episode">
                  <div className="instructor_post">
                    {carder.CompanyName}
                  </div>
                  <div className="episode_course">{carder.GigStipend}</div>
                </div>
              <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"10px"}}>Apply by {carder.GigApplyBy}</div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Page1;
