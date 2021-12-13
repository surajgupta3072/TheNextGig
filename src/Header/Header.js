import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from "@aws-amplify/auth";
import { useState, useEffect } from 'react';
import docClient from '../GigsPage/GigsAWS';
import './Header.css';
import NotALearnerModal from './NotALearnerPageModal';

function Header(props) {
    const [modalShow, setModalShow] = useState(false);
    const [reward, setReward] = useState("__");
    const [refcode, setRefCode] = useState("_______");

    useEffect(() => {
        if (props.auth.isAuthenticated === true) {
            var paramss = {
                TableName: "UsersTable",
                Key: { UserID: props.auth.user.username },
                ProjectionExpression: "TotalRewards, ReferralCode",
            };
            docClient.get(paramss, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    setReward(data.Item.TotalRewards);
                    setRefCode(data.Item.ReferralCode);
                }
            });
        }
    }, []);

    async function LogOutFunc() {
        try {
            await Auth.signOut();
            window.location.href = "/TNGoriginals";
        } catch (error) {
            console.log(error);
        }
    }

    return (<div>
        < Navbar style={{ backgroundColor: "black", padding: "0px", width: "100%", position: "sticky", top: "0", zIndex: "100" }
        } expand="lg" variant="dark" >
            <Navbar.Brand style={{ marginLeft: "2%", paddingTop: "10px", paddingBottom: "10px" }} href="/">
                <img style={{ height: "48px", width: "72px" }} src="/TNG_logo_tab.png" alt="logo" />
            </Navbar.Brand>
            <Nav.Link className="reward_mins_mobile" href="/LearnCoins" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px", display: "flex", flexDirection: "column", textAlign: "right" }}>
                {reward} mins free
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <NavDropdown style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px" }} title="Access all videos">
                        <NavDropdown.Item style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/TNGOriginals">TNG Originals</NavDropdown.Item>
                        <NavDropdown.Item style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/SocialLearning">Bite-Sized Videos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px" }} title="Become an expert">
                        <NavDropdown.Item style={{ color: "black", fontWeight: "700", fontSize: "15px" }} onClick={() => setModalShow(true)}>Collaborate for Session</NavDropdown.Item>
                        <NotALearnerModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <NavDropdown.Item style={{ color: "black", fontWeight: "700", fontSize: "15px" }} href="/SocialLearning">Add Bite-Sized Video</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/ExperientialLearning" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px" }}>
                        Opportunities
                    </Nav.Link>
                </Nav>
                <Nav style={{ paddingRight: "50px" }}>
                    {props.auth.isAuthenticated === true &&
                        <Nav.Link className="reward_mins" href="/LearnCoins" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            {reward} mins free
                        </Nav.Link>
                    }
                    {props.auth.isAuthenticated === true &&
                        <Nav.Link className='referral_code' href="/profile" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px" }}>
                            {props.auth.user.attributes.name.split(" ")[0]}<br />(Referral Code: {refcode})
                        </Nav.Link>
                    }
                    {props.auth.isAuthenticated === false &&
                        <Nav.Link href="/login" style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            Login
                        </Nav.Link>
                    }
                    {props.auth.isAuthenticated === true &&
                        <Nav.Link onClick={LogOutFunc} style={{ color: "white", fontWeight: "700", fontSize: "15px", paddingLeft: "35px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            Logout
                        </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    </div>
    );
}

export default Header;