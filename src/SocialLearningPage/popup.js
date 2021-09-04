import Modal from 'react-bootstrap/Modal';
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
           <p style={{fontSize:"18px"}} >Topic <text style={{color:"#f26c4f"}}>*</text></p>
           <input style={{width:"100%"}} placeholder="ABC"></input>
           <p style={{marginTop:"10%",fontSize:"18px"}}>Hashtags<text style={{color:"#f26c4f"}}>*</text></p>
           <input style={{width:"100%",marginTop:"1%"}} placeholder="Data science" />
           <p style={{marginTop:"10%",fontSize:"18px"}}>Upload File<text style={{color:"#f26c4f"}}>*</text></p>
           <input type="file" />
           
           <button className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
