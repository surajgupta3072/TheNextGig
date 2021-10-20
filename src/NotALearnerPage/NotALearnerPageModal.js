import Modal from "react-bootstrap/Modal";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";
import emailjs, { send } from "emailjs-com";
import Swal from 'sweetalert2'

function NotALearnerModal(props){
  const [data, setdata] = useState("");
  const [field1, setfield1] = useState("");
  const [field2, setfield2] = useState("");
  const [field3, setfield3] = useState("");
  const handlefield1 = (event) => {
    setfield1(event.target.value);
  };
  const handlefield2 = (event) => {
    setfield2(event.target.value);
  };
  const handlefield3 = (event) => {
    setfield3(event.target.value);
  };
  const handleid = (event) => {
    setdata(event.target.value);
  };
  const SERVICE_ID = "service_mztzudb";
  const TEMPLATE_ID = "template_r0wbju9";
  const submit = (event) => {
    event.preventDefault();
    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { title: "Not a learner", field1, field2,field3, Details: data },
        "user_LuNukIHe37LdAF6nNkxao"
      )
      .then((res) => {
        if (res.status === 200) {
          setdata("");
          setfield1("");
          setfield2("");
          setfield3("")
          props.onHide();
          Swal.fire({
            title: "<h5 style='color:white'>" + "Submitted!" + "</h5>",
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            background: '#020312',
            color: 'white',
            iconColor: "#F26C4F"
          })
        }
      })
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
  };

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
          <input 
            onChange={handlefield1}
            value={field1}
            style={{ width: "100%" }}>
          </input>
          <p style={{ fontSize: "16px",marginTop:"10%" }}>
            Email Id <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input 
             onChange={handleid}
            value={data} style={{ width: "100%" }}></input>
          <p style={{ fontSize: "16px",marginTop:"10%" }}>
            Mobile Number <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input 
            onChange={handlefield2}
            value={field2}
            style={{ width: "100%" }}>
          </input>     
          <p style={{ marginTop: "10%", fontSize: "16px" }}>
          Something specific you would like us to know before our conversation? {" "}
            <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <textarea
            onChange={handlefield3}
            value={field3}
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

export default NotALearnerModal;