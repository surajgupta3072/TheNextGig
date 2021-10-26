import './Page3.css';
import CardX from'./Card';
import Carousel from "react-elastic-carousel";
import Data from "./../../MasterClassPage/Masterclass.json"

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
        <h4 className="page3_subtitle">Curated, certified sessions to make <span className="page3_orange"> <em>you</em> </span> an expert</h4>
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
                  fees={detail.fees}
                  key={detail.id}
                  carl={detail.id}
                />
              </div>  
            ))}
          </Carousel>
        </div>
      </div>
      </div>
    );
  }
  
export default Page3;