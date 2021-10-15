import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import emailjs from "emailjs-com";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleid = (event) => {
    setData(event.target.value);
  };
  const SERVICE_ID = "service_mztzudb";
  const TEMPLATE_ID = "template_4od9vgl";
  const submit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { feedback, Details: data },
        "user_LuNukIHe37LdAF6nNkxao"
      )
      .then((res) => {
        if (res.status === 200) {
          setFeedback("");
          setData("");
        }
      })
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
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
