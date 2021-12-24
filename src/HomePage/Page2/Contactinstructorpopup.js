import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { GiShare } from "react-icons/gi";
import MyVerticallyCenteredModal1 from './Modal1'
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { ArrowLeft } from "react-bootstrap-icons";
function MyVerticallyCenteredModal(props) {
    const [modalShow, setModalShow] = useState(false);
    const [popupsharelinkid, setpopupsharelinkid] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [date, setdate] = useState("");
    const [min, setmin] = useState("");
    const [month, setmonth] = useState("");
    const [year, setyear] = useState("");
    const [hour, sethour] = useState("");
    const [event, setevent] = useState("");
    const [session, setsession] = useState("");
    const endpoint = "https://yruyprez2g.execute-api.ap-south-1.amazonaws.com/default/TNGMail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    if (props.data !== undefined) {
        var body = JSON.stringify({
            feedback: [date, month, year, hour, min],
            title: "Contact",
            feedback2: session,
            user: userEmail,
            feedback1: props.data.course_instructor
        });
    }
    const requestOptions = {
        method: "POST",
        body,
    };
    const submit = (event) => {
        if (userEmail !== "") {
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
        else {
            props.onHide();
            Swal.fire({
                title: "<h5 style='color:white'>" + "Discarded" + "</h5>",
                icon: "warning",
                text: 'Unable to send notification.Please Fill in the details.',
                showConfirmButton: false,
                timer: 4000,
                background: "#020312",
                color: "white",
                iconColor: "#F26C4F",
            });
        }
        setUserEmail("")
        setdate("")
    };
    const handleChange = (event) => {
        setUserEmail(event.target.value);
    };
    const handledate = (event) => {
        setdate(event.target.value);
    };
    const handlemonth = (event) => {
        setmonth(event.target.value);
    };
    const handleyear = (event) => {
        setyear(event.target.value);
    };
    const handlehour = (event) => {
        sethour(event.target.value);
    };
    const handlemin = (event) => {
        setmin(event.target.value);
    };
    const timehandle = (event) => {
        setevent(event.target.value);
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
                <div style={{ marginLeft: "5%", marginTop: "20px", marginBottom: "20px", marginRight: "5%" }}><AiFillCloseCircle style={{ color: "#f26c4f", width: "30px", height: "30px", position: "absolute", right: "20px" }} onClick={() => props.onHide()} />
                    <h4>Contant Creator</h4>
                    <select required={true} value={session} onChange={handlesession} style={{ width: "100%" }}>
                        <option selected >Session </option>
                        <option>&nbsp;Want do one on one session</option>
                        <option>&nbsp;Want to ask few questions</option>
                    </select>
                    <label>
                        <input onChange={timehandle} type="checkbox" name="checkbox" value="9" />
                        <span>&nbsp;Can have one on one session any time any day</span>
                    </label>
                    <p style={{ fontSize: "18px" }}>
                        Your Email ID
                        <text style={{ color: "#f26c4f" }}>*</text>
                    </p>
                    <input required={true}
                        onChange={handleChange}
                        value={userEmail}
                        style={{ width: "100%" }}
                    ></input>
                    <h6>Enter preffered date and time for session:</h6>
                    Date:&nbsp;&nbsp;<input value={date} onChange={handledate} className="textbox" type="number" placeholder="DD" />&nbsp;/&nbsp;
                    <input onChange={handlemonth} value={month} className="textbox" type="number" placeholder="MM" />&nbsp;/
                    <input value={year} onChange={handleyear} className="textbox" type="number" placeholder="YY" />
                    <br />
                    Time:&nbsp;<input value={hour} onChange={handlehour} className="textbox" type="number" placeholder="HR" />&nbsp;:&nbsp;
                    <input value={min} onChange={handlemin} className="textbox" type="number" placeholder="Min" />
                    <br />
                    <label>
                        <span>Question 1)&nbsp;</span>
                    </label>
                    <br />
                    <textarea /* onChange={handleChange} */ className="boxtextarea" placeholder="Type Your Questions" ></textarea>
                    <br />
                    <label>
                        <span>Question 2)&nbsp;</span>
                    </label>
                    <br />
                    <textarea /* onChange={handleChange} */ className="boxtextarea" placeholder="Type Your Questions" ></textarea>
                    <br />
                    <label>
                        <span>Question 3)&nbsp;</span>
                    </label>
                    <br />
                    <textarea /* onChange={handleChange} */ className="boxtextarea" placeholder="Type Your Questions" ></textarea>
                    <button
                        onClick={submit}
                        className="button_slide slide_right"
                        style={{ marginTop: "10%", marginLeft: "35%" }}
                    >
                        Submit
                        <ArrowLeft className="button_arrow" />
                    </button>
                </div></Modal.Body>
        </Modal>
    );
}
export default MyVerticallyCenteredModal;
