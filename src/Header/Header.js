import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from "@aws-amplify/auth";
import { useState, useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import './Header.css';
// import NotALearnerModal from './NotALearnerPageModal';
import Referalpopup from "./Referralpopup";
import LeaderBoard from "./LeaderBoard"
function Header(props) {
    const [modalShow, setModalShow] = useState(false);
    const [reward, setReward] = useState("__");
    const [refcode, setRefCode] = useState("_______");
    const [modalShow2, setModalShow2] = useState(false);
    const [Dp, setDp] = useState("");
    const [showrdmbutton, setShowRDMButton] = useState(false);

    useEffect(() => {
        if (props.auth.isAuthenticated === true) {
            var paramss = {
                TableName: "UsersTable",
                Key: { UserID: props.auth.user.username },
                ProjectionExpression: "TotalRewards, DPlink, RedeemDailyMinutesButtonClickedAt",
            };
            docClient.get(paramss, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    if (data.Item.DPlink !== undefined) {
                        setDp(data.Item.DPlink)
                    }
                    let today = new Date();
                    let dateRDM = new Date(data.Item.RedeemDailyMinutesButtonClickedAt);
                    setReward(data.Item.TotalRewards);
                    if (data.Item.RedeemDailyMinutesButtonClickedAt === undefined) {
                        setShowRDMButton(true);
                    }
                    else if (today.getDate() > dateRDM.getDate() && today.getMonth() >= dateRDM.getMonth()) {
                        setShowRDMButton(true);
                    }
                }
            });
        }
    }, []);

    function getRefCode() {
        var paramss = {
            TableName: "UsersTable",
            Key: { UserID: props.auth.user.username },
            ProjectionExpression: "ReferralCode",
        };
        docClient.get(paramss, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                setRefCode(data.Item.ReferralCode);
            }
        });
    }

    async function LogOutFunc() {
        try {
            await Auth.signOut();
            window.location.href = "/TNGoriginals";
        } catch (error) {
            console.log(error);
        }
    }

    function RedeemDailyMinutes() {
        var params = {
            TableName: "UsersTable",
            Key: { "UserID": props.auth.user.username },
            ProjectionExpression: "TotalRewards",
        };
        docClient.get(params, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var paramss = {
                    TableName: "UsersTable",
                    Key: { "UserID": props.auth.user.username },
                    UpdateExpression: "set TotalRewards = :tr",
                    ExpressionAttributeValues: {
                        ":tr": data.Item.TotalRewards + 5,
                    },
                    ReturnValues: "UPDATED_NEW"
                }
                docClient.update(paramss, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        var paramss = {
                            TableName: "UsersTable",
                            Key: { "UserID": props.auth.user.username },
                            UpdateExpression: "set RedeemDailyMinutesButtonClickedAt = :rdm",
                            ExpressionAttributeValues: {
                                ":rdm": Date.now(),
                            },
                            ReturnValues: "UPDATED_NEW"
                        }
                        docClient.update(paramss, function (err, data) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                window.location.reload();
                            }
                        });
                    }
                });
            }
        });
    }

    return (<div>
        <Navbar style={{ backgroundColor: "black", padding: "0px", width: "100%", position: "sticky", top: "0", zIndex: "100" }} expand="lg" variant="dark" >
            <Navbar.Brand style={{ marginLeft: "2%", paddingTop: "10px", paddingBottom: "10px" }} href="/">
                <img style={{ height: "48px", width: "72px" }} src="/TNG_logo_tab.png" alt="logo" />
            </Navbar.Brand>
            {(props.auth.isAuthenticated === true && showrdmbutton === true) &&
                <Nav.Link className="reward_mins_mobile" onClick={RedeemDailyMinutes} style={{ boxShadow: "2px 2px white", color: "white", fontWeight: "700", fontSize: "9px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#f26c4f" }}>
                    Claim Daily<br />&nbsp;&nbsp;Minutes
                </Nav.Link>
            }
            {props.auth.isAuthenticated === true &&
                <Nav.Link className="reward_mins_mobile rewards_min_mobile_free" href="/LearnCoins" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px", display: "flex", flexDirection: "column", textAlign: "right" }}>
                    {reward} mins free
                </Nav.Link>
            }
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <NavDropdown style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "15px" }} title="Access all videos">
                        <NavDropdown.Item id="tng_originals_dropdown" style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/TNGOriginals">TNG Originals</NavDropdown.Item>
                        <NavDropdown.Item id="bite_sized_videos_dropdown" style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/BiteSizedVideos">Bite-Sized Videos</NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "15px" }} title="Become an expert"> */}
                    {/*  <NavDropdown.Item style={{ color: "black", fontWeight: "700", fontSize: "15px" }} onClick={() => setModalShow(true)}>Collaborate for Session</NavDropdown.Item>
                        <NotALearnerModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        /> */}
                    <Nav.Link id="add_bite_sized_videos" style={{ color: "black", fontWeight: "700", fontSize: "15px", paddingLeft: "15px" }} href="/BiteSizedVideos">Add Bite-Sized Video</Nav.Link>
                    {/* </NavDropdown> */}
                    <Nav.Link id="creators" href="/creators" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "15px" }}>
                        Creators
                    </Nav.Link>
                    <Nav.Link id="opportunities" href="/ExperientialLearning" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "15px" }}>
                        Opportunities
                    </Nav.Link>
                    {/* <Nav.Link className='leaderboard_dropdown' title="Leaderboard" id="Leaderboard" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "15px" }} onClick={() => setModalShow(true)}>
                        LeaderBoard
                    </Nav.Link>
                    <LeaderBoard
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        /> */}
                </Nav>
                {(props.auth.isAuthenticated === true && showrdmbutton === true) &&
                    <Nav.Link id="claim_daily_minutes_btn" className="reward_mins" onClick={RedeemDailyMinutes} style={{ boxShadow: "2px 2px white", color: "white", fontWeight: "700", fontSize: "15px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#f26c4f" }}>
                        Claim Daily Minutes
                    </Nav.Link>
                }
                <Nav style={{ paddingRight: "50px" }}>
                    {props.auth.isAuthenticated === true &&
                        <Nav.Link id="mins_page_btn_homepage" className="reward_mins" href="/LearnCoins" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            {reward} mins free
                        </Nav.Link>
                    }
                    {props.auth.isAuthenticated === true &&
                        <div className='prof_img' style={{ display: "flex", paddingLeft: "15px" }}>
                            {Dp === "" ? <span className='profile_box'><h6 className="profile_icon_text">{props.auth.user.attributes.name.split(" ")[0][0]}</h6></span> : <img style={{ height: "30px", width: "30px", borderRadius: "50%", marginTop: "4px" }} src={Dp} />}
                            <NavDropdown className='navdrop_profile' style={{ color: "white", fontWeight: "700", fontSize: "15px" }} title={props.auth.user.attributes.name.split(" ")[0]}>
                                <NavDropdown.Item id="referral_code_dropdown" style={{ color: "black", fontWeight: "700", fontSize: "15px" }} onClick={() => { getRefCode(); setModalShow2(true) }}>Referral Code</NavDropdown.Item>
                                <Referalpopup
                                    show={modalShow2}
                                    refcode={refcode}
                                    onHide={() => setModalShow2(false)}
                                />
                                <NavDropdown.Item id="my_profile_dropdown" style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/profile">My profile</NavDropdown.Item>
                                <NavDropdown.Item id="skills_dropdown" style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/SkillsVideo">Skills & Videos</NavDropdown.Item>
                                <NavDropdown.Item id="following_dropdown" style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/follow">Following</NavDropdown.Item>
                                <NavDropdown.Item id="logout_dropdown" style={{ color: "black", fontWeight: "700", fontSize: "15px" }} onClick={LogOutFunc}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    }
                    {props.auth.isAuthenticated === false &&
                        <Nav.Link id="login_button_homepage" href="/login" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            Login
                        </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    </div >
    );
}

export default Header;