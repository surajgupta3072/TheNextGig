import docClient from "../../GigsPage/GigsAWS";
import { useState, useEffect } from "react";
import masterdata from "../../MasterClassPage/Masterclass.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page2.css';
import MyVerticallyCenteredModal from './ModalPosted.js';
import { ArrowRight } from "react-bootstrap-icons";

function Page2(props) {
  const [show_no, setshowno] = useState(5);
  const [show_no1, setshowno1] = useState(4);
  const [data_finance, setdatafinance] = useState([])
  const [data_pop, setdatapop] = useState([])
  const [data_prod, setdataprod] = useState([])
  const [data_consult, setdataconsult] = useState([])
  const [data_markstra, setdatamark] = useState([])
  const [data_other, setother] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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
    slidesToShow: show_no1,
    slidesToScroll: 2,
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
        list_data.push(data.Items.filter((e) => { if (e.isApproved === true) return e }));
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
        if (list_data[0][i].VideoDomains.includes(8) === true || list_data[0][i].VideoDomains.includes(7) === true) {
          datax5.push(list_data[0][i]);
        }
        if (list_data[0][i].VideoDomains.includes(3) === true || list_data[0][i].VideoDomains.includes(9) === true) {
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
      setshowno1(2)
    }
    if (window.innerWidth <= 1000) {
      setshowno(1)
      setshowno1(1)
    }
  }, []);

  return (
    <div style={{ marginTop: "2%", marginLeft: "2%" }}>
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Popular</h4>
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.id === 2 || ele.id === 5) {
            return <div style={{ height: "300px", width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}`; }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name}</h6>)
                  ) :
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name.substring(0, 25)}...</h6>)
                  )
                }
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post.substring(0, 27)}...</p>)
                  )
                }
              </div>
            </div>
          }
        })}
        {data_pop.map((vid, index) => {
          return <div key={index} style={{ width: "260px" }} onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img src={vid.VideoThumbnail} width="240px" />
            </figure>
            <div style={{ marginLeft: "2%", width: "260px" }} >
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic.substring(0, 30)}...</h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds.substring(0, 27)}...</p>)
                )
              }
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Finance</h4>
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "Finance") {
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name}</h6>)
                  ) :
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name.substring(0, 25)}...</h6>)
                  )
                }
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post.substring(0, 27)}...</p>)
                  )
                }
              </div>
            </div>
          }
        })}
        {data_finance.map((vid) => {
          return <div style={{ width: "260px" }} onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img src={vid.VideoThumbnail} width="240px" />
            </figure>
            <div style={{ marginLeft: "2%", width: "260px" }} >
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic.substring(0, 30)}...</h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds.substring(0, 27)}...</p>)
                )
              }
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Product Management & Tech</h4>
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "ProdMan") {
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name}</h6>)
                  ) :
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name.substring(0, 25)}...</h6>)
                  )
                }
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post.substring(0, 27)}...</p>)
                  )
                }
              </div>
            </div>

          }
        })}
        {data_prod.map((vid) => {
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic.substring(0, 30)}...</h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds.substring(0, 27)}...</p>)
                )
              }
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Marketing & Strategy</h4>
      <Slider {...settings}>
        {masterdata.map((ele) => {
          if (ele.course_domain === "Marketing" || ele.course_domain === "Strategy") {
            return <div style={{ width: "260px" }} onClick={() => { if (ele.course_timing !== "...Coming Soon") window.location.href = "/TNGoriginals/" + `${ele.id}` }}>
              <figure className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name}</h6>)
                  ) :
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name.substring(0, 25)}...</h6>)
                  )
                }
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post.substring(0, 27)}...</p>)
                  )
                }
              </div>
            </div>

          }
        })}
        {data_markstra.map((vid) => {
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic.substring(0, 30)}...</h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds.substring(0, 27)}...</p>)
                )
              }
            </div>
          </div>

        })}
        {data_consult.map((vid) => {
          return <div style={{ height: "300px", width: "200px" }} onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic.substring(0, 30)}...</h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds.substring(0, 27)}...</p>)
                )
              }
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800" }}>Others</h4>
      <Slider {...settings}>
        {data_other.map((vid) => {
          return <div style={{ width: "260px" }} onClick={() => { if (props.auth) { window.location.href = "/Video/" + vid.VideoID } else { window.location.href = "/login" } }}>
            <figure className="tag1 figurex1" data-content={vid.VideoDuration}>
              <img width="240px" src={vid.VideoThumbnail} />
            </figure>
            <div style={{ marginLeft: "2%", width: "260px" }}>
              {(vid.VideoTopic.length < 30) ?
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic}</h6>)
                ) :
                (
                  (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{vid.VideoTopic.substring(0, 30)}...</h6>)
                )
              }
              <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {vid.VideoUsername}</p>
              {((vid.VideoCreds.length) < 27) ?
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds}</p>)
                ) :
                (
                  (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{vid.VideoCreds.substring(0, 27)}...</p>)
                )
              }
            </div>
            <br />
          </div>
        })}
      </Slider>
      <br /><br />
      <h4 style={{ fontFamily: "Open Sans", fontWeight: "800", display: "inline" }}>Upcoming</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{ height: "40px" }} className="button_slide_tngorig slide_right" onClick={() => setModalShow(true)}>
        Keep me posted
      </button>
      <br /><br />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Slider {...settings1}>
        {masterdata.map((ele) => {
          if (ele.course_timing === "...Coming Soon") {
            return <div style={{ width: "260px" }} >
              <figure className="tag1 figurex1" data-content={ele.course_episode_HomePage}>
                <img width="240px" src={ele.course_image} />
              </figure>
              <div style={{ marginLeft: "2%", width: "260px" }}>
                {(ele.course_name.length < 25) ?
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name}</h6>)
                  ) :
                  (
                    (<h6 className="text" style={{ padding: "0", margin: "0", color: "rgb(242, 108, 79)" }}>{ele.course_name.substring(0, 25)}...</h6>)
                  )
                }
                <p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>by {ele.course_instructor}</p>
                {((ele.course_instructor_post.length) < 27) ?
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post}</p>)
                  ) :
                  (
                    (<p className="text" style={{ padding: "0", margin: "0", fontSize: "14px", color: "grey" }}>{ele.course_instructor_post.substring(0, 27)}...</p>)
                  )
                }
              </div>
              <br />
            </div>
          }
        })}
      </Slider>
      <br /><br /><br />
      <div style={{ display: "flex", justifyContent: "space-between", width: "45%", marginLeft: "25%" }}>
        <a href="/TNGOriginals"><button id="start_doing_homepage" className="button_slide slide_right orange_button_page3">All TNG Originals<ArrowRight className="button_arrow" /></button></a>
        <a href="/SocialLearning"><button id="start_doing_homepage" className="button_slide slide_right orange_button_page3">All bite-sized videos<ArrowRight className="button_arrow" /></button></a>
      </div>
    </div >
  );
}

export default Page2;