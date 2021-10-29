import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import S3 from "react-aws-s3";
import crypto from "crypto";
import docClient from "../GigsPage/GigsAWS";
import Swal from "sweetalert2";
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
  const [hashtag, setHashtag] = useState("");
  const [vfile, setVfile] = useState();
  const [showerr, setShowErr] = useState(false);
  const endpoint =
    "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  function handleApply() {
    if (topic !== "" && creds !== "" && hashtag !== "" && vfile !== undefined) {
      if (vfile.size > 1073741824) {
        setShowErr("Video File more than 1GB size");
      } else {
        Swal.fire({
          title:
            "<h5 style='color:white'>" +
            "We have received your submission. Please stay on this page for a few seconds until your video has been uploaded - we'll let you know as soon as it is done!" +
            "</h5>",
          icon: "info",
          showConfirmButton: false,
          timer: 600000,
          background: "#020312",
          color: "white",
          iconColor: "#00A000",
        });
        props.onHide();
        ReactS3Client.uploadFile(vfile, vfile.name).then((data) => {
          const adata = {
            VideoID: crypto.randomBytes(8).toString("hex"),
            VideoTopic: topic,
            VideoCreds: creds,
            VideoUsername: props.userid.attributes.name,
            VideoHashtags: hashtag,
            VideoLink: data.location,
            isApproved: false,
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
                      const body = JSON.stringify({
                        feedback: `Topic:${topic}`,
                        feedback1: `Hastags:${hashtag}`,
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
                            setHashtag("");
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
        });
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
      className="mobile_view"
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
            Hashtags <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input
            onChange={(e) => setHashtag(e.target.value)}
            value={hashtag}
            style={{ width: "100%", marginTop: "1%" }}
            placeholder="#datascience #webdev"
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
