import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Multiselect } from "multiselect-react-dropdown";
import { useState, useEffect } from "react";
import docClient from "../GigsPage/GigsAWS";
import Swal from "sweetalert2";
import skillsData from "./Skills.json";

function Skills(props) {
  const [skillPos, setSkillsPos] = useState([]);
  const [skillAcq, setSkillsAcq] = useState([]);
  const [showerr, setShowErr] = useState(false);
  const [skills1, setSkills1] = useState([]);
  const [skills2, setSkills2] = useState([]);
  useEffect(() => {
    if (props.p.wholedata.SkillsPossessed.length !== 0) {
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

  function examfunc1(e) {
    var skills1 = [];
    if (e === "") {
      setSkills1([]);
    } else {
      for (var i = 0; i < skillsData.length; i++)
        if (skillsData[i].toLowerCase().startsWith(e.toLowerCase()) === true)
          skills1.push(skillsData[i]);
      setSkills1(skills1);
    }
  }

  function examfunc2(e) {
    var skills2 = [];
    if (e === "") {
      setSkills2([]);
    } else {
      for (var i = 0; i < skillsData.length; i++)
        if (skillsData[i].toLowerCase().startsWith(e.toLowerCase()) === true)
          skills2.push(skillsData[i]);
      setSkills2(skills2);
    }
  }

  function handleSubmit() {
    if (skillPos.length !== 0 && skillAcq.length !== 0) {
      var params = {
        TableName: "UsersTable",
        Key: { UserID: props.p.wholedata.UserID },
        UpdateExpression: "set SkillsPossessed=:sp, SkillsWantToAcquire=:sa",
        ExpressionAttributeValues: {
          ":sp": skillPos,
          ":sa": skillAcq,
        },
        ReturnValues: "UPDATED_NEW",
      };
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          props.p.wholedata.SkillsPossessed = data.Attributes.SkillsPossessed;
          props.p.wholedata.SkillsWantToAcquire =
            data.Attributes.SkillsWantToAcquire;
          props.p.setWholedata(props.p.wholedata);
          givereward();
          Swal.fire({
            title: "<h5 style='color:white'>" + "Saved" + "</h5>",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            background: "#020312",
            color: "white",
            iconColor: "#F26C4F",
          });
          setShowErr(false);
        }
      });
    } else {
      setShowErr("Both the fields needs to filled");
    }
  }

  function givereward() {
    if (props.p.wholedata.RewardS === 0) {
      var params = {
        TableName: "UsersTable",
        Key: { UserID: props.p.wholedata.UserID },
        UpdateExpression: "set RewardS= :rs",
        ExpressionAttributeValues: {
          ":rs": 20,
        },
        ReturnValues: "UPDATED_NEW",
      };
      docClient.update(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          props.p.wholedata.RewardS = data.Attributes.RewardS;
          props.p.setWholedata(props.p.wholedata);
          props.p.setPercentage(
            props.p.wholedata.RewardP +
            props.p.wholedata.RewardE +
            props.p.wholedata.RewardW +
            props.p.wholedata.RewardS +
            props.p.wholedata.RewardC
          );
          var paramss = {
            TableName: "UsersTable",
            Key: { UserID: props.p.wholedata.UserID },
            ProjectionExpression: "TotalRewards",
          };
          docClient.get(paramss, function (err, data) {
            if (err) {
              console.log(err);
            } else {
              var paramss = {
                TableName: "UsersTable",
                Key: { UserID: props.p.wholedata.UserID },
                UpdateExpression: "set TotalRewards = :tr",
                ExpressionAttributeValues: {
                  ":tr": data.Item.TotalRewards + 20,
                },
                ReturnValues: "UPDATED_NEW",
              };
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
      <Container style={{ marginTop: "5%" }}>
        <Row>
          <Col md={12}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Skills you possess
            </p>
          </Col>
          <Col md={12}>
            <Multiselect
              emptyRecordMsg="Start Searching..."
              onSearch={examfunc1}
              onSelect={onSelect1}
              onRemove={onRemove1}
              selectedValues={skillPos}
              selectionLimit={20}
              options={skills1}
              isObject={false}
              placeholder="Select Any"
              style={{
                chips: {
                  background: "#f26c4f",
                  fontSize: "17px",
                  marginLeft: "5px",
                },
                searchBox: {
                  border: "1px solid #f26c4f",
                  "border-radius": "10px",
                },
                optionContainer: {
                  border: "2px solid #f26c4f",
                  background: "#1B1C2A",
                },
              }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Skills you want to acquire
            </p>
          </Col>
          <Col md={12}>
            <Multiselect
              emptyRecordMsg="Start Searching..."
              onSearch={examfunc2}
              onSelect={onSelect2}
              onRemove={onRemove2}
              selectedValues={skillAcq}
              selectionLimit={20}
              options={skills2}
              isObject={false}
              placeholder="Select Any"
              style={{
                chips: {
                  background: "#f26c4f",
                  fontSize: "17px",
                  marginLeft: "5px",
                },
                searchBox: {
                  border: "1px solid #f26c4f",
                  "border-radius": "10px",
                },
                optionContainer: {
                  border: "2px solid #f26c4f",
                  background: "#1B1C2A",
                },
              }}
            />
          </Col>
        </Row>
        <br />
        {showerr !== false && (
          <p style={{ color: "red" }}>
            <br />*{showerr}
          </p>
        )}
        <br />
        <div className="button_div">
          <button
            onClick={handleSubmit}
            style={{ marginTop: "4%" }}
            className="button_slide"
          >
            Save
          </button>
        </div>
        <br />
        <br />
        <Row>
          <Col md={12}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Skills acquired through the platform
            </p>
          </Col>
          <Col md={12}>
            <p style={{ fontSize: "18px" }}>
              <u>Through TNG Originals:</u>
              <br />
              <em>
                <span style={{ fontSize: "16px" }}>
                  {props.p.wholedata.SkillsAcquiredMastersessions.join(", ")}
                </span>
              </em>
            </p>
          </Col>
          <Col md={12}>
            <p style={{ fontSize: "18px" }}>
              <u>Through Experiential Learning:</u>
              <br />
              <em>
                {props.p.wholedata.SkillsAcquiredGigs.map((gsk) => (
                  <span style={{ fontSize: "16px" }}>
                    {gsk}&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                ))}
              </em>
            </p>
          </Col>
          <Col md={12}>
            <p style={{ fontSize: "18px", margin: "0" }}>
              <u>Through Social Learning - Videos:</u>
            </p>
            <em>
              <div style={{ wordBreak: "break-all", wordWrap: "break-word" }}>
                <span>{props.p.wholedata.SkillsAcquiredVideos.join(" ").split("#").join(" ")}</span>
              </div>
            </em>
          </Col>
          {/* <Col md={12}>
            <br />
            <p style={{ fontSize: "18px", margin: "0" }}>
              <u>Through Social Learning - Blogs:</u>
            </p>
            <em>
              <div style={{ wordBreak: "break-all", wordWrap: "break-word" }}>
                {Array.from(
                  new Map(
                    props.p.wholedata.SkillsAcquiredBlogs.map((p) => [
                      p.join(),
                      p,
                    ])
                  ).values()
                ).map((bsk) => (
                  <span>{bsk}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                ))}
              </div>
            </em>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
