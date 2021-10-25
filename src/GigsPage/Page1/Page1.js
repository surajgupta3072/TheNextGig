import Container from "react-bootstrap/Container";
import Carousel from "react-elastic-carousel";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import docClient from '../GigsAWS'
import { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Page1.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 },
];

function Page1(props) {
  const [searchterm, setSearchTerm] = useState("");
  const [color1,setColor1] =useState("#f26c4f");
  const [textColor1,setextColor1] =useState("white");
  const [color2,setColor2] =useState("white");
  const [textColor2,setextColor2] =useState("#f26c4f");
  const [color3,setColor3] =useState("white");
  const [textColor3,setextColor3] =useState("#f26c4f");
  const [gigs, setGigs] = useState([]);
  const [redirectlogin, setRedirectLogin] = useState(false);
  const [buck,setbuck]=useState(1)
  const [videoslist, setVideosList] = useState(false);
  
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

  function addSearchTerm() {
    var params = {
      TableName: "UsersTable",
      Key: { "UserID":props.prop.username },
      ProjectionExpression: "GigsSearchHistory",
    };
    docClient.get(params, function(err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.prop.username },
          UpdateExpression: "set GigsSearchHistory["+data.Item.GigsSearchHistory.length.toString()+"] = :gsh",
          ExpressionAttributeValues: {
            ":gsh": {timestamp: `${Date.now()}`, sgterm: searchterm}
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }

  function searchFilter() {
    if(searchterm!="") {
      addSearchTerm();
      const searchvids = gigs.filter((vid)=>{
        if(vid.GigDomain.toLowerCase().includes(searchterm.toLowerCase()) || vid.GigName.toLowerCase().includes(searchterm.toLowerCase()) || vid.CompanyName.toLowerCase().includes(searchterm.toLowerCase())) {
          return vid;
        }
      })
      setVideosList(searchvids);
    }
  }

  function buttonColor(word){
    if(word==="Jobs"){
      setbuck(1);
      setColor1("#f26c4f");setextColor1("white");setColor2("white");setextColor2("#f26c4f");setColor3("white");setextColor3("#f26c4f");
    }
    if(word==="Gigs"){
      setbuck(2);
     setColor1("white");setextColor1("#f26c4f");setColor2("#f26c4f");setextColor2("white");setColor3("white");setextColor3("#f26c4f");
   }
   if(word==="Internships"){
    setbuck(3);
     setColor1("white");setextColor1("#f26c4f");setColor2("white");setextColor2("#f26c4f");setColor3("#f26c4f");setextColor3("white");
   }
  }
  return (
    <div>
      <div className="gigs_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F",marginTop:"1.5%"}}>ALL OPPORTUNITIES</h1><p style={{fontFamily:"Open Sans"}}>We believe the best way to learn something is by experiencing it yourself - pick out of gigs, internships or even a job <br className="brtag_page1_gigs"/>to make your learning complete. </p></Container></div>
      <br/>
      <Container>
      <input className="search" style={{ borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}}  value={searchterm} onChange={(e)=>{setSearchTerm(e.target.value);if(e.target.value==""){setVideosList(false)}}} placeholder="Search for companies or domains" type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button"  onClick={searchFilter} style={{backgroundColor:"rgb(242, 108, 79)",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0"}}>Search</button>
      <br/>
      <br/>
        <Row>
          <Col xs={9} className="SocialLearn_laptop">
            <button onClick={()=>{buttonColor("Jobs")}} style={{marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Jobs</button>
            <button onClick={()=>{buttonColor("Gigs")}} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Gigs</button>
            <button onClick={()=>{buttonColor("Internships")}} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Internships</button>
          </Col>
        </Row>
      </Container>
      <div className="SocialLearn_list_mobile">
      <div style={{marginTop:"5%"}} >
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                  <div><button onClick={()=>{buttonColor("Jobs")}} style={{backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Jobs</button></div>
                  <div><button onClick={()=>{buttonColor("Gigs")}} style={{backgroundColor:color2,color:textColor2,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Gigs</button></div>
                  <div><button onClick={()=>{buttonColor("Internships")}} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Internships</button></div>
               </div> 
             </div> 
      </div>
      <Container>
      <div style={{display:"flex",justifyContent:"space-evenly"}} className="Mastercards">
        {videoslist===false?gigs.map((carder) => {
        if(carder.Bucket===buck)
         return <MDBCard 
            onClick={() => {if(!redirectlogin) window.location.href="/ExperientialLearning/"+carder.GigId;  else window.location.href="/login";}}
            key={carder.GigId}
            style={{
              cursor:"pointer",
              borderRadius: "0px",
              marginTop: "2%",
              height:"fit-content",
              minHeight:"410px",
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
                }}
                src={carder.GigImage}
                alt="..."
              />
            </div>
            <MDBCardBody>
              <div className="Course_name" style={{display: "flex", flexDirection: "row"}}>{carder.GigName}</div>
                <div style={{color:"grey",marginTop:"5px"}} className="instructor_name" >
                  {carder.GigDomain} <sup data-tip data-for={carder.GigId+"g"}>&#9432;</sup>
                  <ReactTooltip id={carder.GigId+"g"} place="top" effect="solid">
                    {carder.GigDescription.substring(0, 150)}...
                  </ReactTooltip>
                </div>
              <div style={{color:"grey",fontSize:"0.9rem"}}>
                <div className="instructor_post">
                  {carder.CompanyName} <sup data-tip data-for={carder.GigId+"d"}>&#9432;</sup>
                  <ReactTooltip id={carder.GigId+"d"} place="top" effect="solid">
                    {carder.CompanyDescription.substring(0, 150)}...
                  </ReactTooltip>
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:"18px",marginTop:"10px"}}>
              <div>{carder.GigDuration}</div>
                <div>&#8377; {carder.GigStipend}</div>
                </div>
              <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"20px"}}>Apply by {carder.GigApplyBy}</div>
            </MDBCardBody>
          </MDBCard>
        }):videoslist.map((carder) => {
          if(carder.Bucket===buck)
           return <MDBCard
              onClick={() => {if(!redirectlogin) window.location.href="/ExperientialLearning/"+carder.GigId;  else window.location.href="/login";}}
              key={carder.GigId}
              style={{
                cursor:"pointer",
                borderRadius: "0px",
                marginTop: "2%",
                height:"fit-content",
                minHeight:"410px",
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
                    width: "100%"
                  }}
                  src={carder.GigImage}
                  alt="..."
                />
              </div>
              <MDBCardBody>
                <div className="Course_name" style={{display: "flex", flexDirection: "row"}}>{carder.GigName}</div>
                <hr
                  className="course_line"
                  style={{ height: "0.13rem", color: "#f26c4f" }}
                />
                <div className="instruct_time">
                  <div style={{color:"grey"}} className="instructor_name" >
                    {carder.GigDomain} <sup data-tip data-for={carder.GigId+"g"}>&#9432;</sup>
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
                  <div className="episode_course">&#8377; {carder.GigStipend}</div>
                </div>
                <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"10px"}}>Apply by {carder.GigApplyBy}</div>
              </MDBCardBody>
            </MDBCard>
          })}
      </div>
      </Container>
      <div className="slider_mobile">
        <Carousel breakPoints={breakPoints}>
          {videoslist===false?gigs.map((carder) => {
            if(carder.Bucket===buck)
            return <MDBCard
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
                <div className="Course_name" style={{display: "flex", flexDirection: "row"}}>{carder.GigName}</div>
                <div className="instruct_time">
                  <div style={{color:"grey",marginTop:"5px"}} className="instructor_name">
                    {carder.GigDomain}
                  </div>
                </div>
                <div className="post_episode">
                  <div className="instructor_post">
                    {carder.CompanyName}
                  </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}}>
                  <div className="time_course">{carder.GigDuration}</div>
                  <div className="episode_course">&#8377; {carder.GigStipend}</div></div>
              <div style={{textAlign:"center",paddingTop:"5px",fontSize:"0.85rem"}}>Apply by {carder.GigApplyBy}</div>
              </MDBCardBody>
            </MDBCard>
}):videoslist.map((carder) => {
  if(carder.Bucket===buck)
  return <MDBCard
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
      <div className="Course_name" style={{display: "flex", flexDirection: "row"}}>{carder.GigName}</div>
      <hr
        className="course_line"
        style={{ height: "0.13rem", color: "#f26c4f" }}
      />
      <div className="instruct_time">
        <div style={{color:"grey"}} className="instructor_name">
          {carder.GigDomain}
        </div>
        <div className="time_course">{carder.GigDuration}</div>
      </div>
      <div className="post_episode">
        <div className="instructor_post">
          {carder.CompanyName}
        </div>
        <div className="episode_course">&#8377; {carder.GigStipend}</div>
      </div>
    <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:"10px",fontSize:"0.85rem"}}>Apply by {carder.GigApplyBy}</div>
    </MDBCardBody>
  </MDBCard>
})}
        </Carousel>
      </div>
    </div>
  );
}

export default Page1;
