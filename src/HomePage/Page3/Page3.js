import '../../App.css'
import React from 'react';
import './Page3.css';
import CardX from'./Card';
import Carousel from "react-elastic-carousel";
import { ArrowRight } from "react-bootstrap-icons";
import Data from "./Data.json"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1},
  { width: 750, itemsToShow: 2 },
  { width: 1080, itemsToShow: 3 }
];

function Page3() {
  var i=1;
    return (
    <div style={{marginTop:"8%"}}>

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
        <h4 className="page3_subtitle">By experts. To make <span className="page3_orange"> <em>you</em> </span> an expert.</h4>
      </div>
      </div>
      <div className="App1">
        <div className="carousel-wrapper">
          <Carousel  breakPoints={breakPoints}>
            {Data.map((detail,item_no) => (
            <div className="Item_component">
              <CardX
                text1={detail.text1}
                text2={detail.text2}
                card={detail.card}
                logo={detail.logo}
                key={item_no}
                carl={i++}
              />
            </div>  
            ))}
          </Carousel>
        </div>
      </div>
      
      <div className="button_div_page3">
        <a href="/masterclass"><button type="submit" className="button_slide slide_right">Check ‘em out<ArrowRight className="button_arrow"/></button></a>
      </div>
      </div>
    );
  }
  
export default Page3;