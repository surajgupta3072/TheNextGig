import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Page1.css';

function Page1() {
  return (
    <div className='videoframe'>
      <video className='videoTag' autoPlay playsInline loop muted width="100%" height="400vh">
        <source src="https://master-sessions.s3.ap-south-1.amazonaws.com/home+page+video+mobile.mp4" type='video/mp4' />
      </video>
      <video className='videoTag1' autoPlay playsInline loop muted width="100%" height="400vh">
        <source src="https://master-sessions.s3.ap-south-1.amazonaws.com/home+page+video.mp4" type='video/mp4' />
      </video>
      <div className="overlay_page1">
        <Row style={{ height: "50vh" }}>
          <Col style={{ marginTop: "8%" }} className="left_col_openingpage" md={7}>
            <div>
              <div className="heading">
                <div>
                  <p className="">
                    <span className='large_orange_text' >SHARE<span className='small_white_text' > knowledge!</span></span>
                    
                  </p>
                </div>
                <div>
                  <p className="">
                    <span className='large_orange_text' >ACQUIRE<span className='small_white_text' > skills!</span></span>
                    
                  </p>
                </div>
                <div>
                  <p className="">
                    <span className='large_orange_text' >GROW<span className='small_white_text' >professionally!</span></span>
                    
                  </p>
                </div>
              </div>
            </div>
          </Col>

        </Row >
      </div >
    </div >
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