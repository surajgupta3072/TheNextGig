import Modal from "react-bootstrap/Modal";
import "./popup.css";
import emailjs from "emailjs-com";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";
import Swal from 'sweetalert2'

function MyVerticallyPopUp(props) {
  const [data, setdata] = useState("");
  const [field1, setfield1] = useState("");
  const [field2, setfield2] = useState("");
  const handlefield1 = (event) => {
    setfield1(event.target.value);
  };
  const handlefield2 = (event) => {
    setfield2(event.target.value);
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
        { title: "Gigs", field1, field2, Details: data },
        "user_LuNukIHe37LdAF6nNkxao"
      )
      .then((res) => {
        if (res.status === 200) {
          setdata("");
          setfield1("");
          setfield2("");
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
            (we promise we won't spam)
          </p>
          <input
            onChange={handleid}
            value={data}
            style={{ width: "100%" }}
          ></input>
          <p style={{ marginTop: "10%", fontSize: "18px" }}>
            Recommendation<text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <p style={{ marginTop: "-15px", fontSize: "15px" }}>
            {" "}
            (we will try our best to get this for you)
          </p>
          <select
            onChange={handlefield1}
            style={{ width: "100%" }}
            value={field1}
          >
            <option selected >
              Select from dropdown*
            </option>
            <option>Domain</option>
            <option>Company</option>
          </select>
          <input
            value={field2}
            onChange={handlefield2}
            style={{ width: "100%", marginTop: "10%" }}
            placeholder="Insert text here*"
          />
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

export default MyVerticallyPopUp;
