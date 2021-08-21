import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import React, { useState } from 'react';

const options = [
  {value: '1', label: 'Item 1'},
  {value: '2', label: 'Item 2'},
  {value: '3', label: 'Item 3'},
  {value: '4', label: 'Item 4'},
  {value: '5', label: 'Item 5'},
  {value: '6', label: 'Item 6'},
  {value: '7', label: 'Item 7'},
]

function Education(props) {
   const [gradInst,setGradInst]=useState();
   const [gradBranch,setGradBranch]=useState();
   const [gradyear,setGradyear]=useState();
   const [profInst,setProfInst]=useState();
   const [profBranch,setprofBranch]=useState();
   const [profYear,setProfYear]=useState();
   const [pgradInst,setpgradInst]=useState();
   const [pgradBranch,setpGradBranch]=useState();
   const [pgradyear,setpgradyear]=useState();
   function handleSubmit(){
    if(gradBranch!=null && profBranch!=null && pgradBranch!=null){
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
            <p style={{fontSize:"25px",fontWeight:"bold"}}>Graduation</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col> <Select  placeholder="Search..." options={options} className="searchDropdownStyle"/></Col>
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col><input value={gradBranch} onChange={e => setGradBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}}>Professional Degree</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col> <Select placeholder="Search..." options={options} className="searchDropdownStyle"/></Col>
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col><input value={profBranch} onChange={e => setprofBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}}>Post Graduation</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col> <Select placeholder="Search..." options={options} className="searchDropdownStyle"/></Col>
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col>< input value={pgradBranch} onChange={e => setpGradBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><select style={{width:"100%",height:"35px"}}></select></Col>
          </Row>
          <button style={{marginTop:"3%"}} onClick={handleSubmit} className="button_slide">Save</button>
        </Container>
      </div>
    );
  }
  
export default Education;
  