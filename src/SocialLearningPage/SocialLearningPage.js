import React, { useState, useEffect } from 'react';
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
  const [modalShow, setModalShow] = React.useState(false);
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
        ProjectionExpression: "TotalRewards",
      };
      docClient.get(params, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          setRew(data.Item.TotalRewards);
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
            <Col xs={3} style={{backgroundColor:"#1B1C2A",height:"90vh"}} className="SocialLearn_laptop">
              <Row style={{marginTop:"30%",marginLeft:"25%"}}><img alt="dp" src="google_logo.jpg" style={{height:"150px",width:"150px",borderRadius:"50%"}}/></Row>
              {user.attributes!==undefined && <Row><p style={{fontSize:"18px", textAlign:"center"}}>{user.attributes.name.split(" ")[0]}</p></Row>}
              <br/>
              <Row><p style={{fontSize:"12px", textAlign:"center",color:"#F26C4F"}}>Reward Points: {rew}</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
            </Col>
            <Col xs={12}  className="SocialLearn_list_mobile" style={{marginTop: "10%"}}>       
              <Row >
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end"}}><img alt="dp" src="google_logo.jpg" style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
                <Col>
                  {user.attributes!==undefined && <Row><p style={{fontSize:"18px", textAlign:"center"}}>{user.attributes.name.split(" ")[0]}</p></Row>}
                  <br/>
                  <Row><p style={{fontSize:"12px", textAlign:"center",color:"#F26C4F"}}>Reward Points: {rew}</p></Row>
                </Col>
                <Navbar style={{background:"rgba(255, 255, 255, 0.1)", padding:"0px", width:"100%",   marginTop: "10%"}} expand="lg">
                <Navbar.Brand >
                  <p  style={{color: "#fff", fontWeight:"700", fontSize:"24px", margin: "10px"}}>{active}</p>
                </Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor: "grey"}}/>
                <Navbar.Collapse className="justify-content-end" style={{paddingRight:"5%"}}>
                    <Nav>
                        <Nav.Link onClick={()=>buttonColor("Videos")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                        Videos
                        </Nav.Link>
                        <Nav.Link onClick={()=>buttonColor("Blogs")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                        Blogs
                        </Nav.Link>
                        <Nav.Link onClick={()=>buttonColor("Community")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                        Community
                        </Nav.Link>                
                    </Nav>                
                  </Navbar.Collapse>
                </Navbar>
              </Row>
              <br/>
              
            </Col>
            <Col>
             <Row style={{marginTop:"5%"}} >
               <Col xs={9} className="SocialLearn_laptop">
                  <button onClick={()=>buttonColor("Videos")} style={{marginLeft:"2%",marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold"}}>Videos</button>
                  <button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold"}}>Blogs</button>
                  <button onClick={()=>buttonColor("Community")} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold"}}>Community</button>
               </Col>
               {active==="Videos" &&
                <Col>
                  <a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Impart knowledge + <br/>(Add Video)</p></a>
                  <MyVerticallyPopUp
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
                }
                {active==="Blogs" &&
                <Col>
                  <a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Impart knowledge + <br/>(Add Blog)</p></a>
                  <MyVerticallyPopUpBlog
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
                }
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