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
            <div>
              {props.redirlog ? 
                <video style={{ height: "250px", width: "350px" }} controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                  <source src={vid.VideoLink} />
                </video> :
                <video onEnded={(e)=> VideoWatched(e.target.id)} id={vid.VideoID} controls style={{ height: "250px", width: "350px" }} controlsList="nodownload" onContextMenu={e => e.preventDefault()}>
                  <source src={vid.VideoLink} />
                </video>
              }
              <h5>{vid.VideoTopic}</h5>
              {vid.VideoHashtags}
            </div>
            <br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Videos;
