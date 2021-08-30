import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

function CvPitch(props) {
  const [cv,SetCV]=useState();
  const [project,setProject]=useState();
  function handleSubmit(){
    if(project!=null){
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
         <Col md={7}><p style={{fontSize:"25px",fontWeight:"bold"}}>CV</p></Col>
         <Col><input type="file" style={{width:"100%",height:"35px"}}/></Col>
       </Row>
       <br/>
       <button style={{marginLeft:"60%"}} onClick={handleSubmit} className="button_slide">Save</button>
       <br/><br/><br/>
       <p style={{fontSize:"25px",fontWeight:"bold"}}>Other Documents</p>
       <Row>
         <Col md={7}><p style={{fontSize:"25px"}}>Project Name</p></Col>
         <Col><input value={project} onChange={e => setProject(e.target.value)} style={{width:"100%",height:"35px"}}/></Col>
       </Row>
      </Container>
    </div>
  );
}

export default CvPitch;
