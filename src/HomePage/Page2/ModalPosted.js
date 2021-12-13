import Modal from "react-bootstrap/Modal";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import master from "../../MasterClassPage/Masterclass.json"
function MyVerticallyCenteredModal(props) {
  const [userEmail, setUserEmail] = useState("");
  const [usertng, setUsertng] = useState("");
  const [tngcoming, settngcoming] = useState([])
  const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    feedback: userEmail,
    title: "Keep Me Posted",
    feedback2: usertng,
    user: "",
    feedback1: ""
  });
  const requestOptions = {
    method: "POST",
    body,
  };
  useEffect(() => {
    var list = []
    master.forEach((ele) => {
      if (ele.course_timing === "...Coming Soon") {
        list.push(ele.course_name);
      }
    })
    settngcoming(list);
  }, [])
  const submit = (event) => {
    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in fetch");
        }
        else {
          props.onHide();
          Swal.fire({
            title: "<h5 style='color:white'>" + "Submitted!" + "</h5>",
            icon: "success",
            showConfirmButton: false,
            timer: 4000,
            background: "#020312",
            color: "white",
            iconColor: "#F26C4F",
          });
        }
      })
      .catch((error) => {
        console.error("Failed to send userEmail. Error: ", error);
      });
  };
  const handleChange = (event) => {
    setUserEmail(event.target.value);
  };
  const handletng = (event) => {
    setUsertng(event.target.value);
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
          <h5>We will send an email to you as soon as this TNG Original is live!</h5>
          <p style={{ marginTop: "25px", fontSize: "18px" }}>
            TNG Original <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <select required={true} value={usertng} onChange={handletng} style={{ width: "100%" }}>
            <option selected >TNG Original </option>
            {tngcoming.map(ele => {
              return <option>{ele}</option>
            })}
          </select>
          <p style={{ marginTop: "10%", fontSize: "18px" }}>
            Your Email ID
            <text style={{ color: "#f26c4f" }}>*</text>
          </p>
          <input required={true}
            onChange={handleChange}
            value={userEmail}
            style={{ width: "100%" }}
          ></input>
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
