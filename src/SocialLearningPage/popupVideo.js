import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import S3 from "react-aws-s3";
import crypto from "crypto";
import docClient from "../GigsPage/GigsAWS";
import Swal from "sweetalert2";
import Multiselect from "multiselect-react-dropdown";
import skillsData from "../ProfilePage/Skills.json"
const config = {
  bucketName: "socialvideoslearn",
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
};
const ReactS3Client = new S3(config);

function MyVerticallyPopUp(props) {
  const [topic, setTopic] = useState("");
  const [creds, setCreds] = useState("");
  const [vfile, setVfile] = useState();
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
  const endpoint =
    "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  function handleApply() {
    var hash = "";
    for (var i = 0; i < skillPos.length; i++) {
      hash = hash + "#" + skillPos[i] + "--";
    }
    if (topic !== "" && creds !== "" && hash !== "" && vfile !== undefined) {
      if (vfile.size > 1073741824) {
        setShowErr("Video File more than 1GB size");
      } else {
        Swal.fire({
          title:
            "<h5 style='color:white'>" +
            `We have received your submission. Please stay on this page for a few seconds until your video has been uploaded - we'll let you know as soon as it is done!` +
            "</h5>",
          icon: "info",
          showConfirmButton: false,
          timer: 600000,
          background: "#020312",
          color: "white",
          iconColor: "#00A000",
        });
        props.onHide();
        var url = "", percentage;
        let Vimeo = require('vimeo').Vimeo;
        let client = new Vimeo("f2c5afca1012cf6a0c311319ae38bbd03cacbd4e", "YUOkBUrEDR8R9bVYZg4BHq1eID0D3cco2/OFfyYdAX0KGguBHIbE6OvSChlTNpzkCRmDHzJN8uDWLi49LE22MydfnLUY8e820RTMxjx2nJYNLcXLOlsXemISii5F4Ggv", "45263f267f0f24d45bea90d6346d747c");
        client.upload(
          vfile,
          {
            'name': topic,
            'description': ''
          },
          function (uri) {
            console.log('Your video URI is: ' + uri);
            if (uri !== "") {
              var link = ""
              client.request(uri + '?fields=player_embed_url', function (error, body, statusCode, headers) {
                if (error) {
                  console.log('There was an error making the request.')
                  console.log('Server reported: ' + error)
                  return
                }
                link = body.player_embed_url;
                var randomVidID = crypto.randomBytes(8).toString("hex");
                const adata = {
                  VideoID: randomVidID,
                  VideoTopic: topic,
                  VideoCreds: creds,
                  VideoUsername: props.userid.attributes.name,
                  VideoHashtags: hash,
                  VideoLink: "",
                  VimeoVideoLink: link + "& amp; badge=0 & amp; autopause=0 & amp; player_id=0 & amp; app_id=58479",
                  isApproved: false,
                  VideoViews: 0,
                  VideoDuration: "",
                  Likes: [],
                  VideoDomains: [],
                  VideoThumbnail: "",
                  VideoUploaderID: props.userid.username
                };
                var paramss = {
                  TableName: "VideosTable",
                  Item: adata,
                };
                docClient.put(paramss, function (err, data) {
                  if (err) {
                    console.log(err);
                  } else {
                    var params = {
                      TableName: "UsersTable",
                      Key: { UserID: props.userid.username },
                      ProjectionExpression: "SocialLearningVideosUploaded",
                    };
                    docClient.get(params, function (err, data) {
                      if (err) {
                        console.log(err);
                      } else {
                        var params = {
                          TableName: "UsersTable",
                          Key: { UserID: props.userid.username },
                          UpdateExpression:
                            "set SocialLearningVideosUploaded[" +
                            data.Item.SocialLearningVideosUploaded.length.toString() +
                            "] = :slv",
                          ExpressionAttributeValues: {
                            ":slv": adata["VideoID"],
                          },
                          ReturnValues: "UPDATED_NEW",
                        };
                        docClient.update(params, function (err, data) {
                          if (err) {
                            console.log(err);
                          } else {
                            Swal.fire({
                              title:
                                "<h5 style='color:white'>" +
                                "Congratulations! Your video has been uploaded! You will see it on the platform shortly." +
                                "</h5>",
                              icon: "success",
                              showCloseButton: true,
                              focusConfirm: true,
                              confirmButtonText: 'Great!',
                              timer: 20000,
                              background: "#020312",
                              color: "white",
                              iconColor: "#F26C4F",
                            });
                            var params = {
                              TableName: "ExpertsTable",
                              Key: { "ExpertID": props.userid.attributes.name },
                              ProjectionExpression: "SocialLearningVideoUploadedId",
                            };
                            docClient.get(params, function (err, data) {
                              console.log(data);
                              if (data.Item === undefined) {
                                const expertData = {
                                  "ExpertID": props.userid.attributes.name,
                                  "MastersessionsVideoUploadId": [],
                                  "ExpertEducational": "",
                                  "ExpertDesignation": creds,
                                  "ExpertSkills": hash.split("--").join(", ").replaceAll("#", ""),
                                  "ExpertPic": "./dpavtar.png",
                                  "ExpertLinkedIn": "",
                                  "ExpertCompany": "",
                                  "AccountID": props.userid.username,
                                  "SocialLearningVideoUploadedId": [randomVidID],
                                  "ExpertName": props.userid.attributes.name,
                                }
                                var paramss = {
                                  TableName: "ExpertsTable",
                                  Item: expertData,
                                };
                                docClient.put(paramss, function (err, data) {
                                  if (err) {
                                    console.log(err);
                                  } else {
                                    console.log(data);
                                  }
                                });
                              }
                              else {
                                console.log(data.Item.SocialLearningVideoUploadedId);
                                var params = {
                                  TableName: "ExpertsTable",
                                  Key: { ExpertID: props.userid.attributes.name },
                                  UpdateExpression:
                                    "set SocialLearningVideoUploadedId[" +
                                    data.Item.SocialLearningVideoUploadedId.length.toString() +
                                    "] = :slvupi",
                                  ExpressionAttributeValues: {
                                    ":slvupi": randomVidID,
                                  },
                                  ReturnValues: "UPDATED_NEW",
                                };
                                docClient.update(params, function (err, data) {
                                  if (err) {
                                    console.log(err);
                                  } else {
                                    console.log(data);
                                  }
                                });
                              }
                            });
                            const body = JSON.stringify({
                              feedback: `Topic:${topic}`,
                              feedback1: `Hastags:${hash}`,
                              feedback2: adata.VideoLink,
                              title: "Video",
                              user: props.userid.attributes.name,
                            });
                            const requestOptions = {
                              method: "POST",
                              body,
                            };
                            fetch(endpoint, requestOptions)
                              .then((response) => {
                                if (!response.ok) {
                                  throw new Error("Error in fetch");
                                } else {
                                  setTopic("");
                                  setCreds("");
                                  setSkillsPos("");
                                }
                              })
                              .catch((error) => {
                                console.error(
                                  "Failed to send feedback. Error: ",
                                  error
                                );
                              });
                          }
                        });
                      }
                    });
                  }
                });
              })
            }
          },
          function (bytes_uploaded, bytes_total) {
            percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
            console.log(bytes_uploaded, bytes_total, percentage + '%')
          },
          function (error) {
            console.log('Failed because: ' + error)
          })
      }
    } else {
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
      className="mobile_view_video"
      transparent={true}
    >
      <Modal.Body
        style={{ backgroundColor: "#020312", border: "1px solid #f26c4f" }}
      >
        <div style={{ padding: "7%" }}>
          <p style={{ fontSize: "18px" }}>
            Topic <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
            style={{ width: "100%" }}
            placeholder="ABC"
          ></input>
          <p style={{ marginTop: "10%", fontSize: "18px" }}>
            Credentials <text style={{ color: "#f26c4f" }}>*</text>
            <text style={{ color: "#f26c4f", fontSize: "14px" }}>
              (Highlight relevant creds)
            </text>
          </p>
          <input
            onChange={(e) => setCreds(e.target.value)}
            value={creds}
            style={{ width: "100%" }}
            placeholder="Founder of TheNextGig"
          ></input>
          <p style={{ marginTop: "10%", fontSize: "18px" }}>
            Skills that people will learn<text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <Multiselect
            emptyRecordMsg="Start Searching..."
            onSearch={examfunc1}
            onSelect={onSelect1}
            onRemove={onRemove1}
            selectedValues={skillPos}
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
            }}
          />
          <p style={{ marginTop: "10%", fontSize: "18px" }}>
            Upload Video <text style={{ color: "#f26c4f" }}>*</text>
            <text style={{ color: "#f26c4f", fontSize: "14px" }}>
              (less than 1GB)
            </text>
          </p>
          <input
            onChange={(e) => setVfile(e.target.files[0])}
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
          />
          <button
            onClick={handleApply}
            className="button_slide slide_right"
            style={{ marginTop: "10%", marginLeft: "35%" }}
          >
            Submit
            <ArrowLeft className="button_arrow" />
          </button>
          {showerr !== false && (
            <p style={{ color: "red", textAlign: "center" }}>
              <br />*{showerr}
            </p>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyPopUp;
