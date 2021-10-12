import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videos from './Videos';
import Blogs from './Blogs';
import docClient from '../GigsPage/GigsAWS';
import MyVerticallyPopUp  from './popupVideo';
import MyVerticallyPopUpBlog  from './popupBlog';
import {Linkedin} from 'react-bootstrap-icons';
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
      <div>
        <div className="social_learning_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F"}}>SOCIAL LEARNING</h1><p style={{fontFamily:"Open Sans"}}>This is your one-stop solution for learning anything under the sun......in anything less than 10 minutes!</p><p style={{fontStyle:"italic",fontSize:"12px",marginTop:"-10px"}}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :<br/>)</p></Container></div>
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}} className="SocialLearn_laptop">
              <Row style={{marginTop:"3%",marginLeft:"0%"}}><Col><img alt="dp" src="google_logo.jpg" style={{height:"100px",width:"110px",borderRadius:"50%"}}/></Col><Col>{user.attributes!==undefined ? <span><p style={{fontSize:"20px", textAlign:"center", marginTop:"0px"}}>{user.attributes.name}</p><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>Reward Points: <b>{rew}</b></p></span>:<br/>}<Linkedin style={{height:"30px",width:"30px",marginLeft:"35px"}}/></Col></Row>
              <div style={{fontSize:"14px",marginLeft:"7px"}}>In case you want some guidance on uploading {active==="Videos"?"videos":"blogs"
}:
<br/>
<br/>
<ul><li>Teach something you are good at or something you’ve learnt recently</li>
<li>Talk about it as if you are explaining it to a 5 year old</li>
<li>Don’t worry about your background or surroundings - just open your camera, focus on what you want to say and smile</li>
</ul>
It’s easier than you think :)
<br/>
              </div>
            </Col>
            <div className="SocialLearn_list_mobile" style={{marginTop: "10%"}}>       
               <div >
                <div className="profile_logo_text_mobile" ><div><img alt="dp" src="google_logo.jpg" style={{height:"100px",width:"100px",borderRadius:"50%"}}/></div>
                <div>
                  {user.attributes!==undefined && <div><p style={{fontSize:"18px", textAlign:"center"}}>{user.attributes.name}</p></div>}
                  <div><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>Reward Points: <b>{rew}</b></p></div>
                  <div style={{textAlign:"center"}}></div>
                </div> 
                </div>
              </div> 
              <br/>
               <div style={{marginTop:"5%"}} >
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                  <div><button onClick={()=>buttonColor("Videos")} style={{backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Videos</button></div>
                  <div><button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,color:textColor2,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Blogs</button></div>
                  <div><button onClick={()=>{buttonColor("Community");window.location.href="/TheNextGigCommunity"}} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Community</button></div>
               </div> 
             </div> 
            </div>
            <Col>
             <Row style={{marginTop:"5%"}} >
               <Col xs={9} className="SocialLearn_laptop">
                  <button onClick={()=>buttonColor("Videos")} style={{marginLeft:"2%",marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Videos</button>
                  <button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Blogs</button>
                  <button onClick={()=>{buttonColor("Community");window.location.href="/TheNextGigCommunity"}} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Community</button>
               </Col>
             </Row>
             <br/>
              <div className="imp_know"> {active==="Videos" &&
                <div>
                  {<a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p className="impart_know" style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Add your video <span className="plus">+</span></p></a>}
                  <MyVerticallyPopUp
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                }
                {active==="Blogs" &&
                <div>
                  <a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p className="impart_know" style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Add your blog post <span className="plus">+</span></p></a>
                  <MyVerticallyPopUpBlog
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                } 
              </div>
                {active === "Videos" && <Videos prop={allvideos} userid={user.username} redirlog={redirectlogin}/>}
                {active === "Blogs" && <Blogs userid={user.username} redirlog={redirectlogin}/>}
            </Col> 
          </Row>
      </Container>
      </div>
    );
  }
  
export default SocialLearningPage;