import { useState } from "react";
import { ArrowLeft } from 'react-bootstrap-icons';
import docClient from './../GigsPage/GigsAWS';
import './AuthPage.css';

function ReferralPage(props) {
  const [showerr, setShowErr] = useState(false);
  const [refcode, setRefCode] = useState("");

  function RefCodeSubmitUtil(wholedata) {
    if (refcode !== wholedata.ReferralCode) {
      docClient.scan({ TableName: "UsersTable" }, function (err, data) {
        if (err) {
          console.log(err);
        }
        else {
          var refstatus = false;
          if (["IIMAPARTNER01", "XLRIPARTNER60", "IIMLPARTNER04", "MDIPARTNER02", "IIMKPARTNER90", "FMSPARTNER20", "IIFTPARTNER1", "IIMSPARTNER45", "IIMNPARTNER02", "MITPARTNER20", "MICAPARTNER01", "IITKGPPARTNER05", "ROTOFEST50", "NITIEPARTNER01", "IIMRANCHI02", "IIMAMRITSAR02", "HRCOLLEGE08"].includes(refcode)) {
            var refstatus = true;
            var paramss = {
              TableName: "UsersTable",
              Key: { "UserID": wholedata.UserID },
              UpdateExpression: "set TotalRewards = :tr, ReferredBy = :rb",
              ExpressionAttributeValues: {
                ":tr": wholedata.TotalRewards + 20,
                ":rb": refcode,
              },
              ReturnValues: "UPDATED_NEW"
            }
            docClient.update(paramss, function (err, data) {
              if (err) {
                console.log(err);
              }
              else {
                window.location.href = localStorage.getItem("lastURL");
              }
            });
          }
          else {
            for (var e of data.Items) {
              if (e.ReferralCode === refcode) {
                var refstatus = true;
                var params = {
                  TableName: "UsersTable",
                  Key: { "UserID": e.UserID },
                  ProjectionExpression: "TotalRewards",
                };
                docClient.get(params, function (err, data) {
                  if (err) {
                    console.log(err);
                  }
                  else {
                    var paramss = {
                      TableName: "UsersTable",
                      Key: { "UserID": e.UserID },
                      UpdateExpression: "set TotalRewards = :tr",
                      ExpressionAttributeValues: {
                        ":tr": data.Item.TotalRewards + 10,
                      },
                      ReturnValues: "UPDATED_NEW"
                    }
                    docClient.update(paramss, function (err, data) {
                      if (err) {
                        console.log(err);
                      }
                      else {
                        var paramss = {
                          TableName: "UsersTable",
                          Key: { "UserID": wholedata.UserID },
                          UpdateExpression: "set TotalRewards = :tr, ReferredBy = :rb",
                          ExpressionAttributeValues: {
                            ":tr": wholedata.TotalRewards + 10,
                            ":rb": e.UserID,
                          },
                          ReturnValues: "UPDATED_NEW"
                        }
                        docClient.update(paramss, function (err, data) {
                          if (err) {
                            console.log(err);
                          }
                          else {
                            window.location.href = localStorage.getItem("lastURL");
                          }
                        });
                      }
                    });
                  }
                });
                break;
              }
            }
          }
          if (refstatus === false) {
            setShowErr("Referral Code is Invalid");
            setRefCode("");
          }
        }
      });
    }
    else {
      setShowErr("Referral Code is Invalid");
      setRefCode("");
    }
  }

  function RefCodeSubmit() {
    if (refcode != "") {
      let paramss = {
        TableName: "UsersTable",
        KeyConditionExpression: "#Uid = :UserID",
        ExpressionAttributeNames: {
          "#Uid": "UserID",
        },
        ExpressionAttributeValues: {
          ":UserID": props.auth.username,
        },
      };
      docClient.query(paramss, function (err, data) {
        if (err) {
          setShowErr(err.message)
        }
        else {
          RefCodeSubmitUtil(data.Items[0]);
        }
      });
    }
    else {
      setShowErr("Referral Code field is Empty");
    }
  }

  return (
    <div style={{ marginTop: "10%", backgroundColor: "#020312", border: "1px solid #f26c4f" }} className="login_container">
      <br />
      <div style={{ paddingRight: "7%", paddingLeft: "7%", paddingTop: "7%" }}>
        <p style={{ fontSize: "18px" }}>Do you have a Referral code?<text style={{ color: "#f26c4f" }}>*</text></p>
        <input value={refcode} onChange={e => setRefCode(e.target.value)} style={{ width: "100%" }}></input>
        {showerr !== false && <p style={{ color: "red", textAlign: "center" }}><br />*{showerr}</p>}
      </div>
      <br /><br />
      <div style={{ display: "flex", justifyContent: "space-around", whiteSpace: "pre-wrap" }}>
        <button onClick={() => window.location.href = localStorage.getItem("lastURL")} className="button_slide_refpage slide_right" style={{ width: "100px" }}>No<ArrowLeft className='button_arrow' /></button>
        <button onClick={RefCodeSubmit} className="button_slide_refpage slide_right" style={{}}>Submit<ArrowLeft className='button_arrow' /></button>
      </div>
      <br /><br />
    </div>
  );
}

export default ReferralPage;
