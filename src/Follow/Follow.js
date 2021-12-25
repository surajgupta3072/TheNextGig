import React from 'react'
import docClient from "../GigsPage/GigsAWS";
import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { FcContacts } from "react-icons/fc"
import { RiUserFollowLine } from "react-icons/ri"
let list1 = [];
let list = [];
var i = 0;
function Follow(props) {
    if (props.auth.isAuthenticated === false)
        window.location.href = "../login";
    const [yourfollowid, setyourfollowid] = useState([])
    const [yourfollowdata, setyourfollowdata] = useState([])
    const [followvideo, setfollowvideo] = useState([])
    useEffect(() => {
        var paramss = {
            TableName: "UsersTable",
            KeyConditionExpression: "#Uid = :UserID",
            ExpressionAttributeNames: {
                "#Uid": "UserID",
            },
            ExpressionAttributeValues: {
                ":UserID": props.auth.user.username,
            },
        };
        docClient.query(paramss, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                list1 = data.Items[0].Following
                setyourfollowid(data.Items[0].Following)
            }
            list1.forEach((ele) => {
                var params = {
                    TableName: "UsersTable",
                    KeyConditionExpression: "#Uid = :UserID",
                    ExpressionAttributeNames: {
                        "#Uid": "UserID",
                    },
                    ExpressionAttributeValues: {
                        ":UserID": ele.id,
                    },
                };
                docClient.query(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        list.push(data.Items[0])
                    }
                    value(list)
                })
            })
        })
    }, [])
    var list = []
    function fetchvideos(id) {
        var params = {
            TableName: "VideosTable",
        }
        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                data.Items.forEach((ele) => {
                    if (ele.VideoUploaderID === id) {
                        list.push(ele);
                    }
                })
                setfollowvideo(list)
            }
        })
    }
    function value(x) {
        i++;
        if (x.length === list1.length) {
            setyourfollowdata(x)
        }
    }
    return (
        <div>
            {yourfollowdata.map((ele, index) => {
                return <div onClick={() => fetchvideos(ele.UserID)} key={index}>{ele.FullName}</div>
            })}
            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap" }}>
                {followvideo.map((vid, index) => {
                    return (<div key={index} style={{ width: "260px", cursor: "pointer" }} >
                        <figure className="tag1 figurex1" data-content={vid.VideoDuration} >
                            <img onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }} src={vid.VideoThumbnail} width="240px" style={{ cursor: "pointer" }} />
                        </figure>
                        <div style={{ marginLeft: "2%", width: "260px", cursor: "pointer" }} >
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
                        {/* <div>
                  <FcContacts onClick={() => { setModalShow2({ "data": vid, "check": true }) }} />
                </div> */}
                        <br />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Follow
