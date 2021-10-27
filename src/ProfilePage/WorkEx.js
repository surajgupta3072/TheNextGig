import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import Swal from 'sweetalert2'

function WorkEx(props) {
  const [showerr, setShowErr] = useState(false);

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
    if(props.p.wholedata.WorkExperience===undefined){
      setInputFields([{ company:'', months: '', description:'' }])
    }
    else{
      setInputFields(props.p.wholedata.WorkExperience)
    }
  }, []);

  function givereward() {
    if(props.p.wholedata.RewardW===0) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.p.wholedata.UserID },
        UpdateExpression: "set RewardW= :rw",
        ExpressionAttributeValues:{
          ":rw": 20,
        },
        ReturnValues:"UPDATED_NEW"
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          props.p.wholedata.RewardW = data.Attributes.RewardW
          props.p.setWholedata(props.p.wholedata)
          props.p.setPercentage(props.p.wholedata.RewardP + props.p.wholedata.RewardE + props.p.wholedata.RewardW + props.p.wholedata.RewardS + props.p.wholedata.RewardC);
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
          givereward()
          Swal.fire({
            title: "<h5 style='color:white'>" + "Saved" + "</h5>",
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            background: '#020312',
            color: 'white',
            iconColor: "#F26C4F"
          });
          setShowErr(false);
        }
      });
    }
    else {
      setShowErr("First two fields needs to filled");
    }
  }
    return (
      <div>
        <div className="WorkEx_Desktop_view">
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
                <Col><textarea value={iField.description} name="description" onChange={e => handleChangeInput(index, e)} style={{width:"95%",height:"60px", marginLeft:"50px"}}></textarea></Col>
              </Row>
            </div>
            ))}
            <Row onClick={handleAddFields} style={{marginTop:"3%",cursor:"pointer"}}><p style={{textAlign:"end"}}>Add more +</p></Row>
            {showerr!==false && <p style={{color:"red"}}><br/>*{showerr}</p>}
            <button onClick={handleSubmit} className="button_slide">Save</button>
          </Container>
        </div>

        <div className="WorkEx_Mobile_view">
          <Container>
            {inputFields.map((iField,index) => (
              <div key={index} style={{marginTop:"30px"}}>
                <Row><p style={{fontSize:"25px",fontWeight:"bold", padding: "0"}}>Work Experience #{index+1}</p></Row>
                <Row><span style={{fontSize:"18px", padding:"0"}}>Company</span></Row>
                <Row><input value={iField.company} name="company" onChange={e => handleChangeInput(index, e)} style={{height:"35px"}}/></Row>
                <br/>
                <Row><span style={{fontSize:"18px", padding:"0"}}>No of Months</span></Row>
                <Row><input value={iField.months} name="months" onChange={e => handleChangeInput(index, e)} style={{height:"35px"}}/></Row>
                <br/>
                <Row><span style={{fontSize:"18px", padding:"0"}}>Description</span></Row>
                <Row><textarea value={iField.description} name="description" onChange={e => handleChangeInput(index, e)} style={{height:"70px"}}></textarea></Row>
              </div>
            ))}
            <Row onClick={handleAddFields} style={{marginTop:"3%",cursor:"pointer"}}><p style={{textAlign:"end"}}>Add more +</p></Row>
            {showerr!==false && <p style={{color:"red"}}><br/>*{showerr}</p>}
            <div className="button_div">
              <button onClick={handleSubmit} className="button_slide">Save</button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
  
export default WorkEx;
  