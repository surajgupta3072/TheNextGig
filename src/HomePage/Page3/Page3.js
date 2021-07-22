import '../../App.css'
import React from 'react';
import './Page3.css';
import CardX from'./Card';
import Carousel from "react-elastic-carousel";
import { ArrowRight } from "react-bootstrap-icons";
import Data from "./Data.json"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1},
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

function Page3() {
  var i=1;
    return (
    <div style={{marginTop:"5%"}}>
      <div className="getin">
        <svg id='rectangle'>
            <rect id='stroke' rx='3' ry='3' height="50"/>
            <text fontSize="40px" fill="white" x="50%" y="25%" dominant-baseline="middle" text-anchor="middle">MASTERCLASS</text>
        </svg>
        <h4 className="page3_subtitle">By experts. To make <span className="page3_orange"><em> you </em></span> an expert.</h4>
      </div>
      <div className="App1">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
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
      <button style={{marginTop:"-20%", marginLeft: "43%", marginBottom:"5%"}} type="submit" className="button_slide slide_right">Check ‘em out<ArrowRight className="button_arrow"/></button>
    </div>
    );
  }
  
export default Page3;