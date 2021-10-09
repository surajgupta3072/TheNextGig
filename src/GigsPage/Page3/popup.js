import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import {ArrowLeft} from 'react-bootstrap-icons';
import docClient from './../GigsAWS';
import S3 from 'react-aws-s3';

const config = {bucketName: process.env.REACT_APP_BUCKET_NAME, region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY};
const ReactS3Client = new S3(config);

function MyVerticallyPopUp(props) {
  const [fees, setFees] = useState(0);
  const [choice, setChoice] = useState("");
  const [hours, setHours] = useState(0);
  const [afile, setAfile] = useState();
  const [showerr, setShowErr] = useState(false);

  function handleApply() {
    if(fees!=0 && choice!=="" && hours!=0 && afile!==undefined) {
      config.dirName = props.userid
      ReactS3Client.uploadFile(afile, props.gigid+"----"+afile.name).then(data => {
        const adata = {
          "GigId": props.gigid,
          "GigName": props.gigname,
          "fees": Number(fees),
          "choice": choice,
          "hours": Number(hours),
          "upload": data.location
        }
        var paramss = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
          ProjectionExpression: "gigsApplications",
        };
        docClient.get(paramss, function(err, data) {
          if (err) {
            console.log(err);
          } 
          else {
            var params = {
              TableName: "UsersTable",
              Key: { "UserID": props.userid },
              UpdateExpression: "set gigsApplications["+data.Item.gigsApplications.length.toString()+"] = :g",
              ExpressionAttributeValues:{
                ":g":adata,
              },
              ReturnValues:"UPDATED_NEW"
            }
            docClient.update(params, function (err, data) {
              if (err) {
                console.log(err);
              } 
              else {
                var paramss = {
                  TableName: "GigsTable",
                  Key: { "GigId": props.gigid },
                  ProjectionExpression: "ApplicationsUserID",
                };
                docClient.get(paramss, function(err, data) {
                  if (err) {
                    console.log(err);
                  } 
                  else {
                    var params = {
                      TableName: "GigsTable",
                      Key: { "GigId": props.gigid },
                      UpdateExpression: "set ApplicationsUserID["+data.Item.ApplicationsUserID.length.toString()+"] = :al",
                      ExpressionAttributeValues:{
                        ":al": props.userid,
                      },
                      ReturnValues:"UPDATED_NEW"
                    }
                    docClient.update(params, function (err, data) {
                      if (err) {
                        console.log(err);
                      } 
                      else {
                        alert("APPLIED SUCCESSFULLY")
                        window.location.href="/gigs"
                      }
                    });
                  }
                });
              }
            });
          }
        });
      });
    }
    else {
      setShowErr("All Fields are mandatory");
    }
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
           {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
         </div>
      </Modal.Body>
      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
