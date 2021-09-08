import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import S3 from 'react-aws-s3';

const config = {bucketName: "userscv", region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY};
const ReactS3Client = new S3(config);

function CvPitch(props) {
  const [prevgigs, setPrevgigs]=useState([]);
  const [cv, setCV]=useState();
  const [cvlink, setCvlink]=useState("");

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
          window.location.href="/profile";
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
            props.p.wholedata.CVlink = data.Attributes.CVlink
            props.p.setWholedata(props.p.wholedata)
            givereward()
          }
        });
      });
    }
    else{
      console.warn("Details not filled")
    }
  }

  return (
    <div>
      <Container style={{marginTop:"5%"}}>
       <Row>
          <Col md={7}>
           <p style={{fontSize:"25px",fontWeight:"bold"}}>CV</p>
           {cvlink!=="" && <a target="_blank" href={cvlink} style={{fontSize:"14px", color:"#F26C4F"}}>Previous Updated Resume</a>}
          </Col>
         <Col><input onChange={(e)=>setCV(e.target.files[0])} type="file" style={{width:"100%",height:"35px"}}/></Col>
       </Row>
       <button style={{marginLeft:"60%"}} onClick={handleSubmit} className="button_slide">Save</button>
       <br/><br/><br/>
       <p style={{fontSize:"25px",fontWeight:"bold"}}>Past Applications</p>
       {prevgigs.map(single=>
       <Row>
         <Col md={7}><p style={{fontSize:"24px"}}>{single.GigName}</p></Col>
         <Col style={{display:"flex", alignItems:"center"}}><a target="_blank" href={single.upload} style={{fontSize:"16px", color:"#F26C4F"}}>{single.upload.split("----")[1]}</a></Col>
       </Row>
       )}
      </Container>
    </div>
  );
}

export default CvPitch;
