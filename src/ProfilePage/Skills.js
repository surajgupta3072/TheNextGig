import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Multiselect } from 'multiselect-react-dropdown';
import { useState, useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import Swal from 'sweetalert2'

function Skills(props) {
  const [skillPos, setSkillsPos] = useState([]);
  const [skillAcq, setSkillsAcq] = useState([]);

  useEffect(() => {
    if(props.p.wholedata.SkillsPossessed.length!==0) {
      setSkillsPos(props.p.wholedata.SkillsPossessed);
      setSkillsAcq(props.p.wholedata.SkillsWantToAcquire);
    }
  }, []);

  function onSelect1(selectedList) {
    setSkillsPos(selectedList);
  }
  
  function onSelect2(selectedList) {
    setSkillsAcq(selectedList);
  }

  function onRemove1(selectedList) {
    setSkillsPos(selectedList);
  }
  
  function onRemove2(selectedList) {
    setSkillsAcq(selectedList);
  }

  function handleSubmit() {
    if(skillPos.length!==0 && skillAcq.length!==0) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID": props.p.wholedata.UserID },
        UpdateExpression: "set SkillsPossessed=:sp, SkillsWantToAcquire=:sa",
        ExpressionAttributeValues:{
          ":sp": skillPos,
          ":sa": skillAcq
        },
        ReturnValues:"UPDATED_NEW"
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          props.p.wholedata.SkillsPossessed = data.Attributes.SkillsPossessed
          props.p.wholedata.SkillsWantToAcquire = data.Attributes.SkillsWantToAcquire
          props.p.setWholedata(props.p.wholedata)
          givereward()
          Swal.fire({
            title: "<h5 style='color:white'>" + "Submitted!" + "</h5>",
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            background: '#020312',
            color: 'white',
            iconColor: "#F26C4F"
          })
        }
      });
    }
    else{
      console.warn("Details not filled")
    }
  }

  function givereward() {
    if(props.p.wholedata.RewardS===0) {
      var params = {
        TableName: "UsersTable",
        Key: { "UserID":props.p.wholedata.UserID },
        UpdateExpression: "set RewardS= :rs",
        ExpressionAttributeValues:{
          ":rs": 20,
        },
        ReturnValues:"UPDATED_NEW"
      }
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          props.p.wholedata.RewardS = data.Attributes.RewardS
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

    return (
      <div>
        <Container style={{marginTop:"5%"}}>
          <Row>
            <Col md={12}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills you possess</p></Col>
            <Col md={12}>
              <Multiselect
                onSelect={onSelect1}
                onRemove={onRemove1}
                selectedValues={skillPos}
                selectionLimit={20}
                options={["Item1", "Item2", "Item3", "Item4"]}
                isObject={false}
                placeholder="Select Any"
                style={{ chips:{background: "#f26c4f", fontSize:"17px", marginLeft:"5px"}, searchBox:{"border": "1px solid #f26c4f", "border-radius": "10px"}, optionContainer: {"border": "2px solid #f26c4f", "background": "#1B1C2A"} }}
              />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col md={12}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills you want to acquire</p></Col>
            <Col md={12}>
              <Multiselect
                onSelect={onSelect2}
                onRemove={onRemove2}
                selectedValues={skillAcq}
                selectionLimit={20}
                options={["Item1", "Item2", "Item3", "Item4"]}
                isObject={false}
                placeholder="Select Any"
                style={{ chips:{background: "#f26c4f", fontSize:"17px", marginLeft:"5px"}, searchBox:{"border": "1px solid #f26c4f", "border-radius": "10px"}, optionContainer: {"border": "2px solid #f26c4f", "background": "#1B1C2A"} }}
              />
            </Col>
          </Row>
          <br/><br/>
          <div className="button_div">
            <button onClick={handleSubmit} style={{marginTop:"4%"}} className="button_slide">Save</button>
          </div>
          <br/><br/>
          <Row>
            <Col md={12}><p style={{fontSize:"20px",fontWeight:"bold"}}>Skills acquired through the platform</p></Col>
            <Col md={12}>
              <em><p style={{fontSize:"18px"}}>Through Mastersessions:<br/>
              {props.p.wholedata.SkillsAcquiredMastersessions.map((msk)=> 
                <span>{msk}&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )}</p></em>
            </Col>
            <Col md={12}>
              <em><p style={{fontSize:"18px"}}>Through Gigs / Internship:<br/>
              {props.p.wholedata.SkillsAcquiredGigs.map((gsk)=> 
                <span>{gsk}&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )}</p></em>
            </Col>
            <Col md={12}>
              <em><p style={{fontSize:"18px"}}>Through Social Learning - Videos:<br/>
              {props.p.wholedata.SkillsAcquiredVideos.map((vsk)=> 
                <span>{vsk}&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )}</p></em>
            </Col>
            <Col md={12}>
              <em><p style={{fontSize:"18px"}}>Through Social Learning - Blogs:<br/>
              {props.p.wholedata.SkillsAcquiredBlogs.map((bsk)=> 
                <span style={{wordWrap:"break-word"}}>{bsk}&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )}</p></em>
            </Col>
          </Row>
         </Container>
      </div>
    );
  }
  
export default Skills;
  