import Modal from 'react-bootstrap/Modal';
import {ArrowLeft} from 'react-bootstrap-icons'
import './RegisterPageModal.css';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        contentClassName="custom-modal-style"
        className="mobile_view"
        transparent={true}
      >
        <Modal.Body style={{backgroundColor:"#020312", border: "1px solid #f26c4f"}}>
          <div>
            <p style={{fontSize:"24px"}}>Complete your profile to: </p>
            <p style={{fontSize:"24px",marginLeft:"3%"}}>1. Earn <text style={{color:"#f26c4f"}}>reward points </text> (redeem them for masterclasses)<br/>2. Increase your chances of scoring a <text style={{color:"#f26c4f"}}> gig, project or job</text></p>
          <div className="popup_pro_back_btn_laptop"> <div> <a  href="/SocialLearning"><button className="button_slide slide_right">Back<ArrowLeft className='button_arrow'/></button></a></div>
           <div><a href="/profile"><button className="button_slide slide_right">Proceed<ArrowLeft className='button_arrow'/></button></a></div>
          </div>
          <div className="popup_pro_back_btn_mobile"> <div style={{marginBottom:"20px"}}> <a  href="/SocialLearning"><button className="btn_pop slide_right">Back<ArrowLeft className='button_arrow1'/></button></a></div>
           <div><a href="/profile"><button className="btn_pop slide_right">Proceed<ArrowLeft className='button_arrow1'/></button></a></div>
          </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default MyVerticallyCenteredModal;
