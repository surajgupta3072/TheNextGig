import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import {ArrowLeft} from 'react-bootstrap-icons';
import docClient from './../../GigsPage/GigsAWS';
import Swal from 'sweetalert2'

function MyVerticallyPopUp(props) {
  const [reward, setReward] = useState("");

  useEffect(() => {
    var paramss = {
      TableName: "UsersTable",
      Key: { "UserID":props.uid },
      ProjectionExpression: "TotalRewards",
    };
    docClient.get(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setReward(data.Item.TotalRewards)
      }
    });
  }, []);

  function paymentFlowCase(deduct) {
    var paramss = {
      TableName: "UsersTable",
      Key: { "UserID":props.uid },
      ProjectionExpression: "MasterclassesPurchased",
    };
    docClient.get(paramss, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.uid },
          UpdateExpression: "set MasterclassesPurchased["+data.Item.MasterclassesPurchased.length.toString()+"] = :ms",
          ExpressionAttributeValues:{
            ":ms":props.cid,
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            var params = {
              TableName: "UsersTable",
              Key: { "UserID":props.uid },
              UpdateExpression: "set TotalRewards = :tr",
              ExpressionAttributeValues:{
                ":tr": deduct,
              },
              ReturnValues:"UPDATED_NEW"
            }
            docClient.update(params, function (err, data) {
              if (err) {
                console.log(err);
              } else {
                setReward(0);
                Swal.fire({
                  title: "<h5 style='color:white'>" + "PAYMENT SUCCESSFUL!" + "</h5>",
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 3000,
                  background: '#020312',
                  color: 'white',
                  iconColor: "#F26C4F"
                });
                var paramss = {
                  TableName: "UsersTable",
                  Key: { "UserID":props.uid },
                  ProjectionExpression: "SkillsAcquiredMastersessions",
                };
                docClient.get(paramss, function(err, data) {
                  if (err) {
                    console.log(err);
                  } else {
                      var params = {
                        TableName: "UsersTable",
                        Key: { "UserID":props.uid },
                        UpdateExpression: "set SkillsAcquiredMastersessions["+data.Item.SkillsAcquiredMastersessions.length.toString()+"] = :sam",
                        ExpressionAttributeValues:{
                          ":sam":props.crole,
                        },
                        ReturnValues:"UPDATED_NEW"
                      }
                      docClient.update(params, function (err, data) {
                        if (err) {
                          console.log(err);
                        } else {
                          window.location.reload();
                        }
                      });
                    }
                });
              }
            });
          }
        });
      }
    });
  }

  async function loadScript(src) {
    return new Promise((resolve)=>{
      const script = document.createElement("script")
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  async function handlePayment() {
    if(props.fees==reward) {
      paymentFlowCase(0);
    }
    else if(props.fees<reward) {
      paymentFlowCase(reward - Number(props.fees));
    }
    else {
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      const options = {
        "key": "rzp_test_2hJkSfRZOnRtZp", 
        "amount": Number(props.fees-reward) * 100,
        "currency": "INR",
        "name": props.cname,
        "description": "THE NEXT GIG",
        "handler": function (response) {
          paymentFlowCase(0);
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="custom-modal-style"
      dialogClassName="modal-w"
      className="mobile_view"
      transparent={true}
    >
    <Modal.Body style={{backgroundColor:"#020312", border: "1px solid #f26c4f"}}>
        <div style={{padding:"7%"}}>
          <p style={{fontSize:"22px", fontStyle: "bold"}}>Name of the session</p>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize:"18px"}}>
              <p>Price (in INR)</p>
              <p>{props.fees}</p>
          </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#f26c4f", fontSize:"18px"}}>
              <p>Less: Reward <br/> points</p>
              {props.fees-reward>=0 ?
              <p>-({reward})</p>
              :
              <p>-({props.fees})</p>
              }
          </div>
          <hr className="course_line" style={{height:"0.13rem",color:"#f26c4f"}} />
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize:"18px"}}>
              <p>Net payable <br/> amount</p>
              {props.fees-reward>=0 ?
              <p>{props.fees-reward}</p>
              :
              <p>0</p>
              }
          </div>
          <div style={{textAlign:"center"}}>
            <button onClick={handlePayment} className="button_slide slide_right" style={{marginTop:"10%"}}>Proceed<ArrowLeft className='button_arrow'/></button>
          </div>
        </div>
    </Modal.Body>
    </Modal>
    );
  }
  
export default MyVerticallyPopUp;
