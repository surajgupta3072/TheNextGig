import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { GiShare } from "react-icons/gi";
import MyVerticallyCenteredModal1 from './Modal1'
import { FiPlay } from "react-icons/fi";
import Swal from "sweetalert2";
import Modalx from './Contactinstructorpopup';
import docClient from '../../GigsPage/GigsAWS';
function MyVerticallyCenteredModal(props) {
    const [modalShow2, setModalShow2] = useState({
        data: "", check: false
    });
    const [modalShow, setModalShow] = useState(false);
    const [popupsharelinkid, setpopupsharelinkid] = useState("");
    const [reward, setReward] = useState("");
    useEffect(() => {
        document.getElementsByClassName("modal-dialog")[0].classList.add("modal-dialog-custom")
        document.getElementsByClassName("modal-content")[0].classList.add("modal-content-custom")
        if (props.username === "") {
            window.location.href = "../login"
        }
        if (props.username !== "") {
            var paramss = {
                TableName: "UsersTable",
                Key: { UserID: props.username },
                ProjectionExpression: "TotalRewards",
            };
            docClient.get(paramss, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    setReward(data.Item.TotalRewards);
                }
            });
        }
    }, [])
    function VideoStarted(vid, ct, vidDuration) {
        if (reward >= vidDuration) {
            if (ct <= 0.1) {
                var params = {
                    TableName: "UsersTable",
                    Key: { "UserID": props.username },
                    ProjectionExpression: "SocialLearningVideosWatched",
                };
                docClient.get(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        var flag = 0;
                        for (var i = 0; i < data.Item.SocialLearningVideosWatched.length; i++) {
                            if (data.Item.SocialLearningVideosWatched[i].vid === vid)
                                var flag = 1;
                        }
                        if (flag === 0) {
                            var params = {
                                TableName: "UsersTable",
                                Key: { "UserID": props.username },
                                UpdateExpression: "set SocialLearningVideosWatched[" + data.Item.SocialLearningVideosWatched.length.toString() + "] = :slvw",
                                ExpressionAttributeValues: {
                                    ":slvw": { "timestamp": `${Date.now()}`, "vid": vid }
                                },
                                ReturnValues: "UPDATED_NEW"
                            }
                            docClient.update(params, function (err, data) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                            var paramss = {
                                TableName: "VideosTable",
                                Key: { "VideoID": vid },
                                ProjectionExpression: "VideoViews",
                            };
                            docClient.get(paramss, function (err, data) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    var params = {
                                        TableName: "VideosTable",
                                        Key: { "VideoID": vid },
                                        UpdateExpression: "set VideoViews = :slvv",
                                        ExpressionAttributeValues: {
                                            ":slvv": data.Item.VideoViews + 1
                                        },
                                        ReturnValues: "UPDATED_NEW"
                                    }
                                    docClient.update(params, function (err, data) {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            var params = {
                                                TableName: "UsersTable",
                                                Key: { "UserID": props.username },
                                                UpdateExpression: "set TotalRewards = :tr",
                                                ExpressionAttributeValues: {
                                                    ":tr": reward - vidDuration
                                                },
                                                ReturnValues: "UPDATED_NEW"
                                            }
                                            docClient.update(params, function (err, data) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                else {
                                                    //TRANSACTIONS HISTORY CODE
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            }
        }
        else {
            console.log("MINUTES NOT SUFFICIENT");
            // setModalShow1(true);
            window.location.href = "/";
        }
    }

    function VideoEnded(hashtags) {
        var paramss = {
            TableName: "UsersTable",
            Key: { "UserID": props.username },
            ProjectionExpression: "SkillsAcquiredVideos",
        };
        docClient.get(paramss, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var params = {
                    TableName: "UsersTable",
                    Key: { "UserID": props.username },
                    UpdateExpression: "set SkillsAcquiredVideos[" + data.Item.SkillsAcquiredVideos.length.toString() + "] = :sav",
                    ExpressionAttributeValues: {
                        ":sav": hashtags.split("--")
                    },
                    ReturnValues: "UPDATED_NEW"
                }
                docClient.update(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    }
    const follow = (createrid) => {
        if (!props.username) {
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
                        if (ele.id === props.username)
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
                                ":ms": { "id": props.username, "date": Date.now() },
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
                Key: { UserID: props.username },
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
                            icon: "success",
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
                            Key: { UserID: props.username },
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
                            icon: "success",
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
            <Modal.Body
                style={{ padding: "0%", backgroundColor: "#020312", border: "1px solid #f26c4f" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="div_video" style={{ height: "fit-content", marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}>
                        <video className="popup_video" controlsList="nodownload" onContextMenu={e => e.preventDefault()} onEnded={() => VideoEnded(props.data.VideoHashtags)} onPlay={(e) => VideoStarted(props.data.VideoID, e.target.currentTime, (Number(props.data.VideoDuration.split(":")[0])))} controls style={{ height: "100%" }}>
                            <source src={props.data.VideoLink} />
                        </video>
                        <div className="text_video_popup" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <div>
                                <h6 className="text1" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{props.data.VideoTopic}</h6>
                                <p className="text1" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{props.data.VideoUsername}</p>
                                <p className="text1" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{props.data.VideoCreds}</p>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => { setModalShow2({ "data": props.data, "check": true }) }} >Connect</p>
                                    </div>
                                    <div>
                                        <p className="connect_text" style={{ cursor: "pointer" }} onClick={() => follow(props.data.VideoUploaderID)} >&nbsp; &nbsp;&nbsp;&nbsp;Follow</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text1" style={{ padding: "0", margin: "0", color: "#000", fontSize: "18px", cursor: "pointer" }}>
                                <button style={{ marginLeft: "0%", border: "0px", color: "rgb(242, 108, 79)", backgroundColor: "transparent", borderRadius: "3px", fontSize: "18px" }} onClick={() => setModalShow(true)}>
                                    Share <GiShare style={{ width: "20px", height: "20px" }} />
                                </button>
                                <MyVerticallyCenteredModal1
                                    show={modalShow}
                                    VideoID={window.location.href.split("/")[3]}
                                    onHide={() => setModalShow(false)}
                                />
                                < Modalx
                                    data={modalShow2.data}
                                    show={modalShow2.check}
                                    onHide={() => { setModalShow2(false) }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
