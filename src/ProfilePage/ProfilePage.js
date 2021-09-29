import { useState, useEffect } from 'react';
import Personal from './Personal';
import Education from './Education';
import WorkEx from './WorkEx';
import Skills from './Skills';
import CvPitch from './CvPitch';
import FeedBack  from './Feedback';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
// import {Linkedin} from "react-bootstrap-icons";
import './ProfilePage.css'
import docClient from '../GigsPage/GigsAWS';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function ProfilePage(props) {
  const bg = {backgroundColor: "#F26C4F"};
  const [percentage, setPercentage] = useState(0);
  const [active, setActive] =  useState("");
  const [color1, setColor1] = useState(bg);
  const [color2, setColor2] = useState({});
  const [color3, setColor3] = useState({});
  const [color4, setColor4] = useState({});
  const [color5, setColor5] = useState({});
  const [color6,setColor6]  = useState({});
  const [wholedata, setWholedata] = useState([]);
  const [rew, setRew] = useState(0);
  const [navbarHeading, setNavbarHeading] = useState("");


  useEffect(async() => {
    let paramss = {
      TableName: "UsersTable",
      KeyConditionExpression: "#Uid = :UserID",
      ExpressionAttributeNames: {
        "#Uid": "UserID",
      },
      ExpressionAttributeValues: {
        ":UserID": props.auth.user.username,
      },
    };
    try {
      const data1 = await docClient.query(paramss).promise();
      setWholedata(data1.Items[0]);
      setActive("Personal");
      setNavbarHeading("Personal");
      const per = data1.Items[0].RewardP + data1.Items[0].RewardE + data1.Items[0].RewardW + data1.Items[0].RewardS + data1.Items[0].RewardC
      setPercentage(per);
      var params = {
        TableName: "UsersTable",
        Key: { "UserID": props.auth.user.username },
        ProjectionExpression: "TotalRewards",
      };
      docClient.get(params, function(err, data) {
        if (err) {
          console.log(err);
        } 
        else {
          setRew(data.Item.TotalRewards);
        }
      });
    }     
    catch (err) {
      return err
    }
  }, []);

  wholedata.TotalRewards = rew;
  const pp = {
    setWholedata: setWholedata,
    wholedata: wholedata,
    percentage: percentage,
    setPercentage:setPercentage
  };

  function whichColor(word) {
    setActive(word)
    if(word==="Personal") {
      setColor1(bg); setColor2({}); setColor3({}); setColor4({}); setColor5({});setColor6({}); setNavbarHeading("Personal");
    }
    else if(word==="Education") {
      setColor2(bg); setColor1({}); setColor3({}); setColor4({}); setColor5({});setColor6({}); setNavbarHeading("Education");
    }
    else if(word==="WorkEx") {
      setColor3(bg); setColor1({}); setColor2({}); setColor4({}); setColor5({});setColor6({}); setNavbarHeading("Work Experience");
    }
    else if(word==="Skills") {
      setColor4(bg); setColor1({}); setColor2({}); setColor3({}); setColor5({});setColor6({}); setNavbarHeading("Skills");
    }
    else if(word==="CvPitch") {
      setColor5(bg); setColor1({}); setColor2({}); setColor3({}); setColor4({});setColor6({}); setNavbarHeading("CV / Other documents");
    }
    else if(word==="FeedBack"){
      setColor5({}); setColor1({}); setColor2({}); setColor3({}); setColor4({});setColor6(bg); setNavbarHeading("Feedback & Comments");
    }
  }
    return (
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}} className="Profile_list_laptop">
              <ProgressBar style={{marginTop:"10%", backgroundColor:"white", marginBottom:"1%"}} min={0} max={100} variant="success" now={percentage} label={`${percentage}%`}/>
              <p style={{fontSize:"14px", textAlign:"center"}}>(Complete the profile to earn Reward points)</p>
              <Row style={{marginTop:"7%",marginLeft:"22%"}}><img alt="dp" src="google_logo.jpg" style={{height:"150px",width:"170px",borderRadius:"50%"}}/></Row>
              <br/>
              <Row><p style={{fontSize:"16px", textAlign:"center",color:"#F26C4F"}}>Reward Points: <b>{rew}</b></p></Row>
              <Row style={{marginBottom:"1%", textAlign:"center"}}><p style={{margin:"0"}}>Your Referral Code:</p><p style={{color:"#F26C4F"}}><b>{wholedata.ReferralCode}</b></p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Personal")} style={color1}><p style={{fontSize:"24px", textAlign:"center", cursor: "pointer"}}>Personal</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Education")} style={color2}><p style={{fontSize:"24px", textAlign:"center", cursor: "pointer"}}>Education</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("WorkEx")} style={color3}><p style={{fontSize:"24px", textAlign:"center", cursor: "pointer"}}>Work Experience</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("Skills")} style={color4}><p style={{fontSize:"24px", textAlign:"center", cursor: "pointer"}}>Skills</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("CvPitch")} style={color5}><p style={{fontSize:"24px", textAlign:"center", cursor: "pointer"}}>CV / Other Documents</p></Row>
              <hr style={{color:"#F26C4F", margin:"2px 0px"}}/>
              <Row onClick={() => whichColor("FeedBack")} style={color6}><p style={{fontSize:"24px", textAlign:"center", cursor: "pointer"}}>Feedback & Comments</p></Row>
            </Col>
            <Col xs={12}  className="Profile_list_mobile">
              <ProgressBar style={{marginTop:"10%", backgroundColor:"white", marginBottom:"1%"}} min={0} max={100} variant="success" now={percentage} label={`${percentage}%`}/>
              <p style={{fontSize:"14px", textAlign:"center"}}>(Complete the profile to earn Reward points)</p>
              <Row >
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end"}}><img alt="dp" src="google_logo.jpg" style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
                <Col>
                  <Row><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>Reward Points: <b>{rew}</b></p></Row>
                  <Row style={{marginBottom:"2%", textAlign:"center"}}><p style={{margin:"0"}}>Your Referral Code:</p><p style={{color:"#F26C4F"}}><b>{wholedata.ReferralCode}</b></p></Row>
                </Col>
                <Navbar style={{background:"rgba(255, 255, 255, 0.1)", padding:"0px", width:"100%",  marginTop: "10%"}} expand="lg">
                  <Navbar.Brand style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <p  style={{color: "#fff", fontWeight:"700", fontSize:"24px", margin: "10px"}}>{navbarHeading}</p>
                  </Navbar.Brand>
                  <Navbar.Toggle style={{backgroundColor: "grey"}}/>
                  <Navbar.Collapse className="justify-content-end" style={{paddingRight:"5%"}}>
                  <Nav>
                      <Nav.Link onClick={() => whichColor("Personal")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                      Personal
                      </Nav.Link>
                      <Nav.Link onClick={() => whichColor("Education")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                      Education
                      </Nav.Link>
                      <Nav.Link onClick={() => whichColor("WorkEx")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                      Work Experience
                      </Nav.Link>                
                      <Nav.Link onClick={() => whichColor("Skills")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                      Skills
                      </Nav.Link>              
                      <Nav.Link onClick={() => whichColor("CvPitch")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                      CV / Other Documents
                      </Nav.Link>
                      <Nav.Link onClick={() => whichColor("FeedBack")} style={{color: "#fff", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                      Feedback & Comments
                      </Nav.Link>
                  </Nav>                
                  </Navbar.Collapse>
                </Navbar>
              </Row>
              <br/>
              
            </Col>
            <Col >
                {active === "Personal" && <Personal p={pp}/>}
                {active === "Education" && <Education p={pp}/>}
                {active === "WorkEx" && <WorkEx  p={pp}/>}
                {active === "Skills" && <Skills  p={pp}/>}
                {active === "CvPitch" && <CvPitch  p={pp} />}
                {active === "FeedBack" && <FeedBack/>}
            </Col> 
        </Row>
      </Container>
    );
  }
  
export default ProfilePage;