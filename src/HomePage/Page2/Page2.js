import docClient from "../../GigsPage/GigsAWS";
import { useState, useEffect } from "react";
import masterdata from "../../MasterClassPage/Masterclass.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page2.css';
import Swal from "sweetalert2";
import './../Page3/Page3.css';
import Videopopup from "../Page2/Videopopup"
import MyVerticallyCenteredModal from './ModalPosted.js';
import Modalx from './Contactinstructorpopup';
import { ArrowRight } from "react-bootstrap-icons";
import ReactTooltip from 'react-tooltip';
import { RiUserFollowLine } from "react-icons/ri"
function Page2(props) {
  const [uid, setuid] = useState("")
  const [show_no, setshowno] = useState(5);
  const [show_no1, setshowno1] = useState(2);
  const [data_finance, setdatafinance] = useState([])
  const [data_pop, setdatapop] = useState([])
  const [data_prod, setdataprod] = useState([])
  const [data_consult, setdataconsult] = useState([])
  const [data_markstra, setdatamark] = useState([])
  const [data_other, setother] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState({ check: false, data: "" });
  const [videodata, setvideodata] = useState([])
  const [username, setusername] = useState("")
  var [j, setj] = useState(0);
  var [k, setk] = useState(1);
  const [modalShow2, setModalShow2] = useState({
    data: "", check: false
  });
  const settings = {
    dots: true,
    row: 1,
    centerMode: true,
    infinite: true,
    slidesToShow: show_no,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  const settings1 = {
    dots: true,
    row: 1,
    centerMode: true,
    infinite: true,
    slidesToShow: show_no1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  useEffect(() => {
    var list = [], flag = 0;
    setuid(window.location.href.split("/")[3])
    let params = {
      TableName: "VideosTable",
    };
    docClient.scan(params, function (err, data) {
      if (err) {
        console.log(err)
      }
      else {
        data.Items.forEach((ele) => {
          list.push(ele.VideoID)
        })
      }
      if (list.includes(window.location.href.split("/")[3])) {
        flag = 1;
      }
      if (window.location.href.split("/")[3] !== "" && flag === 1) {
        let paramss = {
          TableName: "VideosTable",
          KeyConditionExpression: "#Uid = :VideoID",
          ExpressionAttributeNames: {
            "#Uid": "VideoID",
          },
          ExpressionAttributeValues: {
            ":VideoID": window.location.href.split("/")[3],
          },
        };
        docClient.query(paramss, function (err, data) {
          if (err) {
            console.log(err)
          }
          else {
            data.Items[0].VideoLink = data.Items[0].VideoLink.split(" ").join("%20")
            setModalShow4({ check: true, data: data.Items[0] });
          }
        })
      }
    })

    var paramss = {
      TableName: "VideosTable"
    };
    var list_data = []
    docClient.scan(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        list_data.push(data.Items.filter((e) => { if (e.isApproved === true) return e }));
      }
      var datax1 = [], datax2 = [], datax3 = [], datax4 = [], datax5 = [], datapopular = [];
      for (var i = 0; i < list_data[0].length; i++) {
        if (list_data[0][i].VideoViews >= 10) {
          datapopular.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(1) === true) {
          datax1.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(5) === true) {
          datax3.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(4) === true) {
          datax4.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(8) === true || list_data[0][i].VideoDomains.includes(7) === true) {
          datax5.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(3) === true || list_data[0][i].VideoDomains.includes(9) === true) {
          datax2.push(list_data[0][i]);
        }
      }
      setdatapop(datapopular);
      setdatafinance(datax1);
      setdataprod(datax2);
      setdatamark(datax3)
      setdataconsult(datax4)
      setother(datax5)
    });

    /* if (props.auth.user === null) {
      setUser("");
      setRedirectLogin(true);
    }
    else {
      setRedirectLogin(false);
      setUser(props.auth.user); */
    // var params = {
    //   TableName: "UsersTable",
    //   Key: { "UserID":props.auth.user.username },
    // };
    // docClient.get(params, function(err, data) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     setRew(data.Item.TotalRewards);
    //   }
    // });
    /* } */
    if (window.innerWidth <= 1324 && window.innerWidth >= 1000) {
      setshowno(2)
      setshowno1(1)
    }
    if (window.innerWidth <= 1000) {
      setshowno(1)
      setshowno1(1)
    }
  }, []);
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
                "You Already follow him" +
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
                    "Creator want to say to thank you for following him" +
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
                "You already follow this person" +
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
                  "Creator want to say to thank you for liking this video" +
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
              "Already Liked" +
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
                  "Creator want to say to thank you for liking this video" +
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
              "Already liked" +
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
  const likemaster = (id) => {
    var paramss = {
      TableName: "UsersTable",
      Key: { UserID: props.auth.user.username },
      ProjectionExpression: "MasterclassesLiked",
    };
    docClient.get(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var flag = 0;
        data.Item.MasterclassesLiked.forEach((ele) => {
          if (ele === id) {
            flag = 1;
          }
        })
        if (flag === 0) {
          var params = {
            TableName: "UsersTable",
            Key: { UserID: props.auth.user.username },
            UpdateExpression:
              "set MasterclassesLiked[" +
              data.Item.MasterclassesLiked.length.toString() +
              "] = :ms",
            ExpressionAttributeValues: {
              ":ms": id,
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
                  "Creator want to say to thank you for liking this video" +
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
              "Already liked" +
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
  return (
    <div style={{ marginTop: "2%", marginLeft: "2%" }}>
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Popular</h4>
      <Slider /* style={{ marginLeft: "20%" }} */ {...settings}>
        {masterdata.map((ele, i) => {
          if (ele.id === 2 || ele.id === 5 || ele.id === 6) {
            return <div style={{ height: "300px", width: "260px" }} >
              <figure style={{ cursor: "pointer" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}`; }} className="tag1 figurex1" data-content={ele.course_episode_HomePage} >
                <img width="240px" src={ele.course_image} style={{ cursor: "pointer" }} />
              </figure>
              <div width="240px" src={ele.course_image} style={{ marginLeft: "2%", width: "260px" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                      {ele.course_name}
                    </p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                      {ele.course_name.substring(0, 25)}...
                      <sup data-tip data-for={ele.id + "gx23"} >&#9432;</sup>
                      <ReactTooltip id={ele.id + "gx23"} place="top" effect="solid">
                        {ele.course_name}
                      </ReactTooltip>
                    </p>)
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
              <div className="connect_follow_box">
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(ele.VideoUploaderID)} >&nbsp;Follow</p>
                </div>
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => likemaster(ele.id)} >&nbsp; &nbsp;Like</p>
                </div>
              </div>
            </div>
          }
        }
        )}
        {data_pop.map((vid, index) => {
          return <div key={index} style={{ width: "260px", cursor: "pointer" }} >
            <figure style={{ cursor: "pointer" }} onClick={() => { if (props.auth) { setModalShow3(true); setusername(props.auth.username); setvideodata(vid) } else { window.location.href = "/login" } }} className="tag1 figurex1" data-content={vid.VideoDuration} >
              <img src={vid.VideoThumbnail} width="240px" />
            </figure>
            <div src={vid.VideoThumbnail} width="240px" style={{ marginLeft: "2%", width: "260px" }} >
              {(vid.VideoTopic.length < 26) ?
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                    {vid.VideoTopic}
                  </h8>)
                ) :
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                    {vid.VideoTopic.substring(0, 26)}...
                    <sup data-tip data-for={index + "729g"} >&#9432;</sup>
                    <ReactTooltip id={index + "729g"} place="top" effect="solid">
                      {vid.VideoTopic}
                    </ReactTooltip>
                  </h8>)
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
            <div className="connect_follow_box">
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >&nbsp;Follow</p>
              </div>
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.VideoID)} >&nbsp; &nbsp;Like</p>
              </div>
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Finance</h4>
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "Finance") {
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
              <div className="connect_follow_box">
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(ele.VideoUploaderID)} >&nbsp;Follow</p>
                </div>
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(ele.id)} >&nbsp; &nbsp;Like</p>
                </div>
              </div>
            </div>
          }
        })}
        {data_finance.map((vid, index) => {
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
            <div className="connect_follow_box">
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >&nbsp;Follow</p>
              </div>
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.VideoID)} >&nbsp; &nbsp;Like</p>
              </div>
            </div>
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Product Management & Tech</h4>
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "ProdMan") {
            return <div style={{ width: "260px" }}>
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
                      <sup data-tip data-for={ele.id + "prodman"} >&#9432;</sup>
                      <ReactTooltip id={ele.id + "prodman"} place="top" effect="solid">
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
              <div className="connect_follow_box">
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(ele.VideoUploaderID)} >&nbsp;Follow</p>
                </div>
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(ele.id)} >&nbsp; &nbsp;Like</p>
                </div>
              </div>
            </div>

          }
        })}
        {data_prod.map((vid, index) => {
          return <div style={{ height: "300px", width: "200px" }} >
            <figure style={{ cursor: "pointer" }} onClick={() => { if (props.auth) { setModalShow3(true); setusername(props.auth.username); setvideodata(vid) } else { window.location.href = "/login" } }} className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div width="240px" src={vid.VideoThumbnail} style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 26) ?
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic}</h8>)
                ) :
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic.substring(0, 26)}...
                    <sup data-tip data-for={index + "g2f"} >&#9432;</sup>
                    <ReactTooltip id={index + "g2f"} place="top" effect="solid">
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
            <div className="connect_follow_box">
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >&nbsp;Follow</p>
              </div>
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.VideoID)} >&nbsp; &nbsp;Like</p>
              </div>
            </div>
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Marketing & Strategy</h4>
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "Marketing" || ele.course_domain === "Strategy") {
            return <div style={{ width: "260px" }} >
              <figure style={{ cursor: "pointer" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }} className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px", cursor: "pointer" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{ele.course_name}</h8>)
                  ) :
                  (
                    (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{ele.course_name.substring(0, 25)}...
                      <sup data-tip data-for={ele.id + "mark"} >&#9432;</sup>
                      <ReactTooltip id={ele.id + "mark"} place="top" effect="solid">
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
              <div className="connect_follow_box">
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(ele.VideoUploaderID)} >&nbsp;Follow</p>
                </div>
                <div>
                  <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(ele.id)} >&nbsp; &nbsp;Like</p>
                </div>
              </div>
            </div>

          }
        })}
        {data_markstra.map((vid, index) => {
          return <div style={{ height: "300px", width: "200px" }} >
            <figure style={{ cursor: "pointer" }} onClick={() => { if (props.auth) { setModalShow3(true); setusername(props.auth.username); setvideodata(vid) } else { window.location.href = "/login" } }} className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div width="240px" src={vid.VideoThumbnail} style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic}</h8>)
                ) :
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic.substring(0, 26)}...
                    <sup data-tip data-for={index + "gm12"} >&#9432;</sup>
                    <ReactTooltip id={index + "gm12"} place="top" effect="solid">
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
            <div className="connect_follow_box">
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >&nbsp;Follow</p>
              </div>
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.VideoID)} >&nbsp; &nbsp;Like</p>
              </div>
            </div>
          </div>

        })}
        {data_consult.map((vid, index) => {
          return <div style={{ height: "300px", width: "200px" }}>
            <figure style={{ cursor: "pointer" }} onClick={() => { if (props.auth) { setModalShow3(true); setusername(props.auth.username); setvideodata(vid) } else { window.location.href = "/login" } }} className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div width="240px" src={vid.VideoThumbnail} style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic}</h8>)
                ) :
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic.substring(0, 26)}...
                    <sup data-tip data-for={index + "gx2"} >&#9432;</sup>
                    <ReactTooltip id={index + "gx2"} place="top" effect="solid">
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
            <div className="connect_follow_box">
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >&nbsp;Follow</p>
              </div>
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.VideoID)} >&nbsp; &nbsp;Like</p>
              </div>
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Others</h4>
      <Slider {...settings}>
        {data_other.map((vid, index) => {
          return <div style={{ width: "260px" }} >
            <figure style={{ cursor: "pointer" }} onClick={() => { if (props.auth) { setModalShow3(true) } else { window.location.href = "/login" } }} className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div width="240px" src={vid.VideoThumbnail} style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic}</h8>)
                ) :
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{vid.VideoTopic.substring(0, 26)}...
                    <sup data-tip data-for={index + "g12"} >&#9432;</sup>
                    <ReactTooltip id={index + "g12"} place="top" effect="solid">
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
            <div className="connect_follow_box">
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(vid.VideoUploaderID)} >&nbsp;Follow</p>
              </div>
              <div>
                <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => like(vid.VideoID)} >&nbsp; &nbsp;Like</p>
              </div>
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800", display: "inline" }}>Upcoming</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{ height: "40px" }} className="button_slide_tngorig slide_right" onClick={() => setModalShow(true)}>
        Keep me posted
      </button>
      <br /><br />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Slider {...settings1}>
        {masterdata.map((ele) => {
          if (ele.course_timing === "...Coming Soon") {
            return <div style={{ width: "260px" }} >
              <figure className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} style={{ cursor: "pointer" }} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px", cursor: "pointer" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{ele.course_name}</h8>)
                  ) :
                  (
                    (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>{ele.course_name.substring(0, 25)}...
                      <sup data-tip data-for={ele.id + "coming"} >&#9432;</sup>
                      <ReactTooltip id={ele.id + "coming"} place="top" effect="solid">
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
              <br />
            </div>
          }
        })}
      </Slider>
      {modalShow3 === true ? <Videopopup show={modalShow3}
        data={videodata}
        username={props.auth.user !== null ? props.auth.user.username : ""}
        onHide={() => { setModalShow3(false) }} /> : null}
      {modalShow4.check === true ? <Videopopup show={modalShow4.check}
        data={modalShow4.data}
        uid={uid}
        username={props.auth.user !== null ? props.auth.user.username : ""}
        onHide={() => { setModalShow4({ check: false, data: "" }) }} /> : null}
      < Modalx
        data={modalShow2.data}
        show={modalShow2.check}
        onHide={() => { setModalShow2(false) }}
      />
      <br /><br /><br />
      <div className="btn_div_homepage_new" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div><a href="/TNGOriginals"><button style={{ marginTop: "0px", marginLeft: "0px", width: "240px" }} id="start_doing_homepage" className="button_slide slide_right orange_button_page3">All TNG Originals<ArrowRight className="button_arrow" /></button></a></div>
        <div><a href="/SocialLearning"><button id="start_doing_homepage" style={{ marginTop: "0px", marginLeft: "0px", width: "240px" }} className="button_slide slide_right orange_button_page3">All bite-sized videos<ArrowRight className="button_arrow" /></button></a></div>
      </div>
    </div >
  );
}

export default Page2;
