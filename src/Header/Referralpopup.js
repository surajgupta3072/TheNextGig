import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2'

function NotALearnerModal(props) {

    function myClipboard(mycode) {
        Swal.fire({
            title: "<h6 style='color:white'>" + "Referral Code Copied!" + "</h6>",
            showConfirmButton: false,
            timer: 2000,
            background: '#020312',
            color: 'white',
            iconColor: "#F26C4F"
        });
        navigator.clipboard.writeText(mycode);
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
                <div>
                    Referral Code: {props.refcode}
                    <span onClick={() => myClipboard(props.refcode)}>
                        < img style={{ cursor: "pointer", marginLeft: "20px" }} src="copylink_homepage.png" height="15px"></img>
                    </span>
                </div>
            </Modal.Body>
        </Modal >
    );
}

export default NotALearnerModal;