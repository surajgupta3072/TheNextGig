import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videos from './Videos';
import Blogs from './Blogs';
import Community from './Community';
import docClient from '../GigsPage/GigsAWS';
import MyVerticallyPopUp  from './popupVideo';
import MyVerticallyPopUpBlog  from './popupBlog';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function SocialLearningPage(props) {
  const [modalShow, setModalShow] = useState(false);
  const [active, setActive] =  useState("Videos");
  const [color1,setColor1] =useState("#f26c4f");
  const [textColor1,setextColor1] =useState("white");
  const [color2,setColor2] =useState("white");
  const [textColor2,setextColor2] =useState("#f26c4f");
  const [color3,setColor3] =useState("white");
  const [textColor3,setextColor3] =useState("#f26c4f");
  const [rew, setRew] = useState(0);
  const [myrefcode, setMyRefCode] = useState("");
  const [allvideos, setAllvideos] = useState([]);
  const [user, setUser] = useState("");
  const [redirectlogin, setRedirectLogin] = useState(true);

  useEffect(() => {
    var paramss = {
      TableName: "VideosTable"
    };
    docClient.scan(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setAllvideos(data.Items.filter((e)=>{if(e.isApproved===true) return e}));
      }
    });
    if(props.auth.user===null) {
      setUser("");
      setRedirectLogin(true);
    }
    else {
      setRedirectLogin(false);
      setUser(props.auth.user);
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.auth.user.username },
      };
      docClient.get(params, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          setRew(data.Item.TotalRewards);
          setMyRefCode(data.Item.ReferralCode);
        }
      });
    }
  }, []);

   function buttonColor(word){
     setActive(word)
     if(word==="Videos"){
       setColor1("#f26c4f");setextColor1("white");setColor2("white");setextColor2("#f26c4f");setColor3("white");setextColor3("#f26c4f");
     }
     if(word==="Blogs"){
      setColor1("white");setextColor1("#f26c4f");setColor2("#f26c4f");setextColor2("white");setColor3("white");setextColor3("#f26c4f");
    }
    if(word==="Community"){
      setColor1("white");setextColor1("#f26c4f");setColor2("white");setextColor2("#f26c4f");setColor3("#f26c4f");setextColor3("white");
    }
   }
    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A",height:"fit-content"}} className="SocialLearn_laptop">
              <Row style={{marginTop:"10%",marginLeft:"22%"}}><img alt="dp" src="google_logo.jpg" style={{height:"150px",width:"170px",borderRadius:"50%"}}/></Row>
              {user.attributes!==undefined ? <Row><p style={{fontSize:"20px", textAlign:"center", marginTop:"10px"}}>{user.attributes.name}</p></Row> : <Row><br/></Row>}
              <Row>
                <p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>Reward Points: <b>{rew}</b></p>
                <p style={{textAlign:"center"}}><p style={{margin:"0"}}>Your Referral Code:</p><p style={{color:"#F26C4F"}}><b>{myrefcode}</b></p></p>
              </Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <br/>
              <div style={{fontSize:"14px",marginLeft:"7px"}}>Why <span style={{color:"#F26C4F"}}>watch </span>{active==="Videos"?"videos":active==="Blogs"?"blog":"community"} ?
                <br/>
                <br/>
                <span style={{color:"#F26C4F"}}>Learn </span>new skills and <span style={{color:"#F26C4F"}}>add </span> them to your <span style={{color:"#F26C4F"}}>profile</span> 
                <br/>
                <br/>
                Why upload <span style={{color:"#F26C4F"}}>{active==="Videos"?"videos":active==="Blogs"?"blog":"community"} </span>?
                <br/>
                <br/>
                <span style={{color:"#F26C4F"}}>Teach </span>new skills and and gain <span style={{color:"#F26C4F"}}>satisfaction </span>of spreading knowledge <span style={{fontSize:"11px"}}>(and gain reward points)</span>
                <br/>
                <br/>
                <span style={{fontSize:"11px",color:"white",marginTop:"4px"}}>
                PS: It is usually said that best way to know that you are a master of something is when you can teach that to others<br/>
                PPS: Knwoledge increases through sharing</span>
                <br/>
                <br/>
              </div>
            </Col>
            <Col xs={12}  className="SocialLearn_list_mobile" style={{marginTop: "10%"}}>       
               <Row >
                <div className="profile_logo_text_mobile" ><div><img alt="dp" src="google_logo.jpg" style={{height:"100px",width:"100px",borderRadius:"50%"}}/></div>
                <div>
                  {user.attributes!==undefined && <div><p style={{fontSize:"18px", textAlign:"center"}}>{user.attributes.name}</p></div>}
                  <div><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>Reward Points: <b>{rew}</b></p></div>
                  <div style={{textAlign:"center"}}><p style={{margin:"0"}}>Your Referral Code:</p><p style={{color:"#F26C4F"}}><b>{myrefcode}</b></p></div>
                </div> 
                </div>
              </Row> 
              <br/>
              {/* <Row style={{marginTop:"5%"}} >
               <div style={{display:"flex",justifyContent:"space-evenly"}}>
                  <div><button onClick={()=>buttonColor("Videos")} style={{backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Videos</button></div>
                  <div><button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,color:textColor2,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Blogs</button></div>
                  <div><button onClick={()=>buttonColor("Community")} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Community</button></div>
               </div>
             </Row> */}
            </Col>
            <Col>
             <Row style={{marginTop:"5%"}} >
               <Col xs={9} className="SocialLearn_laptop">
                  <button onClick={()=>buttonColor("Videos")} style={{marginLeft:"2%",marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Videos</button>
                  <button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Blogs</button>
                  <button onClick={()=>buttonColor("Community")} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Community</button>
               </Col>
               {/* {active==="Videos" &&
                <Col>
                  {<a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p className="impart_know" style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Impart knowledge + <br/>(Add Video)</p></a>}
                  <MyVerticallyPopUp
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
                }
                {active==="Blogs" &&
                <Col>
                  <a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p className="impart_know" style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Impart knowledge + <br/>(Add Blog)</p></a>
                  <MyVerticallyPopUpBlog
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
                } */}
             </Row>
                {active === "Videos" && <Videos prop={allvideos} userid={user.username} redirlog={redirectlogin}/>}
                {active === "Blogs" && <Blogs userid={user.username} redirlog={redirectlogin}/>}
                {active === "Community" && <Community/>}
            </Col> 
          </Row>
      </Container>
    );
  }
  
export default SocialLearningPage;