import React from 'react'
import ReactTooltip from 'react-tooltip';
import { ArrowRight } from "react-bootstrap-icons";
import docClient from '../GigsPage/GigsAWS';
import Collaborate from "../Header/NotALearnerPageModal"
import AddVideo from "../SocialLearningPage/popupVideo"
import Popup from '../HomePage/Page2/Videopopup'
function Myvideo(props) {
    const [myvideo, setmyvideo] = React.useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [videodata, setvideodata] = React.useState({});
    console.log(props.userid)
    React.useEffect(async () => {
        let paramss = {
            TableName: "VideosTable",
        };
        docClient.scan(paramss, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var list = []
                data.Items.forEach((ele) => {
                    if (ele.VideoUploaderID === props.userid) {
                        list.push(ele);
                    }
                })
                setmyvideo(list)
            }
        })
    }, [])
    return (
        <div style={{ marginTop: "20px" }}>
            {myvideo.length !== 0 ?
                <div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                        {myvideo.map((vid, index) => {
                            return <div style={{ width: "260px" }} onClick={() => { if (props.auth) { setModalShow3(true); setvideodata(vid) } else { window.location.href = "/login" } }}>
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
                    <h3 style={{ color: "rgb(242, 108, 79)" }}>You haven't uploaded any video yet.</h3>
                    <h6 style={{ color: "rgb(242, 108, 79)" }}>Collaborate Now</h6>
                </div>
            }
            <div className="btn_div_homepage_new" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div><button onClick={() => setModalShow(true)} style={{ marginTop: "0px", marginLeft: "0px", width: "240px" }} id="start_doing_homepage" className="button_slide slide_right orange_button_page3">Collaborate for Session<ArrowRight className="button_arrow" /></button></div>
                <div><button onClick={() => setModalShow2(true)} id="start_doing_homepage" style={{ marginTop: "0px", marginLeft: "0px", width: "240px" }} className="button_slide slide_right orange_button_page3">Add bite-sized videos<ArrowRight className="button_arrow" /></button></div>
            </div>
            <Collaborate
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <AddVideo
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            {modalShow3 === true ?
                <Popup data={videodata} username={props.userid} show={modalShow3}
                    onHide={() => setModalShow3(false)} /> : null}
        </div >
    )
}

export default Myvideo
