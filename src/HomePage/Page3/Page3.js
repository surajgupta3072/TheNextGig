import './Page3.css';
import CardX from './Card';
import Data from "./../../MasterClassPage/Masterclass.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
function Page3() {
  const [show_no, setshowno] = useState(3)
  useEffect(() => {
    if (window.innerWidth <= 1324 && window.innerWidth >= 1000) {
      setshowno(2)
    }
    if (window.innerWidth <= 1000) {
      setshowno(1)
    }
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: show_no,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="page3_homepage_maindiv" >
      <div className="heading_box">
        <div>
          <p className="btn">
            <span>
              <span>
                <span className="border_box">TNG ORIGINALS</span>
              </span>
            </span>
          </p>
        </div>
        <div style={{ marginTop: "70px" }}>
          <h4 className="page3_subtitle">Practical learning <em>ONLY</em> ~ <span className="page3_orange">Industry professionals</span> teaching you real-life skills!</h4>
        </div>
      </div>
      <br />
      <div>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {Data.map(detail => (
              <div className="Item_component">
                <CardX
                  text1={detail.course_instructor_post}
                  text2={detail.course_name}
                  text3={detail.instructor_creds}
                  card={detail.course_image}
                  name={detail.course_instructor}
                  time={detail.course_timing}
                  fees={detail.course_episode}
                  key={detail.id}
                  carl={detail.id}
                  course_domain={detail.course_domain}
                  textid="Tng_originals_courses_homepage"
                />
              </div>
            ))}
          </Slider>
          {/* <div style={{marginLeft: "6%", fontSize: "18px", color: "#fff"}} className="like-text1"><text style={{color:"#f26c4f"}}>*</text> Or redeem using <a href="/LearnCoins" style={{color: "#f26c4f", textDecoration: "none"}}><i> TNG Learn Coins</i></a></div> */}

        </div>

      </div>

    </div>
  );
}

export default Page3;