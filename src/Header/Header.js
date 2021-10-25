import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Auth from "@aws-amplify/auth";

function Header(props) {
    async function LogOutFunc() {
        try {
            // localStorage.removeItem("login");
            await Auth.signOut();
            window.location.href="../";
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Navbar style={{background:"white", padding:"0px", width:"100%", position:"sticky", top:"0", zIndex:"100"}} expand="lg">
        <Navbar.Brand style={{marginLeft:"7.8%", paddingTop:"10px", paddingBottom:"10px"}} href="/">
            <img style={{height:"42px", width:"63px"}} src="/TNG_logo.png" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{paddingRight:"5%"}}>
            <Nav>
                <Nav.Link href="/TNGoriginals" style={{color: "#424242", fontWeight:"700", fontSize:"15px", paddingLeft:"35px"}}>
                    TNG Originals
                </Nav.Link>
                <Nav.Link href="/ExperientialLearning" style={{color: "#424242", fontWeight:"700", fontSize:"15px", paddingLeft:"35px"}}>
                    Experiential Learning
                </Nav.Link>
                <Nav.Link href="/SocialLearning" style={{color: "#424242", fontWeight:"700", fontSize:"15px", paddingLeft:"35px"}}>
                    Social Learning
                </Nav.Link>
                <Nav.Link href="/NotALearner" style={{color: "#424242", fontWeight:"700", fontSize:"15px", paddingLeft:"35px"}}>
                    Not a Learner?
                </Nav.Link>
                {props.auth.isAuthenticated===true && 
                    <Nav.Link onClick={LogOutFunc} style={{color: "#424242", fontWeight:"700", fontSize:"15px", paddingLeft:"35px"}}>
                        Logout
                    </Nav.Link>
                }
                {props.auth.isAuthenticated===true && 
                    <Nav.Link href="/profile" style={{color: "#424242", fontWeight:"700", fontSize:"15px", paddingLeft:"35px"}}>
                        {props.auth.user.attributes.name.split(" ")[0]}
                    </Nav.Link>
                }
                {props.auth.isAuthenticated===false && 
                    <Nav.Link href="/login" style={{color: "#424242", fontWeight:"700", fontSize:"15px", paddingLeft:"35px"}}>
                        Login
                    </Nav.Link>
                }
            </Nav>                
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;