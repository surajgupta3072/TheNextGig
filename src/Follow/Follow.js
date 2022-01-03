import React from 'react'
import docClient from "../GigsPage/GigsAWS";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import "./Follow.css"
import { useHistory } from "react-router-dom"
let list1 = [];
function Follow(props) {
    const history = useHistory();
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
            list1.forEach((ele, index) => {
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
                history.push({ pathname: "../followvideos", state: { data: list } })
                setfollowvideo(list)
            }
        })
    }
    var list = []
    function value(x) {
        if (x.length === list1.length) {
            x.forEach((ele, index) => {
                let params = {
                    TableName: "ExpertsTable",
                    KeyConditionExpression: "#Uid = :ExpertID",
                    ExpressionAttributeNames: {
                        "#Uid": "ExpertID",
                    },
                    ExpressionAttributeValues: {
                        ":ExpertID": ele.FullName,
                    },
                };
                docClient.query(params, function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        ele["ExpertDesignation"] = data.Items[0].ExpertDesignation;
                        ele["ExpertEducational"] = data.Items[0].ExpertEducational;
                    }
                    list.push(ele)
                });
                if (x.length === index + 1)
                    setyourfollowdata(list)
            })
        }
    }
    console.log(yourfollowdata)
    return (
        <div>
            <br />
            <h4 style={{ fontFamily: "Open Sans", fontWeight: "800", marginLeft: "2%" }}>Following</h4>
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row" }}>{yourfollowdata.map((ele, index) => {
                return <div onClick={() => { fetchvideos(ele.UserID); }}
                    key={index}><img style={{ height: "134px", width: "240px" }} src={ele.Followpagepic} /><br />{ele.FullName}<br />{console.log(ele.ExpertEducational)}<br />{ele.ExpertDesignation}</div>
            })}
            </div>
        </div >
    )
}

export default Follow
