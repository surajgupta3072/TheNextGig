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
           <p style={{fontSize:"22px", fontStyle: "bold"}}>Name of the session</p>
           <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize:"18px"}}>
                <p>Price (in INR)</p>
                <p>xxx</p>
           </div>
           <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#f26c4f", fontSize:"18px"}}>
                <p>Less: Reward <br/> points</p>
                <p>(xxx)</p>
           </div>
           <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
           <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize:"18px"}}>
                <p>Net payable <br/> amount</p>
                <p>xxx</p>
           </div>
           <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize:"18px"}}>
                <button className="button_slide slide_right" style={{marginTop:"10%"}}>Back<ArrowLeft className='button_arrow'/></button>
                <button className="button_slide slide_right" style={{marginTop:"10%"}}>Proceed<ArrowLeft className='button_arrow'/></button>
           </div>
           
           
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
