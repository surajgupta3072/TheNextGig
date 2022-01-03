import Container from 'react-bootstrap/Container';
import './Page1.css';
import masterdata from "../../MasterClassPage/Masterclass.json";
import { Linkedin } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import docClient from '../../GigsPage/GigsAWS';
import ReactTooltip from 'react-tooltip';
import Videopopup from "../../HomePage/Page2/Videopopup"
function Page1(props) {
  const [expert, setExpert] = useState("");
  const [modalShow3, setModalShow3] = useState(false);
  const [socialdata, setsocialdata] = useState([]);
  const [videodata, setvideodata] = useState([])
  const [username, setusername] = useState("")
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
        var list = []
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
            if (expert.SocialLearningVideoUploadedId !== undefined) {
              if (expert.SocialLearningVideoUploadedId.length === list.length)
                setsocialdata(list)
            }
          });
        })
      }
    });
  }, []);

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
            <div class="para">
              <h3 style={{ color: "#f26c4f" }}>{expert.ExpertName}</h3>
              <p className="subtitle_expertcard">{expert.ExpertDesignation}</p>
              <p className="subtitle_expertcard">{expert.ExpertEducational}</p>
            </div>
            <div class="logo_para">
              <a href={expert.ExpertLinkedIn} target="_blank" rel="noreferrer"><Linkedin style={{ color: "white", cursor: "pointer" }} size={34} /></a>
            </div>
            <br />
            <div>
              <h3 style={{ color: "#f26c4f" }}>Skills experienced in:</h3>
              <p className="subtitle_expertcard">{expert.ExpertSkills}</p>
            </div>
            {expert.ExpertCompaniesLogo !== undefined &&
              <div className="img_arr">
                {expert.ExpertCompaniesLogo.map(companyLogo =>
                  <img alt="..." className="img_company" src={companyLogo} />
                )}
              </div>
            }
          </div>
        </div>
      </Container>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>MORE FROM THE EXPERT</h1>
            <p className="subtitle_masterclass">
              What else can you learn from the <span className="orange_text_masterclass">Expert </span> {" "}
            </p>
          </div>
        </Container>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row" }}>
        {masterdata.map((ele) => {
          if (ele.course_instructor === expert.ExpertID) {
            return <div style={{ width: "260px" }} >
              <figure style={{ cursor: "pointer" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }} className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} />
              </figure>
              <div width="240px" src={ele.course_image} style={{ marginLeft: "2%", width: "260px" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{ele.course_name}</h8>)
                  ) :
                  (
                    (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{ele.course_name.substring(0, 25)}...
                      <sup data-tip data-for={ele.id + "finance"} >&#9432;</sup>
                      <ReactTooltip id={ele.id + "finance"} place="top" effect="solid">
                        {ele.course_name}
                      </ReactTooltip></h8>)
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
          }
        })}
        {socialdata.map((vid, index) => {
          return <div style={{ width: "260px" }} >
            <figure style={{ cursor: "pointer" }} onClick={() => { if (props.auth) { setModalShow3(true); setusername(props.auth.username); setvideodata(vid) } else { window.location.href = "/login" } }} className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img src={vid.VideoThumbnail} width="240px" />
            </figure>
            <div src={vid.VideoThumbnail} width="240px" style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 27) ?
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic}</h8>)
                ) :
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic.substring(0, 27)}...
                    <sup data-tip data-for={index + "ga9"} >&#9432;</sup>
                    <ReactTooltip id={index + "ga9"} place="top" effect="solid">
                      {vid.VideoTopic}
                    </ReactTooltip></h8>)
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
      {modalShow3 === true ? <Videopopup show={modalShow3}
        data={videodata}
        username={props.auth.user !== null ? props.auth.user.username : ""}
        onHide={() => { setModalShow3(false) }} /> : null}
    </div>
  );
}

export default Page1;
