import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react';
import {ArrowLeft} from 'react-bootstrap-icons'
import S3 from 'react-aws-s3';
import crypto from 'crypto';
import docClient from '../GigsPage/GigsAWS';

const config = {bucketName: "socialvideoslearn", region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY};
const ReactS3Client = new S3(config);

function MyVerticallyPopUp(props) {
    const [topic,setTopic]=useState("");
    const [hashtag,setHashtag]=useState("");
    const [vfile,setVfile]=useState();
    const [showerr, setShowErr] = useState(false);

    function handleApply() {
      if(topic!=="" && hashtag!=="" && vfile!==undefined) {
        ReactS3Client.uploadFile(vfile, vfile.name).then(data => {
          const adata = {
            "VideoID": crypto.randomBytes(8).toString("hex"),
            "VideoTopic": topic,
            "VideoHashtags": hashtag,
            "VideoLink": data.location,
            "isApproved": false
          }
          var paramss = {
            TableName: "VideosTable",
            Item: adata
          };
          docClient.put(paramss, function(err, data) {
            if (err) {
              console.log(err);
            } 
            else {
              var params = {
                TableName: "UsersTable",
                Key: { "UserID":props.userid },
                ProjectionExpression: "SocialLearningVideosUploaded",
              };
              docClient.get(params, function(err, data) {
                if (err) {
                  console.log(err);
                } else {
                  var params = {
                    TableName: "UsersTable",
                    Key: { "UserID":props.userid },
                    UpdateExpression: "set SocialLearningVideosUploaded["+data.Item.SocialLearningVideosUploaded.length.toString()+"] = :slv",
                    ExpressionAttributeValues:{
                      ":slv":adata["VideoID"],
                    },
                    ReturnValues:"UPDATED_NEW"
                  }
                  docClient.update(params, function (err, data) {
                    if (err) {
                      console.log(err);
                    } else {
                      alert("VIDEO POSTED")
                      window.location.reload();
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
           <p style={{fontSize:"18px"}} >Topic <text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setTopic(e.target.value))} value={topic} style={{width:"100%"}} placeholder="ABC"></input>
           <p style={{marginTop:"10%",fontSize:"18px"}}>Hashtags<text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setHashtag(e.target.value))} value={hashtag} style={{width:"100%",marginTop:"1%"}} placeholder="datascience" />
           <p style={{marginTop:"10%",fontSize:"18px"}}>Upload Video<text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setVfile(e.target.files[0]))} type="file"/>
           <button onClick={handleApply} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
           {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
