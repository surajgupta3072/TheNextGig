import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import React from 'react';
import {ArrowLeft} from 'react-bootstrap-icons'

function MyVerticallyCenteredModal(props) {
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
           <p style={{marginTop:"10%",fontSize:"18px"}}>What do you want to tell us? <text style={{color:"#f26c4f"}}>*</text></p>
           <input style={{width:"100%",height:"100px"}}></input>
           <button className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyCenteredModal;
