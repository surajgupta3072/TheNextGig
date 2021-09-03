import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState,useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';

function WorkEx(props) {
  const [inputFields, setInputFields] = useState([
    { company:'', months: '', description:'' },
  ]);

  const handleChangeInput = (index,e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { company:'', months: '', description:'' }])
  }

  useEffect(() => {
    if(props.p.wholedata.WorkExperience.length === 0){
      setInputFields([{ company:'', months: '', description:'' }])
    }
    else{
      setInputFields(props.p.wholedata.WorkExperience)
    }
  }, []);

  function handleSubmit(){
    if(inputFields[0].company!=='' && inputFields[0].months!=='') {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.p.wholedata.UserID },
        UpdateExpression: "set WorkExperience=:wex",
        ExpressionAttributeValues:{
          ":wex":inputFields
        },
        ReturnValues:"UPDATED_NEW"
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          props.p.wholedata.WorkExperience = data.Attributes.WorkExperience
          props.p.setWholedata(props.p.wholedata)
          props.p.setPercentage(props.p.percentage+20)
        }
      });
    }
  }
    return (
      <div>
        <Container style={{marginTop:"5%"}}>
        {inputFields.map((iField,index) => (
          <div key={index} style={{marginBottom:"5%"}}>
            <Row><p style={{fontSize:"25px",fontWeight:"bold"}}>Work Experience #{index+1}</p></Row>
            <Row>
              <Col style={{display:"flex",flexDirection:"row"}}>
              <p style={{fontSize:"18px",marginRight:"10%"}}>Company</p>
              <input value={iField.company} name="company" onChange={e => handleChangeInput(index, e)} style={{width:"80%",height:"35px"}}/>

              </Col>
              <Col style={{display:"flex",flexDirection:"row"}}>  
              <p style={{fontSize:"18px", width:"50%"}}>No of Months</p>
              <input value={iField.months} name="months" onChange={e => handleChangeInput(index, e)} style={{width:"100%",height:"35px"}}/>
              </Col>
            </Row>
            <Row style={{marginTop:"5%"}}>
              <Col md={1}><p style={{fontSize:"18px"}}>Description</p></Col>
              <Col><textarea value={iField.description} name="description" onChange={e => handleChangeInput(index, e)} style={{width:"95%",height:"90px", marginLeft:"50px"}}></textarea></Col>
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
  