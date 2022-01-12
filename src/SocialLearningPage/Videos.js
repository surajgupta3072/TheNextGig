import docClient from '../GigsPage/GigsAWS';
import MyVerticallyCenteredModal from './ContactPopUp'
import { useState } from "react";
import './SocialLearningPage.css'
import Swal from "sweetalert2";
import ReactTooltip from 'react-tooltip';
import Videopopup from "../HomePage/Page2/Videopopup";

function Videos(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [videodata, setvideodata] = useState([]);

  const follow = (createrid) => {
    if (!props.auth.isAuthenticated) {
      window.location.href = "../login";
    }
    if (createrid === "") {
      Swal.fire({
        title:
          "<h5 style='color:white'>" +
          "Sorry you can't follow this person as this session is posted by admin!" +
          "</h5>",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
        background: "#020312",
        color: "white",
        iconColor: "#F26C4F",
      })
    }
    else {
      var params = {
        TableName: "UsersTable",
        Key: { UserID: createrid },
        ProjectionExpression: "Follower",
      };
      docClient.get(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var flag = 0;
          data.Item.Follower.forEach(ele => {
            if (ele.id === props.auth.user.username)
              flag = 1
          });
          if (flag === 0) {
            var params = {
              TableName: "UsersTable",
              Key: { UserID: createrid },
              UpdateExpression:
                "set Follower[" +
                data.Item.Follower.length.toString() +
                "] = :ms",
              ExpressionAttributeValues: {
                ":ms": { "id": props.auth.user.username, "date": Date.now() },
              },
              ReturnValues: "UPDATED_NEW",
            };
            docClient.update(params, function (err, data) {
              if (err) {
                console.log(err);
              } else {
              }
            })
          }
        }
      })
      var paramss = {
        TableName: "UsersTable",
        Key: { UserID: props.auth.user.username },
        ProjectionExpression: "Following",
      };
      docClient.get(paramss, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var flag1 = 0;
          data.Item.Following.forEach(ele => {
            if (ele.id === createrid)
              flag1 = 1
          });
          if (flag1 === 1) {
            Swal.fire({
              title:
                "<h5 style='color:white'>" +
                "You’ve already followed" +
                "</h5>",
              icon: "warning",
              showConfirmButton: false,
              timer: 3000,
              background: "#020312",
              color: "white",
              iconColor: "#F26C4F",
            })
          }
          if (flag1 === 0) {
            var params = {
              TableName: "UsersTable",
              Key: { UserID: props.auth.user.username },
              UpdateExpression:
                "set Following[" +
                data.Item.Following.length.toString() +
                "] = :ms",
              ExpressionAttributeValues: {
                ":ms": { "id": createrid, "date": Date.now() },
              },
              ReturnValues: "UPDATED_NEW",
            };
            docClient.update(params, function (err, data) {
              if (err) {
                console.log(err);
              } else {
                Swal.fire({
                  title:
                    "<h5 style='color:white'>" +
                    "Thank you for following!" +
                    "</h5>",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 3000,
                  background: "#020312",
                  color: "white",
                  iconColor: "#F26C4F",
                })
              }
            })
          }
          else {
            Swal.fire({
              title:
                "<h5 style='color:white'>" +
                "You’ve already followed" +
                "</h5>",
              icon: "warning",
              showConfirmButton: false,
              timer: 3000,
              background: "#020312",
              color: "white",
              iconColor: "#F26C4F",
            })
          }
        }
      })
    }
  }
  const like = (id) => {
    var paramss = {
      TableName: "UsersTable",
      Key: { UserID: props.auth.user.username },
      ProjectionExpression: "SocialLearningVideosLiked",
    };
    docClient.get(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var flag = 0;
        data.Item.SocialLearningVideosLiked.forEach((ele) => {
          if (ele.vid === id) {
            flag = 1;
          }
        })
        if (flag === 0) {
          var params = {
            TableName: "UsersTable",
            Key: { UserID: props.auth.user.username },
            UpdateExpression:
              "set SocialLearningVideosLiked[" +
              data.Item.SocialLearningVideosLiked.length.toString() +
              "] = :ms",
            ExpressionAttributeValues: {
              ":ms": { vid: id, date: Date.now },
            },
            ReturnValues: "UPDATED_NEW",
          };
          docClient.update(params, function (err, data) {
            if (err) {
              console.log(err);
            }
            else {
              Swal.fire({
                title:
                  "<h5 style='color:white'>" +
                  "You have liked this video" +
                  "</h5>",
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
                background: "#020312",
                color: "white",
                iconColor: "#F26C4F",
              })
            }
          })
        }
        else {
          Swal.fire({
            title:
              "<h5 style='color:white'>" +
              "You’ve already liked" +
              "</h5>",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000,
            background: "#020312",
            color: "white",
            iconColor: "#F26C4F",
          })
        }
      }
    })
    var params1 = {
      TableName: "VideosTable",
      Key: { VideoID: id },
      ProjectionExpression: "Likes",
    };
    docClient.get(params1, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var flag = 0;
        data.Item.Likes.forEach((ele) => {
          if (ele.uid === props.auth.user.username) {
            flag = 1;
          }
        })
        if (flag === 0) {
          var params = {
            TableName: "VideosTable",
            Key: { VideoID: id },
            UpdateExpression:
              "set Likes[" +
              data.Item.Likes.length.toString() +
              "] = :ms",
            ExpressionAttributeValues: {
              ":ms": { uid: props.auth.user.username, date: Date.now() },
            },
            ReturnValues: "UPDATED_NEW",
          };
          docClient.update(params, function (err, data) {
            if (err) {
              console.log(err);
            }
            else {
              Swal.fire({
                title:
                  "<h5 style='color:white'>" +
                  "You have liked this video" +
                  "</h5>",
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
                background: "#020312",
                color: "white",
                iconColor: "#F26C4F",
              })
            }
          })
        }
        else {
          Swal.fire({
            title:
              "<h5 style='color:white'>" +
              "You’ve already liked" +
              "</h5>",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000,
            background: "#020312",
            color: "white",
            iconColor: "#F26C4F",
          })
        }
      }
    })
  }
  // const [videoslist, setVideosList] = useState(false);
  /*   const [searchterm, setSearchTerm] = useState(""); */
  // const [filter,setfilter]=useState([]);
  // const [all,setall]=useState(0);
  /* function addSearchTerm() {
    var params = {
      TableName: "UsersTable",
      Key: { "UserID":props.userid },
      ProjectionExpression: "VideosSearchHistory",
    };
    docClient.get(params, function(err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        var params = {
          TableName: "UsersTable",
          Key: { "UserID":props.userid },
          UpdateExpression: "set VideosSearchHistory["+data.Item.VideosSearchHistory.length.toString()+"] = :vsh",
          ExpressionAttributeValues: {
            ":vsh": {timestamp: `${Date.now()}`, svterm: searchterm}
          },
          ReturnValues:"UPDATED_NEW"
        }
        docClient.update(params, function (err, data) {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  } */

  /* function searchFilter() {
    if(searchterm==="") {
      setVideosList(props.prop);
    }
    else {
      addSearchTerm();
      const searchvids = props.prop.filter((vid) => {
        if(vid.VideoTopic.toLowerCase().includes(searchterm.toLowerCase()) || vid.VideoUsername.toLowerCase().includes(searchterm.toLowerCase()) 
        || vid.VideoHashtags.toLowerCase().includes(searchterm.toLowerCase()) || vid.VideoCreds.toLowerCase().includes(searchterm.toLowerCase())) {
          return vid;
        }
      })
      setVideosList(searchvids);
    }
  } */
  return (

    <div>
      {/* <input className="search" style={{marginLeft:"2%", borderRadius:"20px", background:"white", color:"rgb(242, 108, 79)", border:"0px"}} value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search Video..." type="search"/>&nbsp;&nbsp;&nbsp;
      <button className="search_button" onClick={searchFilter} style={{backgroundColor:"rgb(242, 108, 79)",color:"white",borderRadius:"40px",width:"100px",height:"30px",fontWeight:"bold",border:"0"}}>Search</button> */}
      <br /><br /><br />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {props.filter === false && props.prop.map((vid, index) =>
          <div style={{ cursor: "pointer" }} className="video_div" key={vid.VideoID} onClick={() => { if (props.redirlog) window.location.href = "/login"; }}>
            {props.redirlog ?
              <figure className="tag figurex" data-content={vid.VideoDuration}>
                <img className="video_thumbnail_social" src={vid.VideoThumbnail} />
              </figure>
              :
              <img onClick={() => { setModalShow3(true); setvideodata(vid) }} className="video_thumbnail_social" src={vid.VideoThumbnail} />
            }
            <div className='sociallearning_div' >
              {(vid.VideoTopic.length < 25) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>{vid.VideoTopic}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>
                    {vid.VideoTopic.substring(0, 25)}...
                    <sup data-tip data-for={index + "gxyzq23"} >&#9432;</sup>
                    <ReactTooltip id={index + "gxyzq23"} place="top" effect="solid">
                      {vid.VideoTopic}
                    </ReactTooltip>
                  </p>
                  )
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 25) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.VideoCreds.substring(0, 25)}...</p>)
                )
              }

              <div className="connect_follow_box">
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >Follow</p>
                </div>
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.id)} >&nbsp; &nbsp;Like</p>
                </div>
              </div>
            </div>
            <br />
          </div>
        )}
        {props.filter !== false && props.filter.map((vid, index) =>
          <div style={{ cursor: "pointer" }} className="video_div" key={vid.VideoID} onClick={() => { if (props.redirlog) window.location.href = "/login"; }}>
            {props.redirlog ?
              <figure className="tag figurex" data-content={vid.VideoDuration}>
                <img className="video_thumbnail_social" src={vid.VideoThumbnail} />
              </figure>
              :
              <img className="video_thumbnail_social" src={vid.VideoThumbnail} />
            }
            <div className='sociallearning_div' >
              {(vid.VideoTopic.length < 25) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>{vid.VideoTopic}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>
                    {vid.VideoTopic.substring(0, 25)}...
                    <sup data-tip data-for={"sddsc" + index} >&#9432;</sup>
                    <ReactTooltip id={"bsasc" + index} place="top" effect="solid">
                      {vid.VideoTopic}
                    </ReactTooltip>
                  </p>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 25) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.VideoCreds.substring(0, 25)}...</p>)
                )
              }
              <div className="connect_follow_box">
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >Follow</p>
                </div>
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.id)} >&nbsp; &nbsp;Like</p>
                </div>
              </div>
            </div>
            <br />
          </div>
        )
        }
      </div >
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {modalShow3 === true ? <Videopopup show={modalShow3}
        data={videodata}
        username={props.auth.user !== null ? props.auth.user.username : ""}
        onHide={() => { setModalShow3(false) }} /> : null}
    </div >
  );
}

export default Videos;