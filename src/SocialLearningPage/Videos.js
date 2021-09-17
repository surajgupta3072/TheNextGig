import React from "react";
import docClient from '../GigsPage/GigsAWS';

function Videos(props) {

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
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {props.prop.map((vid)=>
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
              <br/>
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
