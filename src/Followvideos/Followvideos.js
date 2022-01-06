import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactTooltip from 'react-tooltip';
import Popup from '../HomePage/Page2/Videopopup';
import { useLocation } from "react-router-dom";

function Followvideos(props) {
    const location = useLocation();
    const [modalShow3, setModalShow3] = React.useState(false);
    const [videodata, setvideodata] = React.useState({});
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap", marginTop: "40px" }}>
                            {location.state.data.map((vid, index) => {
                                if (vid.VideoID !== undefined) {
                                    return (<div key={index} style={{ width: "260px", cursor: "pointer" }} >
                                        <figure className="tag1 figurex1" data-content={vid.VideoDuration} >
                                            <img onClick={() => { if (props.auth) { setModalShow3(true); setvideodata(vid) } else { window.location.href = "/login" } }} src={vid.VideoThumbnail} width="240px" style={{ cursor: "pointer" }} />
                                        </figure>
                                        <div style={{ marginLeft: "2%", width: "260px", cursor: "pointer" }} >
                                            {(vid.VideoTopic.length < 26) ?
                                                (
                                                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>
                                                        {vid.VideoTopic}
                                                    </h6>)
                                                ) :
                                                (
                                                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>
                                                        {vid.VideoTopic.substring(0, 26)}...
                                                        <sup data-tip data-for={index + "729g"} >&#9432;</sup>
                                                        <ReactTooltip id={index + "729g"} place="top" effect="solid">
                                                            {vid.VideoTopic}
                                                        </ReactTooltip>
                                                    </h6>)
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
                                    </div>)
                                }
                                else {
                                    return <div style={{ height: "300px", width: "260px" }} >
                                        <figure style={{ cursor: "pointer" }} onClick={() => { if (vid.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${vid.id}`; }} className="tag1 figurex1" data-content={vid.course_episode_HomePage} >
                                            <img width="240px" src={vid.course_image} style={{ cursor: "pointer" }} />
                                        </figure>
                                        <div width="240px" src={vid.course_image} style={{ marginLeft: "2%", width: "260px" }}>
                                            {(vid.course_name.length < 25) ?
                                                (
                                                    (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>
                                                        {vid.course_name}
                                                    </p>)
                                                ) :
                                                (
                                                    (<p className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px"}}>
                                                        {vid.course_name.substring(0, 25)}...
                                                        <sup data-tip data-for={vid.id + "gx23"} >&#9432;</sup>
                                                        <ReactTooltip id={vid.id + "gx23"} place="top" effect="solid">
                                                            {vid.course_name}
                                                        </ReactTooltip>
                                                    </p>)
                                                )
                                            }
                                            <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>by {vid.course_instructor}</p>
                                            {((vid.course_instructor_post.length) < 27) ?
                                                (
                                                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.course_instructor_post}</p>)
                                                ) :
                                                (
                                                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.course_instructor_post.substring(0, 27)}...</p>)

                                                )
                                            }
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
                    </Col>

                </Row>
                {modalShow3 === true ?
                    <Popup data={videodata} username={props.auth.user.username} show={modalShow3}
                        onHide={() => setModalShow3(false)} /> : null}
            </Container>
        </div >
    )
}

export default Followvideos
