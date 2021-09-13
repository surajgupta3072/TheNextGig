import React from "react";

function Videos(props) {
  return (
    <div>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {props.prop.map((vid)=>
          <div key={vid.VideoID}>
            <div>
              <video controls style={{ height: "250px", width: "350px" }}>
                <source src={vid.VideoLink} />
              </video>
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
