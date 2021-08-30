import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import './ProfilePage.css';

function Personal(props) {
  const [fullName,setFullName]=useState();
  const [dob,setDOB]=useState();
  const [gender,setGender]=useState();
  const [quirky,setQuirky]=useState();
  function handleSubmit(){
    if(fullName!=null && dob!=null && gender!=null && quirky!=null){
      props.p.setPercentage(props.p.percentage+20)
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
  