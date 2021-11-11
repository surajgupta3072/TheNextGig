import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons'
import crypto from 'crypto';
import docClient from '../GigsPage/GigsAWS';
import Swal from 'sweetalert2';
import Multiselect from "multiselect-react-dropdown";
import skillsData from "../ProfilePage/Skills.json"
// import ReactQuill from 'react-quill';

function MyVerticallyPopUpBlog(props) {
    const [topic, setTopic] = useState("");
    const [creds,setCreds]=useState("");
    const [blog, setBlog] = useState("");
    const [showerr, setShowErr] = useState(false);
    const [skillPos, setSkillsPos] = useState([]);
    const [skills1, setSkills1] = useState([]);
    
  function onSelect1(selectedList) {
    setSkillsPos(selectedList);
  }
  function onRemove1(selectedList) {
    setSkillsPos(selectedList);
  }
  function examfunc1(e) {
    var skills1 = [];
    if (e === "") {
      setSkills1([]);
    } else {
      for (var i = 0; i < skillsData.length; i++)
        if (skillsData[i].toLowerCase().startsWith(e.toLowerCase()) === true)
          skills1.push(skillsData[i]);
      setSkills1(skills1);
    }
  }
    const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    function handleApply() {
        var hash="";
        for(var i=0;i<skillPos.length;i++)
        {
          hash=hash+"#"+skillPos[i]+"--";
        }
        if (topic !== "" && creds!=="" && hash !== "" && blog !== "") {
            const adata = {
              "BlogID": crypto.randomBytes(8).toString("hex"),
              "BlogTopic": topic,
              "BlogCreds": creds,
              "BlogUsername": props.userid.attributes.name,
              "BlogHashtags": hash,
              "Blog": blog,
              "isApproved": false,
              "BlogDate": Date(Date.now()),
              "BlogViews": 0,
              "BlogDomains": []
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
                          const body = JSON.stringify({
                            feedback:`Topic:${topic}`,
                            feedback1:`Blog:${blog}`,
                            title:"Blog",
                            user:props.userid.attributes.name,
                            feedback2:`Hastag:${hash}`
                          });
                          const requestOptions = {
                            method: "POST",
                            body,
                          };
                          fetch(endpoint, requestOptions)
                            .then((response) => {
                              if (!response.ok) {
                                throw new Error("Error in fetch");
                              } 
                              else {
                                props.onHide();
                                setBlog("")
                                setTopic("")
                                setCreds("")
                                setSkillsPos("")
                                Swal.fire({
                                  title: "<h5 style='color:white'>" + "Congratulations! Your blog has been submitted! You will see it on the platform shortly." + "</h5>",
                                  icon: 'success',
                                  showConfirmButton: false,
                                  timer: 4000,
                                  background: '#020312',
                                  color: 'white',
                                  iconColor: "#F26C4F"
                                }).then(props.onHide());
                              }
                              // return response.json();
                            })
                            .catch((error) => {
                              console.error("Failed to send feedback. Error: ", error);
                            });
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
          dialogClassName="modal-40w"
          className="mobile_view"
          transparent={true}
        >
          <Modal.Body style={{ backgroundColor: "#020312", border: "1px solid #f26c4f" }}>
              <div style={{ padding: "7%" }}>
                  <p style={{ fontSize: "18px" }} >Topic <text style={{ color: "#f26c4f" }}>*</text></p>
                  <input onChange={(e) => (setTopic(e.target.value))} value={topic} style={{ width: "100%" }} placeholder="ABC"></input>
                  <p style={{marginTop:"10%",fontSize:"18px"}} >Credentials <text style={{color:"#f26c4f"}}>*</text><text style={{color:"#f26c4f", fontSize:"14px"}}>(Highlight relevant creds)</text></p>
                  
                  <input onChange={(e)=>(setCreds(e.target.value))} value={creds} style={{width:"100%"}} placeholder="Founder of TheNextGig"></input>
                  <p style={{ marginTop: "10%", fontSize: "18px" }}>Skills (Skills that people will learn) <text style={{ color: "#f26c4f" }}>*</text></p>
                  <Multiselect
                    emptyRecordMsg="Start Searching..."
                    onSearch={examfunc1}
                    onSelect={onSelect1}
                    onRemove={onRemove1}
                    electedValues={skillPos}
                    selectionLimit={10}
                    options={skills1}
                    isObject={false}
                    placeholder="Select Skills"
                    style={{
                    chips: {
                        background: "#f26c4f",
                        fontSize: "17px",
                        marginLeft: "5px",
                    },
                    searchBox: {
                        border: "1px solid #f26c4f",
                        "border-radius": "10px",
                    },
                    optionContainer: {
                        border: "2px solid #f26c4f",
                        background: "#1B1C2A",
                    },
                    }}/>
                  <p style={{ marginTop: "10%", fontSize: "18px" }}>Blogs <text style={{ color: "#f26c4f" }}>*</text></p>
                  <textarea placeholder="ABC is ..." value={blog} onChange={(e) => (setBlog(e.target.value))} style={{ height: "100px", width: "100%" }}></textarea>
                  {/* <ReactQuill placeholder="ABC is ..." value={blog} onChange={(e) => setBlog(e)}/> */}
                  <button onClick={handleApply} className="button_slide slide_right" style={{ marginTop: "10%", marginLeft: "35%" }}>Submit<ArrowLeft className='button_arrow' /></button>
                  {showerr !== false && <p style={{ color: "red", textAlign: "center" }}><br />*{showerr}</p>}
              </div>
          </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyPopUpBlog;