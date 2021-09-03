import Modal from 'react-bootstrap/Modal';
import React,{ useEffect, useState } from "react";
import {ArrowLeft} from 'react-bootstrap-icons'
import docClient from './../GigsAWS'

function MyVerticallyPopUp(props) {
  const [fees, setFees] = useState(0);
  const [choice, setChoice] = useState("");
  const [hours, setHours] = useState(0);
  const [afile, setAfile] = useState();
  function handleApply() {
    const adata = {
      "GigId": props.gigid,
      "fees": Number(fees),
      "choice": choice,
      "hours": Number(hours),
      "afile": "wwwwwwww.com"
    }
    console.log("/"+props.userid+"/"+props.gigid)
    var paramss = {
      TableName: "UsersTable",
      Key: { "UserID":props.userid },
    };
    docClient.get(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
          UpdateExpression: "set gigsApplications["+(data.Item.gigsApplications.length)+"] = :g",
          ExpressionAttributeValues:{
            ":g":adata,
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
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
           <p style={{fontSize:"18px"}}>Fee quote (in INR) <text style={{color:"#f26c4f"}}>*</text></p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <input min="0" onChange={(e)=>(setFees(e.target.value))} value={fees} style={{width:"40%"}} type="number"/>
              <select onChange={(e)=>(setChoice(e.target.value))} value={choice} style={{width:"50%"}}>
                <option value="" selected disabled>Choose an Option*</option>
                <option value="pp">Per Project</option>
                <option value="pm">Per Month</option>
              </select>
            </div>
           <p style={{marginTop:"10%",fontSize:"18px"}}>No of hours (per week)<text style={{color:"#f26c4f"}}>*</text></p>
           <input min="0" type="number" onChange={(e)=>(setHours(e.target.value))} value={hours} style={{width:"100%",marginTop:"1%"}}/>
           <p style={{marginTop:"10%",fontSize:"18px"}}>Upload File<text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setAfile(e.target.files[0]))} type="file" style={{width:"100%",height:"35px"}}/>
           <button onClick={handleApply} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
         </div>
      </Modal.Body>
      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
