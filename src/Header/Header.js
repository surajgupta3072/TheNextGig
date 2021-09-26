import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Auth from "@aws-amplify/auth";

function Header(props) {
    async function LogOutFunc() {
        try {
            await Auth.signOut();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Navbar style={{background:"white", padding:"0px", width:"100%", position:"sticky", top:"0", zIndex:"100"}} expand="lg">
        <Navbar.Brand style={{marginLeft:"8%", padding:"0"}} href="/">
            <img style={{height:"70px", width:"70px"}} src="/TheNextGigLogo.png" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{paddingRight:"5%"}}>
            <Nav>
                <Nav.Link href="/masterclass" style={{color: "#424242", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                    MASTERCLASSES
                </Nav.Link>
                <Nav.Link href="/gigs" style={{color: "#424242", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                    EXPERIENTIAL LEARNING
                </Nav.Link>
                <Nav.Link href="/sociallearn" style={{color: "#424242", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                    SOCIAL LEARNING
                </Nav.Link>
                {props.auth.isAuthenticated===true && 
                    <Nav.Link onClick={LogOutFunc} style={{color: "#424242", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                        LOGOUT
                    </Nav.Link>
                }
                {props.auth.isAuthenticated===true && 
                    <Nav.Link href="/profile" style={{color: "#424242", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                        {props.auth.user.attributes.name.split(" ")[0].toUpperCase()}
                    </Nav.Link>
                }
                {props.auth.isAuthenticated===false && 
                    <Nav.Link href="/login" style={{color: "#424242", fontWeight:"700", fontSize:"16px", paddingLeft:"35px"}}>
                        LOGIN
                    </Nav.Link>
                }
            </Nav>                
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;