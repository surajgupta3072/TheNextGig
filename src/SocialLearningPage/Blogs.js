import { useState, useEffect } from "react";
import docClient from '../GigsPage/GigsAWS';
import './SocialLearningPage.css';

function Blogs(props) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [readsingleblog, setReadSingleBlog] = useState(false);
  const [searchterm, setSearchTerm] = useState("");
  
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

  function addSearchTerm() {
    var params = {
      TableName: "UsersTable",
      Key: { "UserID":props.userid },
      ProjectionExpression: "BlogsSearchHistory",
    };
    docClient.get(params, function(err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
          UpdateExpression: "set BlogsSearchHistory["+data.Item.BlogsSearchHistory.length.toString()+"] = :bsh",
          ExpressionAttributeValues: {
            ":bsh": {timestamp: `${Date.now()}`, sbterm: searchterm}
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
    const searchblogs = allBlogs.filter((blog)=>{
      if(blog.BlogTopic.toLowerCase().includes(searchterm.toLowerCase()) || blog.BlogUsername.toLowerCase().includes(searchterm.toLowerCase()) 
      || blog.BlogHashtags.toLowerCase().includes(searchterm.toLowerCase()) || blog.BlogCreds.toLowerCase().includes(searchterm.toLowerCase())) {
        return blog;
      }
    })
    setAllBlogs(searchblogs);
  }

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
          else {
            var paramss = {
              TableName: "UsersTable",
              Key: { "UserID":props.userid },
              ProjectionExpression: "SkillsAcquiredBlogs",
            };
            docClient.get(paramss, function(err, data) {
              if (err) {
                console.log(err);
              } else {
                  var params = {
                    TableName: "UsersTable",
                    Key: { "UserID":props.userid },
                    UpdateExpression: "set SkillsAcquiredBlogs["+data.Item.SkillsAcquiredBlogs.length.toString()+"] = :sab",
                    ExpressionAttributeValues:{
                      ":sab": blog.BlogHashtags.split(" ")
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
      <input className="search" style={{marginLeft:"2%", borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}}  value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Blog..." type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button" onClick={searchFilter} style={{backgroundColor:"rgb(242, 108, 79)",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0"}}>Search</button>
      <br/><br/>
      <div  style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around" }}>
        {!readsingleblog && allBlogs.map((blog)=>
          <div key={blog.BlogID} onClick={() => {if(!props.redirlog) BlogRead(blog);  else window.location.href="/login";}}>
            <div  className="blog-box">
              <h4 style={{padding:"0", margin:"0"}}>{blog.BlogTopic}</h4>
              <h5 style={{padding:"0", margin:"0"}}>{blog.BlogUsername}</h5>
              <h6 style={{padding:"0", margin:"0", fontWeight:"600"}}>{blog.BlogCreds}</h6>
              <p style={{padding:"0", margin:"0"}}>{blog.BlogHashtags}</p>
              <br/>
              <p style={{fontSize:"14px"}}>{blog.Blog.split(" ").slice(0,32).join(" ")+"  . . . "}</p>
            </div>
            <br/>
          </div>
        )}
      </div>
      {readsingleblog && readsingleblog.map((blog)=>
        <div style={{marginLeft:"3%",paddingBottom:"10px"}} key={blog.BlogID}>
          <h4 style={{padding:"0", margin:"0"}}>{blog.BlogTopic}</h4>
          <h5 style={{padding:"0", margin:"0"}}>{blog.BlogUsername}</h5>
          <h6 style={{padding:"0", margin:"0", fontWeight:"600"}}>{blog.BlogCreds}</h6>
          <p style={{padding:"0", margin:"0"}}>{blog.BlogHashtags}</p>
          <br/>
          <p style={{fontSize:"18px"}}>{blog.Blog}</p>
        </div>
      )}
    </div>
  );
}

export default Blogs;
