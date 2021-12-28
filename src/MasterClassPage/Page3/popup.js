import Modal from "react-bootstrap/Modal";
import { ArrowLeft } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import './Page3.css'

function MyVerticallyPopUp(props) {

  function getNotified() {
    const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      feedback: `Uid:${props.id}`,
      user: props.email,
      title: "Reach Out For Minutes",
      feedback1: props.name,
      feedback2: props.cname,
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
          Swal.fire({
            title:
              "<h5 style='color:white'>" +
              "NOTIFIED!" +
              "</h5>",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            background: "#020312",
            color: "white",
            iconColor: "#F26C4F",
          })
        }
      })
      .catch((error) => {
        console.error("Failed to send feedback. Error: ", error);
      });
    props.onHide();
  }

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
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px" }}>Sorry! You don't have enough minute balance!</p>
            <button
              onClick={getNotified}
              className="button_slide_popuppage3 slide_right"
            >
              Reach out to us!
              <ArrowLeft className="button_arrow" />
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyPopUp;
