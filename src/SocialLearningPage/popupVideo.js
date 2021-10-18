import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import {ArrowLeft} from 'react-bootstrap-icons'
import S3 from 'react-aws-s3';
import crypto from 'crypto';
import docClient from '../GigsPage/GigsAWS';
import Swal from 'sweetalert2'

const config = {bucketName: "socialvideoslearn", region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY};
const ReactS3Client = new S3(config);

function MyVerticallyPopUp(props) {
    const [topic,setTopic]=useState("");
    const [creds,setCreds]=useState("");
    const [hashtag,setHashtag]=useState("");
    const [vfile,setVfile]=useState();
    const [showerr, setShowErr] = useState(false);

    function handleApply() {
      if(topic!=="" && creds!=="" && hashtag!=="" && vfile!==undefined) {
        ReactS3Client.uploadFile(vfile, vfile.name).then(data => {
          const adata = {
            "VideoID": crypto.randomBytes(8).toString("hex"),
            "VideoTopic": topic,
            "VideoCreds": creds,
            "VideoUsername": props.userid.attributes.name,
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
                Key: { "UserID":props.userid.username },
                ProjectionExpression: "SocialLearningVideosUploaded",
              };
              docClient.get(params, function(err, data) {
                if (err) {
                  console.log(err);
                } else {
                  var params = {
                    TableName: "UsersTable",
                    Key: { "UserID":props.userid.username },
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
                      props.onHide();
                      Swal.fire({
                        title: "<h5 style='color:white'>" + "Submitted!" + "</h5>",
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000,
                        background: '#020312',
                        color: 'white',
                        iconColor: "#F26C4F"
                      }).then(()=>window.location.reload());
                      // alert("VIDEO POSTED");
                      // window.location.reload();
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
           <p style={{marginTop:"10%",fontSize:"18px"}} >Credentials <text style={{color:"#f26c4f"}}>*</text><text style={{color:"#f26c4f", fontSize:"14px"}}>(Highlight relevant creds)</text></p>
           <input onChange={(e)=>(setCreds(e.target.value))} value={creds} style={{width:"100%"}} placeholder="Founder of TheNextGig"></input>
           <p style={{marginTop:"10%",fontSize:"18px"}}>Hashtags <text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setHashtag(e.target.value))} value={hashtag} style={{width:"100%",marginTop:"1%"}} placeholder="datascience" />
           <p style={{marginTop:"10%",fontSize:"18px"}}>Upload Video <text style={{color:"#f26c4f"}}>*</text></p>
           <input onChange={(e)=>(setVfile(e.target.files[0]))} type="file"/>
           <button onClick={handleApply} className="button_slide slide_right" style={{marginTop:"10%",marginLeft:"30%"}}>Submit<ArrowLeft className='button_arrow'/></button>
           {showerr!==false && <p style={{color:"red", textAlign:"center"}}><br/>*{showerr}</p>}
         </div>
      </Modal.Body>  

      </Modal>
    );
  }
  

export default MyVerticallyPopUp;
