import docClient from "../../GigsPage/GigsAWS";
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import masterdata from "../../MasterClassPage/Masterclass.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page2.css';

function Page2(props) {
  const [show_no, setshowno] = useState(4);
  const [allvideos, setAllvideos] = useState([]);
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
            return <div style={{ height: "300px", width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}`; }}>
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
          return <div key={index} style={{ width: "260px" }} onClick={() => { if(props.auth){window.location.href = "/Video/" + vid.VideoID} else{window.location.href = "/login"} }}>
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
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }}>
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
          return <div style={{ width: "260px" }} onClick={() => { if(props.auth){window.location.href = "/Video/" + vid.VideoID} else{window.location.href = "/login"} }}>
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
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }}>
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
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { if(props.auth){window.location.href = "/Video/" + vid.VideoID} else{window.location.href = "/login"} }}>
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
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }}>
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
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { if(props.auth){window.location.href = "/Video/" + vid.VideoID} else{window.location.href = "/login"} }}>
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
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { if(props.auth){window.location.href = "/Video/" + vid.VideoID} else{window.location.href = "/login"} }}>
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
          return <div style={{ width: "260px" }} onClick={() => { if(props.auth){window.location.href = "/Video/" + vid.VideoID} else{window.location.href = "/login"} }}>
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