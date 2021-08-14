import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll';
import './Header.css'

function Header() {
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
                <Nav.Link href="/community" style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}}>
                    COMMUNITY
                </Nav.Link>
                <Nav.Link href="/login" style={{color: "#424242", fontWeight:"700", fontSize:"18px", paddingLeft:"55px"}} href="">
                    LOG IN
                </Nav.Link>
            </Nav>                
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;