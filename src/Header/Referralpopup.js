import Modal from "react-bootstrap/Modal";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";
import Swal from 'sweetalert2'

function NotALearnerModal(props) {
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
    const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
        feedback: `Username:${field1}`,
        feedback1: `PhoneNo:${field2}`,
        feedback2: `Something specific you would like us to know before our conversation:${field3}`,
        title: "User filled form to Reach Out",
        user: data
    });
    const requestOptions = {
        method: "POST",
        body,
    };
    const submit = (event) => {
        event.preventDefault();
        if (data != "" && field1 != "" && field2 != "" && field3 != "") {
            fetch(endpoint, requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error in fetch");
                    }
                    else {
                        props.onHide();
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
                        }).then(props.onHide());
                    }
                })
                .catch((error) => {
                    console.error("Failed to send feedback. Error: ", error);
                });
        }
    };
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