import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import './ProfilePage.css';

function Personal(props) {
  const [fullName,setFullName]=useState();
  const [dob,setDOB]=useState();
  const [gender,setGender]=useState();
  const [mobile,setMobile]=useState();
  const [quirky,setQuirky]=useState();
  const [refcode, setRefCode] = useState("");
  const [showerr, setShowErr] = useState(false);

  useEffect(() => {
    document.getElementsByName("gender").forEach(e=>{
      e.checked = e.value===props.p.wholedata.Gender ? true: false;
    })
    setFullName(props.p.wholedata.FullName);
    setDOB(props.p.wholedata.DOB);
    setGender(props.p.wholedata.Gender);
    setMobile(props.p.wholedata.MobileNumber);
    setQuirky(props.p.wholedata.QuirkyText);
  }, []);

  function RefCodeSubmit() {
    if(refcode!==props.p.wholedata.ReferralCode) {
      var params = {
        TableName: "UsersTable"
      };
      docClient.scan(params, function (err, data) {
        if (err) {
          console.log(err);
        } 
        else {
          var refstatus = false;
          for (var e of data.Items) {
            if(e.ReferralCode===refcode) {
              var refstatus = true;
              var params = {
                TableName: "UsersTable",
                Key: { "UserID": e.UserID },
                ProjectionExpression: "TotalRewards",
              };
              docClient.get(params, function(err, data) {
                if (err) {
                  console.log(err);
                } 
                else {
                  var paramss = {
                    TableName: "UsersTable",
                    Key: { "UserID": e.UserID },
                    UpdateExpression: "set TotalRewards = :tr",
                    ExpressionAttributeValues:{
                      ":tr": data.Item.TotalRewards + 50,
                    },
                    ReturnValues:"UPDATED_NEW"
                  }
                  docClient.update(paramss, function (err, data) {
                    if (err) {
                      console.log(err);
                    } 
                    else {
                      var paramss = {
                        TableName: "UsersTable",
                        Key: { "UserID": props.p.wholedata.UserID },
                        UpdateExpression: "set TotalRewards = :tr, ReferredBy = :rb",
                        ExpressionAttributeValues:{
                          ":tr": props.p.wholedata.TotalRewards + 50,
                          ":rb": e.UserID,
                        },
                        ReturnValues:"UPDATED_NEW"
                      }
                      docClient.update(paramss, function (err, data) {
                        if (err) {
                          console.log(err);
                        } 
                        else {
                          window.location.reload();
                        }
                      });
                    }
                  });
                }
              });
              break;
            }
          }
          if(refstatus===false) {
            setShowErr("Referral Code is Invalid");
            setRefCode("");
          }
        }
      });
    }
    else {
      setRefCode("");
    }
  }

  function givereward() {
    if(props.p.wholedata.RewardP===0) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.p.wholedata.UserID },
        UpdateExpression: "set RewardP= :rp",
        ExpressionAttributeValues:{
          ":rp": 20,
        },
        ReturnValues:"UPDATED_NEW"
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } 
        else {
          props.p.wholedata.RewardP = data.Attributes.RewardP
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
    if(dob!=="" && gender!=="" && mobile!=="" && quirky!=="") {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.p.wholedata.UserID },
        UpdateExpression: "set DOB = :d, Gender=:g, MobileNumber=:m, QuirkyText=:q",
        ExpressionAttributeValues:{
          ":d":dob,
          ":g":gender,
          ":m":mobile,
          ":q":quirky
        },
        ReturnValues:"UPDATED_NEW"
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          props.p.wholedata.DOB = data.Attributes.DOB
          props.p.wholedata.Gender = data.Attributes.Gender
          props.p.wholedata.MobileNumber = data.Attributes.MobileNumber
          props.p.wholedata.QuirkyText = data.Attributes.QuirkyText
          props.p.setWholedata(props.p.wholedata)
          givereward()
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
            <p><span style={{fontSize:"20px"}}>Full Name</span></p>
            <p><input disabled value={fullName} style={{width:"100%",height:"35px"}}></input></p>
          </Row>
          <Row>
            <Col >
              <p><span style={{fontSize:"20px"}}>Date of birth</span></p>
              <input value={dob} onChange={e => setDOB(e.target.value)} type="date" style={{width:"50%",height:"35px"}}></input>
            </Col>
            <Col  className= "Gender_col">
              <p style={{fontSize:"20px"}}>Gender</p>
              <div onChange={e => setGender(e.target.value)} style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                  <input value="male" type="radio" name="gender"/>&nbsp;Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input value="female" type="radio" name="gender"/>&nbsp;Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input value="other" type="radio" name="gender"/>&nbsp;Other
              </div>
            </Col>
          </Row>
          <Row style={{marginTop:"2%"}}>
            <p style={{fontSize:"20px"}}>Something quirky about you?</p>
            <p><input value={quirky} onChange={e => setQuirky(e.target.value)} style={{width:"100%",height:"35px"}}></input></p>
          </Row>
          <div className="button_div">
          <div><button style={{marginTop:"10%"}} onClick={handleSubmit} className="button_slide">Save</button></div>
          </div>
          {props.p.wholedata.ReferredBy==="" &&
            <Row style={{marginTop:"2%"}}>
              <Col xs={6}>
                <p style={{fontSize:"20px"}}>Referral Code</p>
                <p style={{margin:"0"}}><input value={refcode} onChange={e => setRefCode(e.target.value)} style={{width:"90%",height:"35px"}}></input></p>
                {showerr!==false && <p style={{color:"red"}}><br/>*{showerr}</p>}
              </Col>
              <Col xs={4}>
                <button style={{marginTop:"17%"}} onClick={RefCodeSubmit}>Save</button>
              </Col>
            </Row>
          }
          <Row>
            <Col style={{marginTop:"2%"}}>
              <p><span style={{fontSize:"20px"}}>Mobile Number</span></p>
              <input value={mobile} onChange={e => setMobile(e.target.value)} style={{height:"35px"}} className="Mobilenum_input"></input>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Personal;
  