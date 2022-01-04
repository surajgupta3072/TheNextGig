import React from 'react'
import docClient from "../GigsPage/GigsAWS";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import "./Follow.css"
import ReactTooltip from 'react-tooltip';
import masterdata from "../MasterClassPage/Masterclass.json"
import { useHistory } from "react-router-dom"
let list1 = [];
function Follow(props) {
    const history = useHistory();
    if (props.auth.isAuthenticated === false)
        window.location.href = "../login";
    const [yourfollowid, setyourfollowid] = useState([])
    const [yourfollowdata, setyourfollowdata] = useState([])
    const [followvideo, setfollowvideo] = useState([])
    const [mastervideo, setmastervideo] = useState([])
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
                var x = ele;
                var params = {
                    TableName: "ExpertsTable",
                };
                docClient.scan(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        data.Items.forEach((ele) => {
                            if (ele.AccountID === x.id)
                                list.push(ele)
                        })
                    }
                    value(list)
                })
            })
        })
    }, [])
    var list = []
    function fetchvideos(idm, ids) {
        idm.forEach((ele) => {
            masterdata.forEach((ele2) => {
                if (ele2.id === ele) {
                    list.push(ele2)
                }
            })
            setmastervideo(list)
        })
        if (ids.length === 0) {
            history.push({ pathname: "../followvideos", state: { data: list } })
        }
        ids.forEach((ele) => {
            var params = {
                TableName: "VideosTable",
                KeyConditionExpression: "#Vid = :VideoID",
                ExpressionAttributeNames: {
                    "#Vid": "VideoID",
                },
                ExpressionAttributeValues: {
                    ":VideoID": ele,
                },
            }
            docClient.query(params, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    list.push(data.Items[0])
                    history.push({ pathname: "../followvideos", state: { data: list } })
                    setfollowvideo(list)
                }
            })
        })
    }
    var list = []
    function value(x) {
        if (x.length === list1.length) {
            setyourfollowdata(x)
        }
    }
    return (
        <div>
            <br />
            <h4 style={{ fontFamily: "Open Sans", fontWeight: "800", marginLeft: "2%" }}>Following</h4>
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row" }}>{yourfollowdata.map((ele, index) => {
                {/* <div onClick={() => { fetchvideos(ele.MastersessionsVideoUploadId, ele.SocialLearningVideoUploadedId); }}
                    key={index}><img style={{ height: "134px", width: "240px" }} src={ele.ExpertPic} /><br />{ele.ExpertName}<br />{ele.ExpertDesignation}<br />{ele.ExpertEducational}</div> */}
                return < div onClick={() => { fetchvideos(ele.MastersessionsVideoUploadId, ele.SocialLearningVideoUploadedId); }} style={{ height: "300px", width: "260px" }} >
                    <img width="240px" src={ele.ExpertPic} style={{ cursor: "pointer" }} />
                    <div width="240px" style={{ marginLeft: "2%", width: "260px" }}>
                        {(ele.ExpertName.length < 25) ?
                            (
                                (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                                    {ele.ExpertName}
                                </p>)
                            ) :
                            (
                                (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                                    {ele.ExpertName.substring(0, 25)}...
                                    <sup data-tip data-for={ele.id + "gx23"} >&#9432;</sup>
                                    <ReactTooltip id={ele.id + "gx23"} place="top" effect="solid">
                                        {ele.ExpertName}
                                    </ReactTooltip>
                                </p>)
                            )
                        }
                        {((ele.ExpertDesignation.length) < 27) ?
                            (
                                (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertDesignation}</p>)
                            ) :
                            (
                                (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertDesignation.substring(0, 27)}...</p>)

                            )
                        }
                        <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertEducational}</p>
                    </div>

                </div>

            })}
            </div>
        </div >
    )
}

export default Follow
