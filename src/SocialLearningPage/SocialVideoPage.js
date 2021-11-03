import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import docClient from '../GigsPage/GigsAWS';

function SocialVideoPage(props) {
  const [active, setActive] =  useState("");
  const [rew, setRew] = useState(0);
  const [allvideos, setAllvideos] = useState([]);
  const [user, setUser] = useState("");
  const [redirectlogin, setRedirectLogin] = useState(true);
  const [dplink, setDplink]=useState("/dpavtar.png");

  useEffect(() => {
    var paramss = {
      TableName: "VideosTable"
    };
    docClient.scan(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setAllvideos(data.Items.sort(() => Math.random()-0.5).filter((e)=>{if(e.isApproved===true) return e}));
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

    return (
      <div>
        <div className="social_learning_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F",marginTop:"1.5%"}}>SOCIAL LEARNING</h1><p style={{fontFamily:"Open Sans"}}>This is your one-stop solution for learning anything under the sun......in anything less than 10 minutes!</p><p style={{fontStyle:"italic",fontSize:"12px",marginTop:"-10px"}}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :)</p></Container></div>
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}} className="SocialLearn_laptop">
              <Row style={{marginTop:"3%",marginLeft:"0%"}}><Col><img alt="dp" src={dplink} style={{height:"100px",width:"110px",borderRadius:"50%"}}/></Col><Col>{user.attributes!==undefined ? <span><p style={{fontSize:"20px", textAlign:"center", marginTop:"0px"}}>{user.attributes.name}</p><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>TNG Coins: <b>{rew}</b></p></span>:<br/>}</Col></Row>
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
          </Row>
      </Container>
      </div>
    );
  }
  
export default SocialVideoPage;