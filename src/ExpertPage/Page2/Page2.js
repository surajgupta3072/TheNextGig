import Container from 'react-bootstrap/Container';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import Carousel from "react-elastic-carousel";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowLeft, Linkedin, Whatsapp, Instagram, Discord } from 'react-bootstrap-icons';
import MyVerticallyPopUp from './popup';
import { useState, useEffect } from 'react';
import docClient from '../../GigsPage/GigsAWS';
import ReactTooltip from 'react-tooltip';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 }
];

function Page2(props) {
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
            <h1>OUR EXPERTS</h1>
            <p className="subtitle_masterclass">
              Experienced, smart and witty
            </p>
          </div>
        </Container>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {expertData.map((vid, index) => {
          return <div onClick={() => window.location.href = '/expert/' + vid.ExpertID} key={index} style={{ width: "260px", cursor: "pointer" }} >
            <img src={vid.ExpertPic} width="240px" />
            <div width="240px" style={{ marginLeft: "2%", width: "260px" }} >
              {(vid.ExpertID.length < 26) ?
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                    {vid.ExpertID}
                  </h8>)
                ) :
                (
                  (<h8 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", fontSize: "15px", fontSize: "15px" }}>
                    {vid.ExpertDesignation.substring(0, 26)}...
                    <sup data-tip data-for={index + "729g"} >&#9432;</sup>
                    <ReactTooltip id={index + "729g"} place="top" effect="solid">
                      {vid.ExpertDesignation}
                    </ReactTooltip>
                  </h8>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertDesignation}</p>
              {((vid.ExpertCompany.length) < 40) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertCompany}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertCompany.substring(0, 40)}...</p>)
                )
              }
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                {((vid.ExpertSkills.join(",")) < 40) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertSkills.join(",")}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "11px", color: "grey" }}>{vid.ExpertSkills.join(",").substring(0, 40)}...</p>)
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
            <p style={{ marginBottom: "0%" }} className="mast_page2_p3">Want to learn from a specific expert?</p>
            <p className="mast_page2_p3">Want to provide feedback about an expert?</p>
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
              © 2021 TheNextGig.<br className="footer_linespace" /> All Rights Reserved
            </h6>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }} md={2}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thenextgig/"><Linkedin style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tng_thenextgig/"><Instagram style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=919920891546"><Whatsapp style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/EEVcU7ZzAQ"><Discord style={{ color: "white", cursor: "pointer" }} size={34} /></a>&nbsp;&nbsp;
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default Page2;
