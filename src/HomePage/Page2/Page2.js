import docClient from "../../GigsPage/GigsAWS"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import masterdata from "../../MasterClassPage/Masterclass.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyVerticallyCenteredModal from './Modal.js'
import './Page2.css';

function Page2(props) {
  const [show_no, setshowno] = useState(4)
  const [modalShow, setModalShow] = useState(false);
  const [click, setclick] = useState([false, ""]);
  const [allvideos, setAllvideos] = useState([]);
  const [user, setUser] = useState("");
  const [popupvideo, setpopupvideo] = useState("");
  const [popupvideotopic, setpopupvideotopic] = useState("");
  const [popupvideousername, setpopupvideousername] = useState("");
  const [popupvideocreds, setpopupvideocreds] = useState("");
  const [popupvideoid, setpopupvideoid] = useState("");
  const [redirectlogin, setRedirectLogin] = useState(true);
  const [dataa, setdata] = useState([]);
  const [data_finance, setdatafinance] = useState([])
  const [data_pop, setdatapop] = useState([])
  const [data_prod, setdataprod] = useState([])
  const [data_consult, setdataconsult] = useState([])
  const [data_markstra, setdatamark] = useState([])
  const [data_other, setother] = useState([])
  const settings = {
    dots: true,
    row: 1,
    infinite: true,
    slidesToShow: show_no,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000
  };
  const settings1 = {
    dots: true,
    row: 1,
    infinite: true,
    slidesToShow: show_no - 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000
  };
  useEffect(() => {
    var paramss = {
      TableName: "VideosTable"
    };
    var list_data = []
    docClient.scan(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        setAllvideos(data.Items.filter((e) => { if (e.isApproved === true) return e }));
        list_data.push(data.Items.filter((e) => { if (e.isApproved === true) return e }))
        setdata(data.Items.filter((e) => { if (e.isApproved === true) return e }))
        // setAllvideos(data.Items.sort(() => Math.random()-0.5).filter((e)=>{if(e.isApproved===true) return e}));
      }
      var datax1 = [], datax2 = [], datax3 = [], datax4 = [], datax5 = [], datapopular = [];
      for (var i = 0; i < list_data[0].length; i++) {
        if (list_data[0][i].VideoViews >= 10) {
          datapopular.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(1) === true) {
          datax1.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(5) === true) {
          datax3.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(4) === true) {
          datax4.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(8) === true) {
          datax5.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(9) === true) {
          datax2.push(list_data[0][i]);
        }
      }
      setdatapop(datapopular);
      setdatafinance(datax1);
      setdataprod(datax2);
      setdatamark(datax3)
      setdataconsult(datax4)
      setother(datax5)
    });

    /* if (props.auth.user === null) {
      setUser("");
      setRedirectLogin(true);
    }
    else {
      setRedirectLogin(false);
      setUser(props.auth.user); */
    // var params = {
    //   TableName: "UsersTable",
    //   Key: { "UserID":props.auth.user.username },
    // };
    // docClient.get(params, function(err, data) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     setRew(data.Item.TotalRewards);
    //   }
    // });
    /* } */
    if (window.innerWidth <= 1324 && window.innerWidth >= 1000) {
      setshowno(2)
    }
    if (window.innerWidth <= 1000) {
      setshowno(1)
    }
  }, []);

  return (
    <Container>
      <h4>Popular</h4>
      <br />
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.id === 2 || ele.id === 5) {
            return <div style={{ height: "300px", width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "https://www.thenextgig.net/TNGoriginals/" + `${ele.id}`; }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode}>
                <img width="250px" height="200px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", whiteSpace: "pre-wrap" }}>{ele.course_name}</h6>
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post.substring(0, 31)}...</p>)
                  )
                }
              </div>
            </div>

          }
        })}
        {data_pop.map((vid, index) => {
          return <div key={index} style={{ width: "260px" }} onClick={() => { window.location.href = window.location.href + "Video/" + vid.VideoID }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img src={vid.VideoThumbnail} width="250px" height="200px" />
            </figure>
            {/* 
              <MyVerticallyCenteredModal
                show={modalShow}
                Topic={popupvideotopic}
                Username={popupvideousername}
                Creds={popupvideocreds}
                Link={popupvideo}
                VideoID={popupvideoid}
                onHide={() => setModalShow(false)}
              />  */}
            <div style={{ marginLeft: "2%", width: "260px" }} >
              <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds.substring(0, 31)}...</p>)
                )
              }
            </div>
          </div>
        })}
      </Slider>
      <br />
      <h4>Finance</h4>
      <br />
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "Finance") {
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "https://www.thenextgig.net/TNGoriginals/" + `${ele.id}` }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode}>
                <img width="250px" height="200px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", whiteSpace: "pre-wrap" }}>{ele.course_name}</h6>
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post.substring(0, 31)}...</p>)
                  )
                }
              </div>
            </div>

          }
        })}
        {data_finance.map((vid) => {
          return <div style={{ width: "260px" }} onClick={() => { window.location.href = window.location.href + "Video/" + vid.VideoID }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img src={vid.VideoThumbnail} width="250px" height="200px" />
            </figure>
            {/* <MyVerticallyCenteredModal
              show={modalShow}
              Topic={popupvideotopic}
              Username={popupvideousername}
              Creds={popupvideocreds}
              Link={popupvideo}
              VideoID={popupvideoid}
              onHide={() => setModalShow(false)}
            /> */}
            <div style={{ marginLeft: "2%", width: "260px" }} >
              <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds.substring(0, 31)}...</p>)
                )
              }
            </div>
          </div>

        })}
      </Slider>
      <br />
      {/* <h4>Product Management</h4>
      <br />
      <Slider {...settings1}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "ProdMan") {
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "https://www.thenextgig.net/TNGoriginals/" + `${ele.id}` }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode}>
                <img width="250px" height="200px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", whiteSpace: "pre-wrap" }}>{ele.course_name}</h6>
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post.substring(0, 31)}...</p>)
                  )
                }
              </div>
            </div>

          }
        })}
        {data_prod.map((vid) => {
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { window.location.href = window.location.href + "Video/" + vid.VideoID }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="250px" height="200px" src={vid.VideoThumbnail} />
            </figure>

            <div style={{ marginLeft: "2%", width: "260px" }}>
              <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds.substring(0, 31)}...</p>)
                )
              }
            </div>
          </div>

        })}
      </Slider>
      <br /> */}
      <h4>Marketing & Strategy</h4>
      <br />
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "Marketing" || ele.course_domain === "Strategy") {
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "https://www.thenextgig.net/TNGoriginals/" + `${ele.id}` }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode}>
                <img width="250px" height="200px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)", whiteSpace: "pre-wrap" }}>{ele.course_name}</h6>
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{ele.course_instructor_post.substring(0, 31)}...</p>)
                  )
                }
              </div>
            </div>

          }
        })}
        {data_markstra.map((vid) => {
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { window.location.href = window.location.href + "Video/" + vid.VideoID }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="250px" height="200px" src={vid.VideoThumbnail} />
            </figure>
            {/* <MyVerticallyCenteredModal
              show={modalShow}
              Topic={popupvideotopic}
              Username={popupvideousername}
              Creds={popupvideocreds}
              Link={popupvideo}
              VideoID={popupvideoid}
              onHide={() => setModalShow(false)}
            /> */}
            <div style={{ marginLeft: "2%", width: "260px" }}>
              <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds.substring(0, 31)}...</p>)
                )
              }
            </div>
          </div>

        })}
        {data_consult.map((vid) => {
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { window.location.href = window.location.href + "Video/" + vid.VideoID }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="250px" height="200px" src={vid.VideoThumbnail} />
            </figure>
            {/* <MyVerticallyCenteredModal
              show={modalShow}
              Topic={popupvideotopic}
              Username={popupvideousername}
              Creds={popupvideocreds}
              Link={popupvideo}
              VideoID={popupvideoid}
              onHide={() => setModalShow(false)}
            /> */}
            <div style={{ marginLeft: "2%", width: "260px" }}>
              <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds.substring(0, 31)}...</p>)
                )
              }
            </div>
          </div>

        })}
      </Slider>
      <h4>Others</h4>
      <br />
      <Slider {...settings}>
        {data_other.map((vid) => {
          return <div style={{ width: "260px" }} onClick={() => { window.location.href = window.location.href + "Video/" + vid.VideoID }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="250px" height="200px" src={vid.VideoThumbnail} />
            </figure>
            {/* <MyVerticallyCenteredModal
              show={modalShow}
              Topic={popupvideotopic}
              Username={popupvideousername}
              Creds={popupvideocreds}
              Link={popupvideo}
              VideoID={popupvideoid}
              onHide={() => setModalShow(false)}
            /> */}
            <div style={{ marginLeft: "2%", width: "260px" }}>
              <h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px" }}>{vid.VideoCreds.substring(0, 31)}...</p>)
                )
              }
            </div>
          </div>

        })}
      </Slider>
    </Container >
  );
}

export default Page2;
{/* <div id="ummm">
      <br /><br />
      <div className="page2_laptop_view">
        <Container>
          <p style={{ fontSize: "32px", fontWeight: "600", marginLeft: "1.5%", marginTop: "20px", marginBottom: "3%" }}>
            Here is everything you can do on the platform:
          </p>
          <Row>
            <Card id="TNG_original_card_homepage" className="page2card" onClick={() => window.location.href = "/TNGoriginals"} style={{ width: "29.9%", marginLeft: "2%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(242, 108, 79,0.6)", borderRadius: "12px", cursor: "pointer" }}>

              <Card.Body style={{ marginTop: "30px" }}>
                <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >TNG <br /> ORIGINALS</Card.Title>
                <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                  Short expert-driven sessions, real-life cases, And a  <em> whole lot of value </em>!
                </Card.Text>
              </Card.Body>
              <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "none" }} variant="to1p" src="/tng_originals.png" />
            </Card>

            <Card id="Social_learning_card_homepage" className="page2card3" onClick={() => window.location.href = "/SocialLearning"} style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", borderRadius: "12px", cursor: "pointer" }}>

              <Card.Body style={{ marginTop: "30px" }}>
                <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >SOCIAL <br /> LEARNING</Card.Title>
                <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                  Learn <em> and teach </em> through bite-sized video content. Practical knowledge and experiences trump everything else!<br />
                </Card.Text>
              </Card.Body >
              <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "none" }} variant="to1p" src="/soci.png" />
            </Card>

            <Card id="Experiential_learning_card_homepage" className="page2card2" onClick={() => window.location.href = "/ExperientialLearning"} style={{ width: "29.9%", marginLeft: "3%", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", borderRadius: "12px", cursor: "pointer" }}>
              <Card.Body style={{ marginTop: "20px" }}>
                <Card.Title style={{ textAlign: "center", fontSize: "33px", fontWeight: "600" }} >EXPERIENTIAL LEARNING</Card.Title>
                <Card.Text class="opensans_text" style={{ fontSize: "16px", textAlign: "center" }}>
                  Gigs, internships, live projects and <br /> job opportunities!
                </Card.Text>
              </Card.Body>
              <Card.Img style={{ margin: "auto", height: "170px", width: "170px", marginBottom: "30px", background: "white", borderRadius: "50%", border: "none" }} variant="to1p" src="/exp_learn.png" />
            </Card>


          </Row>

        </Container>
        <div style={{ width: "100%", marginTop: "4%", marginBottom: "5%", marginLeft: "0%", paddingTop: "10px" }}>
          <img width="100%" marginTop="0" src="/Website banner.png" />
        </div>
      </div>

      <div className="page2_mobile_view" >
        <p style={{ fontSize: "23px", fontWeight: "600", marginTop: "20px", marginBottom: "3%", textAlign: "center" }}>
          Here’s everything you can do!
        </p>
        <Container>
          <Col>
            <Card onClick={() => window.location.href = "/TNGoriginals"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgba(242, 108, 79, 0.6)", marginTop: "10%" }}>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Col style={{ marginTop: "8px" }}>
                    <Card.Img style={{ margin: "auto", height: "100px", width: "100px", borderRadius: "10px" }} variant="top" src="/tng_originals.png" />
                  </Col>
                  <Col style={{ marginLeft: "-20%" }}>
                    <Card.Title style={{ fontSize: "20px", textAlign: "left" }}>TNG <br /> ORIGINALS</Card.Title>
                    <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", opacity: "0.7", width: "100%" }}>
                      Short expert-driven sessions,real-life cases, And a   <em> whole  lot  of value </em>!
                    </Card.Text>
                  </Col>
                </div>
              </Card.Body>
            </Card>
            <Card onClick={() => window.location.href = "/SocialLearning"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(86, 150, 112,0.6)", marginTop: "10%" }}>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Col style={{ marginTop: "8px" }}>
                    <Card.Img style={{ margin: "auto", height: "100px", width: "100px", borderRadius: "10px" }} variant="top" src="/soci.png" />
                  </Col>
                  <Col style={{ marginLeft: "-20%" }}>
                    <Card.Title style={{ fontSize: "20px", textAlign: "left" }}>SOCIAL<br /> LEARNING</Card.Title>
                    <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", opacity: "0.7", width: "100%" }}>
                      Learn <em> and teach </em>through bite-sized video content. Practical knowledge and experiences trump everything else!
                    </Card.Text>
                  </Col>
                </div>
              </Card.Body>
            </Card>
            <Card onClick={() => window.location.href = "/ExperientialLearning"} style={{ width: '100%', borderRadius: "12px", backgroundColor: "rgba(242, 108, 79, 0.07)", border: "2px solid rgb(200, 150, 54,0.4)", marginTop: "10%", marginBottom: "10%" }}>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Col style={{ marginTop: "8px" }}>
                    <Card.Img style={{ margin: "auto", height: "100px", width: "100px", borderRadius: "10px" }} variant="top" src="/exp_learn.png" />
                  </Col>
                  <Col style={{ marginLeft: "-20%" }}>
                    <Card.Title style={{ fontSize: "20px", textAlign: "left" }}>EXPERIENTIAL<br /> LEARNING</Card.Title>
                    <Card.Text style={{ fontSize: "12px", whiteSpace: "normal", opacity: "0.7", width: "100%" }}>
                      Gigs, internships, live projects and job opportunities!
                    </Card.Text>
                  </Col>
                </div>
              </Card.Body>
            </Card>


          </Col>
        </Container>
        <div style={{ width: "100%", paddingTop: "5px", display: "flex", flexDirection: "row", margin: "auto" }}>
          <img width="100%" marginTop="0" src="/Mobilebanner.png" />
        </div>
      </div>
    </div> */}