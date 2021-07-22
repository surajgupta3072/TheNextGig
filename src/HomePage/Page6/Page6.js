import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../App.css'

function Page6() {
    return (
    <div style={{marginTop:"5%"}}>
        <div className="getin">
            <svg id='rectangle'>
                <rect id='stroke' rx='3' ry='3' height="50"/>
                <text fontSize="40px" fill="white" x="50%" y="25%" dominant-baseline="middle" text-anchor="middle">STATISTICS</text>
            </svg>
        </div>
    </div>
    );
  }
  
export default Page6;