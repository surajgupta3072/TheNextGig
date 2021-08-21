import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

function WorkEx(props) {
  const [inputFields, setInputFields] = useState([
    { company:'', months: '', description:'' },
  ]);
  const handleAddFields = () => {
    setInputFields([...inputFields, { company:'', months: '', description:'' }])
  }
  function handleSubmit(){
    props.p.setPercentage(props.p.percentage+20)
  }
    return (
      <div>
        <Container style={{marginTop:"5%"}}>
        {inputFields.map((inputField,index) => (
          <div style={{marginBottom:"5%"}}>
            <Row><p style={{fontSize:"25px",fontWeight:"bold"}}>Work Ex {index+1}</p></Row>
            <Row>
              <Col style={{display:"flex",flexDirection:"row"}}>
              <p style={{fontSize:"18px",marginRight:"10%"}}>Company</p>
              <input  style={{width:"80%",height:"35px"}}></input>
              </Col>
              <Col style={{display:"flex",flexDirection:"row"}}>  
              <p style={{fontSize:"18px", width:"50%"}}>No of Months</p>
              <input  style={{width:"100%",height:"35px"}}></input>
              </Col>
            </Row>
            <Row style={{marginTop:"5%"}}>
              <Col md={2}><p style={{fontSize:"18px"}}>Description</p></Col>
              <Col><textarea style={{width:"100%",height:"90px"}}></textarea></Col>
            </Row>
          </div>
          ))}
          <Row onClick={handleAddFields} style={{marginTop:"3%",cursor:"pointer"}}><p style={{textAlign:"end"}}>Add more +</p></Row>
          <button onClick={handleSubmit} className="button_slide">Save</button>
        </Container>
      </div>
    );
  }
  
export default WorkEx;
  