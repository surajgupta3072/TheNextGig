import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import S3 from 'react-aws-s3';
import Swal from 'sweetalert2';

const config = {bucketName: "userscv", region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY};
const ReactS3Client = new S3(config);

function CvPitch(props) {
  const [prevgigs, setPrevgigs]=useState([]);
  const [cv, setCV]=useState();
  const [cvlink, setCvlink]=useState("");
  const [showerr, setShowErr] = useState(false);

  useEffect(() => {
    if(props.p.wholedata.CVlink!==undefined)
      setCvlink(props.p.wholedata.CVlink);
    if(props.p.wholedata.gigsApplications!==undefined)
      setPrevgigs(props.p.wholedata.gigsApplications)
  }, []);

  function givereward() {
    if(props.p.wholedata.RewardC===0) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.p.wholedata.UserID },
        UpdateExpression: "set RewardC= :rc",
        ExpressionAttributeValues:{
          ":rc": 20,
        },
        ReturnValues:"UPDATED_NEW"
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        }
        else {
          var paramss = {
            TableName: "UsersTable",
            Key: { "UserID": props.p.wholedata.UserID },
            ProjectionExpression: "TotalRewards",
          };
          docClient.get(paramss, function(err, data) {
            if (err) {
              console.log(err);
            } 
            else {
              var paramss = {
                TableName: "UsersTable",
                Key: { "UserID": props.p.wholedata.UserID },
                UpdateExpression: "set TotalRewards = :tr",
                ExpressionAttributeValues:{
                  ":tr": data.Item.TotalRewards + 20,
                },
                ReturnValues:"UPDATED_NEW"
              }
              docClient.update(paramss, function (err, data) {
                if (err) {
                  console.log(err);
                }
              });
            }
          });
        }
      });
    }
  }

  function handleSubmit(){
    if(cv!==undefined) {
      config.dirName = props.p.wholedata.UserID
      ReactS3Client.uploadFile(cv, cv.name).then(data => {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.p.wholedata.UserID },
          UpdateExpression: "set CVlink = :cv",
          ExpressionAttributeValues:{
            ":cv": data.location,
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            props.p.wholedata.CVlink = data.Attributes.CVlink;
            props.p.setWholedata(props.p.wholedata);
            givereward();
            Swal.fire({
              title: "<h5 style='color:white'>" + "Saved" + "</h5>",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000,
              background: '#020312',
              color: 'white',
              iconColor: "#F26C4F"
            }).then(()=> window.location.href="/profile");
          }
        });
      });
    }
    else{
      setShowErr("Upload any valid File");
    }
  }

  return (
    <div>
      <Container style={{marginTop:"5%"}}>
       <Row>
          <Col md={7}>
           <p style={{fontSize:"25px",fontWeight:"bold"}}>CV</p>
           {cvlink!=="" && <a target="_blank" rel="noreferrer" href={cvlink} style={{fontSize:"14px", color:"#F26C4F"}}>Previous Updated Resume</a>}
          </Col>
         <Col><input accept=".doc, .docx, .pdf, .pages" onChange={(e)=>setCV(e.target.files[0])} type="file" style={{height:"35px"}}/></Col>
       </Row>
       {showerr!==false && <p style={{color:"red"}}><br/>*{showerr}</p>}
       <button style={{marginLeft:"5%",marginTop:"5%"}} onClick={handleSubmit} className="button_slide">Save</button>
       <br/><br/><br/>
       <p style={{fontSize:"25px",fontWeight:"bold"}}>Past Applications</p>
       {prevgigs.map(single=>
       <Row>
         <Col md={7}><p style={{fontSize:"24px"}}>{single.GigName}</p></Col>
         <Col style={{display:"flex", alignItems:"center"}}><a target="_blank" rel="noreferrer" href={single.upload} style={{fontSize:"16px", color:"#F26C4F"}}>{single.upload.split("----")[1]}</a></Col>
       </Row>
       )}
      </Container>
    </div>
  );
}

export default CvPitch;
