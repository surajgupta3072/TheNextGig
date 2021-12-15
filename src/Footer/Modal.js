import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";
import Swal from "sweetalert2";

function MyVerticallyCenteredModal(props) {
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");
  const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    feedback: `Feedback:${feedback}`,
    title:"Feedback",
    feedback2:"",
    user:data,
    feedback1:""
  });
  const requestOptions = {
    method: "POST",
    body,
  };
  const submit = (event) => {
    if(data!="" && feedback!="") {
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
    }
  };
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleid = (event) => {
    setData(event.target.value);
  };

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
      <Modal.Body
        style={{ backgroundColor: "#020312", border: "1px solid #f26c4f" }}
      >
        <div style={{ padding: "7%" }}>
          <p style={{ fontSize: "18px" }}>
            Email / Mobile Number <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <p style={{ marginTop: "-15px", fontSize: "15px" }}>
            (no spamming, we promise)
          </p>
          <input
            onChange={handleid}
            value={data}
            style={{ width: "100%" }}
          ></input>
          <p style={{ marginTop: "10%", fontSize: "18px" }}>
            What do you want to tell us?{" "}
            <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <textarea
            onChange={handleChange}
            value={feedback}
            style={{ width: "100%", height: "100px" }}
          ></textarea>
          <button
            onClick={submit}
            className="button_slide slide_right"
            style={{ marginTop: "10%", marginLeft: "30%" }}
          >
            Submit
            <ArrowLeft className="button_arrow" />
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
