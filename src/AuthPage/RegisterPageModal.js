import Modal from 'react-bootstrap/Modal';
import {ArrowLeft} from 'react-bootstrap-icons'
import './RegisterPageModal.css';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        backdrop="static"
        keyboard={false}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        contentClassName="custom-modal-style"
        className="mobile_view"
        transparent={true}
      >
        <Modal.Body style={{backgroundImage:`url("/wall.png")`,border:"1px solid rgba(255, 255, 255,0.3)",backgroundColor:"#020312"}}>
          <div>
            <p style={{fontSize:"24px"}}>Complete your profile to: </p>
            <p style={{fontSize:"24px",marginLeft:"3%"}}>Congratulations! You have received 399 TNG Learn Coins; redeem coins to unlock TNG Originals. <br/>  For earning more coins, upload videos / blogs under Social Learning</p>
          <div className="popup_pro_back_btn_laptop">
            <div><button onClick={()=>{window.location.href = localStorage.getItem("lastURL")}} style={{width:"100px",paddingLeft:"0px",paddingRight:"0px"}} className="button_slide slide_right">Back<ArrowLeft style={{marginLeft:"5px"}} className='button_arrow'/></button></div> 
            <div><a href="/TNGoriginals"><button style={{width:"100px",paddingLeft:"0px",paddingRight:"0px"}} className="button_slide slide_right">Proceed<ArrowLeft style={{marginLeft:"5px"}} className='button_arrow'/></button></a></div>
          </div>
          <div className="popup_pro_back_btn_mobile"> 
            <div><button onClick={()=>{window.location.href = localStorage.getItem("lastURL")}} className="btn_pop slide_right">Back<ArrowLeft className='button_arrow1'/></button></div>
            <div><a href="/TNGoriginals"><button className="btn_pop slide_right">Proceed<ArrowLeft className='button_arrow1'/></button></a></div>
          </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default MyVerticallyCenteredModal;
