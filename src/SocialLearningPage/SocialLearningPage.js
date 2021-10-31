import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videos from './Videos';
import Blogs from './Blogs';
import docClient from '../GigsPage/GigsAWS';
import MyVerticallyPopUp  from './popupVideo';
import MyVerticallyPopUpBlog  from './popupBlog';
import Community from './Community';

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
  const [allvideos, setAllvideos] = useState([]);
  const [user, setUser] = useState("");
  const [redirectlogin, setRedirectLogin] = useState(true);
  const [dplink, setDplink]=useState("./dpavtar.png");

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
          if(data.Item.DPlink!==undefined)
            setDplink(data.Item.DPlink);
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
        <div className="social_learning_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F",marginTop:"1.5%"}}>SOCIAL LEARNING</h1><p style={{fontFamily:"Open Sans"}}>This is your one-stop solution for learning anything under the sun......in anything less than 10 minutes!</p><p style={{fontStyle:"italic",fontSize:"12px",marginTop:"-10px"}}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :)</p></Container></div>
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}} className="SocialLearn_laptop">
              <Row style={{marginTop:"3%",marginLeft:"0%"}}><Col><img alt="dp" src={dplink} style={{height:"100px",width:"110px",borderRadius:"50%"}}/></Col><Col>{user.attributes!==undefined ? <span><p style={{fontSize:"20px", textAlign:"center", marginTop:"0px"}}>{user.attributes.name}</p><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>TNG coins: <b>{rew}</b></p></span>:<br/>}</Col></Row>
                <br/>
                {active!=="Community" ?
                  <div style={{fontSize:"14px",marginLeft:"7px"}}>In case you want some guidance on uploading {active==="Videos"?"videos":"blogs"} :{active==="Videos"?<span>
                    <br/>
                    <br/>
                    <ul><li>Teach something that you have learnt through your real life experience</li>
                    <li>Talk about it as if you are explaining it to a 5 year old</li>
                    <li>Don’t worry about your background or surroundings - just open your camera, focus on what you want to say and smile</li>
                    </ul>
                    It’s easier than you think :)
                    <br/>
                    <br/>
                    <span style={{fontStyle:"italic"}}>PS: We don’t expect you to share confidential information and/or sit for hours to create content – just share what you have learnt and teach</span></span>:<span><br/><br/><ul>
                      <li>Write about something you that you have learnt from your real life experience – and that excites you</li>
                      <li>Make sure you aren’t plagiarising - noone likes a copycat! :)</li>
                      <li>Don’t worry about your language style, the relevance to the larger audience, etc. - as long as you find it valuable, its your original work and there is a clear message that someone can learn from, you’re good to go!</li>
                      </ul>
                      It’s easier than you think :)
                      <br/><br/>
                      <p style={{fontStyle:"italic",fontSize:"14px"}}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :)</p></span>}
                  </div>:
                  <div style={{fontSize:"16px",marginLeft:"7px"}}>
                    <br/>
                    You don't really need guidance in this section. All you gotta do is click on the button down there and join our exclusive community of learners, industry professionals, students, freelancers, employees - basically everyone who is ready to change how the world thinks! :)
                    <br/>
                  </div>
                }
            </Col>
            <div className="SocialLearn_list_mobile" style={{marginTop: "10%"}}>       
               <div>
                <div className="profile_logo_text_mobile" ><div><img alt="dp" src={dplink} style={{height:"100px",width:"100px",borderRadius:"50%"}}/></div>
                <div>
                  {user.attributes!==undefined && <div><p style={{fontSize:"18px", textAlign:"center"}}>{user.attributes.name}</p></div>}
                  <div><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>TNG coins: <b>{rew}</b></p></div>
                  <div style={{textAlign:"center"}}></div>
                </div> 
                </div>
              </div> 
              <br/>
               <div style={{marginTop:"4%"}} >
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                  <div><button onClick={()=>buttonColor("Videos")} style={{backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Videos</button></div>
                  <div><button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,color:textColor2,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Blogs</button></div>
                  <div><button onClick={()=>{buttonColor("Community")}} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0px"}}>Community</button></div>
               </div> 
             </div> 
            </div>
            <Col>
             <Row style={{marginTop:"4%"}} >
               <Col xs={9} className="SocialLearn_laptop">
                  <button onClick={()=>buttonColor("Videos")} style={{marginLeft:"2%",marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Videos</button>
                  <button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Blogs</button>
                  <button onClick={()=>{buttonColor("Community")}} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold",border:"0px"}}>Community</button>
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
                {active === "Community" && <Community/>}
            </Col> 
          </Row>
      </Container>
      </div>
    );
  }
  
export default SocialLearningPage;