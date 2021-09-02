import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import docClient from '../GigsPage/GigsAWS';

function Personal(props) {
  const [fullName,setFullName]=useState();
  const [dob,setDOB]=useState();
  const [gender,setGender]=useState();
  const [mobile,setMobile]=useState();
  const [quirky,setQuirky]=useState();

  useEffect(() => {
    let paramss = {
      TableName: "UsersTable",
      KeyConditionExpression: "#Uid = :UserID",
      ExpressionAttributeNames: {
        "#Uid": "UserID",
      },
      ExpressionAttributeValues: {
        ":UserID": props.p.subUserId,
      },
    };
    docClient.query(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        setFullName(data.Items[0].Name);
        setDOB(data.Items[0].DOB);
        setGender(data.Items[0].Gender);
        setMobile(data.Items[0].MobileNumber);
        setQuirky(data.Items[0].QuirkyText);
      }
    });
  }, []);

  function handleSubmit(){
    if(fullName!=null && dob!=null && gender!=null && mobile!=null && quirky!=null) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.p.subUserId },
        UpdateExpression: "set DOB = :d, Gender=:g, MobileNumber=:m, QuirkyText=:q",
        ExpressionAttributeValues:{
          ":d":dob,
          ":g":gender,
          ":m":mobile,
          ":q":quirky
        },
        ReturnValues:"UPDATED_NEW"
      }
      console.log(params);
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          props.p.setPercentage(props.p.percentage+20)
        }
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
            <p><span style={{fontSize:"20px"}}>Full Name</span> <br/>(Shakespeare said ‘what’s in a name but we want to know how to address you)</p>
            <p><input value={fullName} onChange={e => setFullName(e.target.value)} style={{width:"100%",height:"35px"}}></input></p>
          </Row>
          <Row>
            <Col style={{marginTop:"2%"}}>
              <p><span style={{fontSize:"20px"}}>Date of birth</span><br/>(We will only wish you on your birthday)</p>
              <input value={dob} onChange={e => setDOB(e.target.value)} type="date" style={{width:"50%",height:"35px"}}></input>
            </Col>
            <Col style={{marginTop:"2%",marginLeft:"10%"}}>
              <p style={{fontSize:"20px"}}>Gender</p>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <p>
                  <input style={{border:"3px-solid-gray"}} value={gender} onChange={e => setGender(e.target.value)} type="radio" name="gender"></input>
                  <label for="html">Male</label><br></br>
                </p>
                <p>
                  <input value={gender} onChange={e => setGender(e.target.value)} type="radio" name="gender"></input>
                  <label for="html">Female</label><br></br>
                </p>
                <p> 
                  <input value={gender} onChange={e => setGender(e.target.value)} type="radio" name="gender"></input>
                  <label for="html">Other</label><br></br>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{marginTop:"2%"}}>
              <p><span style={{fontSize:"20px"}}>Mobile Number</span><br/>(We will only contact you)</p>
              <input value={mobile} onChange={e => setMobile(e.target.value)} style={{width:"22%",height:"35px"}}></input>
            </Col>
          </Row>
          <Row style={{marginTop:"2%"}}>
            <p style={{fontSize:"20px"}}>Something quirky about you?</p>
            <p><input value={quirky} onChange={e => setQuirky(e.target.value)} style={{width:"100%",height:"35px"}}></input></p>
          </Row>
          <button style={{marginTop:"5%"}} onClick={handleSubmit} className="button_slide">Save</button>
        </Container>
      </div>
    );
  }
  
  export default Personal;
  