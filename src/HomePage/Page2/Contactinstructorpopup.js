import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { ArrowLeft } from "react-bootstrap-icons";

function MyVerticallyCenteredModal(props) {
    const [userEmail, setUserEmail] = useState("");
    const [question, setquestion] = useState("");
    const [session, setsession] = useState("");
    const [caution, setcaution] = useState("")
    const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    if (props.data !== undefined) {
        var val, val1, val2;
        if (props.data.VideoUsername === undefined) {
            val1 = props.data.course_instructor;
        }
        else {
            val1 = props.data.VideoUsername;
        }
        if (props.data.VideoTopic === undefined) {
            val = props.data.course_name;
        }
        else {
            val = props.data.VideoTopic;
        }
        if (session === "Ask a specific question") {
            val2 = session;
        }
        else {
            val2 = "Request for 30 mins 1-1 session"
        }
        var body = JSON.stringify({
            feedback: question,
            title: "Contact",
            feedback2: val2,
            user: userEmail,
            feedback1: [val, val1]
        });
    }
    const requestOptions = {
        method: "POST",
        body,
    };
    const submit = (event) => {
        if (userEmail !== "" && session !== "") {
            if (session === "Ask a specific question" && question === "") {
                setcaution("Please fill in the details **")
            }
            else {
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
            }
        }
        else {
            setcaution("Please fill in the details **")
        }
        if (question !== "")
            setUserEmail("")
    };
    const handleChange = (event) => {
        setUserEmail(event.target.value);
    };
    const handlequestion = (event) => {
        setquestion(event.target.value);
    };
    const handlesession = (event) => {
        setsession(event.target.value);
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
                style={{ padding: "0%", backgroundColor: "#020312", border: "1px solid #f26c4f" }}
            >
                <div style={{ marginLeft: "5%", marginTop: "10px", marginBottom: "20px", marginRight: "5%" }}><AiFillCloseCircle style={{ color: "#f26c4f", width: "30px", height: "30px", position: "absolute", right: "5px" }} onClick={() => props.onHide()} />
                    <p style={{ justifyContent: "center", fontSize: "18px" }}>Connect with expert</p>
                    <select required={true} value={session} onChange={handlesession} style={{ width: "100%" }}>
                        <option selected >Please select an option</option>
                        <option>Ask a specific question</option>
                        <option>Request for 30 mins 1-1 session</option>
                    </select>
                    <p style={{ fontSize: "18px", marginTop: "10px" }}>
                        Your Email ID
                        <text style={{ color: "#f26c4f" }}>*</text>
                    </p>
                    <input required={true}
                        type="email"
                        onChange={handleChange}
                        value={userEmail}
                        style={{ width: "100%" }}
                    ></input>
                    {session === "Ask a specific question" ?
                        <><label>
                            <span>Question&nbsp;</span>
                        </label>
                            <textarea onChange={handlequestion} className="boxtextarea" placeholder="Type Your Questions" ></textarea></> : null}
                    <p style={{ color: "red" }}>{caution}</p>
                    <button
                        onClick={submit}
                        className="button_slide slide_right btn_popup"
                        style={{ marginLeft: "35%" }}
                    >
                        Submit
                        <ArrowLeft className="button_arrow" />
                    </button>
                </div></Modal.Body>
        </Modal>
    );
}
export default MyVerticallyCenteredModal;
