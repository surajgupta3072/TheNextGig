import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../App.css';
import { ArrowRight } from "react-bootstrap-icons";

function Page1() {
    return (
    <div>
      <button style={{marginTop:"5%", marginLeft: "43%"}} type="submit" className="button_slide slide_right">Ummm, how?<ArrowRight className="button_arrow"/></button>
    </div>
    );
  }
  
export default Page1;