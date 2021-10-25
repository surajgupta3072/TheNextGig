import { useState } from "react";
import docClient from '../GigsPage/GigsAWS';

function Videos(props) {
  const [videoslist, setVideosList] = useState(false);
  const [searchterm, setSearchTerm] = useState("");

  function addSearchTerm() {
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
  }

  function searchFilter() {
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
  }

  function VideoWatched(vid, hashtags) {
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
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
          UpdateExpression: "set SocialLearningVideosWatched["+data.Item.SocialLearningVideosWatched.length.toString()+"] = :slvw",
          ExpressionAttributeValues:{
            ":slvw": {timestamp: `${Date.now()}`, vid: vid}
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          }
          else {
            var paramss = {
              TableName: "UsersTable",
              Key: { "UserID":props.userid },
              ProjectionExpression: "SkillsAcquiredVideos",
            };
            docClient.get(paramss, function(err, data) {
              if (err) {
                console.log(err);
              } else {
                  var params = {
                    TableName: "UsersTable",
                    Key: { "UserID":props.userid },
                    UpdateExpression: "set SkillsAcquiredVideos["+data.Item.SkillsAcquiredVideos.length.toString()+"] = :sav",
                    ExpressionAttributeValues:{
                      ":sav": hashtags.split(" ")
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
        });
      }
    });
  }


  return (
    <div>
      <input className="search" style={{marginLeft:"2%", borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}} value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Video..." type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button" onClick={searchFilter} style={{backgroundColor:"rgb(242, 108, 79)",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0"}}>Search</button>
      <br/><br/>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around",marginTop:"-30px"}}>
        {videoslist===false && props.prop.map((vid)=>
          <div style={{height:"320px",width:"300px"}}key={vid.VideoID} onClick={() => {if(props.redirlog) window.location.href="/login";}}>
            {props.redirlog ? 
               <div>
              <video className="vid" controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video></div> :<div>
              <video className="video_social_learn" onEnded={()=> VideoWatched(vid.id, vid.VideoHashtags)} id={vid.VideoID} controls  controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video></div>
            }
            <div style={{marginLeft:"2%"}}>
              <h6 className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)"}}>{vid.VideoTopic}</h6>
              <p className="text" style={{padding:"0", margin:"0", fontSize:"14px"}}>{vid.VideoUsername} - {vid.VideoCreds}</p>
              <p className="text" style={{padding:"0", margin:"0", color:"grey", fontSize:"12px"}}>{vid.VideoHashtags}</p>
            </div>
            <br/>
          </div>
        )}
        {videoslist!==false && videoslist.map((vid)=>
          <div style={{height:"320px",width:"300px"}} key={vid.VideoID} onClick={() => {if(props.redirlog) window.location.href="/login";}}>
            {props.redirlog ? 
              <video controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video> :
              <video onEnded={()=> VideoWatched(vid.id, vid.VideoHashtags)} id={vid.VideoID} controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video>
            }
            <div>
              <h5 style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)"}}>{vid.VideoTopic}</h5>
              <h6 style={{padding:"0", margin:"0"}}>{vid.VideoUsername} - {vid.VideoCreds}</h6>
              <p style={{padding:"0", margin:"0", color:"grey"}}>{vid.VideoHashtags}</p>
            </div>
            <br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Videos;
