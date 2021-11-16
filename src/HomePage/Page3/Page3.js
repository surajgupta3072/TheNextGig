import './Page3.css';
import CardX from'./Card';
import Carousel from "react-elastic-carousel";
import Data from "./../../MasterClassPage/Masterclass.json"
import ReactTooltip from 'react-tooltip';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

function Page3() {
    return (
    <div className="page3_homepage_maindiv">
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
      <div style={{marginTop: "70px"}}>
        <h4 className="page3_subtitle">Practical learning <em>ONLY</em> ~ <span className="page3_orange">Industry professionals</span> teaching you real-life skills!</h4>
      </div>
      </div>
      <br/>
      <div>
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
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
                />
              </div>  
            ))}
          </Carousel>
          {/* <div style={{marginLeft: "6%", fontSize: "18px", color: "#fff"}} className="like-text1"><text style={{color:"#f26c4f"}}>*</text> Or redeem using <a href="/LearnCoins" style={{color: "#f26c4f", textDecoration: "none"}}><i> TNG Learn Coins</i></a></div> */}

        </div>
        
      </div>
      
      </div>
    );
  }
  
export default Page3;