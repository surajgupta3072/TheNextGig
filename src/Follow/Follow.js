import React from 'react'
import docClient from "../GigsPage/GigsAWS";
import { useState, useEffect } from "react";
import "./Follow.css"
import ReactTooltip from 'react-tooltip';
function Follow(props) {
    var list = [], list2 = [], list3 = []
    const [yourfollowdata, setyourfollowdata] = useState([]);
    useEffect(() => {
        var params = {
            TableName: "ExpertsTable",
        };
        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                list.push(data.Items)
                list = list[0]
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
                        list2.push(data.Items[0].Following)
                        list2 = list2[0]
                        list2.forEach((ele, index) => {
                            list.forEach(ele1 => {
                                if (ele.id === ele1.AccountID) {
                                    list3.push(ele1)
                                }
                            })
                        })
                        setyourfollowdata(list3)
                    }
                })
            }
        })

    }, [])
    var list3 = []
    return (
        <div>
            <br />
            <h4 style={{ fontFamily: "Open Sans", fontWeight: "800", marginLeft: "2%" }}>Following</h4>
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap" }}>
                {yourfollowdata.map(ele => {
                    return < div onClick={() => window.location.href = "/creator/" + (ele.ExpertID).split(" ").join("_")} style={{ height: "300px", width: "260px" }} >
                        <img width="240px" src={ele.ExpertPic} style={{ cursor: "pointer" }} />
                        <div width="240px" style={{ marginLeft: "2%", width: "260px" }}>
                            {(ele.ExpertName.length < 25) ?
                                (
                                    (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>
                                        {ele.ExpertName}
                                    </p>)
                                ) :
                                (
                                    (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>
                                        {ele.ExpertName.substring(0, 25)}...
                                        <sup data-tip data-for={ele.id + "gx23"} >&#9432;</sup>
                                        <ReactTooltip id={ele.id + "gx23"} place="top" effect="solid">
                                            {ele.ExpertName}
                                        </ReactTooltip>
                                    </p>)
                                )
                            }
                            <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertDesignation}</p>
                            {((ele.ExpertCompany.length) < 40) ?
                                (
                                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertCompany}</p>)
                                ) :
                                (
                                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertCompany.substring(0, 40)}...</p>)
                                )
                            }
                            {((ele.ExpertSkills.length) < 40) ?
                                (
                                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertSkills}</p>)
                                ) :
                                (
                                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{ele.ExpertSkills.substring(0, 40)}...</p>)
                                )
                            }
                        </div>

                    </div>

                })}
            </div>
        </div >
    )
}

export default Follow
