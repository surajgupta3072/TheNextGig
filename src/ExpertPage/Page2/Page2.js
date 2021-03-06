import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowLeft, Linkedin, Whatsapp, Instagram, Youtube } from 'react-bootstrap-icons';
import MyVerticallyPopUp from './popup';
import { useState, useEffect } from 'react';
import docClient from '../../GigsPage/GigsAWS';
import ReactTooltip from 'react-tooltip';

function Page2() {
  const [modalShow, setModalShow] = useState(false);
  const [expertData, setExpertData] = useState([]);

  useEffect(() => {
    docClient.scan({ TableName: "ExpertsTable" }, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        data.Items.sort((a, b) => (a.ExpertID.toUpperCase() > b.ExpertID.toUpperCase()) ? 1 : -1)
        setExpertData(data.Items)
      }
    });
  }, []);

  return (
    <div>
      <div className="header_masterclass">
        <Container>
          <div className="top_masterclass">
            <h1>OUR CREATORS</h1>
            <p className="subtitle_masterclass">
              You can be one too
            </p>
          </div>
        </Container>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {expertData.map((vid, index) => {
          return <div onClick={() => window.location.href = '/creator/' + (vid.ExpertID).split(" ").join("_")} key={index} style={{ width: "260px", cursor: "pointer" }} >
            <img src={vid.ExpertPic} style={{ height: "134.91px", width: "240px" }} />
            <div className="experts_div_content" >
              {(vid.ExpertID.length < 26) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>
                    {vid.ExpertID}
                  </h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px" }}>
                    {vid.ExpertDesignation.substring(0, 26)}...
                    <sup data-tip data-for={index + "729g"} >&#9432;</sup>
                    <ReactTooltip id={index + "729g"} place="top" effect="solid">
                      {vid.ExpertDesignation}
                    </ReactTooltip>
                  </h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertDesignation}</p>
              {(vid.ExpertCompany.length < 40) ?
                (
                  <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertCompany}</p>
                ) :
                (
                  <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertCompany.substring(0, 40)}...</p>
                )
              }
              <div className="expert_skills" >
                {(vid.ExpertSkills.length < 40) ?
                  (
                    <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertSkills}</p>
                  ) :
                  (
                    <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertSkills.substring(0, 40)}...</p>
                  )
                }
              </div>
            </div>
            <br />
          </div>
        })}
      </div>
      <Container className="rectangle-box2" style={{ marginTop: "5%" }}>
        <Row >
          <Col style={{ paddingLeft: "2%", paddingTop: "0.5%" }} md={8}>
            <p style={{ marginBottom: "0%" }} className="mast_page2_p3">Want to learn from a specific creator?</p>
            <p className="mast_page2_p3">Want to provide feedback about an creator?</p>
          </Col>
          <Col style={{ paddingLeft: "12%" }} className="col-button">
            <button style={{ marginLeft: "20%", marginTop: "5%" }} className="button_slide slide_right" onClick={() => setModalShow(true)}>Talk to us
              <ArrowLeft className="button_arrow" /></button>
            <MyVerticallyPopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

          </Col>
        </Row>
      </Container>
      <div >
        <Row style={{ marginTop: "6%", border: "1px solid #534D4D", padding: "1.5%", background: "transparent", marginLeft: "9%", marginRight: "9%" }}>
          <Col md={10}>
            <h6 style={{ fontSize: "15px", color: "#FFFFFF99" }} className="footer_page3_gigs">
              ?? 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
            </h6>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }} md={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCls4liz2wuWH6FOrX_dARKw"><Youtube style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default Page2;
