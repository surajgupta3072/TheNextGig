import React, { useState, useEffect } from "react";
import docClient from '../GigsPage/GigsAWS';
import './SocialLearningPage.css';

function Blogs(props) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [readsingleblog, setReadSingleBlog] = useState(false);
  
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
  }, []);

  function BlogRead(blog) {
    setReadSingleBlog([blog])
    var params = {
      TableName: "UsersTable",
      Key: { "UserID":props.userid },
      ProjectionExpression: "SocialLearningBlogsRead",
    };
    docClient.get(params, function(err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
          UpdateExpression: "set SocialLearningBlogsRead["+data.Item.SocialLearningBlogsRead.length.toString()+"] = :slbr",
          ExpressionAttributeValues:{
            ":slbr": {timestamp: `${Date.now()}`, bid: blog.BlogID},
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
        {!readsingleblog && allBlogs.map((blog)=>
          <div key={blog.BlogID} onClick={() => {if(!props.redirlog) BlogRead(blog);  else window.location.href="/login";}}>
            <div className="blog-box">
              <h4 style={{padding:"0", margin:"0"}}>{blog.BlogTopic}</h4>
              <h5 style={{padding:"0", margin:"0"}}>{blog.BlogUsername}</h5>
              <h6 style={{padding:"0", margin:"0", fontWeight:"600"}}>{blog.BlogCreds}</h6>
              <p style={{padding:"0", margin:"0"}}>{blog.BlogHashtags}</p>
              <br/>
              <p style={{fontSize:"14px"}}>{blog.Blog}</p>
            </div>
            <br/>
          </div>
        )}
      </div>
      {readsingleblog && readsingleblog.map((blog)=>
        <div key={blog.BlogID}>
          <h4 style={{marginTop:"1%",marginLeft:"3%"}}>{blog.BlogTopic}</h4>
          <p style={{marginLeft:"3%"}}>{blog.BlogHashtags}</p>
          <p style={{marginTop:"1%",marginLeft:"3%",fontSize:"14px"}}>{blog.Blog}</p>
        </div>
      )}
    </div>
  );
}

export default Blogs;
