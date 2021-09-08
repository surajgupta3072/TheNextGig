import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Videos from './Videos';
import Blogs from './Blogs';
import {Linkedin} from "react-bootstrap-icons";
import Community from './Community';
import docClient from '../GigsPage/GigsAWS';
import MyVerticallyPopUp  from './popup';

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

  useEffect(() => {
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
            <Col xs={3} style={{backgroundColor:"#1B1C2A",height:"90vh"}}>
              <Row style={{marginTop:"30%",marginLeft:"25%"}}><img alt="dp" src="google_logo.jpg" style={{height:"150px",width:"150px",borderRadius:"50%"}}/></Row>
              <Row><p style={{fontSize:"18px", textAlign:"center"}}>{props.auth.user.attributes.name.split(" ")[0]}</p></Row>
              <Row><p style={{fontSize:"12px", textAlign:"center",color:"#F26C4F"}}>Reward Points: {rew}</p></Row>
              <Row style={{marginBottom:"5%"}}><Linkedin size={30}/></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              {active!=="Community" &&
                <div>
                <Row style={{marginTop:"5%",}}><p>Explore:</p></Row>
                <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="All" name="group1"/></Row>
                <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="Data Science" name="group1"/></Row>
                <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="Data Science" name="group1"/></Row>
                <Row style={{marginTop:"2%",marginLeft:"2%"}}><Form.Check inline label="Data Science" name="group1"/></Row>
                </div>
              }
              <br/>
            </Col>
            <Col >
             <Row style={{marginTop:"5%"}}>
               <Col xs={9}>
                  <button onClick={()=>buttonColor("Videos")} style={{marginLeft:"2%",marginRight:"5%",backgroundColor:color1,color:textColor1,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold"}}>Videos</button>
                  <button onClick={()=>buttonColor("Blogs")} style={{backgroundColor:color2,marginRight:"5%",color:textColor2,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold"}}>Blogs</button>
                  <button onClick={()=>buttonColor("Community")} style={{backgroundColor:color3,color:textColor3,borderRadius:"40px",width:"120px",height:"30px",fontWeight:"bold"}}>Community</button>
               </Col>
               {active==="Videos" &&
                <Col >
                  <a onClick={() => setModalShow(true)} style={{cursor: "pointer"}}><p style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Impart knowledge + <br/>(Add Video)</p></a>
                  <MyVerticallyPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
               />
                </Col>
                }
                {active==="Blogs" &&
                <Col >
                  <a onClick={() => setModalShow(true)} style={{cursor: "pointer"}}><p style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Impart knowledge + <br/>(Add Blog)</p></a>
                  <MyVerticallyPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
               />
                </Col>
                }
             </Row>
                {active === "Videos" && <Videos />}
                {active === "Blogs" && <Blogs />}
                {active === "Community" && <Community/>}
            </Col> 
          </Row>
      </Container>
    );
  }
  
export default SocialLearningPage;