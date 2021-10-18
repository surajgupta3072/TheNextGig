import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons'
import crypto from 'crypto';
import docClient from '../GigsPage/GigsAWS';
import Swal from 'sweetalert2'
import emailjs from "emailjs-com";
function MyVerticallyPopUpBlog(props) {
    const [topic, setTopic] = useState("");
    const [creds,setCreds]=useState("");
    const [hashtag, setHashtag] = useState("");
    const [blog, setBlog] = useState();
    const [showerr, setShowErr] = useState(false);
    const SERVICE_ID = "service_mztzudb";
    const TEMPLATE_ID = "template_4od9vgl";
    function handleApply() {
        if (topic !== "" && creds!=="" && hashtag !== "" && blog !== "") {
            const adata = {
                "BlogID": crypto.randomBytes(8).toString("hex"),
                "BlogTopic": topic,
                "BlogCreds": creds,
                "BlogUsername": props.userid.attributes.name,
                "BlogHashtags": hashtag,
                "Blog": blog,
                "isApproved": false
            }
            var paramss = {
                TableName: "BlogsTable",
                Item: adata
            };
            docClient.put(paramss, function(err, data) {
                if (err) {
                  console.log(err);
                } 
                else {
                  var params = {
                    TableName: "UsersTable",
                    Key: { "UserID":props.userid.username },
                    ProjectionExpression: "SocialLearningBlogsUploaded",
                  };
                  docClient.get(params, function(err, data) {
                    if (err) {
                      console.log(err);
                    } else {
                      var params = {
                        TableName: "UsersTable",
                        Key: { "UserID":props.userid.username },
                        UpdateExpression: "set SocialLearningBlogsUploaded["+data.Item.SocialLearningBlogsUploaded.length.toString()+"] = :blv",
                        ExpressionAttributeValues:{
                          ":blv":adata["BlogID"],
                        },
                        ReturnValues:"UPDATED_NEW"
                      }
                      docClient.update(params, function (err, data) {
                        if (err) {
                          console.log(err);
                        } else {
                          props.onHide();
                          emailjs
                        .send(
                          SERVICE_ID,
                          TEMPLATE_ID,
                          {feedback:props.userid.attributes.name, Details:blog},
                          "user_LuNukIHe37LdAF6nNkxao"
                        );
                          Swal.fire({
                            title: "<h5 style='color:white'>" + "Submitted!" + "</h5>",
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000,
                            background: '#020312',
                            color: 'white',
                            iconColor: "#F26C4F"
                          }).then(()=>window.location.reload());
                          // alert("BLOG POSTED")
                          // window.location.reload();
                        }
                      });
                    }
                  });
                }
              });
          }
          else {
            setShowErr("All Fields are mandatory");
          }
        }
    
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="custom-modal-style"
            dialogClassName="modal-w"
            className="mobile_view"
            transparent={true}
        >
          <Modal.Body style={{ backgroundColor: "#020312", border: "1px solid #f26c4f" }}>
              <div style={{ padding: "7%" }}>
                  <p style={{ fontSize: "18px" }} >Topic <text style={{ color: "#f26c4f" }}>*</text></p>
                  <input onChange={(e) => (setTopic(e.target.value))} value={topic} style={{ width: "100%" }} placeholder="ABC"></input>
                  <p style={{marginTop:"10%",fontSize:"18px"}} >Credentials <text style={{color:"#f26c4f"}}>*</text><text style={{color:"#f26c4f", fontSize:"14px"}}>(Highlight relevant creds)</text></p>
                  <input onChange={(e)=>(setCreds(e.target.value))} value={creds} style={{width:"100%"}} placeholder="Founder of TheNextGig"></input>
                  <p style={{ marginTop: "10%", fontSize: "18px" }}>Hashtags <text style={{ color: "#f26c4f" }}>*</text></p>
                  <input onChange={(e) => (setHashtag(e.target.value))} value={hashtag} style={{ width: "100%", marginTop: "1%" }} placeholder="#datascience #MachineLearning" />
                  <p style={{ marginTop: "10%", fontSize: "18px" }}>Blogs <text style={{ color: "#f26c4f" }}>*</text></p>
                  <textarea value={blog} onChange={(e) => (setBlog(e.target.value))} style={{ height: "100px", width: "100%" }}></textarea>
                  <button  onClick={handleApply} className="button_slide slide_right" style={{ marginTop: "10%", marginLeft: "30%" }}>Submit<ArrowLeft className='button_arrow' /></button>
                  {showerr !== false && <p style={{ color: "red", textAlign: "center" }}><br />*{showerr}</p>}
              </div>
          </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyPopUpBlog;