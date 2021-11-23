// import { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import docClient from '../GigsPage/GigsAWS';
// import { ArrowLeft } from "react-bootstrap-icons";
// import { useParams } from "react-router-dom";

// function SocialBlogPage(props) {
//   const { id } = useParams();
//   const [rew, setRew] = useState(0);
//   const [blogs, setblogs] = useState([]);
//   const [user, setUser] = useState("");
//   const [dplink, setDplink]=useState("/dpavtar.png");

//   useEffect(() => {
//     var paramss = {
//       TableName: "BlogsTable",
//       KeyConditionExpression: "#Bid = :BlogID",
//       ExpressionAttributeNames: {
//         "#Bid": "BlogID",
//       },
//       ExpressionAttributeValues: {
//         ":BlogID": id,
//       }
//     };
//     docClient.query(paramss, function(err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         setblogs(data.Items);
//         if(props.auth.isAuthenticated)
//           BlogRead(data.Items[0])
//       }
//     });
//     if(props.auth.user===null) {
//       setUser("");
//     }
//     else {
//       setUser(props.auth.user);
//       var params = {
//         TableName: "UsersTable",
//         Key: { "UserID":props.auth.user.username },
//       };
//       docClient.get(params, function(err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           setRew(data.Item.TotalRewards);
//           if(data.Item.DPlink!==undefined)
//             setDplink(data.Item.DPlink);
//         }
//       });
//     }
//   }, []);
  
//   function BlogRead(blog) {
//     var params = {
//       TableName: "UsersTable",
//       Key: { "UserID":props.auth.user.username },
//       ProjectionExpression: "SocialLearningBlogsRead",
//     };
//     docClient.get(params, function(err, data) {
//       if (err) {
//         console.log(err);
//       } 
//       else {
//         var flag=0;
//         for(var i=0; i<data.Item.SocialLearningBlogsRead.length; i++) {
//           if(data.Item.SocialLearningBlogsRead[i].bid===blog.BlogID)
//             var flag=1;
//         }
//         if(flag===0) {
//           var params = {
//             TableName: "UsersTable",
//             Key: { "UserID":props.auth.user.username },
//             UpdateExpression: "set SocialLearningBlogsRead["+data.Item.SocialLearningBlogsRead.length.toString()+"] = :slbr",
//             ExpressionAttributeValues:{
//               ":slbr": {timestamp: `${Date.now()}`, bid: blog.BlogID},
//             },
//             ReturnValues:"UPDATED_NEW"
//           }
//           docClient.update(params, function (err, data) {
//             if (err) {
//               console.log(err);
//             }
//             else {
//               var paramss = {
//                 TableName: "UsersTable",
//                 Key: { "UserID":props.auth.user.username },
//                 ProjectionExpression: "SkillsAcquiredBlogs",
//               };
//               docClient.get(paramss, function(err, data) {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                     var params = {
//                       TableName: "UsersTable",
//                       Key: { "UserID":props.auth.user.username },
//                       UpdateExpression: "set SkillsAcquiredBlogs["+data.Item.SkillsAcquiredBlogs.length.toString()+"] = :sab",
//                       ExpressionAttributeValues:{
//                         ":sab": blog.BlogHashtags.split("--")
//                       },
//                       ReturnValues:"UPDATED_NEW"
//                     }
//                     docClient.update(params, function (err, data) {
//                       if (err) {
//                         console.log(err);
//                       }
//                     });
//                     var paramss = {
//                       TableName: "BlogsTable",
//                       Key: { "BlogID":blog.BlogID },
//                       ProjectionExpression: "BlogViews",
//                     };
//                     docClient.get(paramss, function(err, data) {
//                       if (err) {
//                         console.log(err);
//                       } 
//                       else {
//                         var params = {
//                           TableName: "BlogsTable",
//                           Key: { "BlogID":blog.BlogID },
//                           UpdateExpression: "set BlogViews = :slbv",
//                           ExpressionAttributeValues:{
//                             ":slbv": data.Item.BlogViews + 1
//                           },
//                           ReturnValues:"UPDATED_NEW"
//                         }
//                         docClient.update(params, function (err, data) {
//                           if (err) {
//                             console.log(err);
//                           }
//                         });
//                       }
//                     });
//                   }
//               });
//             }
//           });
//         }
//       }
//     });
//   }

//     return (
//       <div>
//         <div className="social_learning_top_image"><Container><h1 style={{textShadow:"0px 4px 4px #F26C4F",marginTop:"1.5%"}}>SOCIAL LEARNING</h1><p style={{fontFamily:"Open Sans"}}>This is your one-stop solution for learning anything under the sun......in anything less than 10 minutes!</p><p style={{fontStyle:"italic",fontSize:"12px",marginTop:"-10px"}}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :)</p></Container></div>
//       <Container>
//         <Row>
//             <Col xs={3} style={{backgroundColor:"#1B1C2A"}} className="SocialLearn_laptop">
//               <Row style={{marginTop:"3%",marginLeft:"0%"}}><Col><img alt="dp" src={dplink} style={{height:"100px",width:"110px",borderRadius:"50%"}}/></Col><Col>{user.attributes!==undefined ? <span><p style={{fontSize:"20px", textAlign:"center", marginTop:"0px"}}>{user.attributes.name}</p><p style={{fontSize:"14px", textAlign:"center",color:"#F26C4F"}}>TNG Learn Coins: <b>{rew}</b></p></span>:<br/>}</Col></Row>
//                 <br/>
//                 <div style={{fontSize:"14px",marginLeft:"7px"}}>In case you want some guidance on uploading "blogs" :
//                   <span>
//                     <br/><br/><ul>
//                     <li>Write about something you that you have learnt from your real life experience – and that excites you</li>
//                     <li>Make sure you aren’t plagiarising - noone likes a copycat! :)</li>
//                     <li>Don’t worry about your language style, the relevance to the larger audience, etc. - as long as you find it valuable, its your original work and there is a clear message that someone can learn from, you’re good to go!</li>
//                     </ul>
//                       It’s easier than you think :)
//                     <br/><br/>
//                     <p style={{fontStyle:"italic",fontSize:"14px"}}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :)</p>
//                   </span>
//                 </div>
//             </Col>
//             <Col>
//             <ArrowLeft onClick={()=>window.location.href="/SocialLearning"} style={{marginLeft:"0.8%", marginTop:"20px"}} className="button_arrow_MC_Page2_Right"/>
//             <br/>
//             {props.auth.isAuthenticated ?
//               blogs.map((blog)=>
//               <div key={blog.BlogID}>
//                 <div style={{marginLeft:"3%",paddingBottom:"10px", textAlign:"center"}} key={blog.BlogID}>
//                   <h4 style={{padding:"0", margin:"0",color:"#F26C4F",marginTop:"50px"}}>{blog.BlogTopic}</h4>
//                   <br/>
//                   <h6 style={{padding:"0", margin:"0"}}>{blog.BlogUsername}-{blog.BlogCreds}</h6>
//                   <p style={{padding:"0", margin:"0",color:"grey"}}>{blog.BlogHashtags.replaceAll("--","  ")}</p>
//                   <p className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)", fontSize:"10px"}}>{blog.BlogViews} views</p>
//                   <p style={{fontSize:"12px"}}>{blog.BlogDate}</p>
//                   <br/>
//                   <pre style={{fontSize:"16px", textAlign:"left",color:"grey", whiteSpace:"pre-wrap", fontFamily:"Open Sans"}}>{blog.Blog}</pre>
//                 </div>
//                 </div>
//               ):blogs.map((blog)=>
//                 <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"40px"}} key={blog.BlogID} onClick={() => {if(props.auth.isAuthenticated) BlogRead(blog);  else window.location.href="/login";}}>
//                   <div className="blog-box">
//                     <h5 style={{padding:"0", margin:"0",color:"#F26C4F"}}>{blog.BlogTopic}</h5>
//                     <h6 style={{padding:"0", margin:"0"}}>{blog.BlogUsername} - {blog.BlogCreds}</h6>
//                     <p style={{padding:"0", margin:"0",color:"grey"}}>#{blog.BlogHashtags.split("#")[1].replaceAll("--","  ")} #{blog.BlogHashtags.split("#")[2]}</p>
//                     <p className="text" style={{padding:"0", margin:"0", color:"rgb(242, 108, 79)", fontSize:"10px"}}>{blog.BlogViews} views</p>
//                     <p style={{fontSize:"10px"}}>{blog.BlogDate}</p>
//                     <p style={{fontSize:"14px"}}>{blog.Blog.split(" ").slice(0,18).join(" ")+"  . . . "}</p>
//                   </div>
//                   <br/>
//                 </div>
//               )}
//             </Col>
//           </Row>
//       </Container>
//       </div>
//     )
//   }
  
// export default SocialBlogPage;