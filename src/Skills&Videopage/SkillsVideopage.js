import { useState, useEffect } from 'react';
import Skills from '../ProfilePage/Skills';
// import FeedBack  from './Feedback';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import docClient from '../GigsPage/GigsAWS';
import S3 from 'react-aws-s3';
import '../ProfilePage/ProfilePage.css';
import Video from '../ProfilePage/Video';
import Myvideo from '../ProfilePage/Myvideos';
import Popup from '../../src/HomePage/Page2/Videopopup'
const config = { bucketName: "usersdp", region: process.env.REACT_APP_REGION, accessKeyId: process.env.REACT_APP_ACCESS_ID, secretAccessKey: process.env.REACT_APP_ACCESS_KEY };
const ReactS3Client = new S3(config);

function SkillsVideopage(props) {
    const bg = { backgroundColor: "#F26C4F" };
    const [percentage, setPercentage] = useState(0);
    const [active, setActive] = useState("");
    const [color1, setColor1] = useState(bg);
    const [color2, setColor2] = useState({});
    const [color3, setColor3] = useState({});
    const [color11, setColor11] = useState("#f26c4f");
    const [textColor1, setextColor1] = useState("white");
    const [color22, setColor22] = useState("white");
    const [textColor2, setextColor2] = useState("#f26c4f");
    const [color33, setColor33] = useState("white");
    const [textColor3, setextColor3] = useState("#f26c4f");
    const [wholedata, setWholedata] = useState([]);
    const [rew, setRew] = useState(0);
    const [dplink, setDplink] = useState("./dpavtar.png");
    const [vpurchased, setvpurchased] = useState([]);
    const [vwatched, setvwatched] = useState([]);
    useEffect(async () => {
        let paramss = {
            TableName: "UsersTable",
            KeyConditionExpression: "#Uid = :UserID",
            ExpressionAttributeNames: {
                "#Uid": "UserID",
            },
            ExpressionAttributeValues: {
                ":UserID": props.auth.user.username,
            },
        };
        try {
            const data1 = await docClient.query(paramss).promise();
            setWholedata(data1.Items[0]);
            setActive("Skills");
            const per = data1.Items[0].RewardP + data1.Items[0].RewardE + data1.Items[0].RewardW + data1.Items[0].RewardS + data1.Items[0].RewardC
            setPercentage(per);
            var params = {
                TableName: "UsersTable",
                Key: { "UserID": props.auth.user.username },
                ProjectionExpression: ["TotalRewards", "MasterclassesPurchased", "SocialLearningVideosWatched"],
            };
            docClient.get(params, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    var list = []
                    data.Item.SocialLearningVideosWatched.forEach(element => {
                        var params = {
                            TableName: "VideosTable",
                            KeyConditionExpression: "#Vid = :VideoID",
                            ExpressionAttributeNames: {
                                "#Vid": "VideoID",
                            },
                            ExpressionAttributeValues: {
                                ":VideoID": element.vid,
                            },
                        };
                        docClient.query(params, function (err, data) {
                            if (err) {
                                console.log(err);
                            }
                            list.push(data.Items[0])
                        })
                    });
                    setvwatched(list)
                    setvpurchased(data.Item.MasterclassesPurchased)
                    setRew(data.Item.TotalRewards);
                    if (data1.Items[0].DPlink !== undefined)
                        setDplink(data1.Items[0].DPlink);
                }
            });
        }
        catch (err) {
            return err
        }
    }, []);

    function onChangePicture(e) {
        const dpv = e.target.files[0];
        if (dpv !== undefined) {
            config.dirName = props.auth.user.username
            ReactS3Client.uploadFile(dpv, dpv.name).then(data => {
                var params = {
                    TableName: "UsersTable",
                    Key: { "UserID": props.auth.user.username },
                    UpdateExpression: "set DPlink = :dp",
                    ExpressionAttributeValues: {
                        ":dp": data.location,
                    },
                    ReturnValues: "UPDATED_NEW"
                }
                docClient.update(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        window.location.reload();
                    }
                });
            });
        }
    };



    function buttonColor(word) {
        setActive(word)
        if (word === "Skills") {
            setColor22("white"); setextColor2("#f26c4f");
            setColor11("#f26c4f"); setextColor1("white");
            setColor33("white"); setextColor3("#f26c4f");
        }
        if (word === "Videos Accessed") {
            setColor11("white"); setextColor1("#f26c4f");
            setColor22("#f26c4f"); setextColor2("white");
            setColor33("white"); setextColor3("#f26c4f");
        }
        if (word === "My Videos") {
            setColor11("white"); setextColor1("#f26c4f");
            setColor22("white"); setextColor2("#f26c4f");
            setColor33("#f26c4f"); setextColor3("white");
        }
    }
    wholedata.TotalRewards = rew;
    const pp = {
        setWholedata: setWholedata,
        wholedata: wholedata,
        percentage: percentage,
        setPercentage: setPercentage
    };

    function whichColor(word) {
        setActive(word)
        if (word === "Skills") {
            setColor1(bg); setColor2({}); setColor3({});
        }
        else if (word === "Videos Accessed") {
            setColor1({}); setColor2(bg); setColor3({});
        }
        else if (word === "My Videos") {
            setColor1({}); setColor2({}); setColor3(bg);
        }
    }
    return (
        <Container>
            <Row>
                <Col xs={3} style={{ backgroundColor: "#1B1C2A", height: "100%" }} className="Profile_list_laptop">
                    <ProgressBar style={{ marginTop: "10%", backgroundColor: "white", marginBottom: "1%" }} min={0} max={100} variant="success" now={percentage} label={`${percentage}%`} />
                    <p style={{ fontSize: "14px", textAlign: "center" }}>(Complete the profile to earn TNG Minutes)</p>
                    <Row style={{ marginTop: "7%", marginLeft: "22%" }}>
                        <label>
                            <input type="file" onChange={(e) => onChangePicture(e)} style={{ display: "none" }} />
                            <img alt="dp" src={dplink} style={{ height: "150px", width: "150px", borderRadius: "50%", cursor: "pointer" }} />
                        </label>
                    </Row>
                    <br />
                    <Row><p style={{ fontSize: "16px", textAlign: "center", color: "#F26C4F" }}>TNG Minutes: <b>{rew}</b></p></Row>
                    <Row style={{ marginBottom: "1%", textAlign: "center" }}><p style={{ margin: "0" }}>Your Referral Code:</p><p style={{ color: "#F26C4F" }}><b>{wholedata.ReferralCode}</b></p></Row>
                    <hr style={{ color: "#F26C4F", margin: "2px 0px" }} />
                    <Row onClick={() => whichColor("Skills")} style={color1}><p style={{ fontSize: "20px", textAlign: "center", cursor: "pointer" }}>Skills</p></Row>
                    <hr style={{ color: "#F26C4F", margin: "2px 0px" }} />
                    <Row onClick={() => whichColor("Videos Accessed")} style={color2}><p style={{ fontSize: "20px", textAlign: "center", cursor: "pointer" }}>Videos Accessed</p></Row>
                    <hr style={{ color: "#F26C4F", margin: "2px 0px" }} />
                    <Row onClick={() => whichColor("My Videos")} style={color3}><p style={{ fontSize: "20px", textAlign: "center", cursor: "pointer" }}>My Videos</p></Row>
                </Col>
                <Col xs={12} className="Profile_list_mobile">
                    <ProgressBar style={{ marginTop: "10%", backgroundColor: "white", marginBottom: "1%" }} min={0} max={100} variant="success" now={percentage} label={`${percentage}%`} />
                    <p style={{ fontSize: "14px", textAlign: "center" }}>(Complete the profile to earn Reward points)</p>
                    <div >
                        <input type="file" onChange={(e) => onChangePicture(e)} style={{ display: "none" }} />
                        <div className="profile_logo_text_mobile"><div><img alt="dp" src={dplink} style={{ height: "100px", width: "100px", borderRadius: "50%" }} /></div>
                            <div>
                                <div><p style={{ fontSize: "14px", textAlign: "center", color: "#F26C4F" }}>TNG Minutes: <b>{rew}</b></p></div>
                                <div style={{ marginBottom: "2%", textAlign: "center" }}><p style={{ margin: "0" }}>Your Referral Code:</p><p style={{ color: "#F26C4F" }}><b>{wholedata.ReferralCode}</b></p></div>
                            </div>
                        </div>
                        <div className="mobile_nav_profile">
                            <br />
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div><button onClick={() => buttonColor("Skills")} style={{ backgroundColor: color11, color: textColor1, borderRadius: "40px", width: "100px", height: "30px", fontWeight: "bold", border: "0px" }}>Skills</button></div>
                            </div>
                            <br />
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div><button onClick={() => buttonColor("Videos Accessed")} style={{ backgroundColor: color22, color: textColor2, borderRadius: "40px", width: "100px", height: "30px", fontWeight: "bold", border: "0px" }}>Videos Accessed</button></div>
                            </div>
                            <br />
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div><button onClick={() => buttonColor("My Videos")} style={{ backgroundColor: color33, color: textColor3, borderRadius: "40px", width: "100px", height: "30px", fontWeight: "bold", border: "0px" }}>My Videos</button></div>
                            </div>
                        </div>
                    </div>
                    <br />

                </Col>
                <Col >
                    {active === "Skills" && <Skills p={pp} />}
                    {active === "Videos Accessed" && <Video userid={props.auth.user.username} videospur={vpurchased} videoswatch={vwatched} />}
                    {active === "My Videos" && <Myvideo userid={props.auth.user.username} />}
                </Col>
            </Row>
        </Container>
    );
}

export default SkillsVideopage;