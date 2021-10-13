import Modal from "react-bootstrap/Modal";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";

function NotALearnerModal(props){
  return(
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
          <p style={{ fontSize: "16px" }}>
            Name <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input style={{ width: "100%" }}></input>
          <p style={{ fontSize: "16px",marginTop:"10%" }}>
            Email Id <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input style={{ width: "100%" }}></input>
          <p style={{ fontSize: "16px",marginTop:"10%" }}>
            Mobile Number <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input style={{ width: "100%" }}></input>
          <p style={{ marginTop: "10%", fontSize: "16px" }}>
          Something specific you would like us to know before our conversation? {" "}
            <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <textarea
         
            style={{ width: "100%", height: "100px" }}
          ></textarea>
          <button
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

export default NotALearnerModal;