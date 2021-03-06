import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Select from 'react-select';
import { useState,useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import Swal from 'sweetalert2'

function Education(props) {
   const [gradInst, setGradInst] = useState("");
   const [gradBranch,setGradBranch]=useState("");
   const [gradyear,setGradyear]=useState("");
   const [profInst,setProfInst]=useState("");
   const [profBranch,setprofBranch]=useState("");
   const [profyear,setProfyear]=useState("");
   const [pgradInst,setpgradInst]=useState("");
   const [pgradBranch,setpGradBranch]=useState("");
   const [pgradyear,setPgradyear]=useState("");
   const [showerr, setShowErr] = useState(false);

    useEffect(() => {
      if(props.p.wholedata.GradBranch!==undefined) {
        setGradBranch(props.p.wholedata.GradBranch);
        setGradyear(props.p.wholedata.GradYear);
        setProfyear(props.p.wholedata.ProfYear);
        setprofBranch(props.p.wholedata.ProfBranch);
        setPgradyear(props.p.wholedata.PGradYear);
        setpGradBranch(props.p.wholedata.PGradBranch);
        setGradInst(props.p.wholedata.GradInst);
        setProfInst(props.p.wholedata.ProfInst);
        setpgradInst(props.p.wholedata.PGradInst);
      }
    }, []);

    function givereward() {
      if(props.p.wholedata.RewardE===0) {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.p.wholedata.UserID },
          UpdateExpression: "set RewardE= :re",
          ExpressionAttributeValues:{
            ":re": 20,
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          } 
          else {
            props.p.wholedata.RewardE = data.Attributes.RewardE
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

    function handleSubmit() {
      if(gradInst!=={} && gradyear!=="" && gradBranch!=="") {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID": props.p.wholedata.UserID },
          UpdateExpression: "set GradBranch=:gb, GradYear=:gy, ProfYear=:py, ProfBranch=:pb, PGradYear=:pgy, PGradBranch=:pgb, GradInst=:gi, ProfInst=:pi, PGradInst=:pgi",
          ExpressionAttributeValues:{
            ":gi": gradInst,
            ":pi": profInst,
            ":pgi": pgradInst,
            ":gb": gradBranch,
            ":gy": gradyear,
            ":py": profyear,
            ":pb": profBranch,
            ":pgy": pgradyear,
            ":pgb": pgradBranch
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            props.p.wholedata.GradBranch = data.Attributes.GradBranch
            props.p.wholedata.GradYear = data.Attributes.GradYear
            props.p.wholedata.ProfYear = data.Attributes.ProfYear
            props.p.wholedata.profBranch = data.Attributes.profBranch
            props.p.wholedata.PGradYear = data.Attributes.PGradYear
            props.p.wholedata.PGradBranch = data.Attributes.PGradBranch
            props.p.wholedata.GradInst = data.Attributes.GradInst
            props.p.wholedata.ProfInst = data.Attributes.ProfInst
            props.p.wholedata.PGradInst = data.Attributes.PGradInst
            props.p.setWholedata(props.p.wholedata)
            givereward();
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
      else{
        setShowErr("All the first three fields needs to filled");
      }
    }
    
    return (
      <div>
      <div className="Education_Desktop_view">
        <Container style={{marginTop:"5%"}}>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold"}}>Graduation</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col><input value={gradInst} onChange={e => setGradInst(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            {/* <Col><Select value={gradInst} onChange={(e)=>setGradInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Col> */}
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col><input value={gradBranch} onChange={e => setGradBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><input min="1980" max="2030"  type="number" value={gradyear} onChange={e => setGradyear(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
          </Row>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}}>Professional Degree</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col><input value={profInst} onChange={e => setProfInst(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            {/* <Col><Select value={profInst} onChange={(e)=>setProfInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Col> */}
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col><input value={profBranch} onChange={e => setprofBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><input min="1980" max="2030"  type="number" value={profyear} onChange={e => setProfyear(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
          </Row>
          <Row>
            <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}}>Post Graduation</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col><input value={pgradInst} onChange={e => setpgradInst(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            {/* <Col><Select value={pgradInst} onChange={(e)=>setpgradInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Col> */}
          </Row>
          <Row style={{marginTop:"5%"}}>
            <Col>
             <p style={{fontSize:"18px"}}>Branch / Specialization</p>
            </Col>
            <Col>< input value={pgradBranch} onChange={e => setpGradBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
            <Col>
             <p style={{fontSize:"20px"}}>Year of Completion</p>
            </Col>
            <Col><input min="1980" max="2030"  type="number" value={pgradyear} onChange={e => setPgradyear(e.target.value)} style={{width:"100%",height:"35px"}}></input></Col>
          </Row>
          {showerr!==false && <p style={{color:"red"}}><br/>*{showerr}</p>}
          <button style={{marginTop:"3%"}} onClick={handleSubmit} className="button_slide">Save</button>
        </Container>
      </div>

      <div className="Education_Mobile_view">
        <Container style={{marginTop:"5%"}}>
          <div style={{marginTop:"30px"}}>
            <Row><p style={{fontSize:"25px",fontWeight:"bold"}}>Graduation</p></Row>
            <Row><span style={{fontSize:"20px", padding: "0"}}>Institution</span></Row>
            <Row><input value={gradInst} onChange={e => setGradInst(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
            {/* <Row ><Select style={{padding: "0"}} value={gradInst} onChange={(e)=>setGradInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Row> */}
            <br/>
            <Row><span style={{fontSize:"18px", padding: "0"}}>Branch / Specialization</span></Row>
            <Row><input value={gradBranch} onChange={e => setGradBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
            <br/>
            <Row><span style={{fontSize:"20px", padding: "0"}}>Year of Completion</span></Row>
            <Row><input min="1980" max="2030"  type="number" value={gradyear} onChange={e => setGradyear(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
          </div>
          <div style={{marginTop:"30px"}}>
            <Row><p style={{fontSize:"25px",fontWeight:"bold"}}>Professional Degree</p></Row>
            <Row><span style={{fontSize:"20px", padding: "0"}}>Institution</span></Row>
            <Row><input value={profInst} onChange={e => setProfInst(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
            {/* <Row><Select value={profInst} onChange={(e)=>setProfInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Row> */}
            <br/>
            <Row><span style={{fontSize:"18px", padding: "0"}}>Branch / Specialization</span></Row>
            <Row><input value={profBranch} onChange={e => setprofBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
            <br/>
            <Row><span style={{fontSize:"20px", padding: "0"}}>Year of Completion</span></Row>
            <Row><input min="1980" max="2030"  type="number" value={profyear} onChange={e => setProfyear(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
          </div>
          <div style={{marginTop:"30px"}}>
            <Row><p style={{fontSize:"25px",fontWeight:"bold",marginTop:"5%"}}>Post Graduation</p></Row>
            <Row><span style={{fontSize:"20px", padding: "0"}}>Institution</span></Row>
            <Row><input value={pgradInst} onChange={e => setpgradInst(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
            {/* <Row><Select value={pgradInst} onChange={(e)=>setpgradInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Row> */}
            <br/>
            <Row><span style={{fontSize:"18px", padding: "0"}}>Branch / Specialization</span></Row>
            <Row><input value={pgradBranch} onChange={e => setpGradBranch(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
            <br/>
            <Row><span style={{fontSize:"20px", padding: "0"}}>Year of Completion</span></Row>
            <Row><input min="1980" max="2030"  type="number" value={pgradyear} onChange={e => setPgradyear(e.target.value)} style={{width:"100%",height:"35px"}}></input></Row>
          </div>
          <div>
            <br/>
            <div className="button_div">
            {showerr!==false && <p style={{color:"red"}}><br/>*{showerr}</p>}
            <button style={{marginTop:"3%", marginBottom: "10%"}} onClick={handleSubmit} className="button_slide">Save</button>
            </div>         
          </div>
        </Container>
      </div>
      </div>
    );
    }
  
  
export default Education;
  