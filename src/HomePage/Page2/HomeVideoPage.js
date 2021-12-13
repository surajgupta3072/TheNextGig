import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import docClient from '../../GigsPage/GigsAWS';
import { GiShare } from "react-icons/gi";
import MyVerticallyCenteredModal1 from './Modal1';

function HomeVideoPage(props) {
    let { vidId } = useParams();
    const [videos, setvideos] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [reward, setReward] = useState("");
    // const [modalShow1, setModalShow1] = useState(false);

    useEffect(() => {
        var paramss = {
            TableName: "VideosTable",
            KeyConditionExpression: "#Vid = :VideoID",
            ExpressionAttributeNames: {
                "#Vid": "VideoID",
            },
            ExpressionAttributeValues: {
                ":VideoID": vidId,
            }
        };
        docClient.query(paramss, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                setvideos(data.Items);
            }
        });
        var paramss = {
            TableName: "UsersTable",
            Key: { UserID: props.auth.username },
            ProjectionExpression: "TotalRewards",
        };
        docClient.get(paramss, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                setReward(data.Item.TotalRewards);
            }
        });
    }, []);

    function VideoStarted(vid, ct, vidDuration) {
        if(reward>=vidDuration) {
            if(ct <= 0.1){
                var params = {
                TableName: "UsersTable",
                Key: { "UserID": props.auth.username },
                ProjectionExpression: "SocialLearningVideosWatched",
                };
                docClient.get(params, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    var flag = 0;
                    for(var i = 0; i < data.Item.SocialLearningVideosWatched.length; i++) {
                    if(data.Item.SocialLearningVideosWatched[i].vid === vid)
                        var flag = 1;
                    }
                    if(flag === 0) {
                    var params = {
                        TableName: "UsersTable",
                        Key: { "UserID": props.auth.username },
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
                                Key: { "UserID": props.auth.username },
                                ProjectionExpression: "TotalRewards",
                            };
                            docClient.get(params, function (err, data) {
                                if (err) {
                                console.log(err);
                                }
                                else {
                                var params = {
                                    TableName: "UsersTable",
                                    Key: { "UserID": props.auth.username },
                                    UpdateExpression: "set TotalRewards = :tr",
                                    ExpressionAttributeValues: {
                                    ":tr": data.Item.TotalRewards-(Number(vidDuration.split(":")[0]))
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
            Key: { "UserID": props.auth.username },
            ProjectionExpression: "SkillsAcquiredVideos",
        };
        docClient.get(paramss, function (err, data) {
            if (err) {
            console.log(err);
            }
            else {
            var params = {
                TableName: "UsersTable",
                Key: { "UserID": props.auth.username },
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

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {videos.map((vid, index) =>
                <div style={{ height: "80vh" }}>
                    <video controlsList="nodownload" onContextMenu={e => e.preventDefault()} onEnded={() => VideoEnded(vid.VideoHashtags)} onPlay={(e) => VideoStarted(vid.VideoID, e.target.currentTime, vid.VideoDuration)} controls key={index} style={{ height: "100%", width: "70vw" }}>
                        <source src={vid.VideoLink}/>
                    </video>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>
                            <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>
                            <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoUsername}</p>
                            <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds}</p>
                        </div>
                        <div className="text" style={{ padding: "0", margin: "0", color: "#000", fontSize: "18px", cursor: "pointer" }}>
                            <button style={{ marginLeft: "0%", border: "0px", color: "rgb(242, 108, 79)", backgroundColor: "transparent", borderRadius: "3px", fontSize: "18px" }} onClick={() => setModalShow(true)}>
                                Share <GiShare style={{ width: "20px", height: "20px" }} />
                            </button>
                            <MyVerticallyCenteredModal1
                                show={modalShow}
                                VideoID={vidId}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default HomeVideoPage;