import React, { useState, useEffect } from "react";
import docClient from '../GigsPage/GigsAWS';
import './SocialLearningPage.css';

function Blogs() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    var params = {
      TableName: "BlogsTable"
    };
    docClient.scan(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        setAllBlogs(data.Items.filter((e)=>{if(e.isApproved===true) return e}));
      }
    });
  }, [])

  return (
    <div>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {allBlogs.map((blog)=>
          <div key={blog.BlogID}>
            <div className="blog-box visible-scrollbar">
              <h4 style={{marginTop:"1%",marginLeft:"2%"}}>{blog.BlogTopic}</h4>
              <p style={{marginTop:"1%",marginLeft:"2%",fontSize:"14px"}}>{blog.Blog}</p>
            </div>
            <p style={{marginTop:"1%",marginLeft:"2%"}}>{blog.BlogHashtags}</p>
            <br/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
