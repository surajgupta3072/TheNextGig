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
    addSearchTerm();
    const searchvids = props.prop.filter((vid)=>{
      if(vid.VideoTopic.toLowerCase().includes(searchterm.toLowerCase()) || vid.VideoUsername.toLowerCase().includes(searchterm.toLowerCase()) 
      || vid.VideoHashtags.toLowerCase().includes(searchterm.toLowerCase()) || vid.VideoCreds.toLowerCase().includes(searchterm.toLowerCase())) {
        return vid;
      }
    })
    setVideosList(searchvids);
  }

  function VideoWatched(vid) {
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
        });
      }
    });
  }


  return (
    <div>
      <input className="search" style={{marginLeft:"2%", borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}} value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Video..." type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button" style={{background:"rgb(242, 108, 79)", color:"white", border:"0", borderRadius:"20px"}} onClick={searchFilter} type="submit">Search</button>
      <br/><br/>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {videoslist===false && props.prop.map((vid)=>
          <div  key={vid.VideoID} onClick={() => {if(props.redirlog) window.location.href="/login";}}>
            {props.redirlog ? 
               <div>
              <video className="vid" style={{ height: "250px", width: "350px" }} controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video></div> :<div>
              <video className="video_social_learn" onEnded={(e)=> VideoWatched(e.target.id)} id={vid.VideoID} controls  controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video></div>
            }
            <div>
              <h5 className="text" style={{padding:"0", margin:"0"}}>{vid.VideoTopic}</h5>
              <p className="text" style={{padding:"0", margin:"0"}}>{vid.VideoHashtags}</p>
              <h5 className="text" style={{padding:"0", margin:"0"}}>{vid.VideoUsername}</h5>
              <h6 className="text" style={{padding:"0", margin:"0"}}>{vid.VideoCreds}</h6>
            </div>
            <br/>
          </div>
        )}
        {videoslist!==false && videoslist.map((vid)=>
          <div key={vid.VideoID} onClick={() => {if(props.redirlog) window.location.href="/login";}}>
            {props.redirlog ? 
              <video style={{ height: "250px", width: "350px" }} controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video> :
              <video onEnded={(e)=> VideoWatched(e.target.id)} id={vid.VideoID} controls style={{ height: "250px", width: "350px" }} controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                <source src={vid.VideoLink} />
              </video>
            }
            <div>
              <h5 style={{padding:"0", margin:"0"}}>{vid.VideoTopic}</h5>
              <p style={{padding:"0", margin:"0"}}>{vid.VideoHashtags}</p>
              <h5 style={{padding:"0", margin:"0"}}>{vid.VideoUsername}</h5>
              <h6 style={{padding:"0", margin:"0"}}>{vid.VideoCreds}</h6>
            </div>
            <br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Videos;
