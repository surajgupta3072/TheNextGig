import Modal from "react-bootstrap/Modal";

function Popupinfovide(props) {
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
        <p style={{ fontSize: "14px", textDecoration: "underline" }}>
          Quick tips to create and upload your video
        </p>
        <ul>
          <li style={{ fontSize: "14px" }}>
            Teach something you are good at or something you've learnt recently
          </li>
          <br />
          <li style={{ fontSize: "14px" }}>
            Talk about it as if you are explaining it to a 5 year old
          </li>
          <br />
          <li style={{ fontSize: "14px" }}>
            Don’t worry about your background or surroundings - just open your
            camera, focus on what you want to say and smile
          </li>
          <br />
          <li style={{ fontSize: "14px" }}>
            While it’s better if the world can see your face while you speak, it
            isn’t mandatory. You may chose to present your screen / record a
            presentation and do a voice-over.
          </li>
        </ul>
        <p style={{ fontSize: "14px" }}>It’s easier than you think :)</p>
        <button
          className="button_slide slide_right"
          style={{ marginTop: "2%", marginLeft: "35%" }}
          onClick={() => props.onHide()}
        >
          Close
        </button>
      </Modal.Body>
    </Modal>
  );
}

export default Popupinfovide;
