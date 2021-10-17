import Modal from 'react-bootstrap/Modal';
import {ArrowLeft} from 'react-bootstrap-icons'
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from 'sweetalert2'

function MyVerticallyPopUp(props) {
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");
  const [field2, setfield2] = useState("");
  const handlefield2 = (event) => {
    setfield2(event.target.value);
  };
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleid = (event) => {
    setData(event.target.value);
  };
  const SERVICE_ID = "service_mztzudb";
  const TEMPLATE_ID = "template_4od9vgl";
  const submit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { feedback,field2, Details: data },
        "user_LuNukIHe37LdAF6nNkxao"
      )
      .then((res) => {
        if (res.status === 200) {
          setFeedback("");
          setData("");
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
      <Modal.Body style={{backgroundColor:"#020312", border: "1px solid #f26c4f"}}>
         <div style={{padding:"7%"}}>
           <p style={{fontSize:"18px"}}>Email / Mobile Number <text style={{color:"#f26c4f"}}>*</text></p>
           <p style={{marginTop:"-15px",fontSize:"15px"}}>(we promise we won't spam)</p>
           <input  
            onChange={handleid}
            value={data}
            style={{width:"100%"}}></input>
           <p style={{marginTop:"10%",fontSize:"18px"}}>Recommendation<text style={{color:"#f26c4f"}}>*</text></p>
           <p style={{marginTop:"-15px",fontSize:"15px"}}> (we will try our best to ____)</p>
           <select 
              onChange={handlefield2}
              style={{ width: "100%" }}
              value={field2}
              style={{width:"100%"}}>
                <option selected disabled>Select from dropdown*</option>
                <option>Reccomendation</option>
                <option>Feedback</option>
            </select>
           <input  
            onChange={handleChange}
            value={feedback}
            style={{width:"100%",marginTop:"10%"}} 
            placeholder="Insert text here*" />
           <button onClick={submit} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
