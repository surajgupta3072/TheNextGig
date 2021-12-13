import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { GiShare } from "react-icons/gi";
import MyVerticallyCenteredModal1 from './Modal1'
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

function MyVerticallyCenteredModal(props) {
  console.log(props);
  const [modalShow, setModalShow] = useState(false);
  const [popupsharelinkid, setpopupsharelinkid] = useState("");

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
        style={{ padding: "0%", backgroundColor: "#020312", border: "1px solid #f26c4f" }}
      >
        <div style={{ padding: "0%", margin: "auto" }}>
          <AiFillCloseCircle onClick={() => props.onHide()} style={{ width: "30px", height: "30px", color: "rgb(242, 108, 79)", cursor: "pointer", marginLeft: "97%" }} />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <video style={{ margin: "auto" }} width="1220px" height="602px" src={props.Link} controls controlsList="nodownload" onContextMenu={e => e.preventDefault()} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{props.Topic}</h6>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{props.Username}</p>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{props.Creds}</p>
            </div>
            <div className="text" style={{ padding: "0", margin: "0", color: "#000", fontSize: "18px", cursor: "pointer" }}>
              <button style={{ marginLeft: "0%", border: "0px", color: "rgb(242, 108, 79)", backgroundColor: "transparent", borderRadius: "3px", fontSize: "18px" }} onClick={() => { setModalShow(true); setpopupsharelinkid(props.VideoID) }}>
                Share <GiShare style={{ width: "20px", height: "20px" }} /></button>
              <MyVerticallyCenteredModal1
                show={modalShow}
                VideoID={popupsharelinkid}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
