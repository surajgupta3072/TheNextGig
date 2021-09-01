import Modal from 'react-bootstrap/Modal';
import './popup.css';
import React from 'react';
import {ArrowLeft} from 'react-bootstrap-icons'

function MyVerticallyPopUp(props) {
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
           <input style={{width:"100%"}}></input>
           <p style={{marginTop:"10%",fontSize:"18px"}}>Recommendation<text style={{color:"#f26c4f"}}>*</text></p>
           <p style={{marginTop:"-15px",fontSize:"15px"}}> (we will try our best to ____)</p>
           <select style={{width:"100%"}}>
                <option selected disabled>Select from dropdown*</option>
                <option>Session</option>
                <option>Expert</option>
            </select>
           <input style={{width:"100%",marginTop:"10%"}} placeholder="Insert text here*" />
           <button className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
