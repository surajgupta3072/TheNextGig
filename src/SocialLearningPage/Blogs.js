import { useState, useEffect } from "react";
import docClient from '../GigsPage/GigsAWS';
import './SocialLearningPage.css';
import { ArrowLeft,Clipboard } from "react-bootstrap-icons";

function Blogs(props) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [allBlogsConst, setAllBlogsConst] = useState([]);
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
        setAllBlogsConst(data.Items.filter((e)=>{if(e.isApproved===true) return e}));
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
    if(searchterm==="") {
      setAllBlogs(allBlogsConst);
    }
    else {
      addSearchTerm();
      const searchblogs = allBlogs.filter((blog)=>{
        if(blog.BlogTopic.toLowerCase().includes(searchterm.toLowerCase()) || blog.BlogUsername.toLowerCase().includes(searchterm.toLowerCase()) 
        || blog.BlogHashtags.toLowerCase().includes(searchterm.toLowerCase()) || blog.BlogCreds.toLowerCase().includes(searchterm.toLowerCase())) {
          return blog;
        }
      })
      setAllBlogs(searchblogs);
    }
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
        var flag=0;
        for(var i=0; i<data.Item.SocialLearningBlogsRead.length; i++) {
          if(data.Item.SocialLearningBlogsRead[i].bid===blog.BlogID)
            var flag=1;
        }
        if(flag===0) {
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
                        ":sab": blog.BlogHashtags.split("--")
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
              var params = {
                TableName: "BlogsTable",
                Key: { "BlogID":blog.BlogID },
                ProjectionExpression: "BlogViews",
              };
              docClient.get(params, function(err, data) {
                if (err) {
                  console.log(err);
                } 
                else {
                  var params = {
                    TableName: "BlogsTable",
                    Key: { "BlogID":blog.BlogID },
                    UpdateExpression: "set BlogViews = :slbv",
                    ExpressionAttributeValues:{
                      ":slbv": data.Item.BlogViews + 1
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
      }
    });
  }

  function myClipboard(bloglink) { 
    navigator.clipboard.writeText(bloglink);  
  }


  return (
    <div>
      <input className="search" style={{marginLeft:"2%", borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}}  value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Blog..." type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button"  onClick={searchFilter} style={{backgroundColor:"rgb(242, 108, 79)",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0"}}>Search</button>
      <br/><br/>
      <div  style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around",cursor:"pointer"}}>
        {!readsingleblog && allBlogs.map((blog)=>
       <div key={blog.BlogID}> 
          <div  onClick={() => {if(!props.redirlog) BlogRead(blog);  else window.location.href="/login";}}>
            <div className="blog-box">
              <h5 style={{padding:"0", margin:"0",color:"#F26C4F"}}>{blog.BlogTopic}</h5>
              <h6 style={{padding:"0", margin:"0"}}>{blog.BlogUsername} - {blog.BlogCreds}</h6>
              <p style={{padding:"0", margin:"0",color:"grey"}}>#{blog.BlogHashtags.split("#")[1].replaceAll("--","  ")} #{blog.BlogHashtags.split("#")[2]}</p>
              <p className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)", fontSize:"10px"}}>{blog.BlogViews} views</p>
              <p style={{fontSize:"10px"}}>{blog.BlogDate}</p>
              <p style={{fontSize:"14px"}}>{blog.Blog.split(" ").slice(0,18).join(" ")+"  . . . "}</p>
            </div>
            <br/>
          </div>
          <p onClick={()=>myClipboard(window.location.href+"/Blog/"+blog.BlogID)} className="text" style={{padding:"0", color:"rgb(242, 108, 79)", fontSize:"14px"}}>Copy Link <Clipboard/></p>
         </div> 
        )}
      </div>
      {readsingleblog && readsingleblog.map((blog)=>
      <div key={blog.BlogID}>
        <ArrowLeft onClick={()=>setReadSingleBlog(false)} style={{marginLeft:"0.8%", marginTop:"-8px"}} className="button_arrow_MC_Page2_Right"/>
        <div style={{marginLeft:"3%",paddingBottom:"10px", textAlign:"center"}} key={blog.BlogID}>
          <h4 style={{padding:"0", margin:"0",color:"#F26C4F"}}>{blog.BlogTopic}</h4>
          <br/>
          <h6 style={{padding:"0", margin:"0"}}>{blog.BlogUsername}-{blog.BlogCreds}</h6>
          <p style={{padding:"0", margin:"0",color:"grey"}}>{blog.BlogHashtags.replaceAll("--","  ")}</p>
          <p className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)", fontSize:"10px"}}>{blog.BlogViews} views</p>
          <p style={{fontSize:"12px"}}>{blog.BlogDate}</p>
          <br/>
          <pre style={{fontSize:"16px", textAlign:"left",color:"grey", whiteSpace:"pre-wrap", fontFamily:"Open Sans"}}>{blog.Blog}</pre>
        </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
