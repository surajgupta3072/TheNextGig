import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { ArrowDown } from "react-bootstrap-icons";
import './Page1.css';
// import { Link } from 'react-scroll';
// import { ArrowLeft } from "react-bootstrap-icons";
// import { useState }  from 'react';

function Page1() {
  return (
    <Container className="Opening_container">
      <video className='videoTag' autoPlay playsInline loop muted width="100%" height="400vh">
        <source src="./HomePageVideo.mp4" type='video/mp4' />
      </video>
      <div className="overlay_page1">
      <Row style={{height: "50vh"}}>
        <Col style={{ marginTop: "8%" }} className="left_col_openingpage" md={7}>
          <div>
            <div className="heading">
              <div>
                <p className="slide-down">
                  <span>SHARE</span>
                  <span style={{color: "#fff", fontSize: "16px"}}><i> knowledge!</i></span>
                </p>
              </div>
              <div>
                <p className="slide-down">
                  <span>ACQUIRE</span>
                  <span style={{color: "#fff", fontSize: "16px"}}><i> skills!</i></span>
                </p>
              </div>
              <div>
                <p className="slide-down">
                  <span>GROW</span>
                  <span style={{color: "#fff", fontSize: "16px"}}><i>professionally!</i></span>
                </p>
              </div>
            </div>
          </div>
        </Col>
        
      </Row>
      </div>
    </Container>
    // <Container className="Opening_container">
    //   <Row>
    //     <Col style={{ marginTop: "8%" }} className="left_col_openingpage" md={7}>
    //       <div>
    //         <div className="heading">
    //           <div>
    //             <p className="slide-down">
    //               <span>LEARN.</span>
    //             </p>
    //           </div>
    //           <div>
    //             <p className="slide-down">
    //               <span>SHARE.</span>
    //             </p>
    //           </div>
    //           <div>
    //             <p className="slide-down">
    //               <span>GROW.</span>
    //             </p>
    //           </div>
    //           <div>
    //             <p className="slide-down" style={{ fontSize: "40px", color: "#F26C4F" }}>
    //               <span>the right way.</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //     <Col className="homeimage" md={5}></Col>
    //   </Row>
    //   <Row style={{ textAlign: "center" }}>
    //     <Link to="ummm" scroll={true}><button id="Ummm_how" className="button_slide slide_right">Ummm, how?<ArrowDown className="button_arrow" /></button></Link>
    //   </Row>
    // </Container>
  );
}

export default Page1;