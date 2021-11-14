import { useState } from "react";
import docClient from '../GigsPage/GigsAWS';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Clipboard } from 'react-bootstrap-icons';
import Swal from "sweetalert2";

function Videos(props) {
  const [videoslist, setVideosList] = useState(false);
/*   const [searchterm, setSearchTerm] = useState(""); */
  const [filter,setfilter]=useState([])
  const [all,setall]=useState(0)
  /* function addSearchTerm() {
    var params = {
      TableName: "UsersTable",
      Key: { "UserID":props.userid },
      ProjectionExpression: "VideosSearchHistory",
    };
    docClient.get(params, function(err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
          UpdateExpression: "set VideosSearchHistory["+data.Item.VideosSearchHistory.length.toString()+"] = :vsh",
          ExpressionAttributeValues: {
            ":vsh": {timestamp: `${Date.now()}`, svterm: searchterm}
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
  } */

  /* function searchFilter() {
    if(searchterm==="") {
      setVideosList(props.prop);
    }
    else {
      addSearchTerm();
      const searchvids = props.prop.filter((vid) => {
        if(vid.VideoTopic.toLowerCase().includes(searchterm.toLowerCase()) || vid.VideoUsername.toLowerCase().includes(searchterm.toLowerCase()) 
        || vid.VideoHashtags.toLowerCase().includes(searchterm.toLowerCase()) || vid.VideoCreds.toLowerCase().includes(searchterm.toLowerCase())) {
          return vid;
        }
      })
      setVideosList(searchvids);
    }
  } */

  function VideoEnded(hashtags) {
    var paramss = {
      TableName: "UsersTable",
      Key: { "UserID":props.userid },
      ProjectionExpression: "SkillsAcquiredVideos",
    };
    docClient.get(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
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
        Key: { "UserID":props.userid },
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
              Key: { "UserID":props.userid },
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

  function myClipboard(vidlink) {
    Swal.fire({
      title: "<h6 style='color:white'>" + "Link Copied!" + "</h6>",
      showConfirmButton: false,
      timer: 2000,
      background: '#020312',
      color: 'white',
      iconColor: "#F26C4F"
    });
    navigator.clipboard.writeText(vidlink);
  }

  const searchfilter=(e)=>
  {
    var filternumber=filter;
    if(filternumber.indexOf(parseInt(e.target.value))===-1)
    {
      filternumber.push(parseInt(e.target.value))
    }
    else{
    filternumber.splice(filternumber.indexOf(parseInt(e.target.value)),1)
    }

    var videofilterlist=[];
    if(filternumber.indexOf(0)!==-1)
    {
      setVideosList(props.prop)
    }
    else{
    for(var i=0;i<props.prop.length;i++)
    {
      const result = filternumber.every(val => props.prop[i].VideoDomains.includes(val));
      if(result===true)
      videofilterlist.push(props.prop[i]);
    }
    setVideosList(videofilterlist)
  }
  }
  return (
    
    <div>
      {/* <input className="search" style={{marginLeft:"2%", borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}} value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Video..." type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button" onClick={searchFilter} style={{backgroundColor:"rgb(242, 108, 79)",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0"}}>Search</button> */}
      <div /* style={{display:"flex",justifyContent:"space-evenly"}} */>
        <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="0"  />
              <span>&nbsp;All</span>
            </label>
        </div>
          <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="1"  />
              <span>&nbsp;Finance</span>
            </label>
        </div>
        <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="2"  />
              <span>&nbsp;Economics</span>
            </label>
        </div>
        <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="3"  />
              <span>&nbsp;Technology</span>
            </label>
        </div>
        <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="4"  />
              <span>&nbsp;Consulting</span>
            </label>
        </div>
        <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="5"  />
              <span>&nbsp;Marketing</span>
            </label>
        </div>
        <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="6"  />
              <span>&nbsp;Business Development</span>
            </label>
        </div>
        <div>
            <label>
              <input  onChange={searchfilter} type="checkbox" name="checkbox" value="7"  />
              <span>&nbsp;Soft Sills</span>
            </label>
        </div>
        <div>
            <label>
              <input onChange={searchfilter} type="checkbox" name="checkbox" value="8"  />
              <span>&nbsp;Others</span>
            </label>
        </div>
        </div>
      </div>
      <br/><br/><br/>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {videoslist===false && props.prop.map((vid)=>
          <div className="video_div" key={vid.VideoID} onClick={() => {if(props.redirlog) window.location.href="/login";}}>
            {props.redirlog ? 
              <video className="vid" controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video>
              :
              <video className="video_social_learn" onPlay={(e)=>VideoStarted(vid.VideoID, e.target.currentTime)} onEnded={()=> VideoEnded(vid.VideoHashtags)} id={vid.VideoID} controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video>
            }
            <div style={{marginLeft:"2%"}}>
              <h6 className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)"}}>{vid.VideoTopic}</h6>
              <p className="text" style={{padding:"0", margin:"0", fontSize:"14px"}}>{vid.VideoUsername} - {vid.VideoCreds}</p>
              <p className="text" style={{padding:"0", margin:"0", color:"grey", fontSize:"12px"}}>{vid.VideoHashtags.replaceAll("--","  ")}</p>
              <Row>
                <Col md={8} className="text" style={{padding:"0", color:"rgb(242, 108, 79)", fontSize:"10px"}}>&nbsp;&nbsp;&nbsp;&nbsp;{vid.VideoViews} views</Col>
                <Col md={4} onClick={()=>myClipboard(window.location.href+"/Video/"+vid.VideoID)} className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)", fontSize:"12px",cursor:"pointer"}}>&nbsp;&nbsp;&nbsp;Copy Link <Clipboard/></Col>
              </Row>
            </div>
            <br/>
          </div>
        )}
        {videoslist!==false && videoslist.map((vid)=>
          <div className="video_div" key={vid.VideoID} onClick={() => {if(props.redirlog) window.location.href="/login";}}>
            {props.redirlog ? 
              <video className="vid" controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video> :
              <video className="video_social_learn" onPlay={(e)=>VideoStarted(vid.VideoID, e.target.currentTime)} onEnded={()=> VideoEnded(vid.VideoHashtags)} id={vid.VideoID} controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video>
            }
            <div style={{marginLeft:"2%"}}>
              <h6 className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)"}}>{vid.VideoTopic}</h6>
              <p className="text" style={{padding:"0", margin:"0", fontSize:"14px"}}>{vid.VideoUsername} - {vid.VideoCreds}</p>
              <p className="text" style={{padding:"0", margin:"0", color:"grey", fontSize:"12px"}}>{vid.VideoHashtags.replaceAll("--","  ")}</p>
              <Row>
                <Col md={8} className="text" style={{padding:"0", color:"rgb(242, 108, 79)", fontSize:"10px"}}>&nbsp;&nbsp;&nbsp;&nbsp;{vid.VideoViews} views</Col>
                <Col md={4} onClick={()=>myClipboard(window.location.href+"/Video/"+vid.VideoID)} className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)", fontSize:"12px",cursor:"pointer"}}>&nbsp;&nbsp;&nbsp;Copy Link <Clipboard/></Col>
              </Row>
            </div>
            <br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Videos;
