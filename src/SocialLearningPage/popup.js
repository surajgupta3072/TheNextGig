import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react';
import {ArrowLeft} from 'react-bootstrap-icons'
// import S3 from 'react-aws-s3';

// const config = {bucketName: "socialvideoslearn", region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY};
// const ReactS3Client = new S3(config);

function MyVerticallyPopUp(props) {
    const [topic,setTopic]=useState();
    const [hash,setHash]=useState();
    const [file,setFile]=useState();
    
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
           <input onChange={(e)=>(setTopic(e.target.value))} value={topic} style={{width:"100%"}} placeholder="ABC"></input>
           <p style={{marginTop:"10%",fontSize:"18px"}}>Hashtags<text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setHash(e.target.value))} value={hash} style={{width:"100%",marginTop:"1%"}} placeholder="datascience" />
           <p style={{marginTop:"10%",fontSize:"18px"}}>Upload File<text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setFile(e.target.files[0]))} type="file"/>
           <button className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
