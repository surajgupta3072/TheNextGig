import React from 'react'
import ReactTooltip from 'react-tooltip';
import { ArrowRight } from "react-bootstrap-icons";
import data from "../../src/MasterClassPage/Masterclass.json";
function Video(props) {
    console.log(props.videoswatch)
    return (
        <div style={{ marginTop: "20px" }}>
            {props.videospur.length !== 0 || props.videoswatch.length !== 0 ?
                <div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                        {data.map((vpurchased) => {
                            if (props.videospur.includes(vpurchased.id) === true) {
                                return (<div style={{ height: "250px", width: "260px", cursor: "pointer" }} onClick={() => { if (vpurchased.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${vpurchased.id}`; }}>
                                    <figure className="tag1 figurex1" data-content={vpurchased.course_episode_HomePage} >
                                        <img width="240px" src={vpurchased.course_image} style={{ cursor: "pointer" }} />
                                    </figure>
                                    <div style={{ marginLeft: "2%", width: "260px", cursor: "pointer" }}>
                                        {(vpurchased.course_name.length < 25) ?
                                            (
                                                (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                                                    {vpurchased.course_name}
                                                </p>)
                                            ) :
                                            (
                                                (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                                                    {vpurchased.course_name.substring(0, 25)}...
                                                    <sup data-tip data-for={vpurchased.id + "gx23"} >&#9432;</sup>
                                                    <ReactTooltip id={vpurchased.id + "gx23"} place="top" effect="solid">
                                                        {vpurchased.course_name}
                                                    </ReactTooltip>
                                                </p>)
                                            )
                                        }
                                        <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>by {vpurchased.course_instructor}</p>
                                        {((vpurchased.course_instructor_post.length) < 27) ?
                                            (
                                                (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vpurchased.course_instructor_post}</p>)
                                            ) :
                                            (
                                                (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vpurchased.course_instructor_post.substring(0, 27)}...</p>)
                                            )
                                        }
                                    </div>
                                </div>

                                )
                            }
                        })}
                        {props.videoswatch.map((vid, index) => {
                            return <div style={{ width: "260px" }} onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }}>
                                <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
                                    <img src={vid.VideoThumbnail} width="240px" style={{ cursor: "pointer" }} />
                                </figure>
                                <div style={{ marginLeft: "2%", width: "260px", cursor: "pointer" }}>
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
                                <br />
                            </div>
                        })}
                    </div>
                </div> :
                <div style={{ textAlign: "center", marginTop: "30%" }}>
                    <h3 style={{ color: "rgb(242, 108, 79)" }}>You haven't watched any video yet.</h3>
                    <h6 style={{ color: "rgb(242, 108, 79)" }}>Explore Now</h6>
                </div>
            }
            <div className="btn_div_homepage_new" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div><a href="/TNGOriginals"><button style={{ marginTop: "0px", marginLeft: "0px", width: "240px" }} id="start_doing_homepage" className="button_slide slide_right orange_button_page3">All TNG Originals<ArrowRight className="button_arrow" /></button></a></div>
                <div><a href="/SocialLearning"><button id="start_doing_homepage" style={{ marginTop: "0px", marginLeft: "0px", width: "240px" }} className="button_slide slide_right orange_button_page3">All bite-sized videos<ArrowRight className="button_arrow" /></button></a></div>
            </div>
        </div>
    )
}

export default Video
