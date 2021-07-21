import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll';

function Header() {
  return (
    <Navbar style={{background:"white", padding:"0px", width:"100%", position:"sticky", top:"0", zIndex:"100"}} expand="lg">
        <Navbar.Brand href="/">
            <img style={{height: "60px", width: "80px", marginLeft: "140%", position:"relative", top:"35px"}} src="logo192.png" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{paddingRight:"15%"}}>
            <Nav>
                <Nav.Link style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                    <Link to="courses" spy={true} smooth={true}>SESSIONS</Link>
                </Nav.Link>
                <Nav.Link style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                    <Link to="requestdemo" spy={true} smooth={true}>GIGS</Link>
                </Nav.Link>
                <Nav.Link style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                    <Link to="requestdemo" spy={true} smooth={true}>COMMUNITY</Link>
                </Nav.Link>
                <Nav.Link style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}} href="">
                    <Link to="requestdemo" spy={true} smooth={true}>LOG IN</Link>
                </Nav.Link>
            </Nav>                
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;