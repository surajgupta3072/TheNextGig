import Container from 'react-bootstrap/Container';
import './Page1.css';
import masterdata from "../../MasterClassPage/Masterclass.json";
import { Linkedin } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import docClient from '../../GigsPage/GigsAWS';
import ReactTooltip from 'react-tooltip';
import Videopopup from "../../HomePage/Page2/Videopopup"
import Swal from "sweetalert2";

function Page1(props) {
  const [expert, setExpert] = useState("");
  const [modalShow3, setModalShow3] = useState(false);
  const [socialdata, setsocialdata] = useState([]);
  const [videodata, setvideodata] = useState([])
  const [username, setusername] = useState("")
  const [masterclasses, setmasterclasses] = useState([])
  useEffect(() => {
    let paramss = {
      TableName: "ExpertsTable",
      KeyConditionExpression: "#Eid = :ExpertID",
      ExpressionAttributeNames: {
        "#Eid": "ExpertID",
      },
      ExpressionAttributeValues: {
        ":ExpertID": props.Eid,
      },
    };
    docClient.query(paramss, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        setExpert(data.Items[0]);
        var dataexp = data.Items[0];
        var list = [], list2 = []
        data.Items[0].MastersessionsVideoUploadId.forEach((ele) => {
          var id = ele;
          masterdata.forEach((ele) => {
            if (ele.id === id) {
              list2.push(ele)
            }
          })
          setmasterclasses(list2)
        })
        data.Items[0].SocialLearningVideoUploadedId.forEach((ele) => {
          let params = {
            TableName: "VideosTable",
            KeyConditionExpression: "#Vid = :VideoID",
            ExpressionAttributeNames: {
              "#Vid": "VideoID",
            },
            ExpressionAttributeValues: {
              ":VideoID": ele,
            },
          };
          docClient.query(params, function (err, data) {
            if (err) {
              console.log(err);
            }
            else {
              list.push(data.Items[0])
            }
            if (dataexp.SocialLearningVideoUploadedId !== undefined) {
              if (dataexp.SocialLearningVideoUploadedId.length === list.length)
                setsocialdata(list)
            }
          });
        })
      }
    });
  }, []);
  // const follow = (createrid) => {
  //   if (!props.auth.isAuthenticated) {
  //     window.location.href = "../login";
  //   }
  //   if (createrid === "") {
  //     Swal.fire({
  //       title:
  //         "<h5 style='color:white'>" +
  //         "Sorry you can't follow this person as this session is posted by admin!" +
  //         "</h5>",
  //       icon: "warning",
  //       showConfirmButton: false,
  //       timer: 3000,
  //       background: "#020312",
  //       color: "white",
  //       iconColor: "#F26C4F",
  //     })
  //   }
  //   else {
  //     var params = {
  //       TableName: "UsersTable",
  //       Key: { UserID: createrid },
  //       ProjectionExpression: "Follower",
  //     };
  //     docClient.get(params, function (err, data) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         var flag = 0;
  //         data.Item.Follower.forEach(ele => {
  //           if (ele.id === props.auth.user.username)
  //             flag = 1
  //         });
  //         if (flag === 0) {
  //           var params = {
  //             TableName: "UsersTable",
  //             Key: { UserID: createrid },
  //             UpdateExpression:
  //               "set Follower[" +
  //               data.Item.Follower.length.toString() +
  //               "] = :ms",
  //             ExpressionAttributeValues: {
  //               ":ms": { "id": props.auth.user.username, "date": Date.now() },
  //             },
  //             ReturnValues: "UPDATED_NEW",
  //           };
  //           docClient.update(params, function (err, data) {
  //             if (err) {
  //               console.log(err);
  //             } else {
  //             }
  //           })
  //         }
  //       }
  //     })
  //     var paramss = {
  //       TableName: "UsersTable",
  //       Key: { UserID: props.auth.user.username },
  //       ProjectionExpression: "Following",
  //     };
  //     docClient.get(paramss, function (err, data) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         var flag1 = 0;
  //         data.Item.Following.forEach(ele => {
  //           if (ele.id === createrid)
  //             flag1 = 1
  //         });
  //         if (flag1 === 1) {
  //           Swal.fire({
  //             title:
  //               "<h5 style='color:white'>" +
  //               "You Already follow him" +
  //               "</h5>",
  //             icon: "warning",
  //             showConfirmButton: false,
  //             timer: 3000,
  //             background: "#020312",
  //             color: "white",
  //             iconColor: "#F26C4F",
  //           })
  //         }
  //         if (flag1 === 0) {
  //           var params = {
  //             TableName: "UsersTable",
  //             Key: { UserID: props.auth.user.username },
  //             UpdateExpression:
  //               "set Following[" +
  //               data.Item.Following.length.toString() +
  //               "] = :ms",
  //             ExpressionAttributeValues: {
  //               ":ms": { "id": createrid, "date": Date.now() },
  //             },
  //             ReturnValues: "UPDATED_NEW",
  //           };
  //           docClient.update(params, function (err, data) {
  //             if (err) {
  //               console.log(err);
  //             } else {
  //               Swal.fire({
  //                 title:
  //                   "<h5 style='color:white'>" +
  //                   "Creator want to say to thank you for following him" +
  //                   "</h5>",
  //                 icon: "success",
  //                 showConfirmButton: false,
  //                 timer: 3000,
  //                 background: "#020312",
  //                 color: "white",
  //                 iconColor: "#F26C4F",
  //               })
  //             }
  //           })
  //         }
  //         else {
  //           Swal.fire({
  //             title:
  //               "<h5 style='color:white'>" +
  //               "You already follow this person" +
  //               "</h5>",
  //             icon: "warning",
  //             showConfirmButton: false,
  //             timer: 3000,
  //             background: "#020312",
  //             color: "white",
  //             iconColor: "#F26C4F",
  //           })
  //         }
  //       }
  //     })
  //   }
  // }
  return (
    <div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>HERE ARE OUR EXPERTS</h1>
            <p className="subtitle_masterclass">
              and what they’ve done in the past
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="pack">
          <div className="testimonial">
            <div className="imag">
              <img alt="..." className="img_experttop" src={expert.ExpertPic} />
            </div>
            <div className="para">
              <h3 style={{ color: "#f26c4f", margin: 0 }}>{expert.ExpertName}</h3>
              <p className="subtitle_expertcard">{expert.ExpertDesignation}</p>
              <p className="subtitle_expertcard">{expert.ExpertCompany}</p>
              <p className="subtitle_expertcard">{expert.ExpertEducational}</p>
            </div>
            <div class="logo_para">
              <a href={expert.ExpertLinkedIn} target="_blank" rel="noreferrer"><Linkedin style={{ background: "white", border: "0.1px solid white", color: "black", cursor: "pointer", marginTop:"5px" }} size={34} /></a>
            </div>
            {/* <p className="connect_text" style={{ cursor: "pointer", margin: 0 }} onClick={() => follow(expert.AccountID)} >&nbsp;Follow</p> */}
            <br/>
            <div>
              <h3 style={{ color: "#f26c4f", margin: 0 }}>Skilled at:</h3>
              <p className="subtitle_expertcard skillsptag">{expert.ExpertSkills}</p>
            </div>
            {/* {expert.ExpertCompaniesLogo !== undefined &&
              <div className="img_arr">
                {expert.ExpertCompaniesLogo.map(companyLogo =>
                  <img alt="..." className="img_company" src={companyLogo} />
                )}
              </div>
            } */}
          </div>
        </div>
      </Container>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800", marginLeft: "4.5%" }}>Videos</h4>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap", marginLeft:"4%", marginRight:"3%" }}>
        {masterclasses.map((ele) => {
          return <div style={{ width: "260px" }} >
            <figure style={{ cursor: "pointer" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }} className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
              <img width="240px" src={ele.course_image} />
            </figure>
            <div width="240px" src={ele.course_image} style={{ marginLeft: "2%", width: "260px" }}>
              {(ele.course_name.length < 25) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>{ele.course_name}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>{ele.course_name.substring(0, 25)}...
                    <sup data-tip data-for={ele.id + "finance"} >&#9432;</sup>
                    <ReactTooltip id={ele.id + "finance"} place="top" effect="solid">
                      {ele.course_name}
                    </ReactTooltip></h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>by {ele.course_instructor}</p>
              {((ele.course_instructor_post.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.course_instructor_post}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.course_instructor_post.substring(0, 27)}...</p>)
                )
              }
            </div>
          </div>
        })}
        {socialdata.map((vid, index) => {
          return <div style={{ width: "260px" }} >
            <figure style={{ cursor: "pointer" }} onClick={() => { if (props.auth) { setModalShow3(true); setusername(props.auth.username); setvideodata(vid) } else { window.location.href = "/login" } }} className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img src={vid.VideoThumbnail} width="240px" />
            </figure>
            <div src={vid.VideoThumbnail} width="240px" style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 27) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>{vid.VideoTopic}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>{vid.VideoTopic.substring(0, 27)}...
                    <sup data-tip data-for={index + "ga9"} >&#9432;</sup>
                    <ReactTooltip id={index + "ga9"} place="top" effect="solid">
                      {vid.VideoTopic}
                    </ReactTooltip></h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.VideoCreds.substring(0, 27)}...</p>)
                )
              }
            </div>
          </div>
        })}
      </div>
      <br />
      {modalShow3 === true ? <Videopopup show={modalShow3}
        data={videodata}
        username={props.auth.user !== null ? props.auth.user.username : ""}
        onHide={() => { setModalShow3(false) }} /> : null}
    </div>
  );
}

export default Page1;
