import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import React, { useState,useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';

function Education(props) {
  const options = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
    {value: '4', label: 'Item 4'},
    {value: '5', label: 'Item 5'},
    {value: '6', label: 'Item 6'},
    {value: '7', label: 'Item 7'},
  ]
   const [gradInst, setGradInst] = useState({});
   const [gradBranch,setGradBranch]=useState();
   const [gradyear,setGradyear]=useState();
   const [profInst,setProfInst]=useState({});
   const [profBranch,setprofBranch]=useState();
   const [profyear,setProfyear]=useState();
   const [pgradInst,setpgradInst]=useState({});
   const [pgradBranch,setpGradBranch]=useState();
   const [pgradyear,setPgradyear]=useState();

    useEffect(() => {
      setGradBranch(props.p.wholedata.GradBranch);
      setGradyear(props.p.wholedata.GradYear);
      setProfyear(props.p.wholedata.ProfYear);
      setprofBranch(props.p.wholedata.ProfBranch);
      setPgradyear(props.p.wholedata.PGradYear);
      setpGradBranch(props.p.wholedata.PGradBranch);
      setGradInst(props.p.wholedata.GradInst);
      setProfInst(props.p.wholedata.ProfInst);
      setpgradInst(props.p.wholedata.PGradInst);
    }, []);

    function handleSubmit() {
      if(gradInst!=={} && gradyear!==null && gradBranch!==null){
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.p.wholedata.UserID },
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
            <p style={{fontSize:"25px",fontWeight:"bold"}}>Graduation</p>
            <Col style={{fontSize:"20px"}} md={3}>Institution</Col>
            <Col><Select value={gradInst} onChange={(e)=>setGradInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Col>
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
            <Col><Select value={profInst} onChange={(e)=>setProfInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Col>
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
            <Col><Select value={pgradInst} onChange={(e)=>setpgradInst(e)} placeholder="Search..." options={options} className="searchDropdownStyle"/></Col>
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
          <button style={{marginTop:"3%"}} onClick={handleSubmit} className="button_slide">Save</button>
        </Container>
      </div>
    );
    }
  
  
export default Education;
  