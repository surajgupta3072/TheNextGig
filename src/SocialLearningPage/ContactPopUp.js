import Modal from "react-bootstrap/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Swal from "sweetalert2";
import { useState } from "react";
import './../Footer/Modal.css'
function MyVerticallyCenteredModal(props) {
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");
  const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    feedback: `Feedback:${feedback}`,
    title: "Feedback",
    feedback2: "",
    user: data,
    feedback1: ""
  });
  const requestOptions = {
    method: "POST",
    body,
  };
  const submit = (event) => {
    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in fetch");
        }
        else {
          setFeedback("");
          setData("");
          props.onHide();
          Swal.fire({
            title: "<h5 style='color:white'>" + "Submitted!" + "</h5>",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            background: "#020312",
            color: "white",
            iconColor: "#F26C4F",
          });
        }
        // return response.json();
      })
      .catch((error) => {
        console.error("Failed to send feedback. Error: ", error);
      });
  };

  function myClipboard(vidlink) {
    Swal.fire({
      title: "<h6 style='color:white'>" + "Link Copied!" + "</h6>",
      showConfirmButton: false,
      timer: 2000,
      background: '#020312',
      color: 'white',
      iconColor: "#F26C4F"
    });
    navigator.clipboard.writeText(vidlink);
  }
  return (
    <div>
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
          style={{ backgroundColor: "#020312", border: "1px solid #f26c4f" }}>
          <div style={{ padding: "7%" }}>
            <AiFillCloseCircle onClick={() => props.onHide()} style={{ width: "30px", height: "30px", color: "rgb(242, 108, 79)", marginTop: "-15%", marginLeft: "100%" }} />
            <Container>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <div>
                  <a style={{ textDecoration: "none", color: "white" }} href={'whatsapp://send?text=' + `${window.location.href}` + '/Video/' + `${props.VideoID}`} data-action="share/whatsapp/share"
                    target="_blank"><img style={{ cursor: "pointer", alignItems: "center" }} src="/WhatsApp_homepage.png" height="60px" href="" />
                    <p style={{ marginLeft: "-8px" }}>Whatsapp</p></a>
                </div>
                <div>
                  <a style={{ textDecoration: "none", color: "white" }} href={"https://www.linkedin.com/sharing/share-offsite/?url=" + `${window.location.href}` + '/Video/' + `${props.VideoID}`}
                    target="_blank"><img style={{ cursor: "pointer", alignItems: "center" }} src="LinkedIn_Homepage.png" height="60px"></img>
                    <p>LinkedIn &nbsp; </p></a>
                </div>
              </div>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <div>
                  <a style={{ textDecoration: "none", color: "white" }} href={"mailto:?" + "subject=Shared Link Of Social Learning Videos" + "&body=Social Learning Video Link From" + "https://www.thenextgig.net/" + " is " + `${window.location.href}` + '/Video/' + `${props.VideoID}`}
                    target="_blank"><img style={{ cursor: "pointer", alignItems: "center" }} src="Gmail_Homepage.png" height="45px"></img>
                    <p>&nbsp; Gmail</p></a>
                </div>
                <div onClick={() => myClipboard(window.location.href + "/Video/" + props.VideoID)}>
                  < img style={{ cursor: "pointer", alignItems: "center" }} src="copylink_homepage.png" height="45px"></img>
                  <p style={{ marginLeft: "-5px" }}>Copy Link</p>
                </div>
              </div>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyVerticallyCenteredModal;
