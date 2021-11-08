import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import docClient from '../GigsPage/GigsAWS';
import { ArrowLeft } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

function SocialVideoPage(props) {
  const { id } = useParams();
  const [rew, setRew] = useState(0);
  const [videos, setvideos] = useState([]);
  const [user, setUser] = useState("");
  const [dplink, setDplink]=useState("/dpavtar.png");

  useEffect(() => {
    var paramss = {
      TableName: "VideosTable",
      KeyConditionExpression: "#Vid = :VideoID",
      ExpressionAttributeNames: {
        "#Vid": "VideoID",
      },
      ExpressionAttributeValues: {
        ":VideoID": id,
      }
    };
    docClient.query(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setvideos(data.Items);
      }
    });
    if(props.auth.user===null)
      setUser("");
    else {
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

  function VideoEnded(hashtags) {
    var paramss = {
      TableName: "UsersTable",
      Key: { "UserID":props.auth.user.username },
      ProjectionExpression: "SkillsAcquiredVideos",
    };
    docClient.get(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.auth.user.username },
          UpdateExpression: "set SkillsAcquiredVideos["+data.Item.SkillsAcquiredVideos.length.toString()+"] = :sav",
          ExpressionAttributeValues:{
            ":sav": hashtags.split("--")
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

  function VideoStarted(vid, ct) {
    if(ct<=0.1) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.auth.user.username },
        ProjectionExpression: "SocialLearningVideosWatched",
      };
      docClient.get(params, function(err, data) {
        if (err) {
          console.log(err);
        } 
        else {
          var flag=0;
          for(var i=0; i<data.Item.SocialLearningVideosWatched.length; i++) {
            if(data.Item.SocialLearningVideosWatched[i].vid===vid)
              var flag=1;
          }
          if(flag===0) {
            var params = {
              TableName: "UsersTable",
              Key: { "UserID":props.auth.user.username },
              UpdateExpression: "set SocialLearningVideosWatched["+data.Item.SocialLearningVideosWatched.length.toString()+"] = :slvw",
              ExpressionAttributeValues:{
                ":slvw": {"timestamp": `${Date.now()}`, "vid": vid}
              },
              ReturnValues:"UPDATED_NEW"
            }
            docClient.update(params, function (err, data) {
              if (err) {
                console.log(err);
              }
            });
            var paramss = {
              TableName: "VideosTable",
              Key: { "VideoID":vid },
              ProjectionExpression: "VideoViews",
            };
            docClient.get(paramss, function(err, data) {
              if (err) {
                console.log(err);
              } 
              else {
                var params = {
                  TableName: "VideosTable",
                  Key: { "VideoID":vid },
                  UpdateExpression: "set VideoViews = :slvv",
                  ExpressionAttributeValues:{
                    ":slvv": data.Item.VideoViews + 1
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
        }
      });
    }
  }


    return (
      <div>
        <div className="social_learning_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F",marginTop:"1.5%"}}>SOCIAL LEARNING</h1><p style={{fontFamily:"Open Sans"}}>This is your one-stop solution for learning anything under the sun......in anything less than 10 minutes!</p><p style={{fontStyle:"italic",fontSize:"12px",marginTop:"-10px"}}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :)</p></Container></div>
      <Container>
        <Row>
            <Col xs={3} style={{backgroundColor:"#1B1C2A"}} className="SocialLearn_laptop">
              <Row style={{marginTop:"3%",marginLeft:"0%"}}><Col><img alt="dp" src={dplink} style={{height:"100px",width:"110px",borderRadius:"50%"}}/></Col><Col>{user.attributes!==undefined ? <span><p style={{fontSize:"20px", textAlign:"center", marginTop:"0px"}}>{user.attributes.name}</p><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>TNG Coins: <b>{rew}</b></p></span>:<br/>}</Col></Row>
                <br/>
                <div style={{fontSize:"14px",marginLeft:"7px"}}>In case you want some guidance on uploading "videos" :
                  <span>
                    <br/>
                    <br/>
                    <ul><li>Teach something that you have learnt through your real life experience</li>
                    <li>Talk about it as if you are explaining it to a 5 year old</li>
                    <li>Don’t worry about your background or surroundings - just open your camera, focus on what you want to say and smile</li>
                    </ul>
                    It’s easier than you think :)
                    <br/>
                    <br/>
                    <span style={{fontStyle:"italic"}}>PS: We don’t expect you to share confidential information and/or sit for hours to create content – just share what you have learnt and teach</span>
                  </span>
                </div>
            </Col>
            <Col>
            <ArrowLeft onClick={()=>window.location.href="/SocialLearning"} style={{marginLeft:"0%", marginTop:"40px"}} className="button_arrow_MC_Page2_Right"/>
            <br/>
            <div style={{display:"flex", justifyContent:"space-around"}}>
              {videos.map((vid)=>
                <div style={{marginTop:"35px", height:"400px", width:"650px"}} className="video_div" key={vid.VideoID} onClick={() => {if(!props.auth.isAuthenticated) window.location.href="/login";}}>
                  {!props.auth.isAuthenticated ? 
                    <video className="vid" controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                      <source src={vid.VideoLink} />
                    </video>
                    :
                    <video style={{height:"400px", width:"650px"}} className="video_social_learn" onPlay={(e)=>VideoStarted(vid.VideoID, e.target.currentTime)} onEnded={()=> VideoEnded(vid.VideoHashtags)} id={vid.VideoID} controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                      <source src={vid.VideoLink} />
                    </video>
                  }
                  <div style={{marginLeft:"2%"}}>
                    <h6 className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)"}}>{vid.VideoTopic}</h6>
                    <p className="text" style={{padding:"0", margin:"0", fontSize:"16px"}}>{vid.VideoUsername} - {vid.VideoCreds}</p>
                    <p className="text" style={{padding:"0", margin:"0", color:"grey", fontSize:"14px"}}>{vid.VideoHashtags.replaceAll("--","  ")}</p>
                    <p className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)", fontSize:"12px"}}>{vid.VideoViews} views</p>
                  </div>
                  <br/>
                </div>
              )}
            </div>
            </Col>
          </Row>
      </Container>
      </div>
    );
  }
  
export default SocialVideoPage;