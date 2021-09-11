import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons'
import crypto from 'crypto';
import docClient from '../GigsPage/GigsAWS';

function MyVerticallyPopUpBlog(props) {
    const [topic, setTopic] = useState("");
    const [hashtag, setHashtag] = useState("");
    const [blog, setBlog] = useState();
    const [showerr, setShowErr] = useState(false);

    function handleApply() {
        if (topic !== "" && hashtag !== "" && blog !== "") {
            const adata = {
                "BlogID": crypto.randomBytes(8).toString("hex"),
                "BlogTopic": topic,
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
                    Key: { "UserID":props.userid },
                    ProjectionExpression: "SocialLearningBlogsUploaded",
                  };
                  docClient.get(params, function(err, data) {
                    if (err) {
                      console.log(err);
                    } else {
                      var params = {
                        TableName: "UsersTable",
                        Key: { "UserID":props.userid },
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
                          alert("BLOG POSTED")
                          window.location.reload();
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
                  <p style={{ marginTop: "10%", fontSize: "18px" }}>Hashtags<text style={{ color: "#f26c4f" }}>*</text></p>
                  <input onChange={(e) => (setHashtag(e.target.value))} value={hashtag} style={{ width: "100%", marginTop: "1%" }} placeholder="datascience" />
                  <p style={{ marginTop: "10%", fontSize: "18px" }}>Blogs<text style={{ color: "#f26c4f" }}>*</text></p>
                  <textarea value={blog} onChange={(e) => (setBlog(e.target.value))} style={{ height: "100px", width: "100%" }}></textarea>
                  <button  onClick={handleApply} className="button_slide slide_right" style={{ marginTop: "10%", marginLeft: "30%" }}>Submit<ArrowLeft className='button_arrow' /></button>
                  {showerr !== false && <p style={{ color: "red", textAlign: "center" }}><br />*{showerr}</p>}
              </div>
          </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyPopUpBlog;