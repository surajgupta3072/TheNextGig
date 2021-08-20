import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import Auth from "@aws-amplify/auth";

function Header(props) {
    async function LogOutFunc() {
        try {
            await Auth.signOut();
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Navbar style={{background:"white", padding:"0px", width:"100%", position:"sticky", top:"0", zIndex:"100"}} expand="lg">
        <Navbar.Brand href="/">
            <img className= "header_img" src="/logo192.png" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{paddingRight:"6%"}}>
            <Nav>
                <Nav.Link href="/masterclass" style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                    SESSIONS
                </Nav.Link>
                <Nav.Link href="/gigs" style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                    GIGS
                </Nav.Link>
                <Nav.Link target="_blank" href="https://discord.gg/EEVcU7ZzAQ" style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                    COMMUNITY
                </Nav.Link>
                {props.auth.isAuthenticated===true && 
                    <Nav.Link onClick={LogOutFunc} style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                        LOG OUT
                    </Nav.Link>
                }
                {props.auth.isAuthenticated===true && 
                    <Nav.Link href="/profile" style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                        {props.auth.user.attributes.name.split(" ")[0]}
                    </Nav.Link>
                }
                {props.auth.isAuthenticated===false && 
                    <Nav.Link href="/login" style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                        LOG IN
                    </Nav.Link>
                }
            </Nav>                
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;