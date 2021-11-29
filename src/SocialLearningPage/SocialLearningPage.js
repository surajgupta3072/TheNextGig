import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videos from './Videos';
// import Blogs from './Blogs';
import docClient from '../GigsPage/GigsAWS';
import MyVerticallyPopUp from './popupVideo';
// import MyVerticallyPopUpBlog  from './popupBlog';
import Popupinfovide from './popupvideoinfo';
// import Community from './Community';
import { InfoCircle, Plus } from 'react-bootstrap-icons';
import './SocialLearningPage.css';

function SocialLearningPage(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowvideo, setModalShowvideo] = useState(false);
  const [active, setActive] = useState("Videos");
  // const [color1,setColor1] =useState("#f26c4f");
  // const [textColor1,setextColor1] =useState("white");
  // const [color2,setColor2] =useState("white");
  // const [textColor2,setextColor2] =useState("#f26c4f");
  // const [color3,setColor3] =useState("white");
  // const [textColor3,setextColor3] =useState("#f26c4f");
  // const [rew, setRew] = useState(0);
  const [allvideos, setAllvideos] = useState([]);
  const [user, setUser] = useState("");
  const [redirectlogin, setRedirectLogin] = useState(true);
  const [videoslist, setVideosList] = useState(false);
  const [filter, setfilter] = useState([]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    var paramss = {
      TableName: "VideosTable"
    };
    docClient.scan(paramss, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        setAllvideos(data.Items.filter((e) => { if (e.isApproved === true) return e }));
        setdata(data.Items.filter((e) => { if (e.isApproved === true) return e }))
        // setAllvideos(data.Items.sort(() => Math.random()-0.5).filter((e)=>{if(e.isApproved===true) return e}));
      }
    });
    if (props.auth.user === null) {
      setUser("");
      setRedirectLogin(true);
    }
    else {
      setRedirectLogin(false);
      setUser(props.auth.user);
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
    }
  }, []);
  const searchfilter = (e) => {
    var filternumber = filter;
    if (filternumber.indexOf(parseInt(e.target.value)) === -1) {
      filternumber.push(parseInt(e.target.value))
    }
    else {
      filternumber.splice(filternumber.indexOf(parseInt(e.target.value)), 1)
    }

    var videofilterlist = [];
    if (filternumber.indexOf(0) !== -1 || filternumber.length === 0) {
      setVideosList(data)
    }
    else {
      for (var i = 0; i < filternumber.length; i++) {
        for (var j = 0; j < data.length; j++) {
          if (data[j].VideoDomains.includes(filternumber[i]) === true && videofilterlist.includes(data[j]) === false) {
            videofilterlist.push(data[j]);
          }
        }
      }
      setVideosList(videofilterlist)
    }
  }
  //  function buttonColor(word){
  //    setActive(word)
  //    if(word==="Videos"){
  //      setColor1("#f26c4f");setextColor1("white");setColor2("white");setextColor2("#f26c4f");setColor3("white");setextColor3("#f26c4f");
  //    }
  //    if(word==="Blogs"){
  //     setColor1("white");setextColor1("#f26c4f");setColor2("#f26c4f");setextColor2("white");setColor3("white");setextColor3("#f26c4f");
  //   }
  //   if(word==="Community"){
  //     setColor1("white");setextColor1("#f26c4f");setColor2("white");setextColor2("#f26c4f");setColor3("#f26c4f");setextColor3("white");
  //   }
  //  }
  return (
    <div>
      <div className="social_learning_top_image"><Container><h1 style={{ textShadow: "0px 4px 4px #F26C4F", marginTop: "1.5%" }}>SOCIAL LEARNING</h1><p style={{ fontFamily: "Open Sans" }}>
        Learn and share knowledge - from <span style={{ color: "#F26C4F" }}>real-life experiences</span></p><p style={{ fontStyle: "italic", fontSize: "15px", marginTop: "10px" }}> PS: This is your social media platform for practical learning.</p></Container></div>
      <Container>
        <Row>
          <Col xs={2} style={{ backgroundColor: "#1B1C2A" }} className="SocialLearn_laptop">
            <Row style={{ marginTop: "3%", marginLeft: "0%" }}></Row>
            <br />
            {active !== "Community" ?
              <div style={{ fontSize: "14px", marginLeft: "7px" }}> {active === "Videos" ? <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <div style={{ fontWeight: "300", fontSize: "30px" }}>Filters</div>
                <hr style={{ color: "rgb(145, 44, 38)", height: "2px" }} />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="0" />
                    <span>&nbsp;All</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="1" />
                    <span>&nbsp;Finance</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="9" />
                    <span>&nbsp;Product Management</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="2" />
                    <span>&nbsp;Economics</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="3" />
                    <span>&nbsp;Technology</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="4" />
                    <span>&nbsp;Consulting</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="5" />
                    <span>&nbsp;Marketing & Business &nbsp;Development </span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="7" />
                    <span>&nbsp;Soft Sills</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input onChange={searchfilter} type="checkbox" name="checkbox" value="8" />
                    <span>&nbsp;Others</span>
                  </label>
                </div>
              </div>
                : <span><br /><br /><ul>
                  <li>Write about something you that you have learnt from your real life experience – and that excites you</li>
                  <li>Make sure you aren’t plagiarising - noone likes a copycat! :)</li>
                  <li>Don’t worry about your language style, the relevance to the larger audience, etc. - as long as you find it valuable, its your original work and there is a clear message that someone can learn from, you’re good to go!</li>
                </ul>
                  It’s easier than you think :)
                  <br /><br />
                  <p style={{ fontStyle: "italic", fontSize: "14px" }}>PS: Uploading videos or blogs or being actively involved in community discussions earns you reward points, personal branding and a whole lot of confidence :)</p></span>}
              </div> :
              <div style={{ fontSize: "16px", marginLeft: "7px" }}>
                <br />
                You don't really need guidance in this section. All you gotta do is click on the button down there and join our exclusive community of learners, industry professionals, students, freelancers, employees - basically everyone who is ready to change how the world thinks! :)
                <br />
              </div>
            }
          </Col>
          <div className="SocialLearn_list_mobile" style={{ marginTop: "10%" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="0" />
                  <span>&nbsp;All</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="1" />
                  <span>&nbsp;Finance</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="2" />
                  <span>&nbsp;Economics</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="3" />
                  <span>&nbsp;Technology</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="4" />
                  <span>&nbsp;Consulting</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="5" />
                  <span>&nbsp;Marketing</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="7" />
                  <span>&nbsp;Soft Sills</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="6" />
                  <span>&nbsp;Business Development</span>
                </label>
              </div>
              <div>
                <label>
                  <input onChange={searchfilter} type="checkbox" name="checkbox" value="8" />
                  <span>&nbsp;Others</span>
                </label>
              </div>
            </div>
            <div style={{ marginTop: "4%" }} >
              <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "0px" }}><div style={{ cursor: "pointer", color: "#F26C4F" }}>

                <div onClick={() => { setModalShowvideo(true) }} > <span><InfoCircle /></span> <span>Quick tips to create<br /> your video</span></div>
                <Popupinfovide
                  show={modalShowvideo}
                  onHide={() => setModalShowvideo(false)}
                />
              </div>
              </div>
            </div>
          </div>
          <Col>
            {/*  <Row style={{marginTop:"0%"}} >
               <div style={{display:"flex",justifyContent:"flex-end",marginTop:"0px"}}><div className="SocialLearn_laptop"  style={{cursor: "pointer",color:"#F26C4F"}}>
                  <div onClick={() => { setModalShowvideo(true)}}> <span><InfoCircle/></span> <span>Quick tips to create<br/> your video</span></div> 
                  <Popupinfovide
                    show={modalShowvideo}
                    onHide={()=>setModalShowvideo(false)}
                  />
                </div>
                </div>
             </Row>
           */}
            <div >
              <div>
                {active === "Videos" &&
                  <div style={{ marginTop: "30px", display: "flex" }}><div style={{ flexGrow: "1" }}></div><div style={{ flexGrow: "4" }}>
                    {<a onClick={() => { if (!redirectlogin) setModalShow(true); else window.location.href = "/login"; }} style={{ cursor: "pointer" }}><div style={{ display: "flex", justifyContent: "center" }}><button style={{ paddingBottom: "0px", margin: "auto" }} className="button_slide slide_right"><p style={{ fontWeight: "bold", fontSize: "16px", color: "white" }}>Add your video <Plus size={50} className="button_arrow_footer_footer" /></p></button></div></a>}
                    <MyVerticallyPopUp
                      userid={user}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                    <div style={{ flexGrow: "1" }} className="SocialLearn_laptop" style={{ cursor: "pointer", color: "#F26C4F" }}>
                      <div onClick={() => { setModalShowvideo(true) }}> <span><InfoCircle /></span> <span>Quick tips to create<br /> your video</span></div>
                      <Popupinfovide
                        show={modalShowvideo}
                        onHide={() => setModalShowvideo(false)}
                      />
                    </div>
                  </div>
                }
                {/* {active==="Blogs" &&
                <div>
                  <a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p className="impart_know" style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Add your blog post <span className="plus">+</span></p></a>
                  <MyVerticallyPopUpBlog
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              } */}
              </div>
            </div>
            {/* <div className="imp_know"> {active==="Videos" &&
                <div>
                  {<a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p className="impart_know" style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Add your video <span className="plus">+</span></p></a>}
                  <MyVerticallyPopUp
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                }
                {active==="Blogs" &&
                <div>
                  <a onClick={() => {if(!redirectlogin) setModalShow(true);  else window.location.href="/login";}} style={{cursor: "pointer"}}><p className="impart_know" style={{fontWeight:"bold",fontSize:"16px",color:"rgba(242, 108, 79, 1)"}}>Add your blog post <span className="plus">+</span></p></a>
                  <MyVerticallyPopUpBlog
                    userid={user}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                } 
              </div> */}
            {active === "Videos" && <Videos prop={allvideos} userid={user.username} redirlog={redirectlogin} filter={videoslist} />}
            {/* {active === "Blogs" && <Blogs userid={user.username} redirlog={redirectlogin}/>}
                {active === "Community" && <Community/>} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SocialLearningPage;