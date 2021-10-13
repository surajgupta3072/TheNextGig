import './Page3.css';
import CardX from'./Card';
import Carousel from "react-elastic-carousel";
import { ArrowRight } from "react-bootstrap-icons";
import Data from "./../../MasterClassPage/Masterclass.json"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

function Page3() {
  var i=1;
    return (
    <div style={{marginTop:"7%"}}>

      <div className="heading_box">
      <div>
        <p class="btn">
          <span>
            <span>
              <span className="border_box">MASTERCLASSES</span>
            </span>
          </span>
        </p>
      </div>
      <div style={{marginTop: "70px"}}>
        <h4 className="page3_subtitle">By experts. To make <em><span className="page3_orange"> <em>you</em> </span> an expert.</em></h4>
      </div>
      </div>
      <div className="App1">
        <div style={{}} className="carousel-wrapper">
          <Carousel  breakPoints={breakPoints}>
            {Data.map(detail => (
            <div className="Item_component">
              <CardX
                text1={detail.course_instructor_post}
                text2={detail.course_name}
                card={detail.course_image}
                logo={detail.course_image}
                name={detail.course_instructor}
                time={detail.course_timing}
                fees={detail.fees}
                key={detail.id}
                carl={i++}
              />
            </div>  
            ))}
          </Carousel>
        </div>
      </div>
      
      <div className="button_div_page3">
        <a href="/TNGoriginals"><button  className="button_slide slide_right">Check ‘em out<ArrowRight className="button_arrow"/></button></a>
      </div>
      </div>
    );
  }
  
export default Page3;