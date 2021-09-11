import React, { useState, useEffect } from "react";
import docClient from '../GigsPage/GigsAWS';

function Videos() {
  const [allvideos, setAllvideos] = useState([]);

  useEffect(() => {
    var params = {
      TableName: "VideosTable"
    };
    docClient.scan(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setAllvideos(data.Items.filter((e)=>{if(e.isApproved===true) return e}));
      }
    });
  }, []);

  return (
    <div>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {allvideos.map((vid)=>
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
