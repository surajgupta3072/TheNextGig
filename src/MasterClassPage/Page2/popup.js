import Modal from "react-bootstrap/Modal";
import "./popup.css";
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
  const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    feedback:`Recommendation Field: ${field1}`,
    feedback1:`Recommendation Text:${field2}`,
    feedback2:"",
    title:"Recommend for Session",
    user: data,
  });
  const requestOptions = {
    method: "POST",
    body,
  };
  const submit = (event) => {
    event.preventDefault();
    if(data!="" && field1!="" && field2!="") {
      fetch(endpoint, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error in fetch");
          } 
          else {
            props.onHide();
            setdata("")
            setfield1("")
            setfield2("")
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
            Recommendation<text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <p style={{ marginTop: "-15px", fontSize: "15px" }}>
            {" "}
(we will try our best to get them)
          </p>
          <select
            onChange={handlefield1}
            style={{ width: "100%" }}
            value={field1}
          >
            <option>
              Select from dropdown*
            </option>
            <option>Session</option>
            <option>Expert</option>
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
